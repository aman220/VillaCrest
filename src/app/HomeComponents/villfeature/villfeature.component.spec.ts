import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillfeatureComponent } from './villfeature.component';

describe('VillfeatureComponent', () => {
  let component: VillfeatureComponent;
  let fixture: ComponentFixture<VillfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillfeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
