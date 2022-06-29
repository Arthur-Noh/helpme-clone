export interface IGray {
    100: string;
    200: string;
    base: string;
}

export interface IWhite {
    base: string;
}

export interface IBlack {
    100: string;
    base: string;
}

export interface IBlue {
    100: string;
    200: string;
    base: string;
}

export interface IPrimary {
    blue: string;
    red: string;
    yellow: string;
}

export const gray: IGray = {
    100: '#F4F3F3',
    200: '#EFEFEF',
    base: '#545555',
};

export const white: IWhite = {
    base: '#FFFFFF',
};

export const black: IBlack = {
    100: '#1C1C1C',
    base: '#181818',
};

export const blue: IBlue = {
    100: '#afc3ef',
    200: '#5e86de',
    base: '#3937c8',
};

export const primary: IPrimary = {
    blue: '#327ABE',
    red: '#DC342D',
    yellow: '#F19A38',
};
