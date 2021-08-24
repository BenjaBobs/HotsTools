import '../../src/utils/ArrayExtensions';

class TextAnalyser {
  private debug: boolean;
  private text: string;
  private currentIndex = 0;

  constructor(text: string, debug: boolean = false) {
    this.text = text.toLowerCase();
    this.debug = debug;
  }

  ResetIndex() {
    this.currentIndex = 0;
  }

  FindNextToken() {
    const substring = this.text.substring(this.currentIndex);

    const nextMatch = Match(substring);

    if (nextMatch) {
      this.currentIndex += nextMatch.indexEnd;
    }

    return nextMatch;
  }

  /**
   * Searches for a pattern
   *
   * @example
   * // find patterns where there are 3 tokens in a row, and they are exactly
   * // 'deal' followed by 'value' followed by 'damage'
   * FindPatterns('deal', 'value', 'damage')
   *
   * // find patterns where there are 3 tokens in a row
   * // the first one is EITHER 'increase' or 'decrease'
   * // the following ones are 'damage' and then 'value'
   * FindPatterns(['increase', 'decrease'], 'damage', 'value')
   *
   * // find patterns where there are between 3 and 5 tokens in a row
   * // the first one being 'deal'
   * // the second and third ones being either any token or nothing
   * // and the fourth and fifth being 'value' and 'damage' respectively
   * FindPatterns('deal', null, null, 'value', 'damage')
   */
  FindPatterns<TPattern extends TokenTypePattern>(...pattern: TPattern) {
    const movingContext: TokenMatch[] = [];
    const patternMatches: TokenPatternMatchData<TPattern>[] = [];

    this.ResetIndex();

    const minimumPatternLength = pattern.filter(x => x).length;

    while (true) {
      const token = this.FindNextToken();
      if (!token) break;

      movingContext.push(token);

      if (movingContext.length > pattern.length) {
        // remove from end
        movingContext.shift();
      }

      if (this.debug)
        console.log(
          'context',
          movingContext.map(x => x.data.type)
        );

      let isMatch = true;
      const matched: { type: string | null }[] = [];

      let cIdx = 0;
      for (let pIdx = 0; pIdx < pattern.length; pIdx++) {
        const contextToken = movingContext[cIdx];
        if (!contextToken) {
          isMatch = false;
          break;
        }

        const current = pattern[pIdx];

        if (
          Array.isArray(current)
            ? current.includes(contextToken.data.type)
            : current === contextToken.data.type
        ) {
          matched.push(contextToken.data);
          cIdx++;
        } else if (current === null) {
          const nextNonNullIdx = pattern.findIndex(
            (x, idx) => idx > pIdx && x !== null
          );
          if (nextNonNullIdx !== -1) {
            const nextNonNull = pattern[nextNonNullIdx];
            const nextContextMatchIdx = movingContext.findIndex((x, idx) =>
              idx > cIdx && Array.isArray(nextNonNull)
                ? nextNonNull.includes(x.data.type)
                : nextNonNull === x.data.type
            );

            if (nextContextMatchIdx !== -1) {
              const patternDiff = nextNonNullIdx - pIdx;
              const contextDiff = nextContextMatchIdx - cIdx;

              for (
                let nullMatches = 0;
                nullMatches < patternDiff;
                nullMatches++
              ) {
                if (nullMatches < contextDiff) {
                  matched.push(movingContext[cIdx + nullMatches].data);
                } else {
                  matched.push({ type: null });
                }
              }

              matched.push(movingContext[nextContextMatchIdx].data);
              pIdx = nextNonNullIdx;
              cIdx = nextContextMatchIdx + 1;
            }
          } else {
            matched.push(contextToken.data);
            cIdx++;
          }
        } else {
          if (movingContext.length - cIdx < minimumPatternLength) {
            isMatch = false;
            break;
          } else {
            cIdx++;
            pIdx--;
          }
        }
      }

      // check if the pattern matches
      if (isMatch) {
        if (this.debug)
          console.log(
            'match found!',
            matched.map(x => x.type)
          );

        // it did match, so now we can safely type cast as the pattern match
        patternMatches.push(matched as any as TokenPatternMatchData<TPattern>);

        // empty moving context, so tokens aren't reused, so patterns don't overlap
        movingContext.splice(0, movingContext.length);
      }
    }

    this.ResetIndex();

    return patternMatches;
  }
}

export default TextAnalyser;

