import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PersonajesComponent } from "./personajes.component";
import { PersonajesDetailsComponent } from "./personajes-details/personajes-details.component";
import { PersonajesListComponent } from "./personajes-list/personajes-list.component";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [PersonajesComponent],
    imports: [
        CommonModule,
        RouterModule,
        personajesModule
    ],
    
})
export class personajesModule{}