import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PcComponentService } from 'src/app/services/pcComponents.service';
import { PcComponent } from 'src/app/models/pcComponents.model';

@Component({
    selector: 'app-multitask',
    templateUrl: './multitask.page.html',
    styleUrls: ['./multitask.page.scss'],
})
export class MultitaskPage {
    selectedRamCapacity: string | null = null;
    selectedStorageData: PcComponent[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private pcComponentService: PcComponentService
    ) {}

    ionViewWillEnter() {
        // Receive data from the previous page (ssdchoice)
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
            this.selectedStorageData = navigation.extras.state['selectedStorageData'];
        }

        // Fetch data based on selected RAM capacity
        this.fetchRamData();
    }

    selectRamCapacity(ramCapacity: string | null) {
        this.selectedRamCapacity = ramCapacity;
    }

    nextPage() {
        const queryParams = {
            selectedRamCapacity: this.selectedRamCapacity,
            selectedComponentNames: this.route.snapshot.queryParams['selectedComponentNames'] || null,
            selectedStorageCapacity: this.route.snapshot.queryParams['selectedStorageCapacity'] || null,
            selectedProcessorName: this.route.snapshot.queryParams['selectedProcessorName']|| null,
            selectedStorageData: this.selectedStorageData,
        };

        // Navigate to the next page with queryParams
        this.router.navigate(['/resultater'], {
            queryParams: queryParams,
        });
    }

    private fetchRamData() {
        if (this.selectedRamCapacity !== null) {
            this.pcComponentService.findByRamCapacity(this.selectedRamCapacity).subscribe((ramData) => {
                console.log('Selected RAM Data:', ramData);
            });
        }
    }
}
