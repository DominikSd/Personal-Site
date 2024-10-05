import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertyComponent } from './oferty.component';

describe('OfertyComponent', () => {
  let component: OfertyComponent;
  let fixture: ComponentFixture<OfertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
