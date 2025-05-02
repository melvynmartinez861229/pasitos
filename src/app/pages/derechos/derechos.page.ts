import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonMenuButton,IonImg,IonList,IonItem,IonBadge,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-derechos',
  templateUrl: './derechos.page.html',
  styleUrls: ['./derechos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class DerechosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
