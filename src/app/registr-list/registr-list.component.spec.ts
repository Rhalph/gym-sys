import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrListComponent } from './registr-list.component';

describe('RegistrListComponent', () => {
  let component: RegistrListComponent;
  let fixture: ComponentFixture<RegistrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
