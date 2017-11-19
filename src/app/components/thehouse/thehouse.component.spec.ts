import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThehouseComponent } from './thehouse.component';

describe('ThehouseComponent', () => {
  let component: ThehouseComponent;
  let fixture: ComponentFixture<ThehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
