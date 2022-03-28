import { CSSProperties, FunctionComponent } from "react"
import styles from "./divider.module.css"

const Divider: FunctionComponent<{style?: CSSProperties}> = ({style}) => {
  return <hr className={styles.divider} style={{...style}}/>
}

export default Divider