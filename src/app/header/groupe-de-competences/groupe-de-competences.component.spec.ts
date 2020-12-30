import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeDeCompetencesComponent } from './groupe-de-competences.component';

describe('GroupeDeCompetencesComponent', () => {
  let component: GroupeDeCompetencesComponent;
  let fixture: ComponentFixture<GroupeDeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeDeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeDeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
