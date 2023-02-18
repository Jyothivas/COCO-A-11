import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchtempComponent } from './ngswitchtemp.component';

describe('NgswitchtempComponent', () => {
  let component: NgswitchtempComponent;
  let fixture: ComponentFixture<NgswitchtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchtempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
