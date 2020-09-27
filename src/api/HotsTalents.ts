export function GetHeroIcon(name?: string) {
  if (!name) return undefined;

  return (
    'https://heroespatchnotes.github.io/heroes-talents/images/heroes/' + name
  );
}

export function GetAbilityIcon(name?: string) {
  if (!name) return undefined;

  return (
    'https://heroespatchnotes.github.io/heroes-talents/images/talents/' + name
  );
}

export function GetTalentIcon(name?: string) {
  if (!name) return undefined;

  return (
    'https://heroespatchnotes.github.io/heroes-talents/images/talents/' + name
  );
}
