import { Box, Container } from '@mui/material'
import MenuBG from './assets/ui/menu_background_notransparency.png'
import SampleImage from './assets/background_sample.jpg'
import SampleImageBlur10 from './assets/background_sample_blur_x10.png'
import Frame from './assets/ui/frame.png'
import StatList from './components/StatList'
import { useEffect } from 'react'
import Language from './components/Language'

const App = () => {
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
              backgroundPosition: 'center center'
            }}
          >
            <Language />
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
                backgroundSize: 'contain',
                fontFamily: '"FOT-Matisse Pro", sans-serif'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  pl: '8%',
                  pr: '12%',
                  top: '15%',
                  height: '73%',
                  color: '#c7c7c7'
                }}
              >
                <StatList />
              </Box>
            </Box>
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
              {/* <p style={{margin: 0, fontSize: "1.5vw"}}>Cipotón</p> */}
            </Box>
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
              {/* <p style={{margin: 0, fontSize: "1.5vw"}}>Cipotón</p> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default App
