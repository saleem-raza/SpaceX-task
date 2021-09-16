import { Component, OnInit } from '@angular/core';
import { Dragons } from 'src/models/dragons';
import { CrudService } from 'src/services/services/crud.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {
  dragonsList!: Dragons[];
  totalLoad = 0;
  constructor(private crudservices: CrudService) { }

  ngOnInit(): void {
    this.getDragons();
  }

  getDragons() {
    this.crudservices.getDragons().subscribe((data: Dragons[]) => {
      this.dragonsList = data;
      this.calculateLaunchPayload();
    });
    // console.log(JSON.stringify(this.dragons));
  }
  calculateLaunchPayload() {
    for (let dragon of this.dragonsList) {
      this.totalLoad = this.totalLoad + dragon.launch_payload_mass.kg;
    }

  }
}
