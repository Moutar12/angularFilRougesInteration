import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeReferentielsComponent } from './edite-referentiels.component';

describe('EditeReferentielsComponent', () => {
  let component: EditeReferentielsComponent;
  let fixture: ComponentFixture<EditeReferentielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeReferentielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeReferentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
