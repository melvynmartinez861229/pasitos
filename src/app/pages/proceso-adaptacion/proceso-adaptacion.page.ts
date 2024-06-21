import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonMenuButton,IonButton,IonButtons,IonImg,
  IonItem,IonBadge,IonList,IonLabel
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-proceso-adaptacion',
  templateUrl: './proceso-adaptacion.page.html',
  styles: '',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonMenuButton,IonButton,IonButtons,IonImg,
    IonItem,IonBadge,IonList,IonLabel
  ]
})
export class ProcesoAdaptacionPage {

  constructor() { }



}
