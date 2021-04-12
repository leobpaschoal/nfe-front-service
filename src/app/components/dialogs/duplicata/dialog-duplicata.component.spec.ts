import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDuplicataComponent } from './dialog-duplicata.component';

describe('DialogComponent', () => {
  let component: DialogDuplicataComponent;
  let fixture: ComponentFixture<DialogDuplicataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogDuplicataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDuplicataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
