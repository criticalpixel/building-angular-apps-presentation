npm install firebase --save
npm install angularfire2 --save

import {AngularFireModule} from "angularfire2";

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config, auth)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}