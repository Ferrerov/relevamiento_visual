import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { ImagenModel } from 'src/app/models/Imagen.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-seccionfotos',
  templateUrl: './seccionfotos.page.html',
  styleUrls: ['./seccionfotos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class SeccionfotosPage implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: ImagenModel;
  percentage = 0;
  uploadService = inject(StorageService);

  constructor() { }

  ngOnInit() {
  }

  tomarFoto()
  {

  }

  upload(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new ImagenModel(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload);
      }
    }
  }

}
