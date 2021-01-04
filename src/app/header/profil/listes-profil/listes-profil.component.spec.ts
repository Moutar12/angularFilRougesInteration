import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesProfilComponent } from './listes-profil.component';

describe('ListesProfilComponent', () => {
  let component: ListesProfilComponent;
  let fixture: ComponentFixture<ListesProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
