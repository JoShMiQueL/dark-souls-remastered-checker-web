import { Box } from '@mui/material'
import Frame from '../../../assets/ui/frame.png'
import StatList1 from '../../StatLists/1'

const StatSection1 = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '30%',
        height: '68.5%',
        top: '19.8%',
        left: '7%',
        // bgcolor: 'red',
        backgroundImage: `url(${Frame})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        backgroundSize: 'contain'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          pl: '10%',
          pr: '12%',
          top: '16%',
          height: '73%',
          color: '#c7c7c7'
        }}
      >
        <StatList1 />
      </Box>
    </Box>
  )
}

export default StatSection1
