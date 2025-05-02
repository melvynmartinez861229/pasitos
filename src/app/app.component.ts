import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, homeSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp,
    IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle,
    IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'El proceso de adaptación', url: 'proceso-adaptacion', icon: 'heart' },
    { title: 'La familia en la educación', url: 'lafamiliaenlaeducacion', icon: 'heart' },
    { title: 'Formación de hábitos', url: 'formacionhabitos', icon: 'heart' },
    { title: 'Canciones y Rondas', url: 'cancionesyrondas', icon: 'heart' },
    { title: 'Juegos Interactivos', url: 'juegosinteractivos', icon: 'heart' },
    { title: 'Para Jugar', url: 'parajugar', icon: 'heart' },
    { title: 'Mensajes Educativos', url: 'mensajesedicativos', icon: 'heart' },
    //{ title: 'Sugerencia de canciones y rondas', url: 'cancionesyrondas', icon: 'heart' },
    //{ title: 'Manifestaciones, comportamientos y características', url: 'manifestacionescomportamientos', icon: 'heart' },
    //{ title: 'Actividades', url: 'actividades', icon: 'heart' },
    { title: 'Derechos del Niño', url: 'derechos', icon: 'heart' },
  ];

  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp,
      archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp,homeSharp });
  }
}
