import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoradaOnlineComponent } from './porada-online.component';

describe('PoradaOnlineComponent', () => {
  let component: PoradaOnlineComponent;
  let fixture: ComponentFixture<PoradaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoradaOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoradaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
