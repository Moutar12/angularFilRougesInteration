import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDesPromosComponent } from './historique-des-promos.component';

describe('HistoriqueDesPromosComponent', () => {
  let component: HistoriqueDesPromosComponent;
  let fixture: ComponentFixture<HistoriqueDesPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueDesPromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueDesPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
