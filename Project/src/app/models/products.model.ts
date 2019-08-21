export class Product{
    constructor(
        public id: number,//timestamp
        public title: string,
        public price: number,
        public description: string,
        public isAvailable: boolean = true,
        public brand: string,
        public category: string,
        public color: string[],
        public rating: number,
        public discount: number,
        public imgUrl: string,
        public isHot: boolean,
        public isFiltered: boolean = false,
        public isSale: number,
    ){ }
}