export enum LOCALES {
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  DE = 'de'
}

export const LANGUAGES: any = {
  'en': {
    'stat.level': 'Level',
    'stat.souls': 'Souls',
    'stat.vitality': 'Vitality',
    'stat.attunement': 'Attunement',
    'stat.endurance': 'Endurance',
    'stat.strength': 'Strength',
    'stat.dexterity': 'Dexterity',
    'stat.intelligence': 'Intelligence',
    'stat.resistance': 'Resistance',
    'stat.faith': 'Faith',
    'stat.humanity': 'Humanity',
  },
  'es': {
    'stat.level': 'Nivel',
    'stat.souls': 'Almas',
    'stat.vitality': 'Vitalidad',
    'stat.attunement': 'Aprendizaje',
    'stat.endurance': 'Resistencia',
    'stat.strength': 'Fuerza',
    'stat.dexterity': 'Destreza',
    'stat.intelligence': 'Inteligencia',
    'stat.resistance': 'Resistencia',
    'stat.faith': 'Fe',
    'stat.humanity': 'Humanidad',
  },
  'fr': {
    'stat.level': 'Niveau',
    'stat.souls': 'Âmes',
    'stat.vitality': 'Vitalité',
    'stat.attunement': 'Attunement',
    'stat.endurance': 'Endurance',
    'stat.strength': 'Force',
    'stat.dexterity': 'Dextérité',
    'stat.intelligence': 'Intelligence',
    'stat.resistance': 'Résistance',
    'stat.faith': 'Foi',
    'stat.humanity': 'Humanité',
  },
  'de': {
    'stat.level': 'Level',
    'stat.souls': 'Seelen',
    'stat.vitality': 'Vitalität',
    'stat.attunement': 'Anregung',
    'stat.endurance': 'Ausdauer',
    'stat.strength': 'Stärke',
    'stat.dexterity': 'Geschicklichkeit',
    'stat.intelligence': 'Intelligenz',
    'stat.resistance': 'Widerstand',
    'stat.faith': 'Zuversicht',
    'stat.humanity': 'Humanität',
  },
  'it': {
    'stat.level': 'Livello',
    'stat.souls': 'Anima',
    'stat.vitality': 'Vitalità',
    'stat.attunement': 'Attunamento',
    'stat.endurance': 'Endurance',
    'stat.strength': 'Forza',
    'stat.dexterity': 'Velocità',
    'stat.intelligence': 'Intelligenza',
    'stat.resistance': 'Resistenza',
    'stat.faith': 'Fede',
    'stat.humanity': 'Humanità',
  }
}

export const getTranslation = (locale: string, key: string) => {
  const langs = LANGUAGES[locale][key]
  return langs ? langs : key
}
