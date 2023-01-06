import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoheaderComponent } from './fondoheader.component';

describe('FondoheaderComponent', () => {
  let component: FondoheaderComponent;
  let fixture: ComponentFixture<FondoheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
