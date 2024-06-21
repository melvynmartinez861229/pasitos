import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonImg,IonButtons,IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formacionhabitos',
  templateUrl: './formacionhabitos.page.html',
  styles: '',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg,IonButtons,IonMenuButton]
})
export class FormacionhabitosPage {

  constructor() { }



}
