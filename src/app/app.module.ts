import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { ListScreenComponent } from './list-screen/list-screen.component';
import { DetailScreenComponent } from './detail-screen/detail-screen.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent, ListScreenComponent, DetailScreenComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
