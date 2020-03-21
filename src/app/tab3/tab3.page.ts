import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  slideOpts = {
    initialSlide: 3,
    speed: 400
  };

  constructor(private navCtrl: NavController) {}
  public onMeterFromTipsClick() {
    this.navCtrl.navigateForward(`/tabs/tab2`);
  }
}
