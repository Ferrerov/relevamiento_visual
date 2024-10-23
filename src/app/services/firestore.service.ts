import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { from, Observable } from 'rxjs';
import { ImagenModel } from '../models/Imagen.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore = inject(Firestore);
  coleccionFotos = collection(this.firestore, 'fotos');
  constructor() { }

  getFotos():Observable<ImagenModel[]>{
    return collectionData(this.coleccionFotos) as Observable<ImagenModel[]>;
  }

  addFotos(uid:string, usuario:string, mensaje:string, fecha_envio:Date):Observable<string>{
    const mensajeCreado = {mensaje, usuario ,uid, fecha_envio};
    const promesa = addDoc(this.coleccionFotos, mensajeCreado).then((response) => response.id);
    return from(promesa);
  }
}
