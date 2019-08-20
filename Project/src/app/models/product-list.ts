import { Product } from "./products.model";

export const PRODUCTS: Product[] = [
    {
        id: 1,
        title: 'iPhone X',
        rating: 5,
        price: 1500,
        isSale: 350,
        oldPrice: 0,
        isHotProduct: true,
        discount: 0,
        category: ['Apple', 'Phone', 'Black'],
        description: 'New generation of iPhone in 2018, by Apple, Inc',
        isAvailable: true,
        isFiltered: true,
        imgUrl: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460-1-400x460.png'
    },
    {
        id: 2,
        title: 'Huawei Mate 30 Pro',
        rating: 4,
        price: 1200,
        isSale: 300,
        oldPrice: 0,
        isHotProduct: true,
        discount: 20,
        category: ['Huawei', 'Phone', 'Black'],
        description: 'New phone design by Huawei, Inc',
        isAvailable: true,
        isFiltered: true,
        imgUrl: 'http://genknews.genkcdn.vn/2019/8/11/342cv-1565486172207188845559.jpg'
    },
    {
        id: 3,
        title: 'Samsung Galaxy Note 10',
        rating: 5,
        price: 950,
        isSale: 360,
        oldPrice: 0,
        isHotProduct: true,
        discount: 0,
        category: ['Samsung', 'Phone', ' Matte Black'],
        description: 'New Note by Samsung, Inc',
        isAvailable: true,
        isFiltered: true,
        imgUrl: 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/w830/public/article_images/2019/07/samsung-galaxy-note-10-silver-cropped.jpg?itok=Xf8Iy6br'
    },
    {
        id: 4,
        title: 'OnePlus 7 Pro',
        rating: 3,
        price: 800,
        isSale: 310,
        oldPrice: 0,
        isHotProduct: false,
        discount: 40,
        category: ['OnePlus', 'Phone', 'Red'],
        description: 'New generation of iPhone in 2018, by Apple, Inc',
        isAvailable: true,
        isFiltered: true,
        imgUrl: 'https://sudospaces.com/mobilecity-vn/images/2019/05/oneplus-7-pro-nebula-blue.jpg'
    }
]