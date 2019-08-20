export interface FilterBtn {
    type: Filter;
    label: string;
    isActive: boolean;
}

export enum Filter {
    all,
    hot,
    bestSellers
}