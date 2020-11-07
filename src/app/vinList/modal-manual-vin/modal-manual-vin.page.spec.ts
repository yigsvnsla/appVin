import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalManualVinPage } from './modal-manual-vin.page';

describe('ModalManualVinPage', () => {
  let component: ModalManualVinPage;
  let fixture: ComponentFixture<ModalManualVinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalManualVinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalManualVinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
