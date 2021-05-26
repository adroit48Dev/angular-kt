import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLandingComponent } from './list-landing.component';

describe('ListLandingComponent', () => {
  let component: ListLandingComponent;
  let fixture: ComponentFixture<ListLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
