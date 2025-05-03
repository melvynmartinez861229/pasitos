import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonImg,
  IonItem,
  IonBadge,
  IonList,
  IonLabel,
  IonIcon // <-- Agregar esta importación
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-lafamiliaenlaeducacion',
  templateUrl: './lafamiliaenlaeducacion.page.html',
  styleUrls: ['./lafamiliaenlaeducacion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonImg,IonList,IonItem,IonBadge,IonLabel]
})
export class LafamiliaenlaeducacionPage {

  constructor() { }



}
