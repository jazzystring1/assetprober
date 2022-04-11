import { useState, useEffect } from "react";

function getLocalStorage(key, defaultValue) {
    const valueFromStorage = localStorage.getItem(key);
    const parsedValueFromStorage = JSON.parse(valueFromStorage);

    return parsedValueFromStorage ?? defaultValue
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getLocalStorage(key, defaultValue);
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    })

    return [value, setValue];
}

