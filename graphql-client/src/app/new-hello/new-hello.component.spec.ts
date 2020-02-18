import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHelloComponent } from './new-hello.component';

describe('NewHelloComponent', () => {
  let component: NewHelloComponent;
  let fixture: ComponentFixture<NewHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
