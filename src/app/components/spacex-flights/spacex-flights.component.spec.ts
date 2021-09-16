import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexFlightsComponent } from './spacex-flights.component';

describe('SpacexFlightsComponent', () => {
  let component: SpacexFlightsComponent;
  let fixture: ComponentFixture<SpacexFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
