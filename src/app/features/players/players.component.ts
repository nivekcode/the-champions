import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  Injector,
  Input,
  OnInit,
  runInInjectionContext,
  Signal
} from "@angular/core";
import {TeamsService} from "../../core/teams.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {Player} from "../../core/teams.model";
import ImageCardComponent from "../../shared/image-card.component";

@Component({
  standalone: true,
  selector: 'players',
  template: `
      <div class="grid">
          @for (player of players();track $index) {
              <image-card [title]="player.name" [imageSrc]="player.image"/>
          }
      </div>
  `,
  imports: [
    ImageCardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PlayersComponent implements OnInit {
  private teamsService = inject(TeamsService);
  @Input({required: true}) teamId!: number;
  players!: Signal<Player[]>;

  private injector = inject(Injector);

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.players = toSignal(this.teamsService.getPlayers(this.teamId), {
        initialValue: []
      });
    });
  }
}
