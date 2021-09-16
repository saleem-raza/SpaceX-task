import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Dragons } from 'src/models/dragons';
import { Launch } from 'src/models/launch';
import { Capsule } from 'src/models/capsule';
import { Company } from 'src/models/company';
import { Crew } from 'src/models/crew';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //base api url
  public url = 'https://api.spacexdata.com/v4/';
  constructor(private http: HttpClient) { }

  getDragons(): Observable<Dragons[]> {
    return this.http.get<Dragons[]>(this.url + ENDPOINTS.DRAGONS);
  }

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.url + ENDPOINTS.LAUNCHES);
  }
  getCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(this.url + ENDPOINTS.CAPSULES);
  }
  getCompanyInfo(): Observable<Company> {
    return this.http.get<Company>(this.url + ENDPOINTS.COMPANY);
  }

  getCrewInfo(): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.url + ENDPOINTS.CREWS);
  }
  public getData() {
    const options = {
      params: new HttpParams({ fromString: "page=1&limit=20" })
    };
    return this.http.get(this.url, options);
  }
}
enum ENDPOINTS {
  DRAGONS = 'dragons',
  CREWS = 'crew',
  LAUNCHES = 'launches',
  CAPSULES = 'capsules',
  COMPANY = 'company'
}
