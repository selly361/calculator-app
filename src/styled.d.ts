// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    mainBackground: string;
    auxBackground: string;
    screenBackground: string;
    textColor: string;
    keyTextColor: string;
    keyBackground: string;
    keyShadow: string;
    delButBackground: string;
    delButShadow: string;
    equalsText: string;
    equalsBackground: string;
    equalShadow: string;
  }
}
