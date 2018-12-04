import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast } from 'ionic-angular';

/**
 * Generated class for the ProfileDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-driver',
  templateUrl: 'profile-driver.html',
})
export class ProfileDriverPage {

  message: string = '';
  driver: string;
  driverImg: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.driver = navParams.get("driverName");
    this.driverImg = navParams.get("img");
    console.log('this.driver: ', this.driver);
    console.log('this.driverImg : ', this.driverImg );
    
  }

  closeModal() {
    //TODO GET THE VALUE OF THE VARIABLE MESSAGE AND SEND WITH A PUSH NOTIFICATIONS
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDriverPage');
  }

  sendNotification(){
    // this.toast.crea
    setTimeout( () => {
      this.closeModal();
    }, 900);
  }

}
