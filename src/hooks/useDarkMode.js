import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    if (darkMode) {
        window.document.body.classList.add("dark-mode");
    }
    else {
        window.document.body.classList.remove("dark-mode")
    }

    return [darkMode, setDarkMode];
};