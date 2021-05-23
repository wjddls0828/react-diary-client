/*
  isBrownTheme 
    TRUE: brown button
    FALSE: white button
*/

export interface ThemeButtonProps {
  text: string;
  onClick: () => void;
  isBrownTheme: boolean;
  width?: string;
  height?: string;
}

export interface ThemeButtonStyleProps {
  isBrownTheme: boolean;
  width?: string;
  height?: string;
}
