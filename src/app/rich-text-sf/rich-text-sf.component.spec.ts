import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextSfComponent } from './rich-text-sf.component';

describe('RichTextSfComponent', () => {
  let component: RichTextSfComponent;
  let fixture: ComponentFixture<RichTextSfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichTextSfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
