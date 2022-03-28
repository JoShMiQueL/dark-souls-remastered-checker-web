import { Box } from '@mui/material'
import { CSSProperties, FunctionComponent } from 'react'
import defaultIcon from "../../assets/icons/default.png"

const Stat: FunctionComponent<{
  name?: string
  value?: number | string
  icon?: string,
  style?: CSSProperties
}> = ({ name, value, icon, style }) => {
  return (
    <Box sx={{ display: 'flex', gap: '3%', alignItems: 'center', ...style }}>
      <img src={icon ? icon : defaultIcon} alt="Level" style={{ width: '9.5%' }} />
      <span style={{ fontSize: '1.08vw' }}>{name ? name : "Placeholder"}</span>
      <span style={{ fontSize: '1.08vw', marginLeft: 'auto' }}>{value ? value : 0}</span>
    </Box>
  )
}

export default Stat
