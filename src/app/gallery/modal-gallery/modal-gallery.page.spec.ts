import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalGalleryPage } from './modal-gallery.page';

describe('ModalGalleryPage', () => {
  let component: ModalGalleryPage;
  let fixture: ComponentFixture<ModalGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGalleryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
