import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalVinListPage } from './modal-vin-list.page';

describe('ModalVinListPage', () => {
  let component: ModalVinListPage;
  let fixture: ComponentFixture<ModalVinListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVinListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalVinListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
