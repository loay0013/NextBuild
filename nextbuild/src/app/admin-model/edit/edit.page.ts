import { Component, OnInit } from '@angular/core';
import { PcComponentService } from 'src/app/services/pcComponents.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PcComponent } from 'src/app/models/pcComponents.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  PcComponent ={
    id: '',
    ComponentName: '',
    typeId: '',
    price: '',
    ram_capacity: '',
    storage_capacity:'',
    category:'',
    published: false,
  };

  constructor(
    private pcComponentService: PcComponentService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  getPcComponent(id: any) {
    this.pcComponentService.get(id)
      .subscribe(
        (data: PcComponent) => {
          const PcComponentData = data;
          console.log(PcComponentData);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updatePcComponent() {
    this.pcComponentService.update(this.PcComponent.id, this.PcComponent)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    this.modalCtrl.dismiss(this.PcComponent)
  }

}
