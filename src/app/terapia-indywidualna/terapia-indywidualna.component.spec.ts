import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaIndywidualnaComponent } from './terapia-indywidualna.component';

describe('TerapiaIndywidualnaComponent', () => {
  let component: TerapiaIndywidualnaComponent;
  let fixture: ComponentFixture<TerapiaIndywidualnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerapiaIndywidualnaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapiaIndywidualnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
