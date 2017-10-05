import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuItems = [
    { routerLink: '/', icon: 'home', text: 'Home' },
    { routerLink: 'voterLookup', icon: 'search', text: 'Voter Lookup' },
    { routerLink: 'scripts', icon: 'assignment', text: 'Scripts' }
  ];

}
