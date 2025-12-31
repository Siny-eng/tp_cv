import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Langues } from './langues';

describe('Langues', () => {
  let component: Langues;
  let fixture: ComponentFixture<Langues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Langues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Langues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
