// react
import './mystyle.scss'
import { useState, createContext} from 'react';
import Chinese from './Chinese'
import English from './English'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const LanguageContext = createContext()

function App() {
  const [language, setLanguage] = useState("zh")
  const value = [language, setLanguage]
  return (
    <LanguageContext.Provider value={value}>
    <BrowserRouter>
      <Routes>
        <Route
          path='/' 
          element=<Navigate to="/zh"/>
        />
        <Route
          path='/zh' 
          element=<Chinese/>
        />
        <Route
          path='/en'
          element=<English/>
        />
      </Routes>
    </BrowserRouter>
    </LanguageContext.Provider>
  )
}

export default App