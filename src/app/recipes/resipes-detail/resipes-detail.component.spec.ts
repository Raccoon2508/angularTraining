import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResipesDetailComponent } from './resipes-detail.component';

describe('ResipesDetailComponent', () => {
  let component: ResipesDetailComponent;
  let fixture: ComponentFixture<ResipesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResipesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResipesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
