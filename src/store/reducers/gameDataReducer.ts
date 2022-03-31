import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

export enum GameState {
  INGAME = "In game",
  INGAME_UNFOCUSED = "In game (unfocused)",
  MENU = "In menu",
  UNKNOWN = "Unknown"
}

interface GameStats {
  time_played?: {
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number
  },
  souls?: number,
  humanities?: number,
  level?: number,
  deaths?: number,
  equip_load?: number,
  max_equip_load?: number,
  equip_load_percentage?: number,
  vitality?: number,
  attunement?: number,
  endurance?: number,
  strength?: number,
  dexterity?: number,
  resistance?: number,
  intelligence?: number,
  faith?: number,
  r_weapon_1?: number,
  r_weapon_2?: number,
  l_weapon_1?: number,
  l_weapon_2?: number,
  current_hp?: number,
  max_hp?: number,
  pos_x?: number,
  pos_y?: number,
  pos_z?: number,
  current_stamina?: number,
  max_stamina?: number,
  poise?: number,
  bleed_resist?: number,
  poison_resist?: number,
  curse_resist?: number,
  item_discovery?: number,
  attunement_slots?: number,
  physical_defense?: number,
  vs_strike?: number,
  vs_slash?: number,
  vs_thrust?: number,
  magical_defense?: number,
  flame_defense?: number,
  lightning_defense?: number,
}

export interface GameData {
  game_attached: boolean
  game_state?: GameState
  stats?: GameStats
}

interface GameDataState {
  data: GameData
}

export const gameDataReducer = createSlice({
  name: 'gameData',
  initialState: {
    data: {}
    // data: {
    //   game_attached: false,
    //   game_state: GameState.UNKNOWN,
    //   stats: {
    //     time_played: {
    //       hours: 0,
    //       minutes: 0,
    //       seconds: 0,
    //       milliseconds: 0
    //     },
    //     souls: 0,
    //     humanities: 0,
    //     level: 0,
    //     deaths: 0,
    //     equip_load: 0,
    //     max_equip_load: 0,
    //     equip_load_percentage: 0,
    //     vitality: 0,
    //     attunement: 0,
    //     endurance: 0,
    //     strength: 0,
    //     dexterity: 0,
    //     resistance: 0,
    //     intelligence: 0,
    //     faith: 0,
    //     r_weapon_1: 0,
    //     r_weapon_2: 0,
    //     l_weapon_1: 0,
    //     l_weapon_2: 0,
    //     current_hp: 0,
    //     max_hp: 0,
    //     pos_x: 0,
    //     pos_y: 0,
    //     pos_z: 0,
    //     current_stamina: 0,
    //     max_stamina: 0,
    //     poise: 0,
    //     bleed_resist: 0,
    //     poison_resist: 0,
    //     curse_resist: 0,
    //     item_discovery: 0,
    //     attunement_slots: 0,
    //     physical_defense: 0,
    //     vs_strike: 0,
    //     vs_slash: 0,
    //     vs_thrust: 0,
    //     magical_defense: 0,
    //     flame_defense: 0,
    //     lightning_defense: 0,
    //   }
    // },
  } as GameDataState,
  reducers: {
    setGameData: (state, action: PayloadAction<GameData>) => {
      state.data = action.payload
    }
  }
})

export const { setGameData } = gameDataReducer.actions

export const selectGameData = (state: RootState) => state.gameData.data

export default gameDataReducer.reducer