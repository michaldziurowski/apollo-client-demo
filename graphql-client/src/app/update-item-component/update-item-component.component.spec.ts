import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemComponentComponent } from './update-item-component.component';

describe('UpdateItemComponentComponent', () => {
  let component: UpdateItemComponentComponent;
  let fixture: ComponentFixture<UpdateItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
