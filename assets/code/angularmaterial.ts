npm install --save @angular/material
npm install --save hammerjs

import { MaterialModule } from '@angular/material';
import 'hammerjs';
// other imports 
@NgModule({
  imports: [MaterialModule],
  ...
})
export class AppModule { }

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">