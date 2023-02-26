import { useEffect, useState } from "react";

/**
 * Custom React hook for managing the app theme based on user preferences.
 * @returns {{theme: string, setTheme: function}} 
 * 
 * 
 * An object with a `theme` property 
 * (either "1" for dark mode or "2" for light mode and "3" for the third theme) 
 *
 * and a `setTheme` function for updating the theme.
 */


export type Ttheme = '1' | "2" | "3"

export const useTheme = (): { theme: string; setTheme: (v: Ttheme) => void; } => {
  let defaultTheme =
    localStorage.getItem("theme") as Ttheme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "1" : "2");


  const [theme, setTheme] = useState<Ttheme>(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
