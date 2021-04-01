import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuPedidoComponent } from './tu-pedido.component';

describe('TuPedidoComponent', () => {
  let component: TuPedidoComponent;
  let fixture: ComponentFixture<TuPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
