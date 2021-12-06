import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
@NgModule({
    declarations: [
        AppComponent,
        ColorPaletteComponent
    ],
    imports: [
        BrowserModule,
        MatTabsModule,
        MatDatepickerModule,
        MatSliderModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
    campaignOne: FormGroup;
    campaignTwo: FormGroup;

    constructor() {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();

        this.campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16))
        });

        this.campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19))
        });
    }
}
