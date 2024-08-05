import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirComponent } from './structure-dir.component';

describe('StructureDirComponent', () => {
  let component: StructureDirComponent;
  let fixture: ComponentFixture<StructureDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
