import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdbpDetailComponent } from './wdbp-detail.component';

describe('WdbpDetailComponent', () => {
  let component: WdbpDetailComponent;
  let fixture: ComponentFixture<WdbpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WdbpDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WdbpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
