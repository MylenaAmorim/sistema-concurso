import { Component, Injectable } from '@angular/core';
import { ContestService } from 'src/app/core/services/contest.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-help-list-infos',
  templateUrl: './help-list-infos.component.html',
  styleUrls: ['./help-list-infos.component.css'],
  providers: [ContestService]
})

export class HelpListInfosComponent {
  constructor(
    private contestService: ContestService
  ) {}

  async ngOnInit() {
  }
  
  async getStates() {
    await this.contestService.getStates().then(res => {
      sessionStorage.setItem('estados', JSON.stringify(res));
    });
  }
}
