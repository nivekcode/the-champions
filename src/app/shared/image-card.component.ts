import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  standalone: true,
  selector: 'image-card',
  template: `
      <div class="image-card">
          <img class="image" [src]="imageSrc"/>
          <div class="title">{{ title }}</div>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ImageCardComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) imageSrc!: string;
}
