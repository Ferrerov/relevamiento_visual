import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpmxtVcrDZOnJirBk44w5addfemIkq05Q",
  authDomain: "pp-laboiv-87b74.firebaseapp.com",
  projectId: "pp-laboiv-87b74",
  storageBucket: "pp-laboiv-87b74.appspot.com",
  messagingSenderId: "778116645192",
  appId: "1:778116645192:web:92a1e97a5165ba197cb37d"
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp(firebaseConfig)), provideStorage(() => getStorage()),
  ],
});
