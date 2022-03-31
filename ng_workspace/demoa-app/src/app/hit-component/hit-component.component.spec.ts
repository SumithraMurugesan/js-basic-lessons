import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitComponentComponent } from './hit-component.component';

describe('HitComponentComponent', () => {
  let component: HitComponentComponent;
  let fixture: ComponentFixture<HitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
