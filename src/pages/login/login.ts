import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string;
  
  constructor(
		public auth: AuthService, 
		public navCtrl: NavController, 
		public navParams: NavParams, 
    fb: FormBuilder,
    public user:UserService) {

      this.loginForm = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  
  loginWithGoogle() {
    this.auth.signInWithGoogle()
      .then(
        (result:any) => {
          this.user.userData = result.additionalUserInfo.profile;
          console.log('result: ', this.user.userData);
          this.navCtrl.setRoot(HomePage)
          this.auth.isLogin = true;
        },
        error => console.log(error.message)
      );
  }

}
