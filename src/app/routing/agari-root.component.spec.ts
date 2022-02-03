import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgariRootComponent } from './agari-root.component';

describe('AgariRootComponent', () => {
  let component: AgariRootComponent;
  let fixture: ComponentFixture<AgariRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgariRootComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgariRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
