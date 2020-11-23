import { PageListConfig } from './../micellaneals/interface/configService/page-list-config';
import { ListComponentsConfigService } from './../micellaneals/services/configService/list-components-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.page.html',
  styleUrls: ['./page-config.page.scss'],
})
export class PageConfigPage implements OnInit {

  constructor(
    private ListComponentsConfigService: ListComponentsConfigService
  ) { }

  listConfig : PageListConfig[];

  ngOnInit() {
    this.listConfig = this.ListComponentsConfigService.getPageListConfig();
  }

  showDetails(){
    
  }
}
