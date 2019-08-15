import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcateComponent } from './prodcate.component';

describe('ProdcateComponent', () => {
  let component: ProdcateComponent;
  let fixture: ComponentFixture<ProdcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
