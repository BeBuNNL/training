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
  hot: number;
  cop: number
}

export const PRODUCTS: product[]=[
  {name: 'sp01', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 1.99, desc: 'abc xyz 123 456', discount: 0, vote: 2, hot: 0, cop: 300},
  {name: 'sp02', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 2.99, desc: 'abc xyz 123 456', discount: 51, vote: 5, hot: 1, cop: 812},
  {name: 'sp03', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 6.99, desc: 'abc xyz 123 456', discount: 63, vote: 4, hot: 1, cop: 340},
  {name: 'sp04', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 4.99, desc: 'abc xyz 123 456', discount: 41, vote: 3, hot: 0, cop: 330},
  {name: 'sp05', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 3.99, desc: 'abc xyz 123 456', discount: 6, vote: 2, hot: 0, cop: 500},
  {name: 'sp06', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 7.99, desc: 'abc xyz 123 456', discount: 5, vote: 1, hot: 1, cop: 800},
  {name: 'sp07', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 8.99, desc: 'abc xyz 123 456', discount: 12, vote: 0, hot: 0, cop: 900},
  {name: 'sp08', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 12.99, desc: 'abc xyz 123 456', discount: 6, vote: 5, hot: 0, cop: 100},
  {name: 'sp09', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 32.99, desc: 'abc xyz 123 456', discount: 11, vote: 1, hot: 0, cop: 500},
  {name: 'sp10', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 121.99, desc: 'abc xyz 123 456', discount: 25, vote: 2, hot: 1, cop: 400},
  {name: 'sp11', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 15.99, desc: 'abc xyz 123 456', discount: 50, vote: 3, hot: 0, cop: 150},
  {name: 'sp12', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 16.99, desc: 'abc xyz 123 456', discount: 12, vote: 4, hot: 0, cop: 760},
  {name: 'sp13', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 165.99, desc: 'abc xyz 123 456', discount: 51, vote: 5, hot: 0, cop: 980},
  {name: 'sp14', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 16.99, desc: 'abc xyz 123 456', discount: 10, vote: 2, hot: 1, cop: 190},
  {name: 'sp15', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 123.99, desc: 'abc xyz 123 456', discount: 75, vote: 4, hot: 0, cop: 180},
  {name: 'sp16', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 16.99, desc: 'abc xyz 123 456', discount: 45, vote: 2, hot: 0, cop: 190},
  {name: 'sp17', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 123.99, desc: 'abc xyz 123 456', discount: 60, vote: 1, hot: 0, cop: 130},
  {name: 'sp18', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 143.99, desc: 'abc xyz 123 456', discount: 70, vote: 0, hot: 1, cop: 650},
  {name: 'sp19', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 16.99, desc: 'abc xyz 123 456', discount: 90, vote: 0, hot: 0, cop: 370},
  {name: 'sp20', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 17.99, desc: 'abc xyz 123 456', discount: 80, vote: 2, hot: 0, cop: 870},
  {name: 'sp21', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 124.99, desc: 'abc xyz 123 456', discount: 10, vote: 3, hot: 0, cop: 190},
  {name: 'sp22', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 174.99, desc: 'abc xyz 123 456', discount: 30, vote: 3, hot: 1, cop: 290},
  {name: 'sp23', img: 'https://www.w3schools.com/bootstrap/la.jpg', price: 188.99, desc: 'abc xyz 123 456', discount: 25, vote: 5, hot: 0, cop: 290},
]
