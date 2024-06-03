import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhochooseComponent } from './whochoose.component';

describe('WhochooseComponent', () => {
  let component: WhochooseComponent;
  let fixture: ComponentFixture<WhochooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhochooseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhochooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
