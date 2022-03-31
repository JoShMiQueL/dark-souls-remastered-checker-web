import { Box } from '@mui/material'
import Frame from '../../../assets/ui/frame.png'
import StatList2 from '../../StatLists/2'

const StatSection2 = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '30%',
        height: '68.5%',
        top: '19.8%',
        left: '35.3%',
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
          // bgcolor: 'red',
          top: '7.5%',
          height: '73%',
          color: '#c7c7c7'
        }}
      >
        <StatList2 />
      </Box>
    </Box>
  )
}

export default StatSection2
