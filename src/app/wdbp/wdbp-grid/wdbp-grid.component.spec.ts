import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdbpGridComponent } from './wdbp-grid.component';

describe('WdbpGridComponent', () => {
  let component: WdbpGridComponent;
  let fixture: ComponentFixture<WdbpGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WdbpGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WdbpGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
