import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdbpComponent } from './wdbp.component';

describe('WdbpComponent', () => {
  let component: WdbpComponent;
  let fixture: ComponentFixture<WdbpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WdbpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WdbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
