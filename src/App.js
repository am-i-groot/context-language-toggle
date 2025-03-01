import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => (
  <LanguageProvider>
    <LanguageSwitcher />
  </LanguageProvider>
);

export default App;
