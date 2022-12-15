import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripopinionformComponent } from './tripopinionform.component';

describe('TripopinionformComponent', () => {
  let component: TripopinionformComponent;
  let fixture: ComponentFixture<TripopinionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripopinionformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripopinionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
