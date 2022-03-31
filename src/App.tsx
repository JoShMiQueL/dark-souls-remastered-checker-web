import { Box, Container, Typography } from '@mui/material'
import MenuBG from './assets/ui/menu_background_notransparency_newformat.png'
import SampleImage from './assets/background_sample.jpg'
import StatusIcon from './assets/ui/Status.png'
import StatusTopIcon from './assets/ui/Status_top.png'
import StatusBottomIcon from './assets/ui/Status_bottom.png'
import SampleImageBlur10 from './assets/background_sample_blur_x10.png'
import Language from './components/Language'
import StatSection1 from './components/StatSections/1'
import StatSection2 from './components/StatSections/2'
import StatSection3 from './components/StatSections/3'
import { w3cwebsocket } from 'websocket'
// import { io, Manager } from 'socket.io-client'
// import WebSocket from 'ws'
// import SocksJS from 'sockjs-client'
import {
  GameData,
  GameState,
  setGameData
} from './store/reducers/gameDataReducer'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { getTranslation } from './components/Language/translations'

const App = () => {
  const language = useAppSelector((state) => state.language.locale)
  const dispatch = useAppDispatch()
  const socketConnect = () => {
    const socket = new w3cwebsocket('ws://localhost:9001')
    socket.onopen = () => {
      console.log('open')
    }
    socket.onmessage = (message) => {
      const gd: GameData = JSON.parse(message.data.toString())
      if (gd && gd.game_state !== GameState.UNKNOWN) {
        dispatch(setGameData(gd))
      }
    }
    socket.onclose = () => {
      console.log('close')
      setTimeout(() => socketConnect, 5000)
    }
  }
  useEffect(() => {
    socketConnect()
  }, [])
  return (
    <Box
      sx={{
        position: 'relative',
        height: '1px',
        display: 'flex',
        minHeight: '100vh',
        // bgcolor: '#202124',
        bgcolor: '#000',
        backgroundImage: `url(${SampleImageBlur10})`,
        backgroundSize: 'cover',
        color: '#fff'
      }}
    >
      <Container
        sx={{ my: 'auto', maxWidth: '1666px !important', px: '0 !important' }}
      >
        <Box
          sx={{
            position: 'relative',
            // width: '100vw',
            height: '1px',
            maxHeight: '100vh',
            pt: '56.25%',
            bgcolor: '#202124',
            backgroundImage: `url(${SampleImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center center'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '0',
              left: '0',
              backgroundImage: `url(${MenuBG})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '93%',
              backgroundPosition: 'center center',
              fontFamily: '"FOT-Matisse Pro", sans-serif'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                position: 'absolute',
                top: '9%',
                left: '8.8%',
                width: '54.5%',
                height: '9%'
                // bgcolor: 'red'
              }}
            >
              <img
                src={StatusIcon}
                alt="Status"
                style={{
                  position: 'relative',
                  top: '-5%',
                  left: '-0.5%',
                  height: '110%'
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  ml: '-.5%',
                  width: '100%',
                  color: '#c7c7c7',
                }}
              >
                <h1
                  style={{
                    margin: '0 0 0 1%',
                    fontSize: '1.50vw',
                    fontWeight: '500'
                  }}
                >
                  {getTranslation(language, 'stat.title')}
                </h1>
                <hr
                  style={{
                    margin: '-.5% 0 0 .3%',
                    border: 0,
                    backgroundImage: `url(${StatusTopIcon})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '5%',
                    width: '100%'
                  }}
                />
                <h2
                  style={{
                    margin: '0 0 0 1%',
                    fontSize: '1.20vw',
                    fontWeight: '400'
                  }}
                >
                  {getTranslation(language, 'stat.subtitle')}
                </h2>
                <hr
                  style={{
                    margin: 'auto 0 0 .3%',
                    border: 0,
                    backgroundImage: `url(${StatusBottomIcon})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '5%',
                    width: '100%'
                  }}
                />
              </Box>
            </Box>
            <Language />
            <StatSection1 />
            <StatSection2 />
            <StatSection3 />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default App
