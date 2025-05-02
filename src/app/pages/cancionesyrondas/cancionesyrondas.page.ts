import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonMenuButton,IonImg,IonList,IonItem,IonBadge,IonLabel } from '@ionic/angular/standalone';

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
