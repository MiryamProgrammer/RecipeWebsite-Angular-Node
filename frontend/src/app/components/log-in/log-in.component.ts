import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../../service/userService/user-service.service';

@Component({
  selector: 'app-log-in',
  imports: [RouterLink,FormsModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  userName : string = "";
  userPassword: string = "";
  constructor(private us: UserServiceService, private router: Router) {};
  logIn(){
    debugger
      this.us.getByPassName(this.userPassword, this.userName).subscribe(
        (res: any) => {
          
            this.us.userConnected = this.userName;
            console.log('User logged in successfully:', res);
            this.us.userConnectedObj = res;
            this.router.navigate(['/home']);
            
        },
        (error) => {
          console.log('Error logging in:', error);
          alert('שם משתמש או סיסמה שגויים');
        }
      )
     }
    }
