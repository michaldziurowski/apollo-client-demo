import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveItemComponentComponent } from './remove-item-component.component';

describe('RemoveItemComponentComponent', () => {
  let component: RemoveItemComponentComponent;
  let fixture: ComponentFixture<RemoveItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
