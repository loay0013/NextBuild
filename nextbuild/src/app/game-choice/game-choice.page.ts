import { Component } from '@angular/core';
import { PcComponentService } from 'src/app/services/pcComponents.service';
import { PcComponent } from 'src/app/models/pcComponents.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-game-choice',
  templateUrl: './game-choice.page.html',
  styleUrls: ['./game-choice.page.scss'],
})
export class GameChoicePage {
  pcComponents: PcComponent[] = [];
  selectedComponentNames: string[] = [];

  constructor(
      private pcComponentService: PcComponentService,
      private router: Router
  ) {}

  ionViewWillEnter() {
    // Fetch PC components with category H, L, or M from the database
    this.pcComponentService.findByCategory(['H', 'L', 'M']).subscribe((data) => {
      this.pcComponents = data;
    });
  }

  selectGame(category: string) {
    // Select the first game with the specified category
    const game = this.pcComponents.find((component) => component.category === category);

    if (game && game.ComponentName) {
      // Check that game and game.ComponentName are defined before adding it to the list
      this.selectedComponentNames.push(game.ComponentName);

      // Print selected data to the console
      console.log('Selected Component:', game.ComponentName);
      console.log('All Selected Components:', this.selectedComponentNames);
    }
  }

  private findHighestCategory(): string | undefined {
    const categoryWeights: Record<string, number> = { H: 3, M: 2, L: 1 };

    let highestCategory: string | undefined;
    let highestWeight = 0;

    this.selectedComponentNames.forEach((componentName) => {
      const component = this.pcComponents.find((comp) => comp.ComponentName === componentName);

      if (component && component.category && categoryWeights[component.category] > highestWeight) {
        highestCategory = component.category;
        highestWeight = categoryWeights[component.category];
      }
    });

    return highestCategory;
  }

  private async fetchDetailsForSelectedComponents() {
    try {
      // Create an array to store the promises for fetching details
      const fetchPromises: Promise<PcComponent[] | undefined>[] = [];

      // Fetch details for each selected component and store the promises
      for (const componentName of this.selectedComponentNames) {
        const fetchPromise = this.pcComponentService.findByTitle(componentName).toPromise();
        fetchPromises.push(fetchPromise);
      }

      // Wait for all promises to be resolved before proceeding
      const componentsArrays = await Promise.all(fetchPromises);

      // Flatten the arrays and update the pcComponents array with the fetched details
      componentsArrays.forEach((componentsArray) => {
        if (componentsArray) {
          componentsArray.forEach((component) => {
            // Find the index of the component in pcComponents array
            const index = this.pcComponents.findIndex((comp) => comp.ComponentName === component.ComponentName);

            if (index !== -1) {
              // Update the specific component at the found index
              this.pcComponents[index] = component;
            } else {
              // If the component is not found, add it to pcComponents array
              this.pcComponents.push(component);
            }
          });
        }
      });

      console.log('Details fetched successfully.');
    } catch (error) {
      console.error('Error fetching details for selected components:', error);
    }
  }

  nextPage() {
    // Find den højeste kategori blandt de valgte komponenter
    const highestCategory = this.findHighestCategory();

    console.log('Highest Category:', highestCategory);

    // Filtrer de valgte komponenter baseret på den højeste kategori
    const selectedComponents = this.pcComponents
        .filter((component) => component.category === highestCategory)
        .map((component) => component.ComponentName); // Map to extract only ComponentName

    console.log('Selected Components:', selectedComponents);

    // Hent detaljer for de valgte komponenter (hvis det er nødvendigt)
    this.fetchDetailsForSelectedComponents().then(() => {
      // Send kun ComponentName for de valgte komponenter med den højeste kategori til næste side

      // Opret NavigationExtras med query parameter
      const navigationExtras: NavigationExtras = {
        queryParams: { selectedComponentNames: selectedComponents.join(',') },
      };

      // Send også selectedComponentNames til næste side via state-objektet
      this.router.navigate(['/graphics-card-choice'], {
        state: { selectedComponentNames: selectedComponents },
        ...navigationExtras,
      });
    });
  }
}
