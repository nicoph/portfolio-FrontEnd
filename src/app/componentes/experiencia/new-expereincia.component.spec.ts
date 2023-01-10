import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpereinciaComponent } from './new-expereincia.component';

describe('NewExpereinciaComponent', () => {
  let component: NewExpereinciaComponent;
  let fixture: ComponentFixture<NewExpereinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExpereinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExpereinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
