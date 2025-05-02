import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonMenuButton,IonImg,IonList,IonItem,IonBadge,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mensajesedicativos',
  templateUrl: './mensajesedicativos.page.html',
  styleUrls: ['./mensajesedicativos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class MensajesedicativosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
