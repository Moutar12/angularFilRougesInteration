import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeGroupeCompetenceComponent } from './edite-groupe-competence.component';

describe('EditeGroupeCompetenceComponent', () => {
  let component: EditeGroupeCompetenceComponent;
  let fixture: ComponentFixture<EditeGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
