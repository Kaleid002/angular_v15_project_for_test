import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuOpen = false;

  handleMenuSwitch() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
