import { Component, OnInit } from '@angular/core';
import { IMenuElement } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu: IMenuElement[] = [];
  constructor() { }

  ngOnInit(): void {
    this.prepareMenu();
  }

  private prepareMenu() {

    this.menu = [
      {
        path: '/expectations',
        title: `What to expect`,
      },
      {
        path: '/programs',
        title: `Fitness programs`,
      },
      {
        path: '/blog',
        title: `Blog`,
      },
      {
        path: '/log-in',
        title: `Log in`,
      },
    ];
  }
}
