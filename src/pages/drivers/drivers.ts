import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfileDriverPage } from '../profile-driver/profile-driver';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operators';


/**
 * Generated class for the DriversPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html',
})
export class DriversPage {

  origin  : string = '';
  destiny : string = '';

  dataComplete: boolean = false;


  profileModal: any;
  // driversRef: AngularFireList<any>;
  drivers: Observable<any[]>;




  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public database: AngularFireDatabase) {

      // this.driversRef = this.database.list('choferes');
    }
    
    ionViewDidLoad() {
      this.drivers = this.database.list('choferes').valueChanges();
    console.log('ionViewDidLoad DriversPage');
  }


  showDriver (params:any) {
    this.profileModal = this.modalCtrl.create(ProfileDriverPage, { driverName: 8675309, img: "hkjhjkh" });
    this.profileModal.present();
  }

  searchTravel(){
    //Transforming the data to upper case 
    this.origin.toUpperCase();
    this.destiny.toUpperCase();
    
    //TODO GET THE VALUE OF THE VARIABLE ORIGIN AND DESTINY AND SEARCH INTO THE FIREBASE 

  }

}
