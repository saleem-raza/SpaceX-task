import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Capsule } from 'src/models/capsule';
import { CapsuleTypeFreq, Launch } from 'src/models/launch';
import { CrudService } from 'src/services/services/crud.service';
import { CapsuleType } from 'src/models/enums';
import { Crew } from 'src/models/crew';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launchList: Launch[] = [];
  launchSuccessList: Launch[] = [];
  launchfailureList: Launch[] = [];

  CrewList: Crew[] = [];
  capsulesList: Capsule[] = [];
  capsuleFactsList: CapsuleTypeFreq[] = [];
  crewCount = 0;
  count = 0;
  crewNasa = 0;
  crewJaxa = 0;

  displayedColumns: string[] = ['id', 'capsule_type', 'frequency', 'total_launches', 'total_landing_attempt', 'total_water_landings'];
  //dataSource = this.capsuleFactsList;
  //dataSource = this.capsuleFactsList;
  dataSource!: MatTableDataSource<CapsuleTypeFreq>;
  //dataSource = new MatTableDataSource<CapsuleTypeFreq>( this.capsuleFactsList);
  constructor(private crudservices: CrudService) {

    this.dataSource = new MatTableDataSource<CapsuleTypeFreq>();
  }

  ngOnInit(): void {

    this.getallCapsules();
    this.getallLunches();
    this.getallCrew();


  }

  getallLunches() {
    this.crudservices.getLaunches().subscribe((data: Launch[]) => {
      this.launchList = data
      // console.log(this.launch);

      this.launchSuccessList = this.launchList.filter(data => data.success == true);
      this.launchfailureList = this.launchList.filter(data => data.success == false);
      // this.getshiptype(this.launchSuccess);
      this.loadCapsuleCounter();
      this.dataSource.data = this.capsuleFactsList;
      console.log(JSON.stringify(this.dataSource));
    });
    // console.log(JSON.stringify(this.dragons));

  }
  loadCapsuleCounter() {
    this.loadCapsuleTypes();
    for (let capsule of this.capsulesList) {

      console.log('capsuleType:', capsule.type.toString());
      this.showUpdatedItem(capsule);
    }

  }
  getallCapsules() {
    this.crudservices.getCapsules().subscribe((data: Capsule[]) => {
      this.capsulesList = data;

    });
  }
  getallCrew() {
    this.crudservices.getCrewInfo().subscribe((data: Crew[]) => {
      this.CrewList = data;
      this.getCrewCount();
    });
  }


  loadCapsuleTypes() {
    let idcounter = 1;
    for (let item in CapsuleType) {
      if (isNaN(Number(item))) {
        let tempArr = {
          id: idcounter,
          frequency: 0,
          capsule_type: item.toString(),
          total_water_landings: 0,
          total_landing_attempt: 0,
          total_launches: 0,
        };
        this.capsuleFactsList.push(tempArr);
        idcounter++;
      }

    }

  }
  showUpdatedItem(newItem: Capsule) {
    const updateItem = this.capsuleFactsList.filter(a => a.capsule_type == newItem.type.toString())
    let index = this.capsuleFactsList.indexOf(updateItem[0]);
    const currValue = this.capsuleFactsList[index].frequency;
    const currWaterLand = this.capsuleFactsList[index].total_water_landings;
    const currLanding = this.capsuleFactsList[index].total_landing_attempt;
    const currLaunches = this.capsuleFactsList[index].total_launches;
    this.capsuleFactsList[index].frequency = currValue + 1;
    this.capsuleFactsList[index].total_water_landings = currWaterLand + newItem.water_landings;
    this.capsuleFactsList[index].total_landing_attempt = currLanding + newItem.land_landings;
    this.capsuleFactsList[index].total_launches = currLaunches + newItem.launches.length;
    // console.log("items:", this.capsuleCounterArray[index].frequency )
  }

  getCrewCount() {

    this.crewCount = this.CrewList.filter(item => item.launches.length > 0).length;
    this.crewNasa = this.CrewList.filter(item => item.agency == "NASA" && item.launches.length > 0).length;
    this.crewJaxa = this.CrewList.filter(item => item.agency == "SpaceX" && item.launches.length > 0).length;

  }
  copyTableData() {
    return JSON.stringify(this.dataSource.data);
  }
  copyFacts() {
    return 'Total launches:' + this.launchList.length + '\n' +
      'Successful launches:' + this.launchSuccessList.length + '\n' +
      'Failed launches:' + this.launchfailureList.length + '\n' +
      'Total crew sent: ' + this.crewCount + '\n' +
      'crew (NASA) sent:' + this.crewNasa + '\n' +
      'crew (SPACEX) sent: ' + this.crewJaxa;
  }

}
