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
  selector: 'app-proceso-adaptacion',
  templateUrl: './proceso-adaptacion.page.html',
  styleUrls: ['./proceso-adaptacion.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader, 
    IonContent, 
    IonTitle, 
    IonToolbar,
    IonMenuButton,
    IonButtons,
    IonImg,
    IonItem,
    IonBadge,
    IonList,
    IonLabel,
    IonIcon // <-- Agregar a la lista de imports
  ]
})
export class ProcesoAdaptacionPage {

  constructor() { }

  scheduleItems = [
    { 
      time: '7:00 AM', 
      activity: 'Despertar, desayuno y entrada a donde reciben la atención educativa y de cuidado',
      icon: 'sunny'
    },
    { 
      time: '8:30 AM', 
      activity: 'Gymnasia matutina',
      icon: 'fitness'
    },
    { 
      time: '8:45 AM', 
      activity: 'Actividad independiente: lanzar pelota, correr, saltar, reptar, cuadrúpeda; juegos tradicionales',
      icon: 'game-controller'
    },
    { 
      time: '9:00 AM', 
      activity: 'Merienda y aseo',
      icon: 'ice-cream'
    },
    { 
      time: '9:25 AM', 
      activity: 'Juego de entretenimiento con juguetes: Carritos, muñecas, cocina, animales',
      icon: 'car-sport'
    },
    { 
      time: '10:30 AM', 
      activity: 'Proceso de Baño',
      icon: 'water'
    },
    { 
      time: '10:30 - 11:15 AM', 
      activity: 'Actividad independiente: Bailar, cantar canciones infantiles, regar plantas, dibujar',
      icon: 'musical-notes'
    },
    { 
      time: '11:15 AM - 12:15 PM', 
      activity: 'Aseo, Alimentación (almuerzo) y aseo',
      icon: 'restaurant'
    },
    { 
      time: '12:15 PM - 3:00 PM', 
      activity: 'Proceso de sueño',
      icon: 'moon'
    },
    { 
      time: '3:00 - 3:30 PM', 
      activity: 'Aseo, merienda y actividad independiente: Paseo, ir al parque, jugar pelota',
      icon: 'walk'
    },
    { 
      time: '4:00 - 6:00 PM', 
      activity: 'Entrega de los niños a las familias',
      icon: 'people'
    }
  ];

}
