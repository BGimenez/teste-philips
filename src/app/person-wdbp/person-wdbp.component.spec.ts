import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonWdbpComponent } from './person-wdbp.component';

describe('PersonWdbpComponent', () => {
  let component: PersonWdbpComponent;
  let fixture: ComponentFixture<PersonWdbpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonWdbpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonWdbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
