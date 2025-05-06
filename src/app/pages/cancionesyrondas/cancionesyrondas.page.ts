import { Component, OnInit } from '@angular/core';
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
  selector: 'app-cancionesyrondas',
  templateUrl: './cancionesyrondas.page.html',
  styleUrls: ['./cancionesyrondas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class CancionesyrondasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
