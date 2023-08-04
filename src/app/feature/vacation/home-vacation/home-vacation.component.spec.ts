import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVacationComponent } from './home-vacation.component';

describe('HomeVacationComponent', () => {
  let component: HomeVacationComponent;
  let fixture: ComponentFixture<HomeVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
