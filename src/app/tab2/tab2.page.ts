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

  constructor(public toastController: ToastController) {}

  public async onRunProgram() {
    const alertMessages: string[] = [];
    console.log(this.password.value);

    console.log(this.password.value.length);

    if (this.password.value.length < 7) {
      console.log("Your password is very short!");
      alertMessages.push("Your password is very short!");
    }
    if (this.password.value.length > 6 && this.password.value.length < 12) {
      console.log("Your password is short!");
      alertMessages.push("Your password is  short!");
    }
    if (this.password.value.length > 11) {
      console.log("Your password is long enough. Now, will you remember it?");
      alertMessages.push(
        "Your password is long enough. Now, will you remember it?"
      );
    }
    if (this.password.value.length < 1) {
      console.log("You didn't enter a password!");
      alertMessages.push("You didn't enter a password!");
    }
    if (/^[a-zA-Z]+$/gi.test(this.password.value)) {
      console.log("Your password contains only letters. This isn't good!");
      alertMessages.push(
        "Your password contains only letters. This isn't good!"
      );
    }
    if (alertMessages.length > 0) {
      const toast = await this.toastController.create({
        message: alertMessages.join("\n"),
        duration: 5000
      });
      toast.present();
    }
  }
}
