import {WebGLRenderTargetCube} from './../renderers/WebGLRenderTargetCube'
import {Scene} from './../scenes/Scene'
import {WebGLRenderer} from './../renderers/WebGLRenderer'
import {Object3D} from './../core/Object3D'

export class CubeCamera extends Object3D {
	constructor(near?: f32, far?: f32, cubeResolution?: f32)

	type: 'CubeCamera'

	renderTarget: WebGLRenderTargetCube

	/**
	 * @deprecated Use {@link CubeCamera#update .update()} instead
	 */
	//updateCubeMap(renderer: Renderer, scene: Scene): void;

	update(renderer: WebGLRenderer, scene: Scene): void
}
