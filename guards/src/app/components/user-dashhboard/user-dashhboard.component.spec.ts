import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashhboardComponent } from './user-dashhboard.component';

describe('UserDashhboardComponent', () => {
  let component: UserDashhboardComponent;
  let fixture: ComponentFixture<UserDashhboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashhboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashhboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
