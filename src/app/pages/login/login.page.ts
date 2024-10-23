import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, lockClosed } from 'ionicons/icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonInput,
    IonCol,
    IonRow,
    IonGrid,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonFooter,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginPage {
  formbuilder = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);
  //firestoreService = inject(FirestoreService);
  errorFirebase: string | null = null;

  constructor() {
    addIcons({ person, lockClosed });
  }
  form = this.formbuilder.nonNullable.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required]],
  });

  onSubmit() : void{
    const rawForm = this.form.getRawValue();
    this.authService.login(rawForm.correo ,rawForm.contrasena)
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/home');},
      error: (err) => {
        console.log(err.code);
        this.errorFirebase = 'Las credenciales no coinciden';
      }
    });
  }

  setCredentials(tipo: string) {
    var correo = '';
    var contrasena = '';
    console.log(tipo);
    switch(tipo){
      case 'admin':
        correo  = 'admin@admin.com';
        contrasena = '111111';
        break;
      case 'invitado':
        correo  = 'invitado@invitado.com';
        contrasena = '222222';
        break;
      default:
        correo  = 'usuario@usuario.com';
        contrasena = '333333';
        break;
    }
    this.form.setValue({ correo, contrasena});
  }
}
