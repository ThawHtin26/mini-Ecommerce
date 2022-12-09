import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartstatusComponentComponent } from './cartstatus-component.component';

describe('CartstatusComponentComponent', () => {
  let component: CartstatusComponentComponent;
  let fixture: ComponentFixture<CartstatusComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartstatusComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartstatusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
