import { Component, OnInit } from '@angular/core';
import { IRecipeModel } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: IRecipeModel[] = [
    {
      name: 'Some Name',
      description: 'Some description',
      imagePath: 'https://www.seriouseats.com/thmb/itbKAu2sIT2oJSfj-rlOBFCPtwU=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__12__20141216-cooked-steak-vicky-wasik-12028129-98b64a0c2936461b99133ae75914f22b.jpg'
    },
    {
      name: 'Some Name',
      description: 'Some description',
      imagePath: 'https://www.seriouseats.com/thmb/itbKAu2sIT2oJSfj-rlOBFCPtwU=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__12__20141216-cooked-steak-vicky-wasik-12028129-98b64a0c2936461b99133ae75914f22b.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
