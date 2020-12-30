import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesTagsComponent } from './groupes-tags.component';

describe('GroupesTagsComponent', () => {
  let component: GroupesTagsComponent;
  let fixture: ComponentFixture<GroupesTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupesTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
