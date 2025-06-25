import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Output() menuSwitch = new EventEmitter<void>();

  onClick() {
    this.menuSwitch.emit();
  }
}
