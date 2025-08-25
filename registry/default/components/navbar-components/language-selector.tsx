"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, Globe } from "lucide-react";

const languages = [
  { code: "en", name: "EN", fullName: "English" },
  { code: "am", name: "አማ", fullName: "አማርኛ" },
  { code: "or", name: "ORO", fullName: "Oromoo" },
  { code: "ti", name: "TG", fullName: "ትግርኛ" },
];

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled = false }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (code: string) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggle();
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const currentLanguage = languages.find((lang) => lang.code === selectedLanguage);

  return (
    <div ref={dropdownRef} className="relative select-none">
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-sm bg-transparent border-none shadow-none min-w-[110px] focus:outline-none transition-colors duration-150 text-xs ${
          isScrolled ? "hover:bg-accent text-foreground" : "hover:bg-white/10 text-white"
        }`}
        style={{ background: 'transparent', border: 'none' }}
        onClick={handleToggle}
        tabIndex={0}
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onKeyDown={handleKeyDown}
      >
        <Globe size={14} className={`mr-1.5 ${isScrolled ? "text-muted-foreground/80" : "text-white/80"}`} />
        <span className="font-medium">{currentLanguage?.name}</span>
        <ChevronDownIcon
          className={`ml-1 opacity-60 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"} ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}
          size={14}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-sm shadow-lg z-20 min-w-[110px] py-1"
          role="listbox"
        >
          {languages.map((lang) => (
            <li key={lang.code} role="option" aria-selected={selectedLanguage === lang.code}>
              <button
                className={`flex items-center justify-between w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-100 rounded-sm ${
                  selectedLanguage === lang.code ? "font-semibold bg-gray-50" : ""
                }`}
                onClick={() => handleSelect(lang.code)}
                tabIndex={0}
                aria-label={`Switch to ${lang.fullName}`}
                aria-selected={selectedLanguage === lang.code}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleSelect(lang.code);
                }}
              >
                <span>{lang.fullName}</span>
                {selectedLanguage === lang.code && (
                  <span className="w-2 h-2 rounded-full bg-blue-500 ml-2" aria-hidden="true"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
