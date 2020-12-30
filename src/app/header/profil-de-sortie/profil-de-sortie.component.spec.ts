import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDeSortieComponent } from './profil-de-sortie.component';

describe('ProfilDeSortieComponent', () => {
  let component: ProfilDeSortieComponent;
  let fixture: ComponentFixture<ProfilDeSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilDeSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilDeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
