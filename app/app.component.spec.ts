import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('Should define a list object', () => {
    expect(com.items).toBeDefined();
  });

  it('Should have 3 items in list', () => {
    expect(com.items.length).toBe(3);
  });

  it('List items should be as expected', () => {
    expect(com.items).toEqual(['test','execute','refactor']);
  });

});
