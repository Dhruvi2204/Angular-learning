import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroupsComponent } from './btn-groups.component';

describe('BtnGroupsComponent', () => {
  let component: BtnGroupsComponent;
  let fixture: ComponentFixture<BtnGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
