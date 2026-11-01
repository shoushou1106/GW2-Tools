'use client'

import { createContext, useState, useEffect } from 'react'

export type UiLanguageOption = 'en-US' | 'zh-Hans-CN'
export type GameLanguageOption = 'en-US' | 'zh-TW'

interface LanguageContextType {
  uiLanguage: UiLanguageOption
  gameLanguage: GameLanguageOption
  changeUiLanguage: (lang: UiLanguageOption) => void
  changeGameLanguage: (lang: GameLanguageOption) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function Providers({ children }: { children: React.ReactNode }) {
  const [uiLanguage, setUiLanguage] = useState<UiLanguageOption>('en-US')
  const [gameLanguage, setGameLanguage] = useState<GameLanguageOption>('en-US')

  useEffect(() => {
    const storedUiLang = localStorage.getItem('uiLanguage') as UiLanguageOption
    const storedGameLang = localStorage.getItem('gameLanguage') as GameLanguageOption
    
    if (storedUiLang) setUiLanguage(storedUiLang)
    if (storedGameLang) setGameLanguage(storedGameLang)
  }, [])

  const changeUiLanguage = (lang: UiLanguageOption) => {
    setUiLanguage(lang)
    localStorage.setItem('uiLanguage', lang)
  }

  const changeGameLanguage = (lang: GameLanguageOption) => {
    setGameLanguage(lang)
    localStorage.setItem('gameLanguage', lang)
  }

  return (
    <LanguageContext.Provider value={{ uiLanguage, gameLanguage: gameLanguage, changeUiLanguage, changeGameLanguage: changeGameLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}