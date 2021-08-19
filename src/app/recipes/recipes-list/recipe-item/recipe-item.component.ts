import { Component, OnInit, Input } from '@angular/core';
import { IRecipeModel } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: IRecipeModel = {} as IRecipeModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe);
  }

}
