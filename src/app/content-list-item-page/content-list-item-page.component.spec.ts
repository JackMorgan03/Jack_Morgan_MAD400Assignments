import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListItemPageComponent } from './content-list-item-page.component';

describe('ContentListItemPageComponent', () => {
  let component: ContentListItemPageComponent;
  let fixture: ComponentFixture<ContentListItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentListItemPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentListItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
