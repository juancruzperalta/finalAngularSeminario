import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPokComponent } from './tipos-pok.component';

describe('TiposPokComponent', () => {
  let component: TiposPokComponent;
  let fixture: ComponentFixture<TiposPokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposPokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposPokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
