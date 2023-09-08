'use client'

import {createContext, useContext, useState} from "react";

const SoundSwitchContext = createContext(null)

const SoundSwitchContextProvider = ({ enable = true, children }) => {
  const [soundEnabled, setSoundEnabled] = useState(enable)

  return (
    <SoundSwitchContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundSwitchContext.Provider>
  )
}

export const useSoundSwitch = () => {
  return useContext(SoundSwitchContext);
}

export default SoundSwitchContextProvider
