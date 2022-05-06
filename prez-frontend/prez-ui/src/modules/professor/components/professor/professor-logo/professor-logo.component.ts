import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prez-professor-logo',
  templateUrl: './professor-logo.component.html',
  styleUrls: ['./professor-logo.component.scss']
})
export class ProfessorLogoComponent implements OnInit {

  public logo: string = './assets/img/minilogo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
