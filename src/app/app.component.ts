import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { NxThreeComponent } from '../../projects/nx-three/src/lib/nx-three.component';
import { NxThreeService } from '../../projects/nx-three/src/lib/nx-three.service';
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('three', { static: false })
  private threeWrapper: NxThreeComponent;

  private threeService: NxThreeService;

  public title = 'angular-three-js';
  public mesh: Mesh;

  public constructor() {}

  public ngAfterViewInit(): void {
    this.threeService = this.threeWrapper.nxThreeService;
    this.addCube();
    this.rotateCube();
  }

  public addCube(): void {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: '#032432' });

    this.mesh = new Mesh(geometry, material);
    this.threeService.scene.add(this.mesh);

    this.threeService.camera.position.z = 5;
  }

  public rotateCube() {
    this.threeService.animationFrame$.subscribe(() => {
      this.mesh.geometry.rotateX(0.01);
      this.mesh.geometry.rotateY(0.01);
    });
  }
}
