import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { firstname: string, username: string, lastname: string, password:string, confirmpassword:string } = {
    firstname: 'virat',
    lastname: 'kohali',
    username: 'bet@example.com',
    password:'test',
    confirmpassword:'test'
  };

  slides = [{active:true},{active:false},{active:false},{active:false},{active:false}];
  currentSlide:number = 0;
  buttonText = 'Next';
  changeTab(index){
  
   if(index == this.slides.length - 1)
   {
     alert("form will be submited");
     return false;
   }

    this.slides.forEach(function(val,index){
      val.active = false;
    })
    this.currentSlide = index+1;
    this.slides[this.currentSlide].active = true;

    if (this.slides.length - 1 <= this.currentSlide )
    {
      this.buttonText = 'Submit';
    } 

  } 
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
