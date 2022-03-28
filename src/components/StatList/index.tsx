import { FunctionComponent } from 'react'
import Divider from '../Divider'
import Stat from '../Stat'
import LevelIcon from "../../assets/icons/level.png"
import SoulsIcon from "../../assets/icons/souls.png"
import VitalityIcon from "../../assets/icons/vitality.png"
import StrengthIcon from "../../assets/icons/strength.png"
import DexterityIcon from "../../assets/icons/dexterity.png"
import IntelligenceIcon from "../../assets/icons/intelligence.png"
import AttunementIcon from "../../assets/icons/attunement.png"
import EnduranceIcon from "../../assets/icons/endurance.png"
import FaithIcon from "../../assets/icons/faith.png"
import ResistanceIcon from "../../assets/icons/resistance.png"
import HumanityIcon from "../../assets/icons/humanity.png"
import { getTranslation } from '../Language/translations'
import { useSelector } from 'react-redux'

const StatList: FunctionComponent = () => {
  const language = useSelector((state: any) => state.language.locale)
  return (
    <>
      <Divider />
      <Stat name={getTranslation(language, "stat.level")} value={29} icon={LevelIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.souls")} value={9953342} icon={SoulsIcon}/>
      <Divider style={{margin: "-0.2% 0 1% 0"}}/>
      <Stat name={getTranslation(language, "stat.vitality")} value={80} icon={VitalityIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.attunement")} value={14} icon={AttunementIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.endurance")} value={36} icon={EnduranceIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.strength")} value={12} icon={StrengthIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.dexterity")} value={17} icon={DexterityIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.resistance")} value={14} icon={ResistanceIcon} style={{marginBottom: "0.95%"}}/>
      <Stat name={getTranslation(language, "stat.intelligence")} value={12} icon={IntelligenceIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name={getTranslation(language, "stat.faith")} value={15} icon={FaithIcon}/>
      <Divider style={{margin: "-0.2% 0 1% 0"}}/>
      <Stat name={getTranslation(language, "stat.humanity")} value={99} icon={HumanityIcon}/>
    </>
  )
}

export default StatList
