export class Categories{
    constructor(
        public id: string,
        public title: string,
        public parentId: string = null
    ){}
}