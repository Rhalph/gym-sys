import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegistrComponent } from './create-registr.component';

describe('CreateRegistrComponent', () => {
  let component: CreateRegistrComponent;
  let fixture: ComponentFixture<CreateRegistrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegistrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRegistrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
