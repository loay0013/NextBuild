import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PcComponentService } from 'src/app/services/pcComponents.service';
import { PcComponent } from 'src/app/models/pcComponents.model';

@Component({
    selector: 'app-ssdchoice',
    templateUrl: './ssdchoice.page.html',
    styleUrls: ['./ssdchoice.page.scss'],
})
export class SSDChoicePage {
    selectedStorageCapacity: string | null = null;
    selectedGraphicsData: PcComponent[] = [];
    selectedTypeId: number | null = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private pcComponentService: PcComponentService
    ) {}

    ionViewWillEnter() {
        // Retrieve data from the previous page (graphics-card-choice)
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
            // Retrieve previous state data
            const prevState = navigation.extras.state;

            // Update current state with previous state data
            this.selectedTypeId = prevState['selectedTypeId'];
            this.selectedGraphicsData = prevState['selectedGraphicsData'];
        }

        // Fetch data from the database based on selected typeId
        this.fetchGraphicsData();
    }

    private fetchGraphicsData() {
        if (this.selectedTypeId !== null) {
            this.pcComponentService.findByTypeId(this.selectedTypeId.toString()).subscribe((data) => {
                this.selectedGraphicsData = data;
                console.log('All Selected Graphics Data:', this.selectedGraphicsData);

                // Fetch data based on selected storage capacity
                if (this.selectedStorageCapacity !== null) {
                    this.pcComponentService.findByStorageCapacity(this.selectedStorageCapacity).subscribe((storageData) => {
                        console.log('Selected Storage Data:', storageData);
                    });
                }
            });
        }
    }

    selectStorageCapacity(storageCapacity: string) {
        this.selectedStorageCapacity = storageCapacity;
    }

    nextPage() {
        console.log('All Selected Graphics Data:', this.selectedGraphicsData);
        console.log('Selected Storage Capacity:', this.selectedStorageCapacity);

        // Check if a storage capacity is selected
        if (this.selectedStorageCapacity !== null) {
            // Filter data based on the selected storage capacity
            const filteredData = this.selectedGraphicsData.filter(
                (component) => component.storage_capacity === this.selectedStorageCapacity
            );

            // Log the filtered data
            console.log('Selected Storage Data:', filteredData);

            // Log the data being sent to the next page
            console.log('Data being sent to next page:', {
                selectedGraphicsData: filteredData,
                selectedStorageCapacity: this.selectedStorageCapacity,
                selectedTypeId: this.selectedTypeId,
            });

            const queryParams = {
                selectedComponentNames: this.route.snapshot.queryParams['selectedComponentNames'] || null,
                selectedProcessorName: this.route.snapshot.queryParams['selectedProcessorName']|| null,
                selectedStorageCapacity: this.selectedStorageCapacity,
                selectedTypeId: this.selectedTypeId,  // Inkludér selectedTypeId her
            };

            // Send all data to the next page
            this.router.navigate(['/multitask'], {
                queryParams,
            });
        } else {
            // Handle errors, e.g., display a message to the user
            console.error('Vælg venligst en storage-kapacitet, før du går videre.');
        }
    }

}
