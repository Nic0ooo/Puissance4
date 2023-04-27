import { Component } from '@angular/core';

@Component({
  selector: 'app-plateau-jeu',
  templateUrl: './plateau-jeu.component.html',
  styleUrls: ['./plateau-jeu.component.scss']
})
export class PlateauJeuComponent {
  currentPlayer: string = 'rouge';
  board: string[][] = [];
  gameOver: boolean = false;

  isBoardFull(): boolean {
    for (let row of this.board) {
      for (let cell of row) {
        if (!cell) {
          return false;
        }
      }
    }
    return true;
  }
  reloadPage() {
    location.reload();
  }

  checkForWin(row: number, col: number): boolean {
    // Vérifier les victoires verticales
    for (let r = 0; r < 3; r++) {
      if (this.board[r][col] === this.currentPlayer &&
          this.board[r+1][col] === this.currentPlayer &&
          this.board[r+2][col] === this.currentPlayer &&
          this.board[r+3][col] === this.currentPlayer) {
        return true;
      }
    }

    // Vérifier les victoires horizontales
    for (let c = 0; c < 4; c++) {
      if (this.board[row][c] === this.currentPlayer &&
          this.board[row][c+1] === this.currentPlayer &&
          this.board[row][c+2] === this.currentPlayer &&
          this.board[row][c+3] === this.currentPlayer) {
        return true;
      }
    }

    // Vérifier les victoires en diagonale ascendante
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c] === this.currentPlayer &&
            this.board[r-1][c+1] === this.currentPlayer &&
            this.board[r-2][c+2] === this.currentPlayer &&
            this.board[r-3][c+3] === this.currentPlayer) {
          return true;
        }
      }
    }

    // Vérifier les victoires en diagonale descendante
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c] === this.currentPlayer &&
            this.board[r+1][c+1] === this.currentPlayer &&
            this.board[r+2][c+2] === this.currentPlayer &&
            this.board[r+3][c+3] === this.currentPlayer) {
          return true;
        }
      }
    }

    return false;
  }

  endGame(): void {
    this.gameOver = true;
  }

  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'rouge' ? 'jaune' : 'rouge';
  }

  

  constructor() {
    for (let row = 0; row < 6; row++) {
      this.board[row] = [];
      for (let col = 0; col < 7; col++) {
        this.board[row][col] = '';
      }
    }
  }

  onClick(col: number): void {
    if (this.gameOver) {
      return;
    }

    let row = -1;
    for (let r = 5; r >= 0; r--) {
      if (this.board[r][col] === '') {
        row = r;
        break;
      }
    }

    if (row === -1) {
      return;
    }

    this.board[row][col] = this.currentPlayer;
    if (this.checkForWin(row, col)) {
      this.endGame();
      } else {
      let isBoardFull = true;
      for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
      if (this.board[row][col] === '') {
      isBoardFull = false;
      break;
      }
      }
      if (!isBoardFull) {
      break;
      }
      }
      if (isBoardFull) {
      this.endGame();
      } else {
      this.switchPlayer();
      }
      }
      }
      }
