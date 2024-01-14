import {Component, inject} from "@angular/core";
import {TeamsService} from "../../core/teams.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {JsonPipe} from "@angular/common";
import ImageCardComponent from "../../shared/image-card.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {Router} from "@angular/router";

@Component({
  standalone: true,
  selector: 'clubs',
  imports: [
    JsonPipe,
    ImageCardComponent,
    MatGridListModule
  ],
  template: `
      <div class="grid">
          @for (team of teams();track $index) {
              <image-card (click)="showPlayers(team.id)" [title]="team.name" [imageSrc]="team.logo"/>
          }
      </div>
  `
})
export default class TeamsComponent {
  private teamService = inject(TeamsService);
  private router = inject(Router);
  teams = toSignal(this.teamService.getTeams());

  showPlayers(id: number){
    this.router.navigate(['players', id]);
  }

}
