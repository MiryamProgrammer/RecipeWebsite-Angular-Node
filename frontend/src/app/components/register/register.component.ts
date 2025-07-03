import { Component } from '@angular/core';
import { User } from '../../../interfac/user';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserServiceService } from '../../../service/userService/user-service.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private us: UserServiceService) { }
  id: number = 200;
  
  newUser: User = {
    _id: '',
    name: '',
    password: '',
    address: '',
    phone: '',
    isManager: false,
    favorites: []
  };


  addUser(){
    if(this.newUser.name === "מנהל" && this.newUser.password === "1111"){
      this.newUser.isManager = true;
    }
    this.newUser._id = this.id.toString();
    this.id++;
    try {
      debugger
    this.us.addUser(this.newUser).subscribe(
      (res : boolean) => {
        if (res) {
          console.log('User added successfully');
          alert('משתמש נוסף בהצלחה');
          this.us.userConnected = this.newUser.name;
          this.us.userConnectedObj = this.newUser;
        }
        else {
          console.log('Error adding user');
          alert('שגיאה, פרטים שגויים');
        }
      })
    }
    catch (error) {
        console.error('Error occurred while adding user:', error);
        alert('שגיאה, פרטים שגויים');}
    }
}
