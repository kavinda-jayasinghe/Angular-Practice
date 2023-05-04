import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = [
    { name: 'kavinda', age: 25, available: 'Available' },
    { name: 'amara', age: 23, available: 'Not Available' },
    { name: 'kamal', age: 24, available: 'Available' },
    { name: 'Nimal', age: 27, available: 'Available' },
    { name: 'supun', age: 44, available: 'Not Available' },
  ];


}
