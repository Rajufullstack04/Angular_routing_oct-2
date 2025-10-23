import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustmorsDitaliesComponent } from './coustmors-ditalies.component';

describe('CoustmorsDitaliesComponent', () => {
  let component: CoustmorsDitaliesComponent;
  let fixture: ComponentFixture<CoustmorsDitaliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoustmorsDitaliesComponent]
    });
    fixture = TestBed.createComponent(CoustmorsDitaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
