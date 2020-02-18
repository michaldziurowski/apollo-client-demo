import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToListComponentComponent } from './add-to-list-component.component';

describe('AddToListComponentComponent', () => {
  let component: AddToListComponentComponent;
  let fixture: ComponentFixture<AddToListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
