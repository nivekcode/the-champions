import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-layout',
  template: `
      <nav>
          <h1>The champions</h1>
      </nav>
      <div class="container">
      <router-outlet/>
      </div>
  `,
  imports: [
    MatToolbarModule,
    RouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}
