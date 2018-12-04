import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user.service';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  driversRef: AngularFireList<any>;
  drivers: Observable<any[]>;


  origin  : string = '';
  destiny : string = '';

  isDriver: boolean = false;
  userImg: string;
  userName: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userService: UserService,
    public database: AngularFireDatabase,
    private toastCtrl: ToastController) {

    this.isDriver = this.userService.driver;
    this.userImg = this.userService.userData.picture
    this.userName =  this.userService.userData.name

    this.driversRef = this.database.list('choferes');
 
  }

  ionViewDidLoad() {
    
  }
  notifyAndUpdateIsToggled(){
    this.userService.driver = !this.userService.driver
    this.isDriver = this.userService.driver;
    this.isDriver ? this.userService.typeUser = 'Chofer' : this.userService.typeUser = 'Pasajero'
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Datos actualizados',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  update(){
    
    this.driversRef.push({
      chofer: this.userName,
      img: this.userImg,
      origin: this.origin.toUpperCase(),
      destiny: this.destiny.toUpperCase()
    });

    this.presentToast()

  }

  

}
