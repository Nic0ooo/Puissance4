import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  rules;
  isButtonClicked = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { rule: string}) {
    this.rules = data.rule
  }

  ngOnInit(): void {
  }

  clicSurBouton(){
    this.isButtonClicked = false;
}

}