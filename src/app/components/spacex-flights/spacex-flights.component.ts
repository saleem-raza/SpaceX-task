import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/services/services/crud.service';
import { Company } from 'src/models/company';

@Component({
  selector: 'app-spacex-flights',
  templateUrl: './spacex-flights.component.html',
  styleUrls: ['./spacex-flights.component.css']
})

export class SpacexFlightsComponent implements OnInit {

  company!: Company;


  constructor(private crudservices: CrudService) { }

  ngOnInit(): void {
    this.getCompanyInfo();


  }

  getCompanyInfo() {
    this.crudservices.getCompanyInfo().subscribe((companydata: Company) => {
      this.company = companydata;
    });
  }

}
