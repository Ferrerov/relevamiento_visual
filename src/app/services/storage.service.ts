import { inject, Injectable } from '@angular/core';
import { ImagenModel } from '../models/Imagen.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private basePath = '/uploads';
  storage = inject(AngularFireStorage);

  constructor() { }

  pushFileToStorage(imagen: ImagenModel){
    const filePath = `${this.basePath}/${imagen.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, imagen.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          imagen.url = downloadURL;
          imagen.name = imagen.file.name;
          // Aquí ya no guardamos datos en la base de datos
        });
      })
    ).subscribe();
  }

  deleteFile(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete(); 
  }
}
