import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule
    ]
})
export class MaterialModule { }
