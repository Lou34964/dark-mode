import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    if (darkMode) {
        document.body.classList.toggle("dark-mode");
    }
    else {
        document.body.classList.remove("dark-mode")
    }

    return [darkMode, setDarkMode];
};