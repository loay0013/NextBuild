import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultater',
  templateUrl: './resultater.page.html',
  styleUrls: ['./resultater.page.scss'],
})
export class ResultaterPage {
  selectedRamCapacity: string | null = null;
  selectedComponentNames: string[] = [];
  selectedStorageCapacity: string | null = null;
  selectedProcessorName: string | null = null;
  selectedStorageData: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ionViewWillEnter() {
    // Receive data from the previous page (multitask)
    const navigation = this.route.snapshot;
    this.selectedRamCapacity = navigation.queryParams['selectedRamCapacity'];
    this.selectedComponentNames = navigation.queryParams['selectedComponentNames'];
    this.selectedStorageCapacity = navigation.queryParams['selectedStorageCapacity'];
    this.selectedProcessorName = navigation.queryParams['selectedProcessorName'];
    this.selectedStorageData = navigation.queryParams['selectedStorageData'];
  }
}
