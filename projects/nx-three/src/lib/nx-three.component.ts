import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ResizeObserverCallback } from 'resize-observer/lib/ResizeObserverCallback';

import { NxThreeCameraService } from './nx-three-camera.service';
import { NxThreeRendererService } from './nx-three-renderer.service';
import { NxThreeSceneService } from './nx-three-scene.service';
import { NxThreeService } from './nx-three.service';

@Component({
  selector: 'lib-nx-three',
  template: `
    <section class="WebGL-wrapper" #webGL></section>
  `,
  styles: [
    `
      .WebGL-wrapper {
        display: block;
        height: 100%;
      }
    `
  ],
  providers: [NxThreeSceneService, NxThreeRendererService, NxThreeCameraService, NxThreeService]
})
export class NxThreeComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() public updateOnResize: boolean = true;

  @Output('resized') public readonly resizedEventEmitter = new EventEmitter<ResizeObserverCallback>(true);

  @ViewChild('webGL', { static: false })
  private webGlRef: ElementRef;

  public constructor(public nxThreeService: NxThreeService, private elementRef: ElementRef) {}

  public ngOnInit(): void {}

  public ngAfterViewInit() {
    this.nxThreeService.onInit(this.webGlRef);
  }

  public ngOnDestroy(): void {
    this.nxThreeService.onDestroy();
  }

  @HostListener('window:resize', ['$event.target'])
  public onWindowResize() {
    this.nxThreeService.onWindowResize(this.webGlRef);
  }
}
