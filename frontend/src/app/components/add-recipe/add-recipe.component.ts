import { Component } from '@angular/core';
import { Recipe } from '../../../interfac/recipe';
import { RecipeServiceService } from '../../../service/recipeService/recipe-service.service';
import { UserServiceService } from '../../../service/userService/user-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  constructor(private rs: RecipeServiceService, private us: UserServiceService) {}

  id: number = 500;
  urlImg: string = 'http://localhost:1234/'

  newRecipe : Recipe = {
    _id: '',
    name: '',
    description: '',
    pic: '',
    level: '',
    duration: '',
    type: '',
    idUser: '' ,
    ingredients: [],   
  };  

  name: string = '';
  amount: number = 0;

  addIngredient() {
    if(this.name && this.amount){
      this.newRecipe.ingredients.push({name: this.name, amount: this.amount});
      this.name = '';
      this.amount = 0;
      console.log('Ingredient added:', { name: this.name, amount: this.amount });
    }
    else {
      alert('מלא את פרטי המרכיב');
      console.log('Failed to add ingredient: Name or amount is missing.');
    }
  }

  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.newRecipe.pic = file;
  //   }
  // }
  addRecipe(){
    this.newRecipe._id = this.id.toString();
    this.id++;
    this.newRecipe.idUser = this.us.userConnectedObj?._id || '';
    if (!this.newRecipe.name || !this.newRecipe._id) {
      alert('Please fill in all required fields.');
      console.log('Failed to add recipe: Name or ID is missing.');
      return;
    }
    
    try {
    this.rs.addRecipe(this.newRecipe).subscribe(
      (res : boolean) => {
        if (res) {
          alert('Recipe added successfully!');
          this.resetForm();
          console.log('Recipe added successfully:', this.newRecipe);
        }
        else {
          alert('Failed to add recipe. Please try again.');
          console.error('Failed to add recipe:', this.newRecipe);
        }
      }
    )}
    catch (error) {
        console.error('Error occurred while adding recipe:', error);
        alert('An error occurred while adding the recipe. Please try again.');
      }
    }

   
  resetForm() {
    this.newRecipe = {
      _id: '',
      name: '',
      description: '',
      pic: '',
      level: '',
      duration: '',
      type: '',
      idUser: '',
      ingredients: [],
  };
  
  }
}
