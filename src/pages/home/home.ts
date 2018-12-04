import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/user.service';

// import Auth0Cordova from '@auth0/cordova';

// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  destiny: string = '';
  origin: string = '';
  time: string = '';
  userName: string;
  constructor(public navCtrl: NavController, public userService: UserService) {
    this.userName = this.userService.userData.name
     // Redirect back to app after authenticating
    //  (window as any).handleOpenURL = (url: string) => {
    //   Auth0Cordova.onRedirectUri(url);
    // }

  }

  saveChanges(){
    this.origin.toUpperCase();
    this.destiny.toUpperCase();
    this.time.toUpperCase();

    
    console.log(this.origin.toUpperCase(), this.destiny.toUpperCase(), this.time.toUpperCase());
    //TODO UPLOAD THE DATA OR SAVE THE DATA INTO THE FIREBASE
  }

}
