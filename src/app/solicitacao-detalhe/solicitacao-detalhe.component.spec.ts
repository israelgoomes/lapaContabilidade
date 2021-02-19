import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoDetalheComponent } from './solicitacao-detalhe.component';

describe('SolicitacaoDetalheComponent', () => {
  let component: SolicitacaoDetalheComponent;
  let fixture: ComponentFixture<SolicitacaoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
