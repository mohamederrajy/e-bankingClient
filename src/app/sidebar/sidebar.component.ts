import { Component, OnInit } from '@angular/core'


export interface RouteInfo {
  path: string;
  id: String;
  title: string;
  icon: string;
  class: string;
  subMenus?: any

}

export const ROUTES: RouteInfo[] = [
  { path: '/Client/Accueil', id: 'Accueil', title: 'Accueil', icon: 'nc-bank', class: '', subMenus:[
    { path: '/Client/Accueil', id: 'Accueil', title: 'Accueil', icon: 'nc-bank', class: 'ml-3'},
    { path: '/Client/Accueil', id: 'Accueil', title: 'Accueil', icon: 'nc-bank', class: 'ml-3'}
  ] },
  { path: '/Client/Ma_Relation_Banque', id: 'Ma', title: 'Ma Relation Banque', icon: 'nc-diamond', class: '' },
  { path: '/Client/', id: 'Mes', title: 'Mes Transactions', icon: 'nc-pin-3', class: '' },
  { path: '/Client/mes-demandes-en-ling', id: 'Mes', title: 'Mes Demandes Ligne', icon: 'nc-bell-55', class: '' },
  { path: '/user', id: 'Mex', title: 'Me Deconnnecter', icon: 'nc-single-02', class: '' },
  { path: '/table', id: 'Table', title: 'Table List', icon: 'nc-tile-56', class: '' },
  { path: '/typography', id: 'Typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
  { path: '/upgrade', id: 'Upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro' },
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  collapse() {
    const navbar = document.getElementById('components');
    navbar.classList.toggle("show");
  }
}
