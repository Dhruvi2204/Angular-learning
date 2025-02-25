import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashhboardComponent } from './admin-dashhboard.component';

describe('AdminDashhboardComponent', () => {
  let component: AdminDashhboardComponent;
  let fixture: ComponentFixture<AdminDashhboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashhboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashhboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
