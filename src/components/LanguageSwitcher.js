import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);
    return (
        <div>
            <h2>Favorite Programming Language: {language}</h2>
            <button onClick={toggleLanguage}>Toggle Language</button>
        </div>
    );
};

export default LanguageSwitcher;
