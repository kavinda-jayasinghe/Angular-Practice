import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { CoursesComponent } from './courses/courses.component';
@NgModule({
  declarations: [AppComponent, FilterComponent, CoursesComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,
    ReactiveFormsModule, HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
