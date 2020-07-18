import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public items: MenuItem[];

  ngOnInit(): void {
    this.items = [{
      label: 'Home', icon: 'pi pi-home', routerLink: ['/home']
    },
    {
      label: 'Content',
      items: [
        { label: 'Psychiatric Support', icon: 'pi pi-chevron-right', routerLink: ['/content'] },
        { label: 'Mental Health Counselling', icon: 'pi pi-chevron-right', routerLink: ['/content'] }
      ]
    }
  ];
  }

}
