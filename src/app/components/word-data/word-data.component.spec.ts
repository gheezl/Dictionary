import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDataComponent } from './word-data.component';

describe('WordDataComponent', () => {
  let component: WordDataComponent;
  let fixture: ComponentFixture<WordDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
