import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapieComponent } from './terapie.component';

describe('TerapieComponent', () => {
  let component: TerapieComponent;
  let fixture: ComponentFixture<TerapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerapieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
