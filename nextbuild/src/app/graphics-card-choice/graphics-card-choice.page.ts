import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface RouteParams {
  games: string;
  graphics: string;
}

@Component({
  selector: 'app-graphics-card-choice',
  templateUrl: './graphics-card-choice.page.html',
  styleUrls: ['./graphics-card-choice.page.scss'],
})
export class GraphicsCardChoicePage implements OnInit {
  selectedGames: number[] = [];
  selectedGraphics: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    const params = this.route.snapshot.params as RouteParams;
    this.selectedGames = params.games.split(',').map(Number);
    this.selectedGraphics = Number(params.graphics);
  }
  ngOnInit() {
  }
  selectGraphics(graphicsId: number) {
    this.selectedGraphics = graphicsId;
  }

  nextPage() {
    if (this.selectedGraphics !== null) {
      this.router.navigate(['/tabs/ssdchoice', { games: this.selectedGames.join(','), graphics: this.selectedGraphics }]);
    }
  }
}

