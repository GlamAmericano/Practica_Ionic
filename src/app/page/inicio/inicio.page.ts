import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : menuComponentes[] = [
    {
      icon: 'alert-sharp',
      nombre: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'hammer-sharp',
      nombre: 'Action-Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-playstation',
      nombre: 'Card',
      redirectTo: '/card'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

  interface menuComponentes {
    icon: string;
    nombre: string;
    redirectTo: string;
  }