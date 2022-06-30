import '@emotion/react';
import { IWhite, IGray, IBlack, IPrimary, IRed, primary } from './palette';
import { ITypography } from './typography';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            white: IWhite;
            gray: IGray;
            black: IBlack;
            red: IRed;
            primary: IPrimary;
        },
        base: {
            templatePadding: string;
            borderRadius: number;
            boxShadow: string;
        },
        typography: ITypography;
    }
}