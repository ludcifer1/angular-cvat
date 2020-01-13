import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageObjectHolderComponent } from './image-object-holder.component';

describe('ImageObjectHolderComponent', () => {
  let component: ImageObjectHolderComponent;
  let fixture: ComponentFixture<ImageObjectHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageObjectHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageObjectHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
