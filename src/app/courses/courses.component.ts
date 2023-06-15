import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  courses = [
    {
      id: 1,
      type:'premium',
      name: 'Dotty',
    },
    {
      id: 2,
      type:'premium',
      name: 'Murielle',
    },
    {
      id: 3,
      type:'premium',
      name: 'Giffard',
    },
    {
      id: 4,
      type:'premium',
      name: 'Marin',
    },
    {
      id: 5,
      type:'premium',
      name: 'Katrina',
    },
    {
      id: 6,
      type:'premium',
      name: 'Laure',
    },
    {
      id: 7,
      type:'free',
      name: 'Jasper',
    },
    {
      id: 8,
      type:'free',
      name: 'Dietrich',
    },
    {
      id: 9,
      type:'free',
      name: 'Teddie',
    },
    {
      id: 10,
      type:'free',
      name: 'Bridget',
    },
  ];

  getTotalCourses(){
    return this.courses.length;
    
  }
  getFreeCourses(){
    return this.courses.filter((courses) => courses.type === 'free').length;
  }
  getPremiumCourses(){
       return this.courses.filter((courses) => courses.type === 'premium').length;
  }
  name:string='kavinda jay'
}



