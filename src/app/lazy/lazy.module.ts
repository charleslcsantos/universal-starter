import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'lazy-view',
  template: `<h3>i'm {{ charlesVariable }}</h3>`
})
export class LazyComponent {

  charlesVariable = "Chaves";

}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}