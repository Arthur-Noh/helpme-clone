export interface ITypography {
    weight: {
        regular: string;
        semiBold: number;
        bold: number;
        extrabold: number;
    };
    size: {
        s1: number;
        s2: number;
        m1: number;
        m2: number;
        l1: number;
        l2: number;
        l3: number;
        el1: number;
        el2: number;
    };
};

export const typography = {
    weight: {
        regular: 'normal',
        semiBold: 500,
        bold: 700,
        extrabold: 900,
    },
    size: {
        s1: 12,
        s2: 14,
        m1: 16,
        m2: 18,
        l1: 20,
        l2: 22,
        l3: 26,
        el1: 32,
        el2: 34,
    },
}