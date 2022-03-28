import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocale } from '../../store/reducers/languageReducer'
import EnglishLang from '../../assets/ui/english.png'
import SpanishLang from '../../assets/ui/spanish.png'
import ItalianLang from '../../assets/ui/italian.png'
import FrenchLang from '../../assets/ui/french.png'
import GermanLang from '../../assets/ui/german.png'
import { LOCALES } from './translations'
import styles from './index.module.scss'

const Language = () => {
  const language = useSelector((state: any) => state.language.locale)
  const dispatch = useDispatch()
  useEffect(() => {
    // This makes sure that the language is set to the default one
    const locale = localStorage.getItem('locale')
    if (locale) {
      if (
        locale !== LOCALES.EN &&
        locale !== LOCALES.ES &&
        locale !== LOCALES.IT &&
        locale !== LOCALES.FR &&
        locale !== LOCALES.DE
      ) {
        localStorage.setItem('locale', LOCALES.EN)
        return
      }
      dispatch(setLocale(locale))
    }
  }, [])
  const handleClick = (e: any) => {
    switch (e.target.id) {
      case 'lang-en':
        dispatch(setLocale('en'))
        localStorage.setItem('locale', 'en')
        break
      case 'lang-es':
        dispatch(setLocale('es'))
        localStorage.setItem('locale', 'es')
        break
      case 'lang-it':
        dispatch(setLocale('it'))
        localStorage.setItem('locale', 'it')
        break
      case 'lang-fr':
        dispatch(setLocale('fr'))
        localStorage.setItem('locale', 'fr')
        break
      case 'lang-de':
        dispatch(setLocale('de'))
        localStorage.setItem('locale', 'de')
        break
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '5%',
        justifyContent: 'right',
        position: 'absolute',
        // bgcolor: 'red',
        height: '3%',
        top: '11.3%',
        right: '7.1%'
      }}
    >
      <img
        id="lang-en"
        src={EnglishLang}
        onClick={handleClick}
        className={`${styles.language}${
          language == 'en' ? ` ${styles['language--selected']}` : ''
        }`}
      />
      <img
        id="lang-es"
        src={SpanishLang}
        onClick={handleClick}
        className={`${styles.language}${
          language == 'es' ? ` ${styles['language--selected']}` : ''
        }`}
      />
      <img
        id="lang-it"
        src={ItalianLang}
        onClick={handleClick}
        className={`${styles.language}${
          language == 'it' ? ` ${styles['language--selected']}` : ''
        }`}
      />
      <img
        id="lang-fr"
        src={FrenchLang}
        onClick={handleClick}
        className={`${styles.language}${
          language == 'fr' ? ` ${styles['language--selected']}` : ''
        }`}
      />
      <img
        id="lang-de"
        src={GermanLang}
        onClick={handleClick}
        className={`${styles.language}${
          language == 'de' ? ` ${styles['language--selected']}` : ''
        }`}
      />
    </Box>
  )
}

export default Language
