import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep',
  template: `
    <p>
      cep works!
    </p>
  `,
  styles: []
})
export class CepComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private titleService: Title
  ) { 

    this.titleService.setTitle("CEP HERE");

  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.titleService.setTitle(data.cep);
    })
  }

}
