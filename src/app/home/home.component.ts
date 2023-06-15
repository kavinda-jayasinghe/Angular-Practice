import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: number = 5;

  isDisable: boolean = false;

  onClick() {
    console.log('btn clicked');
  }

  // two way
  title:string='';
}
