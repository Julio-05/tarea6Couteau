import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'Home' },
    { title: 'Genero', url: '/genero', icon: 'male-female' },
    { title: 'Edad', url: '/edad', icon: 'people-circle' },
    { title: 'Pais', url: '/pais', icon: 'airplane' },
    { title: 'Clima', url: '/clima', icon: 'earth' },
    { title: 'Logo', url: '/logo', icon: 'warning' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'play' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
