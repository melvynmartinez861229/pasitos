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
  selector: 'app-formacionhabitos',
  templateUrl: './formacionhabitos.page.html',
  styleUrls: ['./formacionhabitos.page.scss','../../app.component.scss'],
  standalone: true,
  imports: [IonHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg,IonButtons,IonMenuButton]
})
export class FormacionhabitosPage {

  constructor() { }


  questions = [
    {
      text: '¿Cuál de los siguientes alimentos es buena fuente de proteínas?',
      options: ['Manzana', 'Pollo', 'Pan'],
      answer: 1
    },
    {
      text: '¿Qué grupo de alimentos incluye frutas y vegetales?',
      options: ['Grupo de lácteos', 'Grupo de los carbohidratos', 'Grupo de las vitaminas'],
      answer: 2
    },
    {
      text: '¿Cuál es el ejemplo de un desayuno saludable para niños?',
      options: ['Yogurt de frutas', 'Galletas', 'Papas fritas'],
      answer: 0
    },
    {
      text: '¿Qué tipo de grasa es más saludable para el niño?',
      options: ['Grasas saturadas', 'Grasa trans', 'Aceite de oliva'],
      answer: 2
    },
    {
      text: '¿Qué bebida es mejor opción para acompañar las comidas?',
      options: ['Refresco', 'Agua', 'Jugo azucarado'],
      answer: 1
    },
    {
      text: '¿Cuál de estos alimentos es rico en fibras y bueno para la digestión?',
      options: ['Arroz blanco', 'Pan integral', 'Dulces'],
      answer: 1
    },
    {
      text: '¿Cuál es una buena opción de merienda saludable?',
      options: ['Chocolates', 'Zanahorias', 'Papas fritas'],
      answer: 1
    },
    {
      text: '¿Cuál de estos alimentos es un lácteo?',
      options: ['Leche', 'Zanahoria', 'Pollo'],
      answer: 0
    },
    {
      text: '¿Qué tipo de fruta tiene más vitamina C?',
      options: ['Naranja', 'Plátano', 'Uva'],
      answer: 0
    },
    {
      text: '¿Cuál es una buena fuente de carbohidratos?',
      options: ['Arroz integral', 'Helado', 'Galletas'],
      answer: 0
    },
    {
      text: '¿Qué es importante incluir en la dieta diaria de un niño para una buena salud?',
      options: ['Frutas y vegetales', 'Solo dulces', 'Comida rápida'],
      answer: 0
    },
    {
      text: '¿Cuál de estos es una merienda saludable?',
      options: ['Galletas rellenas', 'Frutas', 'Papas fritas'],
      answer: 1
    },
    {
      text: '¿Qué alimento es conocido por ser rico en fósforo?',
      options: ['Huevo', 'Carne', 'Pescado'],
      answer: 2
    },
    {
      text: '¿Cuál es la mejor opción para endulzar la comida de los niños?',
      options: ['Azúcar refinada', 'Miel', 'Frutas secas'],
      answer: 2
    },
    {
      text: '¿Cuál de estas opciones es una fuente de proteínas para ayudar a crecer a nuestros niños?',
      options: ['Refrescos y jugos azucarados', 'Carnes, huevos, frijoles y lentejas', 'Dulce o galletas'],
      answer: 1
    },
    {
      text: '¿Cuántas porciones de frutas y vegetales se recomienda que consuman los niños de 2 a 3 años al día?',
      options: ['Menos de una porción', 'Al menos cinco porciones', 'Ninguna, no le gustan'],
      answer: 1
    },
    {
      text: '¿Qué mineral es esencial para fortalecer los huesos y dientes de nuestros niños?',
      options: ['Hierro', 'Calcio', 'Zinc'],
      answer: 1
    },
    {
      text: '¿Qué debemos hacer para que nuestros hijos prueben alimentos nuevos?',
      options: ['Obligarlos a comerlos', 'Ofrecerlos en pequeñas cantidades, de forma divertida y repetida', 'Dejar de ofrecerles alimentos nuevos'],
      answer: 1
    },
    {
      text: '¿Qué debemos evitar en la alimentación de nuestros hijos para prevenir la obesidad infantil?',
      options: ['El consumo excesivo de frutas y vegetales', 'El consumo excesivo de alimentos procesados y azucarados', 'La actividad física'],
      answer: 1
    },
    {
      text: '¿Qué es importante para crear hábitos alimenticios saludables en nuestros hijos?',
      options: ['Que coman solos frente a la televisión', 'Darles lo que pidan, aunque no sea saludable', 'Predicar con el ejemplo, comiendo nosotros también de forma saludable'],
      answer: 2
    },
    {
      text: '¿Qué nutriente es esencial para el desarrollo del cerebro y la visión de nuestros hijos?',
      options: ['Vitamina C', 'Hierro', 'Calcio'],
      answer: 1
    }
  ];

  currentQuestionIndex = 0;
  selectedAnswer: number | null = null;
  score = 0;
  quizCompleted = false;

  selectAnswer(index: number) {
    this.selectedAnswer = index;
  }

  checkAnswer() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
    } else {
      this.quizCompleted = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.score = 0;
    this.quizCompleted = false;
  }

}
