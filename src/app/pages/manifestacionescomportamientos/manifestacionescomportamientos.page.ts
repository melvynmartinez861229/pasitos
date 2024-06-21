import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonMenuButton,IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-manifestacionescomportamientos',
  templateUrl: './manifestacionescomportamientos.page.html',
  styles: '',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonMenuButton,IonImg]
})
export class ManifestacionescomportamientosPage {

  constructor() { }


}
