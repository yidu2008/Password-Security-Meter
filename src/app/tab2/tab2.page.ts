import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  public password = new FormControl("");
  public meterStrengthColor = "darkgreen";
  public meterStrengthWidth = 0;

  constructor(public toastController: ToastController) {}

  public async onRunProgram() {
    const alertMessages: string[] = [];
    console.log(this.password.value);
    this.meterStrengthWidth = 0;
    console.log(this.password.value.length);

    if (this.password.value.length < 7 && this.password.value.length > 0) {
      console.log("Your password is very short!");
      alertMessages.push("Your password is very short!");
      this.meterStrengthWidth = this.meterStrengthWidth + 12.5;
    }

    if (this.password.value.length > 6 && this.password.value.length < 12) {
      console.log("Your password is short!");
      alertMessages.push("Your password is short!");
      this.meterStrengthWidth = this.meterStrengthWidth + 25;
    }
    if (this.password.value.length > 11) {
      console.log("Your password is long enough. Now, will you remember it?");
      alertMessages.push(
        "Your password is long enough. Now, will you remember it?"
      );
      this.meterStrengthWidth = this.meterStrengthWidth + 50;
    }
    if (this.password.value.length < 1) {
      console.log("You didn't enter a password!");
      alertMessages.push("You didn't enter a password!");
      this.meterStrengthWidth = this.meterStrengthWidth + 0;
    }
    if (/^[a-zA-Z]+$/gi.test(this.password.value)) {
      console.log("Your password contains only letters. This isn't good!");
      alertMessages.push(
        "Your password contains only letters. This isn't good!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth + 25;
    } else if (/^[a-z]+$/g.test(this.password.value)) {
      console.log(
        "Your password contains only lowercase letters. Try adding uppercase letters!"
      );
      alertMessages.push(
        "Your password contains only lowercase letters. Try adding uppercase letters!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth + 25;
    } else if (/^[A-Z]+$/g.test(this.password.value)) {
      console.log(
        "Your password contains only uppercase letters. Try adding lowercase letters!"
      );
      alertMessages.push(
        "Your password contains only uppercase letters. Try adding lowercase letters!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth + 25;
    } else if (/^[0-9]+$/g.test(this.password.value)) {
      console.log("Your password contains only numbers. This isn't good!");
      alertMessages.push(
        "Your password contains only numbers. This isn't good!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth + 25;
    } else if (/password/gi.test(this.password.value)) {
      console.log(
        "Your password contains the word password. This is a very bad decision!"
      );
      alertMessages.push(
        "Your password contains the word password. This is a very bad decision!"
      );
    } else if (/^123456+$/gi.test(this.password.value)) {
      console.log(
        "Your password is 123456, the most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is 123456, the most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^123456789+$/gi.test(this.password.value)) {
      console.log(
        "Your password is 123456789, the 2nd most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is 123456789, the 2nd most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^qwerty+$/gi.test(this.password.value)) {
      console.log(
        "Your password is qwerty, the 3rd most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is qwerty, the 3rd most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^password+$/gi.test(this.password.value)) {
      console.log(
        "Your password is password, the 4th most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is password, the 4th most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^1234567+$/gi.test(this.password.value)) {
      console.log(
        "Your password is 1234567, the 5th most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is 1234567, the 5th most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^12345678+$/gi.test(this.password.value)) {
      console.log(
        "Your password is 12345678, the 6th most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is 12345678, the 6th most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^12345+$/gi.test(this.password.value)) {
      console.log(
        "Your password is 12345, the 7th most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is 12345, the 7th most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^iloveyou+$/gi.test(this.password.value)) {
      console.log(
        "Your password is iloveyou, the 8th most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is iloveyou, the 8th most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^111111+$/gi.test(this.password.value)) {
      console.log(
        "Your password is 111111, the 9th most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is 111111, the 9th most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (/^123123+$/gi.test(this.password.value)) {
      console.log(
        "Your password is 123123, the 10th most common password. This is a very unsecure password!"
      );
      alertMessages.push(
        "Your password is 123123, the 10th most common password. This is a very unsecure password!"
      );
      this.meterStrengthWidth = this.meterStrengthWidth - 100;
    } else if (this.password.value.length === 0) {
      console.log("You didn't enter a password!");
      this.meterStrengthWidth = this.meterStrengthWidth + 0;
    } else {
      console.log(
        "Your password's content is good. Does it have dictionary words or your personal information? If so, please change it."
      );
      alertMessages.push(
        "Your password's content is good. Does it have dictionary words or your personal information? If so, please change it."
      );
      this.meterStrengthWidth = this.meterStrengthWidth + 50;
    }

    if (alertMessages.length > 0) {
      const toast = await this.toastController.create({
        message: alertMessages.join("\n"),
        duration: 5000
      });
      toast.present();
    }
    console.log(this.meterStrengthWidth);
    if (this.meterStrengthWidth > 99) {
      this.meterStrengthColor = "darkgreen";
    }
    if (this.meterStrengthWidth < 100 && this.meterStrengthWidth > 74) {
      this.meterStrengthColor = "limegreen";
    }
    if (this.meterStrengthWidth < 75 && this.meterStrengthWidth > 49) {
      this.meterStrengthColor = "yellow";
    }
    if (this.meterStrengthWidth < 50 && this.meterStrengthWidth > 24) {
      this.meterStrengthColor = "orange";
    }
    if (this.meterStrengthWidth < 25 && this.meterStrengthWidth > 9) {
      this.meterStrengthColor = "red";
    }
    if (this.meterStrengthWidth < 10) {
      this.meterStrengthColor = "darkred";
    }
    console.log(this.meterStrengthColor);
  }
}
