import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PersonajesDetailsComponent } from "@personajes/personajes-details/personajes-details.component";
import { PersonajesListComponent } from "@personajes/personajes-list/personajes-list.component";

const myComponents = [PersonajesDetailsComponent, PersonajesListComponent];

@NgModule({
    declarations: [
        ...myComponents
    ],
    imports: [
        CommonModule, RouterModule
    ],
    exports: [...myComponents], 
})
export class personajesModule {}