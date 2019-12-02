import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    constructor(private shoppingListService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
             'This is a test',
              'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
              [
                new Ingredient('Burger',2),
                new Ingredient('French Fries', 4)
            ]),
        new Recipe('A Test Recipe2',
                 'This is a test2',
                  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                  [
                      new Ingredient('Buns', 5),
                      new Ingredient('Noodles',20)
                  ])
      ];

      getRecipes(){
          return this.recipes;
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipe(recipeId: number){
        return this.recipes[recipeId];
      }
}