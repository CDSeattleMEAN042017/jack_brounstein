import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatsListComponent } from './rats-list.component';

describe('RatsListComponent', () => {
  let component: RatsListComponent;
  let fixture: ComponentFixture<RatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
