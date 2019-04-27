import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  navbarCollapsed = true;

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
