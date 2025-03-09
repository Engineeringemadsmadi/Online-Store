"use client"
import { createContext, useState, ReactNode } from "react";

type ThemeContextType = {
    mode: string;
    toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [mode, setMode] = useState('dark');

    const toggle = () => {
        setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
