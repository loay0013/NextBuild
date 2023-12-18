import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PcComponentService } from 'src/app/services/pcComponents.service';
import { PcComponent } from 'src/app/models/pcComponents.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-graphics-card-choice',
    templateUrl: './graphics-card-choice.page.html',
    styleUrls: ['./graphics-card-choice.page.scss'],
})
export class GraphicsCardChoicePage {
    selectedProcessorName: string | null = null;
    selectedProcessorData: PcComponent | null = null;
    private subscription: Subscription = new Subscription();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private pcComponentService: PcComponentService
    ) {}

    ionViewWillEnter() {
        // Retrieve data from the state object
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
            this.selectedProcessorName = String(navigation.extras.state['selectedProcessorName']);
        }

        // Fetch data from the database based on selectedProcessorName
        if (this.selectedProcessorName !== null && this.selectedProcessorName !== undefined) {
            this.subscription.add(
                this.pcComponentService.findByProcessorName(this.selectedProcessorName).subscribe(
                    (data: PcComponent) => {
                        console.log('Received data from the database:', data);

                        // Store the selected processor data
                        this.selectedProcessorData = data;

                        // Log the received data to the console
                        console.log('Selected Processor Data:', this.selectedProcessorData);

                        // Proceed to the next page if everything is correct
                        this.nextPage();
                    },
                    (error) => {
                        console.error('Error fetching data from the database:', error);
                        this.handleSelectionError();
                    }
                )
            );
        } else {
            console.error('Invalid or missing selected Processor Name.');
            this.handleSelectionError();
        }
    }

    selectProcessor(processorName: string) {
        console.log('Selected Processor Name:', processorName);
        this.selectedProcessorName = processorName;
    }

    private handleSelectionError() {
        // Handle errors, e.g., display a message to the user
        console.error('Please select a graphics card before proceeding.');
    }

     nextPage() {
        // Log the data being sent to the next page
        console.log('Data being sent to the next page:', {
            selectedProcessorName: this.selectedProcessorName,
            selectedProcessorData: this.selectedProcessorData,
        });

        // Send only selectedProcessorName and selectedProcessorData to the next page (ssdchoice)
        const queryParams = {
            selectedProcessorName: this.selectedProcessorName,
            selectedProcessorData: this.selectedProcessorData,
            selectedComponentNames: this.route.snapshot.queryParams['selectedComponentNames'] || null,

        };

        this.router.navigate(['/ssdchoice'], { queryParams });
    }
}
