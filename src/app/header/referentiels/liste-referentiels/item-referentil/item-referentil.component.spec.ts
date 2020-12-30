import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReferentilComponent } from './item-referentil.component';

describe('ItemReferentilComponent', () => {
  let component: ItemReferentilComponent;
  let fixture: ComponentFixture<ItemReferentilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReferentilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReferentilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
