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
  price: number;
  desc: string;
  discount: number;
  vote: number;
  hot: number;
  cop: number
}

export const PRODUCTS: product[]=[
  {name: 'sp01', price: 1.99, desc: 'abc xyz 123 456', discount: 0, vote: 2, hot: 0, cop: 300},
  {name: 'sp02', price: 2.99, desc: 'abc xyz 123 456', discount: 51, vote: 5, hot: 1, cop: 812},
  {name: 'sp03', price: 4.99, desc: 'abc xyz 123 456', discount: 41, vote: 3, hot: 0, cop: 330},
  {name: 'sp04', price: 6.99, desc: 'abc xyz 123 456', discount: 63, vote: 4, hot: 1, cop: 340},
  {name: 'sp05', price: 3.99, desc: 'abc xyz 123 456', discount: 6, vote: 2, hot: 0, cop: 500},
  {name: 'sp06', price: 7.99, desc: 'abc xyz 123 456', discount: 5, vote: 1, hot: 1, cop: 800},
  {name: 'sp07', price: 8.99, desc: 'abc xyz 123 456', discount: 12, vote: 0, hot: 0, cop: 900},
  {name: 'sp08', price: 12.99, desc: 'abc xyz 123 456', discount: 6, vote: 5, hot: 0, cop: 100},
  {name: 'sp09', price: 32.99, desc: 'abc xyz 123 456', discount: 11, vote: 1, hot: 0, cop: 500},
  {name: 'sp10', price: 121.99, desc: 'abc xyz 123 456', discount: 25, vote: 2, hot: 1, cop: 400},
  {name: 'sp11', price: 15.99, desc: 'abc xyz 123 456', discount: 50, vote: 3, hot: 0, cop: 150},
  {name: 'sp12', price: 16.99, desc: 'abc xyz 123 456', discount: 12, vote: 4, hot: 0, cop: 760},
  {name: 'sp13', price: 165.99, desc: 'abc xyz 123 456', discount: 51, vote: 5, hot: 0, cop: 980},
  {name: 'sp14', price: 16.99, desc: 'abc xyz 123 456', discount: 10, vote: 2, hot: 1, cop: 190},
  {name: 'sp15', price: 123.99, desc: 'abc xyz 123 456', discount: 75, vote: 4, hot: 0, cop: 180},
  {name: 'sp16', price: 16.99, desc: 'abc xyz 123 456', discount: 45, vote: 2, hot: 0, cop: 190},
  {name: 'sp17', price: 123.99, desc: 'abc xyz 123 456', discount: 60, vote: 1, hot: 0, cop: 130},
  {name: 'sp18', price: 143.99, desc: 'abc xyz 123 456', discount: 70, vote: 0, hot: 1, cop: 650},
  {name: 'sp19', price: 16.99, desc: 'abc xyz 123 456', discount: 90, vote: 0, hot: 0, cop: 370},
  {name: 'sp20', price: 17.99, desc: 'abc xyz 123 456', discount: 80, vote: 2, hot: 0, cop: 870},
  {name: 'sp21', price: 124.99, desc: 'abc xyz 123 456', discount: 10, vote: 3, hot: 0, cop: 190},
  {name: 'sp22', price: 174.99, desc: 'abc xyz 123 456', discount: 30, vote: 3, hot: 1, cop: 290},
  {name: 'sp23', price: 188.99, desc: 'abc xyz 123 456', discount: 25, vote: 5, hot: 0, cop: 290},
]
