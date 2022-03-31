import { Box } from '@mui/material'
import Frame from '../../../assets/ui/frame.png'
import StatList3 from '../../StatLists/3'
import AttunementSlot from '../../../assets/icons/attunement_slot.png'
import { useAppSelector } from '../../../store/hooks'
import { GameState } from '../../../store/reducers/gameDataReducer'

const StatSection3 = () => {
  const gameData = useAppSelector((state) => state.gameData.data)
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '30%',
        height: '68.5%',
        top: '19.8%',
        left: '64.1%',
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
        <StatList3 />
        <Box
          sx={{
            position: 'absolute',
            // bgcolor: 'red',
            width: '82%',
            pl: '6%',
            pr: '6%',
            // height: '56%',
            left: '10%',
            top: '52%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 40%)',
            columnGap: '9%',
            rowGap: '6%'
          }}
        >
          {new Array(
            gameData.stats?.attunement_slots !== undefined &&
            gameData.game_attached &&
            gameData.game_state !== GameState.UNKNOWN &&
            gameData.stats.attunement_slots <= 10 &&
            gameData.stats.attunement_slots > 0
              ? gameData.stats.attunement_slots
              : 1
          )
            .fill(0)
            .map((_, i) => (
              <img key={i} src={AttunementSlot} style={{ width: '100%' }} />
            ))}
          {/* <Box sx={{
            position: 'relative',
            height: '33.33%',
            display: 'flex',
            // justifyContent: 'space-between',
            gap: "4.8%",
          }}>
            <img src={AttunementSlot} style={{height: "100%"}}/>
            <img src={AttunementSlot} style={{height: "100%"}}/>
            <img src={AttunementSlot} style={{height: "100%"}}/>
            <img src={AttunementSlot} style={{height: "100%"}}/>
          </Box>
          <Box sx={{
            position: 'relative',
            height: '33.33%',
            display: 'flex',
            // justifyContent: 'space-between',
            gap: "4.8%",
          }}>
            <img src={AttunementSlot} style={{height: "100%"}}/>
            <img src={AttunementSlot} style={{height: "100%"}}/>
            <img src={AttunementSlot} style={{height: "100%"}}/>
            <img src={AttunementSlot} style={{height: "100%"}}/>
          </Box>
          <Box sx={{
            position: 'relative',
            height: '33.33%',
            display: 'flex',
            // justifyContent: 'space-evenly',
            gap: "4.8%",
          }}>
            <img src={AttunementSlot} style={{height: "100%"}}/>
            <img src={AttunementSlot} style={{height: "100%"}}/>
          </Box> */}
        </Box>
      </Box>
    </Box>
  )
}

export default StatSection3
