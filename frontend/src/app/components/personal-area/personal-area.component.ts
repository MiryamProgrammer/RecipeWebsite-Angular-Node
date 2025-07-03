import { Component } from '@angular/core';
import { UserServiceService } from '../../../service/userService/user-service.service';
import { RouterLink } from '@angular/router';
import { RecipeServiceService } from '../../../service/recipeService/recipe-service.service';
import { Recipe } from '../../../interfac/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-area',
  imports: [RouterLink, CommonModule],
  templateUrl: './personal-area.component.html',
  styleUrl: './personal-area.component.css'
})
export class PersonalAreaComponent {
  urlImg: string = 'http://localhost:1234/'
  arrRecipes: Array<Recipe> = Array<Recipe>();

  constructor(private us : UserServiceService, private rs: RecipeServiceService) { }
   trackById(index: number, recipe: any) {
    return recipe._id;
  }
  
  ngOnInit() {
    this.rs.getAllRecipes().subscribe(
      (data: Array<Recipe>) =>{ this.arrRecipes = data.filter( recipe => this.us.userConnectedObj?.favorites.includes(recipe._id));
      },
    // this.rs.getFavorites(this.us.userConnectedObj?._id || '000').subscribe(
    //   (data: Array<Recipe>) => {
    //     this.arrRecipes = data;
    //   },
      error => {
        console.log('Error fetching recipes:', error);
      }
    );
  }

  logOut() {
    this.us.userConnected = '';
    this.us.userConnectedObj = null;
    console.log('User logged out successfully');
    window.location.href = '/home';
  }
}
