import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgariHeaderComponent } from './agari-header.component';

describe('AgariHeaderComponent', () => {
  let component: AgariHeaderComponent;
  let fixture: ComponentFixture<AgariHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgariHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgariHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
