import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

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
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipe(recipeId: number){
        return this.recipes[recipeId];
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}