import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MotionComponent } from './myComponents/motionsComponent/motionComponent';
import { MotionTable } from './myComponents/motionsTable/motionTable';
import { ProgressBarComponent } from './myComponents/progressBar/progressBar.component';
import { DataService } from './service/data.service';
import { OrderByDesc } from './myPipes/descPipe';
import { HttpModule, JsonpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MotionComponent,
    MotionTable,
    ProgressBarComponent,
    OrderByDesc
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