type TokenMatch = ReturnType<typeof Match>;
type TokenMatchType = TokenMatch['data']['type'];
type TokenMatchSpecific<TKey extends TokenMatchType> =
  TokenMatch extends infer TToken
    ? TToken extends { data: { type: TKey } }
      ? TToken
      : never
    : never;

// tuple as first match to tell typescript to consider it a tuple
// this helps keep the order of the type arguments

type TokenPatternMatchType =
  | TokenMatchType
  | [TokenMatchType]
  | TokenMatchType[];

// These are utility types to perform the most hacky type narrowing you can imaging
type TupleToUnionType<T extends [TokenMatchType] | TokenMatchType[]> =
  T[number];
type ObjectToUnionType<T> = T[keyof T];

type TokenTypePattern = [TokenPatternMatchType] | TokenPatternMatchType[];
type TokenPatternMatch<TPattern> = {
  [P in keyof TPattern]: TPattern[P] extends TokenMatchType
    ? TokenMatchSpecific<TPattern[P]>
    : TPattern[P] extends [TokenMatchType] | TokenMatchType[]
    ? ObjectToUnionType<
        { [OneOf in TupleToUnionType<TPattern[P]>]: TokenMatchSpecific<OneOf> }
      >
    : TPattern[P] extends null
    ? TokenMatch | { data: { type: null } }
    : never;
};

type TokenPatternMatchData<TPattern> = {
  [P in keyof TokenPatternMatch<TPattern>]: TokenPatternMatch<TPattern>[P]['data'];
};

function Match(string: string) {
  return matchers
    .map(matcher => matcher(string))
    .filter(x => x)
    .orderBy(x => x!.indexStart)
    .first();
}

const matchers = [
  (text: string) => {
    const match = text.match(/(\d+) ?(\(\+(\d+(\.\d+)?)% \/ level\))?/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'value' as 'value',
            subtype: 'flat' as 'flat',
            value: parseInt(match[1]),
            scaling: parseInt(match[2]) || 0,
          },
        };
  },
  (text: string) => {
    const match = text.match(/(\d+(\.\d+)?) seconds?/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'value' as 'value',
            subtype: 'time' as 'time',
            seconds: match[1].includes('.')
              ? parseFloat(match[1])
              : parseInt(match[1]),
          },
        };
  },
  (text: string) => {
    const match = text.match(/(\d+(\.\d+)?)%/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'value' as 'value',
            subtype: 'percentage' as 'percentage',
            percentage: match[1].includes('.')
              ? parseFloat(match[1])
              : parseInt(match[1]),
          },
        };
  },
  (text: string) => {
    const match = text.match(/deal(s|ing|)/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'deal' as 'deal',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/damag(ing|es|e)/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'damage' as 'damage',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/health/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'health' as 'health',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/heal(ing|s|)/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'heal' as 'heal',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/shield(ing|s|)/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'shield' as 'shield',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/absorb(s|ed|)/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'absorb' as 'absorb',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/enem(y|ies)/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'team' as 'team',
            subtype: 'enemy' as 'enemy',
            keyword: match[0],
            multiple: match[0].endsWith('ies'),
          },
        };
  },
  (text: string) => {
    const match = text.match(/all(y|ied|ies)/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'team' as 'team',
            subtype: 'ally' as 'ally',
            keyword: match[0],
            multiple: match[0].endsWith('ies') ? true : undefined,
          },
        };
  },
  (text: string) => {
    const match = text.match(/hero(es|)/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'target' as 'target',
            subtype: 'hero' as 'hero',
            keyword: match[0],
            multiple: match[0].endsWith('es'),
          },
        };
  },
  (text: string) => {
    const match = text.match(/summons?|spawns?/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'spawn' as 'spawn',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/gain?/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'gain' as 'gain',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/increases?/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'increase' as 'increase',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/decreases?/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'decrease' as 'decrease',
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/(movement|attack)? ?speed/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'speed' as 'speed',
            subtype: match.includes('movement')
              ? ('movement' as 'movement')
              : match.includes('attack')
              ? ('attack' as 'attack')
              : ('speed' as 'speed'),
            keyword: match[0],
          },
        };
  },
  (text: string) => {
    const match = text.match(/(physical|spell)? ?armor/);

    return !match
      ? null
      : {
          indexStart: match.index!,
          indexEnd: match.index! + match[0].length,
          data: {
            type: 'armor' as 'armor',
            subtype: match.includes('physical')
              ? ('physical' as 'physical')
              : match.includes('spell')
              ? ('spell' as 'spell')
              : ('armor' as 'armor'),
            keyword: match[0],
          },
        };
  },
];
