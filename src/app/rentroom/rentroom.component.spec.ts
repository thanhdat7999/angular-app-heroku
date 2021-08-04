import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentroomComponent } from './rentroom.component';

describe('RentroomComponent', () => {
  let component: RentroomComponent;
  let fixture: ComponentFixture<RentroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
