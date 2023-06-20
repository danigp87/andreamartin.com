import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { AboutComponent } from './principal/about/about.component';
import { ConceptComponent } from './principal/concept/concept.component';
import { TattooComponent } from './principal/tattoo/tattoo.component';
import { IlustrationComponent } from './principal/ilustration/ilustration.component';
import { WorkComponent } from './principal/work/work.component';
import { ShopComponent } from './principal/shop/shop.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        ClipboardModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        AboutComponent,
        ConceptComponent,
        TattooComponent,
        IlustrationComponent,
        ShopComponent,
        WorkComponent
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }