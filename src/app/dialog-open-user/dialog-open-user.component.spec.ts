import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpenUserComponent } from './dialog-open-user.component';

describe('DialogOpenUserComponent', () => {
  let component: DialogOpenUserComponent;
  let fixture: ComponentFixture<DialogOpenUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOpenUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOpenUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
