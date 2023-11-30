import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-choice',
  templateUrl: './game-choice.page.html',
  styleUrls: ['./game-choice.page.scss'],
})
export class GameChoicePage implements OnInit {
  games: any[] = [];
  selectedGames: number[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // Hent komponenter fra din backend (ændr URL'en til din backend-endpoint)
    this.http.get<any[]>('http://localhost:8080/api/PcComponent')
      .subscribe(components => {
        this.games = components;
      });
  }

  selectGame(gameId: number) {
    const index = this.selectedGames.indexOf(gameId);

    if (index === -1) {
      this.selectedGames.push(gameId);
    } else {
      this.selectedGames.splice(index, 1);
    }
  }

  isSelected(gameId: number): boolean {
    return this.selectedGames.includes(gameId);
  }

  nextPage() {
    if (this.selectedGames.length === 2) {
      // Du kan passere de valgte spilnumre til næste side, hvis det er nødvendigt
      this.router.navigate(['tabs', 'graphics-card-choice', { games: this.selectedGames }]);
    }
  }
}
