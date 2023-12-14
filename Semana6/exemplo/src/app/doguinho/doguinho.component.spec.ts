import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoguinhoComponent } from './doguinho.component';

describe('DoguinhoComponent', () => {
  let component: DoguinhoComponent;
  let fixture: ComponentFixture<DoguinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoguinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoguinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
