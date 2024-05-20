import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Adjust the path to your AppModule

enableProdMode(); // Enable production mode (optional)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
