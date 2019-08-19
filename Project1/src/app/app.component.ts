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
  {name: 'sp01', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 11, price: 1.99, desc: 'abc xyz 123 456', discount: 0, vote: 2, hot: false, cop: 300, brand: 'abc', subBrandId: 112},
  {name: 'sp03', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 12, price: 4.99, desc: 'abc xyz 123 456', discount: 41, vote: 3, hot: false, cop: 330, brand: 'def', subBrandId: 111},
  {name: 'sp02', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 23, price: 6.99, desc: 'abc xyz 123 456', discount: 63, vote: 4, hot: true, cop: 340, brand: 'ghi', subBrandId: 113},
  {name: 'sp04', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 21, price: 2.99, desc: 'abc xyz 123 456', discount: 51, vote: 5, hot: true, cop: 812, brand: 'abc', subBrandId: null},
  {name: 'sp05', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 22, price: 3.99, desc: 'abc xyz 123 456', discount: 6, vote: 2, hot: false, cop: 500, brand: 'abc', subBrandId: 212},
  {name: 'sp06', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 12, price: 7.99, desc: 'abc xyz 123 456', discount: 5, vote: 1, hot: true, cop: 800, brand: 'def', subBrandId: 213},
  {name: 'sp07', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 13, price: 8.99, desc: 'abc xyz 123 456', discount: 12, vote: 0, hot: false, cop: 900, brand: 'abc', subBrandId: 211},
  {name: 'sp08', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 21, price: 12.99, desc: 'abc xyz 123 456', discount: 6, vote: 5, hot: false, cop: 100, brand: 'def', subBrandId: 111},
  {name: 'sp09', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 13, price: 32.99, desc: 'abc xyz 123 456', discount: 11, vote: 1, hot: false, cop: 500, brand: 'ghi', subBrandId: 113},
  {name: 'sp10', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 12, price: 121.99, desc: 'abc xyz 123 456', discount: 25, vote: 2, hot: true, cop: 400, brand: 'def', subBrandId: null},
  {name: 'sp11', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 11, price: 15.99, desc: 'abc xyz 123 456', discount: 50, vote: 3, hot: false, cop: 150, brand: 'ghi', subBrandId: 112},
  {name: 'sp12', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 21, price: 16.99, desc: 'abc xyz 123 456', discount: 12, vote: 4, hot: false, cop: 760, brand: 'def', subBrandId: 213},
  {name: 'sp13', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 12, price: 165.99, desc: 'abc xyz 123 456', discount: 51, vote: 5, hot: false, cop: 980, brand: 'abc', subBrandId: 111},
  {name: 'sp14', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 11, price: 16.99, desc: 'abc xyz 123 456', discount: 10, vote: 2, hot: true, cop: 190, brand: 'abc', subBrandId: 112},
  {name: 'sp15', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 11, price: 123.99, desc: 'abc xyz 123 456', discount: 75, vote: 4, hot: false, cop: 180, brand: 'abc', subBrandId: 112},
  {name: 'sp16', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 23, price: 16.99, desc: 'abc xyz 123 456', discount: 45, vote: 2, hot: false, cop: 190, brand: 'ghi', subBrandId: null},
  {name: 'sp17', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 13, price: 123.99, desc: 'abc xyz 123 456', discount: 60, vote: 1, hot: true, cop: 130, brand: 'ghi', subBrandId: 113},
  {name: 'sp18', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 12, price: 143.99, desc: 'abc xyz 123 456', discount: 70, vote: 0, hot: true, cop: 650, brand: 'ghi', subBrandId: 213},
  {name: 'sp19', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 21, price: 16.99, desc: 'abc xyz 123 456', discount: 90, vote: 0, hot: false, cop: 370, brand: 'def', subBrandId: 212},
  {name: 'sp20', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 11, price: 17.99, desc: 'abc xyz 123 456', discount: 80, vote: 2, hot: false, cop: 870, brand: 'def', subBrandId: null},
  {name: 'sp21', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 12, price: 124.99, desc: 'abc xyz 123 456', discount: 10, vote: 3, hot: false, cop: 190, brand: 'def', subBrandId: 213},
  {name: 'sp22', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 21, price: 174.99, desc: 'abc xyz 123 456', discount: 30, vote: 3, hot: true, cop: 290, brand: 'abc', subBrandId: 211},
  {name: 'sp23', img: 'https://www.w3schools.com/bootstrap/la.jpg', cateID: 13, price: 188.99, desc: 'abc xyz 123 456', discount: 25, vote: 5, hot: false, cop: 290, brand: 'abc', subBrandId: 112},
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