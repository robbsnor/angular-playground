import { Component, Input, OnInit } from '@angular/core';
import { Palette } from 'src/app/interfaces/palette';

@Component({
    selector: 'app-color-palette',
    templateUrl: './color-palette.component.html',
    styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
    @Input() palettes: Palette[];

    constructor() { }

    ngOnInit(): void {
    }

}



