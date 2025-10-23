import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutmorsComponent } from './coutmors.component';

describe('CoutmorsComponent', () => {
  let component: CoutmorsComponent;
  let fixture: ComponentFixture<CoutmorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoutmorsComponent]
    });
    fixture = TestBed.createComponent(CoutmorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
