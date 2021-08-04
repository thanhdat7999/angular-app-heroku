import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentroomFormComponent } from './rentroom-form.component';

describe('RentroomFormComponent', () => {
  let component: RentroomFormComponent;
  let fixture: ComponentFixture<RentroomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentroomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
