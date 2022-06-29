export interface ITypography {
    weight: {
        regular: string,
        medium: string,
        semiBold: string,
        bold: string,
    };
    size: {
        s1: number;
        s2: number;
        m1: number;
        m2: number;
        l1: number;
        l2: number;
        l3: number;
        l4: number;
        el1: number;
        el2: number;
    };
}

export const typography = {
    weight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
    },
    size: {
        s1: 13,
        s2: 14,
        m1: 15,
        m2: 16,
        l1: 17,
        l2: 18,
        l3: 19,
        l4: 20,
        el1: 21,
        el2: 22,
    },
}