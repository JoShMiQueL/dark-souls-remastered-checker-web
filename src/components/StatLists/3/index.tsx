import { FunctionComponent } from 'react'
import Divider from '../../Divider'
import Stat from '../../Stat'
import PoiseIcon from "../../../assets/icons/poise.png"
import BleedResistIcon from "../../../assets/icons/bleed_resist.png"
import PoisonResistIcon from "../../../assets/icons/poison_resist.png"
import CurseResistIcon from "../../../assets/icons/curse_resist.png"
import ItemDiscoveryIcon from "../../../assets/icons/item_discovery.png"
import { getTranslation } from '../../Language/translations'
import { useAppSelector } from '../../../store/hooks'
import { GameState } from '../../../store/reducers/gameDataReducer'

const StatList3: FunctionComponent = () => {
  const language = useAppSelector((state) => state.language.locale)
  const gameData = useAppSelector((state) => state.gameData.data)
  return (
    <>
      <Stat name={getTranslation(language, "stat.poise")} value={
        gameData.stats?.poise !== undefined &&
        gameData.game_attached &&
        gameData.game_state !== GameState.UNKNOWN
          ? gameData.stats.poise
          : '-'
      } icon={PoiseIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.bleed_resist")} value={
        gameData.stats?.bleed_resist !== undefined &&
        gameData.game_attached &&
        gameData.game_state !== GameState.UNKNOWN
          ? gameData.stats.bleed_resist
          : '-'
      } icon={BleedResistIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.poison_resist")} value={
        gameData.stats?.poison_resist !== undefined &&
        gameData.game_attached &&
        gameData.game_state !== GameState.UNKNOWN
          ? gameData.stats.poison_resist
          : '-'
      } icon={PoisonResistIcon}/>
      <Stat name={getTranslation(language, "stat.curse_resist")} value={
        gameData.stats?.curse_resist !== undefined &&
        gameData.game_attached &&
        gameData.game_state !== GameState.UNKNOWN
          ? gameData.stats.curse_resist
          : '-'
      } icon={CurseResistIcon}/>
      <Divider style={{margin: "-0.2% 0 1% 0"}}/>
      <Stat name={getTranslation(language, "stat.item_discovery")} value={
        gameData.stats?.item_discovery !== undefined &&
        gameData.game_attached &&
        gameData.game_state !== GameState.UNKNOWN
          ? gameData.stats.item_discovery
          : '-'
      } icon={ItemDiscoveryIcon} style={{marginBottom: "0.3%"}}/>
      <Divider style={{margin: "-0.2% 0 1% 0"}}/>
      {/* <Stat name={getTranslation(language, "stat.attunement_slots")} value={gameData.stats?.attunement_slots} showIcon={false} style={{marginBottom: "0.3%"}}/> */}
      <Stat name={getTranslation(language, "stat.attunement_slots")} value={
        gameData.stats?.attunement_slots !== undefined &&
        gameData.game_attached &&
        gameData.game_state !== GameState.UNKNOWN
          ? gameData.stats.attunement_slots
          : '-'
      } showIcon={false} style={{marginBottom: "0.3%"}}/>
    </>
  )
}

export default StatList3
