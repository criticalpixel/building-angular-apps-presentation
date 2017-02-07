//Angular Bootstrap
import { platformBrowserDynamic } from 
'@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)


//Angular Module
import { NgModule } from '@angular/core';

import { AppComponent }   from './app.component';

@NgModule({
  imports: [],
  exports: [],
  declarations: [AppComponent],
  providers: [],
})
export class AppModule { }


//Angular Component
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }


//Angular Route
...imports...

const routes: Routes = [
  { path: 'path', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forChild|Root(routes)],
  exports: [RouterModule],
})
export class NameRoutingModule { }
export const routedComponents = [AppComponent];












npm install -g @angular/cli
ng new myApp
ng serve
ng build

