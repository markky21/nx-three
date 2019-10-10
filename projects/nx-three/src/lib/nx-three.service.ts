import { ElementRef, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, throttleTime } from 'rxjs/operators';

import { NxThreeCameraService } from './nx-three-camera.service';
import { NxThreeRendererService } from './nx-three-renderer.service';
import { NxThreeSceneService } from './nx-three-scene.service';
import { resizeObserverStream } from './nx-three.utils';

@Injectable()
export class NxThreeService {
  private readonly _animationFrame$ = new Subject<number>();
  private readonly _destroyed$ = new Subject<null>();
  private _webGlRef: ElementRef;
  private _requestAnimationFrameId: number;

  public get scene() {
    return this.nxThreeSceneService.scene;
  }

  public get camera() {
    return this.nxThreeCameraService.camera;
  }

  public get renderer() {
    return this.nxThreeRendererService.renderer;
  }

  public readonly destroyed$ = this._destroyed$.asObservable();
  public readonly animationFrame$ = this._animationFrame$.asObservable();

  public constructor(
    private nxThreeCameraService: NxThreeCameraService,
    private nxThreeRendererService: NxThreeRendererService,
    private nxThreeSceneService: NxThreeSceneService,
    private ngZone: NgZone
  ) {}

  public onInit(webGlRef: ElementRef): void {
    this._webGlRef = webGlRef;

    this.nxThreeRendererService.setSizeToContainer(webGlRef);
    this.nxThreeRendererService.appendDomElement(webGlRef);
    this.nxThreeCameraService.onInit(webGlRef);

    this.ngZone.runOutsideAngular(() => this.animationFrame(0));
  }

  public onDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
    this._animationFrame$.complete();
    cancelAnimationFrame(this._requestAnimationFrameId);
  }

  public animationFrame(time: number): void {
    this._animationFrame$.next(time);
    this.renderer.render(this.scene, this.camera);
    this._requestAnimationFrameId = requestAnimationFrame(t => this.animationFrame(t));
  }

  public onWindowResize(webGlRef: ElementRef): void {
    this.nxThreeRendererService.setSizeToContainer(webGlRef);
    this.nxThreeCameraService.setAspectToContainer(webGlRef);
  }

  public onContainerResize(webGlRef: ElementRef): void {
    resizeObserverStream(webGlRef.nativeElement)
      .pipe(
        takeUntil(this._destroyed$),
        throttleTime(1000 / 60),
        tap(event => this.onContainerResize(webGlRef))
      )
      .subscribe();
  }
}
