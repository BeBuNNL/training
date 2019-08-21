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
        parentId: null,
    },
    {
        id: 'E113',
        title: 'PCs',
        parentId: null,
    },
    {
        id: 'G1',
        title: 'Gadgets',
        parentId: null,
    },
    {
        id: 'G111',
        title: 'Watch',
        parentId: null,
    }
]