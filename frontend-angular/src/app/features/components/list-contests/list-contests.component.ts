import { Component, OnInit } from '@angular/core';
import { ContestService } from 'src/app/core/services/contest.service';
import { HelpListInfosComponent } from 'src/app/shared/helpers/help-list-infos/help-list-infos.component';

@Component({
  selector: 'app-list-contests',
  templateUrl: './list-contests.component.html',
  styleUrls: ['./list-contests.component.css'],
  providers: [ContestService]
})
export class ListContestsComponent implements OnInit{

  states: any;

  constructor(
    private contestService: ContestService,
    private helpListInfosComponent: HelpListInfosComponent
  ) { }

  async ngOnInit() {
    if (!sessionStorage.getItem('estados')) {
      await this.helpListInfosComponent.getStates();
    }
  }

}
