import { ElementRef, Injectable } from '@angular/core';
import { WebGLRenderer } from 'three';

@Injectable()
export class NxThreeRendererService {
  public readonly renderer: WebGLRenderer = new WebGLRenderer();

  public constructor() {}

  public setSizeToContainer(webGlRef: ElementRef): void {
    this.renderer.setSize(webGlRef.nativeElement.clientWidth, webGlRef.nativeElement.clientHeight);
  }

  public appendDomElement(webGlRef: ElementRef): void {
    webGlRef.nativeElement.appendChild(this.renderer.domElement);
  }
}
