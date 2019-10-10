import { ElementRef, Injectable } from '@angular/core';
import { PerspectiveCamera } from 'three';

@Injectable()
export class NxThreeCameraService {
  public camera: PerspectiveCamera;

  public constructor() {}

  public onInit(webGlRef: ElementRef): void {
    this.camera = new PerspectiveCamera(75, webGlRef.nativeElement.clientWidth / webGlRef.nativeElement.clientHeight, 0.1, 1000);
  }

  public setAspectToContainer(webGlRef: ElementRef): void {
    this.camera.aspect = webGlRef.nativeElement.clientWidth / webGlRef.nativeElement.clientHeight;
    this.camera.updateProjectionMatrix();
  }
}
