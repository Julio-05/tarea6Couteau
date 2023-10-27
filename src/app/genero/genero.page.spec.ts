import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {OnInit} from '@angular/core';
import { GeneroPage } from './genero.page';
import { IonicModule } from '@ionic/angular';

describe('GeneroPage', () => {
  let component: GeneroPage;
  let fixture: ComponentFixture<GeneroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GeneroPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
