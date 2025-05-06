import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonMenuButton,IonImg,IonList,IonItem,IonBadge,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-parajugar',
  templateUrl: './parajugar.page.html',
  styleUrls: ['./parajugar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton,IonImg]
})
export class ParajugarPage implements OnInit {



  constructor() { }



  imagenes = Array.from({ length: 53 }, (_, i) => i + 1);

  ngOnInit() {
  }


}
