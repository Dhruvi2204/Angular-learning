import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedServiceExampleComponent } from './nested-service-example.component';

describe('NestedServiceExampleComponent', () => {
  let component: NestedServiceExampleComponent;
  let fixture: ComponentFixture<NestedServiceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedServiceExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
