import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ssdchoice',
  templateUrl: './ssdchoice.page.html',
  styleUrls: ['./ssdchoice.page.scss'],
})
export class SSDChoicePage implements OnInit {
  selectedStorage: number | null = null;

  constructor(private router: Router) { }
  selectStorage(storageCapacity: number) {
    this.selectedStorage = storageCapacity;
  }
  ngOnInit() {
  }
  nextPage() {
    if (this.selectedStorage !== null) {
      this.router.navigate(['tabs/multitask', { storage: this.selectedStorage }]);
    }
  }
}
