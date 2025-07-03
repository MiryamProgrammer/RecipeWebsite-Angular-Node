  import { Component } from '@angular/core';
  import { UserServiceService } from '../../../service/userService/user-service.service';
  import { Recipe } from '../../../interfac/recipe';
  import { RecipeServiceService } from '../../../service/recipeService/recipe-service.service';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

  @Component({
    selector: 'app-home-page',
    imports: [CommonModule, RouterLink],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
  })
  export class HomePageComponent {
  arrRecipes: Array<Recipe> = Array<Recipe>();
  urlImg: string = 'http://localhost:1234/'

  trackById(index: number, recipe: any) {
    return recipe._id;
  }
  constructor(private rs: RecipeServiceService, public us: UserServiceService) {}; 

  ngOnInit() {
    this.rs.getAllRecipes().subscribe(
      (data: Array<Recipe>) => this.arrRecipes = data,
      error => {
        console.log('Error fetching recipes:', error);
      }
    );
  }
  }

