import { EventEmitter } from '@angular/common/src/facade/async';
import { Recipe } from '../recipe';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesList: Recipe[];
  recipe = new Recipe('Dummy', 'Dummy', 'https://thumb1.shutterstock.com/display_pic_with_logo/3612503/408291268/stock-vector-tailor-dummy-fashion-icon-on-white-background-atelier-object-simple-and-minimalistic-couture-408291268.jpg');
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
    console.log("Inside onSeleted");
    this.recipeSelected.emit(recipe);
  }

}
