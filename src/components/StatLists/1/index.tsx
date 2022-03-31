import { FunctionComponent } from 'react'
import Divider from '../../Divider'
import Stat from '../../Stat'
import LevelIcon from '../../../assets/icons/level.png'
import SoulsIcon from '../../../assets/icons/souls.png'
import VitalityIcon from '../../../assets/icons/vitality.png'
import StrengthIcon from '../../../assets/icons/strength.png'
import DexterityIcon from '../../../assets/icons/dexterity.png'
import IntelligenceIcon from '../../../assets/icons/intelligence.png'
import AttunementIcon from '../../../assets/icons/attunement.png'
import EnduranceIcon from '../../../assets/icons/endurance.png'
import FaithIcon from '../../../assets/icons/faith.png'
import ResistanceIcon from '../../../assets/icons/resistance.png'
import HumanityIcon from '../../../assets/icons/humanity.png'
import { getTranslation } from '../../Language/translations'
import { useAppSelector } from '../../../store/hooks'
import { GameState } from '../../../store/reducers/gameDataReducer'

const StatList1: FunctionComponent = () => {
  const language = useAppSelector((state) => state.language.locale)
  const gameData = useAppSelector((state) => state.gameData.data)
  return (
    <>
      <Divider />
      <Stat
        name={getTranslation(language, 'stat.level')}
        value={
          gameData.stats?.level !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.level
            : '-'
        }
        icon={LevelIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.souls')}
        value={
          gameData.stats?.souls !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.souls
            : '-'
        }
        icon={SoulsIcon}
      />
      <Divider style={{ margin: '-0.2% 0 1% 0' }} />
      <Stat
        name={getTranslation(language, 'stat.vitality')}
        value={
          gameData.stats?.vitality !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.vitality
            : '-'
        }
        icon={VitalityIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.attunement')}
        value={
          gameData.stats?.attunement !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.attunement
            : '-'
        }
        icon={AttunementIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.endurance')}
        value={
          gameData.stats?.endurance !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.endurance
            : '-'
        }
        icon={EnduranceIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.strength')}
        value={
          gameData.stats?.strength !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.strength
            : '-'
        }
        icon={StrengthIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.dexterity')}
        value={
          gameData.stats?.dexterity !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.dexterity
            : '-'
        }
        icon={DexterityIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.resistance')}
        value={
          gameData.stats?.resistance !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.resistance
            : '-'
        }
        icon={ResistanceIcon}
        style={{ marginBottom: '0.95%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.intelligence')}
        value={
          gameData.stats?.intelligence !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.intelligence
            : '-'
        }
        icon={IntelligenceIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.faith')}
        value={
          gameData.stats?.faith !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.faith
            : '-'
        }
        icon={FaithIcon}
      />
      <Divider style={{ margin: '-0.2% 0 1% 0' }} />
      <Stat
        name={getTranslation(language, 'stat.humanity')}
        value={
          gameData.stats?.humanities !== undefined && gameData.game_attached && gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.humanities
            : '-'
        }
        icon={HumanityIcon}
      />
    </>
  )
}

export default StatList1
