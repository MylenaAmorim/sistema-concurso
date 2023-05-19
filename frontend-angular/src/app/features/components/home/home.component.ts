import { Component, OnInit } from '@angular/core';
import { ContestService } from 'src/app/core/services/contest.service';
import { HelpListInfosComponent } from 'src/app/shared/helpers/help-list-infos/help-list-infos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ContestService]
})

export class HomeComponent implements OnInit{
  constructor(
    private contestService: ContestService,
    private helpListInfosComponent: HelpListInfosComponent
  ) {}

  async ngOnInit() {
    if (!sessionStorage.getItem('estados')) {
      await this.helpListInfosComponent.getStates();
    }
  }

  
}
