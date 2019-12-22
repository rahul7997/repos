import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService){}
    
    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-recipe-guide-11abb.firebaseio.com/recipes.json', recipes)
            .subscribe(res => {
                console.log(res);
            });
    }

    fetchRecipes(){
        this.http.get<Recipe[]>('https://ng-recipe-guide-11abb.firebaseio.com/recipes.json').subscribe(res => {
            this.recipeService.setRecipes(res);
        });
    }
}