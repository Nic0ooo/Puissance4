import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Puissance 4';

  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      data : {
        rule : "Le but du jeu est d'aligner une série de 4 pions de même couleur.\n\n Chaque joueur dispose de 21 pions d'une même couleur. Tour à tour, les deux joueurs placent un pion dans la colonne de leur choix, le pion glisse alors jusqu'à la position la plus basse possible dans ladite colonne. \n\n Le gagnant est le joueur qui réalise le premier un alignement consécutif (horizontal, vertical ou diagonal) d'au moins quatre pions de sa couleur. Si, alors que toutes les cases de la grille de jeu sont remplies, aucun des deux joueurs n'a effectué un tel alignement, la partie se termine par une égalité."
      }
    });
  }

}


