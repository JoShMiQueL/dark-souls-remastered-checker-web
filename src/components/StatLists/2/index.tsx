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
import HPIcon from '../../../assets/icons/hp.png'
import StaminaIcon from '../../../assets/icons/stamina.png'
import EquipLoadIcon from '../../../assets/icons/equip_load.png'
import RWeaponIcon from '../../../assets/icons/r_weapon.png'
import LWeaponIcon from '../../../assets/icons/l_weapon.png'
import PhysicalDefense from '../../../assets/icons/physical_defense.png'
import VSStrikeIcon from '../../../assets/icons/vs_strike.png'
import VSSlashIcon from '../../../assets/icons/vs_slash.png'
import VSThrustIcon from '../../../assets/icons/vs_thrust.png'
import MagicDefenseIcon from '../../../assets/icons/magic_defense.png'
import FlameDefenseIcon from '../../../assets/icons/flame_defense.png'
import LightningDefenseIcon from '../../../assets/icons/lightning_defense.png'
import { getTranslation } from '../../Language/translations'
import { useAppSelector } from '../../../store/hooks'
import { GameState } from '../../../store/reducers/gameDataReducer'

const StatList2: FunctionComponent = () => {
  const language = useAppSelector((state) => state.language.locale)
  const gameData = useAppSelector((state) => state.gameData.data)
  return (
    <>
      <Stat
        name={getTranslation(language, 'stat.hp')}
        value={`${
          gameData.stats?.current_hp !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.current_hp
            : '-'
        }/${
          gameData.stats?.max_hp !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.max_hp
            : '-'
        }`}
        icon={HPIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.stamina')}
        value={
          gameData.stats?.current_stamina !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.current_stamina
            : '-'
        }
        icon={StaminaIcon}
        style={{ marginBottom: '0.3%' }}
      />
      {/* <Stat name={getTranslation(language, "stat.equip_load")} value={`${Math.ceil(gameData.stats.equip_load ? gameData.stats.equip_load : 0).toFixed(1)}/${(gameData.stats.max_equip_load ? gameData.stats.max_equip_load : 0).toFixed(1)}`} icon={EquipLoadIcon}/> */}
      <Stat
        name={getTranslation(language, 'stat.equip_load')}
        value={`${
          gameData.stats?.equip_load !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? Math.ceil(gameData.stats.equip_load).toFixed(1)
            : '-'
        }/${
          gameData.stats?.max_equip_load !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? (gameData.stats.max_equip_load
                ? gameData.stats.max_equip_load
                : 0
              ).toFixed(1)
            : '-'
        }`}
        icon={EquipLoadIcon}
      />
      <Divider style={{ margin: '-0.2% 0 1% 0' }} />
      <Stat
        name={getTranslation(language, 'stat.r_weapon_1')}
        value={
          gameData.stats?.r_weapon_1 !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.r_weapon_1
            : '-'
        }
        icon={RWeaponIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.r_weapon_2')}
        value={
          gameData.stats?.r_weapon_2 !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.r_weapon_2
            : '-'
        }
        icon={RWeaponIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.l_weapon_1')}
        value={
          gameData.stats?.l_weapon_1 !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.l_weapon_1
            : '-'
        }
        icon={LWeaponIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.l_weapon_2')}
        value={
          gameData.stats?.l_weapon_2 !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.l_weapon_2
            : '-'
        }
        icon={LWeaponIcon}
      />
      <Divider style={{ margin: '-0.2% 0 1% 0' }} />
      <Stat
        name={getTranslation(language, 'stat.physical_defense')}
        value={`${
          gameData.stats?.physical_defense !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.physical_defense
            : '-'
        }(-)`}
        icon={PhysicalDefense}
        style={{ marginBottom: '0.8%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.vs_strike')}
        value={
          gameData.stats?.vs_strike !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.vs_strike
            : '-'
        }
        icon={VSStrikeIcon}
        style={{ margin: '0 0 0.3% 6%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.vs_slash')}
        value={
          gameData.stats?.vs_slash !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.vs_slash
            : '-'
        }
        icon={VSSlashIcon}
        style={{ margin: '0 0 0.3% 6%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.vs_thrust')}
        value={
          gameData.stats?.vs_thrust !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.vs_thrust
            : '-'
        }
        icon={VSThrustIcon}
        style={{ margin: '0 0 0.7% 6%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.magic_defense')}
        value={`${
          gameData.stats?.magical_defense !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.magical_defense
            : '-'
        }(-)`}
        icon={MagicDefenseIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.flame_defense')}
        value={`${
          gameData.stats?.flame_defense !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.flame_defense
            : '-'
        }(-)`}
        icon={FlameDefenseIcon}
        style={{ marginBottom: '0.3%' }}
      />
      <Stat
        name={getTranslation(language, 'stat.lightning_defense')}
        value={`${
          gameData.stats?.lightning_defense !== undefined &&
          gameData.game_attached &&
          gameData.game_state !== GameState.UNKNOWN
            ? gameData.stats.lightning_defense
            : '-'
        }(-)`}
        icon={LightningDefenseIcon}
      />
    </>
  )
}

export default StatList2
