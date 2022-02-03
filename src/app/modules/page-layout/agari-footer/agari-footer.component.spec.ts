import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgariFooterComponent } from './agari-footer.component';

describe('AgariFooterComponent', () => {
  let component: AgariFooterComponent;
  let fixture: ComponentFixture<AgariFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgariFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgariFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
