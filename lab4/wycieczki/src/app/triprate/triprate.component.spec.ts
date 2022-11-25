import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriprateComponent } from './triprate.component';

describe('TrirateComponent', () => {
  let component: TriprateComponent;
  let fixture: ComponentFixture<TriprateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriprateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriprateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
