import React, {useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

export const ThemeToggel = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };
  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors-300", "fucus:ouline-hiden", isDarkMode ? " hover:text-yellow-600" : " hover:text-white-600")}>
        {isDarkMode ? (<Sun className='h-6 w-6 text-yellow-30'/>) : (<Moon className='h-6 w-6 text-gray-900'/>)}
    </button>
  )
}
