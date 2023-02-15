import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
