import { Component, OnInit } from '@angular/core';
import { PcComponentService } from 'src/app/services/pcComponents.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.page.html',
  styleUrls: ['./save.page.scss'],
})
export class SavePage implements OnInit {
  PcComponent = {
    id: '',
    ComponentName: '',
    typeId: '',
    price: '',
    ram_capacity: '',
    storage_capacity:'',
    category: '',
    published: false,
  };

  submitted = false;

  constructor(
      private PcComponentService: PcComponentService) {}

  ngOnInit() {
  }


  savePcComponent() {
    const data = {
      ComponentName: this.PcComponent.ComponentName,
      typeId: this.PcComponent.typeId,
      price: this.PcComponent.price,
      ram_capacity: this.PcComponent.ram_capacity,
      storage_capacity: this.PcComponent.storage_capacity,
      category:this.PcComponent.category,
    };
    this.PcComponentService.create(data)
        .subscribe(
            response => {
              console.log(response);
              this.submitted = true;
            },
            error => {
              console.log(error);
            });

  }


  newPcComponent() {
    this.submitted = false;
    this.PcComponent = {
      id: "",
      ComponentName: '',
      typeId: '',
      price: '',
      ram_capacity: '',
      storage_capacity:'',
      category:'',
      published: false,
    };
  }



}
