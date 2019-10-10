import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@src/app/app.component';

import { NxThreeModule } from '../../projects/nx-three/src/lib/nx-three.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxThreeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
