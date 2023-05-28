// react
import './mystyle.scss'
import { useState, createContext} from 'react';
import Chinese from './pages/Chinese'
import English from './pages/English'
import {HashRouter , Routes, Route, Navigate } from "react-router-dom";

export const LanguageContext = createContext()

function App() {
  const [language, setLanguage] = useState("zh")
  const value = [language, setLanguage]
  return (
    <LanguageContext.Provider value={value}>
    <HashRouter>
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
    </HashRouter>
    </LanguageContext.Provider>
  )
}

export default App