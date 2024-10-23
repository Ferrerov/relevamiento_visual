import { Injectable, inject, signal } from '@angular/core';
import { EmailAuthProvider,Auth, createUserWithEmailAndPassword, reauthenticateWithCredential, signInWithEmailAndPassword, signOut, updateProfile, user, getAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { UsuarioInterface } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 firebaseAuth = inject(Auth);
 user$ = user(this.firebaseAuth);
 currentUserSig = signal<UsuarioInterface | null | undefined>(undefined);

 register(email:string, username:string, password:string) : Observable<void> 
 {
  const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(response => updateProfile(response.user, {displayName: username}));

  return from(promise);
 }

 login(email:string, password:string) : Observable<void>
 {
  const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(()=> {});
  return from(promise);
 }

 logout() : Observable<void>
 {
  const promise = signOut(this.firebaseAuth);
  return from(promise);
 }

 reAuth(contrasena:string) : Observable<void>
 {
  const auth =getAuth();
  //console.log(auth);
  const credencial = EmailAuthProvider.credential(
    this.currentUserSig()!.correo,
    contrasena
  );
  //console.log(credencial);
  const promesa = reauthenticateWithCredential(auth.currentUser!, credencial).then(()=> {});
  return from(promesa);
 }
}
