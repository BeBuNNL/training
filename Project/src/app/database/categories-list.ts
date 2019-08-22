import { Categories } from '../models/categories.model';

export const CATEGORY: Categories[] = [
    {
        id: 'E1',
        title: 'Electronic',
        parentId: null,
    },
    {
        id: 'E111',
        title: 'Phones',
        parentId: 'E1',
    },
    {
        id: 'E112',
        title: 'Laptop',
        parentId: 'E1',
    },
    {
        id: 'E113',
        title: 'PCs',
        parentId: 'E1',
    },
    {
        id: 'G1',
        title: 'Gadgets',
        parentId: null,
    },
    {
        id: 'G111',
        title: 'Watch',
        parentId: 'G1',
    }
]