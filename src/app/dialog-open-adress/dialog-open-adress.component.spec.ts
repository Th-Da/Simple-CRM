import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpenAdressComponent } from './dialog-open-adress.component';

describe('DialogOpenAdressComponent', () => {
  let component: DialogOpenAdressComponent;
  let fixture: ComponentFixture<DialogOpenAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOpenAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOpenAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
