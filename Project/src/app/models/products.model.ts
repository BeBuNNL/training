export class Product{
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public oldPrice: number,
        public description: string,
        public isAvailable: boolean = true,
        public categoryId: string[],
        public rating: number,
        public discount: number,
        public imgUrl: string,
        public isHotProduct: boolean,
    ){ }
}