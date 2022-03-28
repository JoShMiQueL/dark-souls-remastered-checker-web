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

const StatList: FunctionComponent = () => {
  return (
    <>
      <Divider />
      <Stat name="Level" value={29} icon={LevelIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name="Souls" value={9953342} icon={SoulsIcon}/>
      <Divider style={{margin: "-0.2% 0 1% 0"}}/>
      <Stat name="Vitality" value={80} icon={VitalityIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name="Attunement" value={14} icon={AttunementIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name="Endurance" value={36} icon={EnduranceIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name="Strength" value={12} icon={StrengthIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name="Dexterity" value={17} icon={DexterityIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name="Resistance" value={14} icon={ResistanceIcon} style={{marginBottom: "0.95%"}}/>
      <Stat name="Intelligence" value={12} icon={IntelligenceIcon} style={{marginBottom: "0.3%"}}/>
      <Stat name="Faith" value={15} icon={FaithIcon}/>
      <Divider style={{margin: "-0.2% 0 1% 0"}}/>
      <Stat name="Humanity" value={99} icon={HumanityIcon}/>
    </>
  )
}

export default StatList
