import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("JavaScript");

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "JavaScript" ? "Python" : "JavaScript"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
