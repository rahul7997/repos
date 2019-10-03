import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples',10),
        new Ingredient('Tomato',10),
        new Ingredient('Orange', 5),
        new Ingredient('Grapes',15)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      onIngredientAdded(ingredientData: Ingredient){
        this.ingredients.push(ingredientData);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //   // this.ingredients.push(ingredient);
        //   this.onIngredientAdded(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}