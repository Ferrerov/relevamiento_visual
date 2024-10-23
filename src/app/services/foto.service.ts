import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FirestoreService } from './firestore.service';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { getStorage, ref, uploadString } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  user: string = 'valen';
  loaded: boolean = false;

  constructor(
    private angularFirestorage: AngularFireStorage,
    private firestoreService: FirestoreService
  ) {}

  async addNewToGallery(photo: any, type: number) {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
      webUseInput: true,
    });

    const storage = getStorage();
    const date = new Date().getTime();

    photo.hour = date;

    const name = `${this.user} ${date}`;
    const storageRef = ref(storage, name);
    const url = this.angularFirestorage.ref(name);
    
    this.loaded=true;
    uploadString(storageRef as any, capturedPhoto.dataUrl as any, 'data_url').then(() => {
      this.loaded=false;
      url.getDownloadURL().subscribe((url1: any) => {
        photo.pathFoto = url1;
        this.firestoreService.addPhoto(photo, type);
      });
    });
  }
}