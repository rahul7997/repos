import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();

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
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}