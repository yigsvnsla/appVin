import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFormPage } from './modal-form.page';

describe('ModalFormPage', () => {
  let component: ModalFormPage;
  let fixture: ComponentFixture<ModalFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
