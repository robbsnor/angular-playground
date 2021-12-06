import { Component } from '@angular/core';
import { Palette } from './interfaces/palette';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-playground';

    public godPalettes: Palette[] = [
        {
            name: 'Red red sea',
            colors: ['red', 'orangered', 'orange']
        },
        {
            name: 'Keyboard',
            colors: ['blue', 'darkturquoise', 'lime', 'green', 'darkgreen']
        },
        {
            name: 'Stoplight',
            colors: ['red', 'orange', 'lime']
        }
    ];
}
