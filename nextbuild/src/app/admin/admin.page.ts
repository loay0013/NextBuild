import { Component, OnInit } from '@angular/core';
import { PcComponentService } from 'src/app/services/pcComponents.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PcComponent } from 'src/app/models/pcComponents.model';
import { EditPage } from '../admin-model/edit/edit.page';
import { SavePage } from '../admin-model/save/save.page';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
    password: string = '';
    pcComponents: PcComponent[] = [];
    message = '';

    constructor(
        private pcComponentService: PcComponentService,
        public modalCtrl: ModalController,
        private router: Router,

    ) {}

    ngOnInit() {
        this.PcComponent();
    }

    PcComponent() {
        this.pcComponentService.getAll()
            .subscribe(
                data => {
                    this.pcComponents = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }



    async SavePageModule() {
        const modal = await this.modalCtrl.create({
            component: SavePage,
            initialBreakpoint: 0.65,
        });
        await modal.present();
    }

    async EditPageModule(pcComponent: any) {
        const modal = await this.modalCtrl.create({
            component: EditPage,
            componentProps: {
                pcComponent: pcComponent,
            },
          initialBreakpoint: 0.65,
        });
        await modal.present();
    }


    delete(id: any) {
        this.pcComponentService.delete(id)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/admin']);
                },
                error => {
                    console.log(error);
                });

    }

}
