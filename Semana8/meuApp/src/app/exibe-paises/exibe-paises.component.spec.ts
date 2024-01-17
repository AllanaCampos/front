import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibePaisesComponent } from './exibe-paises.component';

describe('ExibePaisesComponent', () => {
  let component: ExibePaisesComponent;
  let fixture: ComponentFixture<ExibePaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibePaisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
