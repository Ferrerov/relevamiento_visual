import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform,  } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { SplashPage } from '../app/pages/splash/splash.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, SplashPage],
})
export class AppComponent {
  router = inject(Router)

  ngOnInit() {
    this.router.navigateByUrl('/splash');
  }
}
