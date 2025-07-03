import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../../interfac/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

url: string = "http://localhost:1234/recipe/";
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Array<Recipe>> {
    return this.http.get<Array<Recipe>>(`${this.url}getall`)
  }
  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.url}getbyid/${id}`);
  }
  addRecipe(newRecipe: Recipe): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}add`, newRecipe);
  }
  deleteRecipe(id: string, recId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}delete/${id}/${recId}`);
  }
  updateRecipe(id: string, updatedRecipe: Recipe): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}update/${id}`, updatedRecipe);
  }

}
