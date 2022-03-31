export enum LOCALES {
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  DE = 'de'
}

export const LANGUAGES: any = {
  'en': {
    'stat.title': 'Status',
    'stat.subtitle': 'Check status',
    'stat.level': 'Level',
    'stat.souls': 'Souls',
    'stat.vitality': 'Vitality',
    'stat.attunement': 'Attunement',
    'stat.endurance': 'Endurance',
    'stat.strength': 'Strength',
    'stat.dexterity': 'Dexterity',
    'stat.resistance': 'Resistance',
    'stat.intelligence': 'Intelligence',
    'stat.faith': 'Faith',
    'stat.humanity': 'Humanity',
    'stat.hp': 'HP',
    'stat.stamina': 'Stamina',
    'stat.equip_load': 'Equip Load',
    'stat.r_weapon_1': 'R Weapon 1',
    'stat.r_weapon_2': 'R Weapon 2',
    'stat.l_weapon_1': 'L Weapon 1',
    'stat.l_weapon_2': 'L Weapon 2',
    'stat.physical_defense': 'Physical Def.',
    'stat.vs_strike': 'VS strike',
    'stat.vs_slash': 'VS slash',
    'stat.vs_thrust': 'VS thrust',
    'stat.magic_defense': 'Magic DEF',
    'stat.flame_defense': 'Flame DEF',
    'stat.lightning_defense': 'Lightning DEF',
    'stat.poise': 'Poise',
    'stat.bleed_resist': 'Bleed Resist',
    'stat.poison_resist': 'Poison Resist',
    'stat.curse_resist': 'Curse Resist',
    'stat.item_discovery': 'Item Discovery',
    'stat.attunement_slots': 'Attunement Slots',
  },
  'es': {
    'stat.title': 'Estado',
    'stat.subtitle': 'Comprobar estado',
    'stat.level': 'Nivel',
    'stat.souls': 'Almas',
    'stat.vitality': 'Vitalidad',
    'stat.attunement': 'Aprendizaje',
    'stat.endurance': 'Resistencia',
    'stat.strength': 'Fuerza',
    'stat.dexterity': 'Destreza',
    'stat.resistance': 'Resistencia',
    'stat.intelligence': 'Inteligencia',
    'stat.faith': 'Fe',
    'stat.humanity': 'Humanidad',
    'stat.hp': 'PS',
    'stat.stamina': 'Energía',
    'stat.equip_load': 'Peso de equipo',
    'stat.r_weapon_1': 'Arma 1 D',
    'stat.r_weapon_2': 'Arma 2 D',
    'stat.l_weapon_1': 'Arma 1 I',
    'stat.l_weapon_2': 'Arma 2 I',
    'stat.physical_defense': 'Def. física',
    'stat.vs_strike': 'Cont. Golpe',
    'stat.vs_slash': 'Cont. Corte',
    'stat.vs_thrust': 'Cont. Estoque',
    'stat.magic_defense': 'Def. magia',
    'stat.flame_defense': 'Def. fuego',
    'stat.lightning_defense': 'Def. electricidad',
    'stat.poise': 'Equilibrio',
    'stat.bleed_resist': 'Res. a Sangrado',
    'stat.poison_resist': 'Res. a Tóxico',
    'stat.curse_resist': 'Res. a Maldición',
    'stat.item_discovery': 'Obj. obtenidos',
    'stat.attunement_slots': 'Ranuras aprendizaje',
  },
  /* 'fr': {
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
  } */
}

export const getTranslation = (locale: string, key: string) => {
  const langs = LANGUAGES[locale][key]
  return langs ? langs : key
}
