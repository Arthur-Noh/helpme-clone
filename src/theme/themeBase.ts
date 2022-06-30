import { white, gray, black, red, primary } from "./palette";
import { typography } from "./typography";

const colors = {
    white,
    gray,
    black,
    red,
    primaries: primary,
};

const base = {
    templatePadding: '5%',
    borderRadius: 8,
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
};

const themeBase = {
    base,
    colors,
    typography,
};

export default themeBase;