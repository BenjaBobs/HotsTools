class TextAnalyser {
  private text: string;
  private currentIndex = 0;

  constructor(text: string) {
    this.text = text;
  }

  Reset() {
    this.currentIndex = 0;
  }

  FindNextToken() {
    const substring = this.text.substring(this.currentIndex);

    const nextMatch = TextAnalyser.matchers
      .map(matcher => matcher(substring))
      .filter(x => x)
      .orderBy(x => x!.indexStart)
      .first();

    if (nextMatch) {
      this.currentIndex += nextMatch.indexEnd;
    }

    return nextMatch;
  }

  FindNextContext() {
    // TODO: more contextually based analysis of tooltips
    const context: EffectContext = {
      target: {},
      effects: [],
    };

    while (true) {
      const nextToken = this.FindNextToken();
      if (!nextToken) break;

      if (nextToken.data.type === 'hero') {
        if (context.target.unit) break;
        context.target.unit = 'hero';
        context.target.count = nextToken.data.multiple ? 3 : 1;
      }

      if (nextToken.data.type === 'ally' || nextToken.data.type === 'enemy') {
        if (context.target.alliance) break;
        context.target.alliance === nextToken.data.type;
      }
    }

    return context;
  }

  private static matchers = [
    (text: string) => {
      const match = text.match(/(\d+) \(\+(\d+(\.\d+)?)% \/ level\)/);

      return !match
        ? null
        : {
            indexStart: match.index!,
            indexEnd: match.index! + match[0].length,
            data: {
              type: 'scalingValue' as 'scalingValue',
              value: parseInt(match[1]),
              scalingPerLevel: parseInt(match[2]),
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
              type: 'seconds' as 'seconds',
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
              type: 'percentage' as 'percentage',
              value: match[1].includes('.')
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
      const match = text.match(/absorb(s|)/);

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
              type: 'enemy' as 'enemy',
              keyword: match[0],
              multiple: match[0].endsWith('ies'),
            },
          };
    },
    (text: string) => {
      const match = text.match(/all(y|ied)/);

      return !match
        ? null
        : {
            indexStart: match.index!,
            indexEnd: match.index! + match[0].length,
            data: {
              type: 'ally' as 'ally',
              keyword: match[0],
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
              type: 'hero' as 'hero',
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
  ];
}

export default TextAnalyser;

type EffectContext = {
  target: {
    unit?: 'hero' | 'structure' | 'any';
    alliance?: 'ally' | 'enemy';
    count?: number;
  };
  effects: {
    type: 'heal' | 'damage' | 'shield' | 'move' | 'protect' | 'cc' | 'cleanse';
    value: number;
    valueType: 'flat' | 'percentage';
  }[];
};
