import { Component, OnInit } from '@angular/core'


export interface RouteInfo {
  path: string;
  id: String;
  title: string;
  icon: string;
  class: string;
  hasSubMen?:Boolean;
  subMenus?: any

}

// @ts-ignore
export const ROUTES: RouteInfo[] = [
  { path: '/Client/Accueil', id: 'Accueil', title: 'Accueil', icon: 'nc-bank', class: '', hasSubMen: true,},
  { path: '/Client/profil', id: 'profil', title: 'Profil', icon: 'nc-icon nc-single-02', class: '', hasSubMen: true,},
  { path: '/Client/Ma_Relation_Banque', id: 'Ma', title: 'Ma Relation Banque', icon: 'nc-icon nc-favourite-28', hasSubMen: false, class: '' , subMenus:[
      { path: '/Client/Ma_Relation_Banque/Mes_Compte_denrolement', id: 'Mes_Compte_denrolement', title: 'Mes enrolements', icon: 'nc-paper', class: 'ml-3 lead'},
    ]
  },
  { path: '/Client/me-trasactions', id: 'Mes', title: 'Mes Transactions', icon: 'nc-credit-card', class: '' , subMenus:[
      { path: '/Client/me-trasactions/effectuer-des-virements', id: 'effectuer-des-virements', title: 'effectuer virements', icon: 'nc-money-coins', class: 'ml-3 lead'},
      { path: '/Client/me-trasactions/recharge-telecom', id: 'recharge-telecom', title: 'Recharge Telecom', icon: 'nc-mobile', class: 'ml-3 lead'},

    ]
  },
  { path: '/Client/mes-demandes-en-ling', id: 'Mess', title: 'Mes Demandes Ligne', icon: 'nc-single-copy-04', class: '' ,subMenus:[
      { path: '/Client/mes-demandes-en-ling/changement-agence', id: 'changement-agence', title: 'changement agence', icon: 'nc-refresh-69', class: 'ml-3 lead'},
  ]},
  { path: '/Client/Contactez-Nous', id: 'contactc', title: 'Contactez Nous', icon: 'nc-send', class: '' },

  { path: '/Deconnnecter', id: 'Mex', title: 'Me Deconnnecter', icon: 'nc-button-power', class: '' },

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
