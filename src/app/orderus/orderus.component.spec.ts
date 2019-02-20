import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderusComponent } from './orderus.component';

describe('OrderusComponent', () => {
  let component: OrderusComponent;
  let fixture: ComponentFixture<OrderusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
