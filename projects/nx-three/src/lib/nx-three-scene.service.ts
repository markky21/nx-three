import { Injectable } from '@angular/core';
import {Scene} from 'three';

@Injectable()
export class NxThreeSceneService {
  public readonly scene: Scene = new Scene();

  public constructor() {}
}
