import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryInputComponent } from './dictionary-input.component';

describe('DictionaryInputComponent', () => {
  let component: DictionaryInputComponent;
  let fixture: ComponentFixture<DictionaryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
