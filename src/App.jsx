import React, { createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';

import MainLayout from './layout/MainLayout';

export const LangContext = createContext();
export const ThemeContext = createContext();

function App() {
    const [lang, setLang] = useState("uz");
    const [theme, setTheme] = useState("light");
    return (
        <div style={{bgColor: theme}}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <LangContext.Provider value={{ lang, setLang }}>
                    <Routes>
                        <Route index element={
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        } />

                        <Route path='/about' element={
                            <MainLayout>
                                <About />
                            </MainLayout>
                        } />

                        <Route path='/contact' element={
                            <MainLayout>
                                <Contact />
                            </MainLayout>
                        } />

                        <Route path='/login' element={
                            <MainLayout>
                                <Login />
                            </MainLayout>
                        } />

                        <Route path='/register' element={
                            <MainLayout>
                                <Register />
                            </MainLayout>
                        } />

                        <Route path='*' element={
                            <MainLayout>
                                <Error />
                            </MainLayout>
                        } />
                    </Routes>
                </LangContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}

export default React.memo(App);