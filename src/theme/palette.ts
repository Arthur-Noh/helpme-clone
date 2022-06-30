export interface IGray {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    base: string;
};

export interface IWhite {
    base: string;
};

export interface IBlack {
    base: string;
}

export interface IRed {
    base: string;
}

export interface IPrimary {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    base: string;
}

export const gray: IGray = {
    100: '#E9E9E9',
    200: '#F3F3F3',
    300: '#EFEFEF',
    400: '#DBDBDB',
    500: '#A6A6A6',
    base: '#9C9C9C',
}

export const white: IWhite = {
    base: '#ffffff',
};

export const black: IBlack = {
    base: '#202020',
};

export const red: IRed = {
    base: '#FF3E3E',
};

export const primary: IPrimary = {
    100: '#FFF6EE',
    200: '#FFEEDF',
    300: '#FCDFC6',
    400: '#F16F00',
    500: '#E66C04',
    base: '#FF8B28',
};