import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaGrupowaComponent } from './terapia-grupowa.component';

describe('TerapiaGrupowaComponent', () => {
  let component: TerapiaGrupowaComponent;
  let fixture: ComponentFixture<TerapiaGrupowaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerapiaGrupowaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapiaGrupowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
