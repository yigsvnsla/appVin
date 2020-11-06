import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VinListPage } from './vin-list.page';

describe('VinListPage', () => {
  let component: VinListPage;
  let fixture: ComponentFixture<VinListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VinListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
