import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingListComponent } from './pending-list.component';

describe('PendingTaskComponent', () => {
  let component: PendingListComponent;
  let fixture: ComponentFixture<PendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PendingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
