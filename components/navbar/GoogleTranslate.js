"use client";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const GoogleTranslate = () => {
  const [selectedLang, setSelectedLang] = useState("en"); // Default: English

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  // Function to change language dynamically
  const changeLanguage = (langCode) => {
    setSelectedLang(langCode);

    // Force Google Translate to trigger language change
    const selectElem = document.querySelector(".goog-te-combo");
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Language Selector Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-green-50">
            🌍 {selectedLang.toUpperCase()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => changeLanguage("en")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage("ta")}>
            தமிழ் (Tamil)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GoogleTranslate;
