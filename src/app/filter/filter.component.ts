import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() all: number = 4;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  @Input() name:string;

  selctedRadioBtn:string='all';
}
