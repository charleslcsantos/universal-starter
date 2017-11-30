import { NgModule, Component } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CepComponent } from "./cep.component";

@NgModule({
    declarations: [CepComponent],
    imports: [
        RouterModule.forChild([
            { path: '', component: CepComponent, pathMatch: 'full' },
            { path: ':cep', component: CepComponent, pathMatch: 'full' }
        ])
    ]
})
export class CepModule {

    constructor(){

    }

    

}