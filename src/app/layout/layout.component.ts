import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  standalone: true,
  selector: 'app-layout',
  template: `
      <mat-toolbar>
          The champions
      </mat-toolbar>
  `,
  imports: [
    MatToolbarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}
