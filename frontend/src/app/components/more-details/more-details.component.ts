import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../../service/userService/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-more-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  recipe: any;
    urlImg: string = 'http://localhost:1234/'

  constructor(private router: Router, public us : UserServiceService) {
    const nav = this.router.getCurrentNavigation();
    this.recipe = nav?.extras.state?.['recipe'];
  }

  addFavorite(idR: string) {
   try {
    this.us.addFavorite(idR, this.us.userConnectedObj?._id || '000').subscribe(
      (res: boolean) => {
        if (res) {
          console.log('Recipe added to favorites successfully');
          this.us.userConnectedObj?.favorites.push(idR);
          alert('המתכון התווסף למועדפים');
        } else {
          console.log('Failed to add recipe to favorites');
          alert('המתכון כבר במועדפים');
        }
      }
    )
   }
    catch (error) {
     console.log('Error adding recipe to favorites:', error);
     alert('שגיאה בהוספת המתכון למועדפים');
   }
  }
}
