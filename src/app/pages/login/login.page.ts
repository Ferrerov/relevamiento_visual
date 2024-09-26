import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonFooter, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonInput, IonCol, IonRow, IonGrid, IonCardContent, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle]
})
export class LoginPage/* implements OnInit */{

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ person });
  }

  /*ngOnInit() {
  }*/

  completarCredenciales(usuario: string)
  {
    switch(usuario)
    {
      case 'usuarioUno':
        break;
      case 'usuarioDos':
        break;
      case 'usuarioTres':
      default:
        break;
    }
  }

}
