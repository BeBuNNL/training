import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project1';

  ngOnInit(){
    
  }
}

export class product{
  name: string;
  img: string;
  price: number;
  desc: string;
  discount: number;
  vote: number;
  hot:  boolean;
  cop: number;
  cateID: number;
  brand: string;
  subBrandId: number;
}

export const PRODUCTS: product[]=[
  {name: 'sp01', img: 'https://www.91-img.com/pictures/133188-v4-oppo-f11-mobile-phone-large-1.jpg', cateID: 11, price: 1.99, desc: 'abc xyz 123 456', discount: 0, vote: 2, hot: false, cop: 300, brand: 'abc', subBrandId: 112},
  {name: 'sp03', img: 'https://ss7.vzw.com/is/image/VerizonWireless/iPhoneX-Svr?$device-lg$', cateID: 12, price: 4.99, desc: 'abc xyz 123 456', discount: 41, vote: 3, hot: false, cop: 330, brand: 'def', subBrandId: 111},
  {name: 'sp02', img: 'https://images-na.ssl-images-amazon.com/images/I/61Wtw6NxBEL._SL1500_.jpg', cateID: 23, price: 6.99, desc: 'abc xyz 123 456', discount: 63, vote: 4, hot: true, cop: 340, brand: 'ghi', subBrandId: 113},
  {name: 'sp04', img: 'https://media.4rgos.it/s/Argos/7973374_R_SET?$Main768$&w=620&h=620', cateID: 21, price: 2.99, desc: 'abc xyz 123 456', discount: 51, vote: 5, hot: true, cop: 812, brand: 'abc', subBrandId: null},
  {name: 'sp05', img: 'https://satellitephonestore.com/uploads/pictures/large/4-2099.jpg', cateID: 22, price: 3.99, desc: 'abc xyz 123 456', discount: 6, vote: 2, hot: false, cop: 500, brand: 'abc', subBrandId: 212},
  {name: 'sp06', img: 'https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/05/SEI_673621351.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1', cateID: 12, price: 7.99, desc: 'abc xyz 123 456', discount: 5, vote: 1, hot: true, cop: 800, brand: 'def', subBrandId: 213},
  {name: 'sp07', img: 'https://boygeniusreport.files.wordpress.com/2018/11/galaxy-f-foldable-phone-concept-lets-go-digital-1.jpg?quality=98&strip=all&w=782', cateID: 13, price: 8.99, desc: 'abc xyz 123 456', discount: 12, vote: 0, hot: false, cop: 900, brand: 'abc', subBrandId: 211},
  {name: 'sp08', img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/oppo_reno_3-770x433.png?.sOGsTy7CayzFD6jbrYEPqT8x8ZbJri5', cateID: 21, price: 12.99, desc: 'abc xyz 123 456', discount: 6, vote: 5, hot: false, cop: 100, brand: 'def', subBrandId: 111},
  {name: 'sp09', img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1502826406%2F1708w-getty-fruit-closeup-CarstenSchanter-EyeEm.jpg%3Fitok%3DXFE9vQPZ&w=400&c=sc&poi=face&q=85', cateID: 13, price: 32.99, desc: 'abc xyz 123 456', discount: 11, vote: 1, hot: false, cop: 500, brand: 'ghi', subBrandId: 113},
  {name: 'sp10', img: 'https://www.eatforhealth.gov.au/sites/default/files/images/the_guidelines/fruit_selection_155265101_web.jpg', cateID: 12, price: 121.99, desc: 'abc xyz 123 456', discount: 25, vote: 2, hot: true, cop: 400, brand: 'def', subBrandId: null},
  {name: 'sp11', img: 'https://rukminim1.flixcart.com/image/612/612/jp2xoy80/fruit/j/q/3/2-un-branded-whole-original-imafbefpz3ev5gqs.jpeg?q=70', cateID: 11, price: 15.99, desc: 'abc xyz 123 456', discount: 50, vote: 3, hot: false, cop: 150, brand: 'ghi', subBrandId: 112},
  {name: 'sp12', img: 'https://draxe.com/wp-content/uploads/2018/12/KetoFruitHeader.jpg', cateID: 21, price: 16.99, desc: 'abc xyz 123 456', discount: 12, vote: 4, hot: false, cop: 760, brand: 'def', subBrandId: 213},
  {name: 'sp13', img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/26/15/pineapple-fruit.jpg?w968h681 ', cateID: 12, price: 165.99, desc: 'abc xyz 123 456', discount: 51, vote: 5, hot: false, cop: 980, brand: 'abc', subBrandId: 111},
  {name: 'sp14', img: 'https://digitalcontent.api.tesco.com/v2/media/ghs-mktg/e537d9d1-b653-4b43-9dc0-7a5d01d139f8/1916-GHS-BLthumb-Seasons-Best-255x255-Nectarine.jpeg', cateID: 11, price: 16.99, desc: 'abc xyz 123 456', discount: 10, vote: 2, hot: true, cop: 190, brand: 'abc', subBrandId: 112},
  {name: 'sp15', img: 'https://www.sagefruit.com/wp-content/uploads/2016/08/our-fruit-pears.jpg', cateID: 11, price: 123.99, desc: 'abc xyz 123 456', discount: 75, vote: 4, hot: false, cop: 180, brand: 'abc', subBrandId: 112},
  {name: 'sp16', img: 'https://www.babipur.co.uk/media/catalog/product/cache/1/image/676x/9df78eab33525d08d6e5fb8d27136e95/l/a/lanco_fruits_1.png', cateID: 23, price: 16.99, desc: 'abc xyz 123 456', discount: 45, vote: 2, hot: false, cop: 190, brand: 'ghi', subBrandId: null},
  {name: 'sp17', img: 'https://image.shutterstock.com/image-vector/fruit-burst-splash-juice-sweet-260nw-691895029.jpg', cateID: 13, price: 123.99, desc: 'abc xyz 123 456', discount: 60, vote: 1, hot: true, cop: 130, brand: 'ghi', subBrandId: 113},
  {name: 'sp18', img: 'https://resources.stuff.co.nz/content/dam/images/1/t/8/t/q/5/image.related.StuffLandscapeSixteenByNine.710x400.1t8sr2.png/1545617529569.jpg', cateID: 12, price: 143.99, desc: 'abc xyz 123 456', discount: 70, vote: 0, hot: true, cop: 650, brand: 'ghi', subBrandId: 213},
  {name: 'sp19', img: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140,2000%7C81pSHhVYRkL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0._UX522_.png', cateID: 21, price: 16.99, desc: 'abc xyz 123 456', discount: 90, vote: 0, hot: false, cop: 370, brand: 'def', subBrandId: 212},
  {name: 'sp20', img: 'https://pbs.twimg.com/media/Dw5Xj6OXcAEm7cX.jpg', cateID: 11, price: 17.99, desc: 'abc xyz 123 456', discount: 80, vote: 2, hot: false, cop: 870, brand: 'def', subBrandId: null},
  {name: 'sp21', img: 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1196A2MPA3058PT17X17Y0D1014306958FS3544/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2,version=1549995614/french-queen-tshi-womens-5050-t-shirt.jpg', cateID: 12, price: 124.99, desc: 'abc xyz 123 456', discount: 10, vote: 3, hot: false, cop: 190, brand: 'def', subBrandId: 213},
  {name: 'sp22', img: 'https://www.dhresource.com/0x0s/f2-albu-g10-M01-E2-89-rBVaWVv3l1OAWUPuAABKozwfrvc626.jpg/2019-summer-mens-t-shirt-designer-luxury.jpg', cateID: 21, price: 174.99, desc: 'abc xyz 123 456', discount: 30, vote: 3, hot: true, cop: 290, brand: 'abc', subBrandId: 211},
  {name: 'sp23', img: 'http://images.squarespace-cdn.com/content/v1/53e40123e4b053de8a5cce51/1481131842816-XMD8QFCNOYH20BQT13GZ/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwwQIrqN0bcqL_6-iJCOAA0qwytzcs0JTq1XS2aqVbyK6GtMIM7F0DGeOwCXa63_4k/DAW+tshi+navy+or.jpg  ', cateID: 13, price: 188.99, desc: 'abc xyz 123 456', discount: 25, vote: 5, hot: false, cop: 290, brand: 'abc', subBrandId: 112},
]

export class prodCate{
  id: number;
  category: string;
  subCate: string;
}

export const categoryList: prodCate[]=[
  {id: 11, category: 'Electronic', subCate: 'TVs'},
  {id: 12, category: 'Electronic', subCate: 'Phones'},
  {id: 13, category: 'Electronic', subCate: 'Laptops'},
  {id: 21, category: 'Fashion', subCate: 'Clothing'},
  {id: 22, category: 'Fashion', subCate: 'Shoes'},
  {id: 23, category: 'Fashion', subCate: 'Bags'}
]

export class SUBBRAND{
  title: string;
  id: number;
  parentId: number;
}

export const subBrand: SUBBRAND[] = [
  {title: 'RAM', id: 1, parentId: null},
  {title: '2Gb', id: 111, parentId: 1},
  {title: '4Gb', id: 112, parentId: 1},
  {title: '8Gb', id: 113, parentId: 1},
  {title: 'Size', id: 2, parentId: null},
  {title: 'L', id: 211, parentId: 2},
  {title: 'XXL', id: 212, parentId: 2},
  {title: 'XXXL', id: 213, parentId: 2},
]