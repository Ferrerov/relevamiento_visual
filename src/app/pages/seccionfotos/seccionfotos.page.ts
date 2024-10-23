import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seccionfotos',
  templateUrl: './seccionfotos.page.html',
  styleUrls: ['./seccionfotos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class SeccionfotosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
