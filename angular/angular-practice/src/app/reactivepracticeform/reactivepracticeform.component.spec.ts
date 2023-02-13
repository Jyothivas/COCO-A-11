import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivepracticeformComponent } from './reactivepracticeform.component';

describe('ReactivepracticeformComponent', () => {
  let component: ReactivepracticeformComponent;
  let fixture: ComponentFixture<ReactivepracticeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivepracticeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivepracticeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
