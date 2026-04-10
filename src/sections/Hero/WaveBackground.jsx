import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const dotTexture = (() => {
	const c = document.createElement('canvas');
	c.width = 32;
	c.height = 32;
	const ctx = c.getContext('2d');
	const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
	grad.addColorStop(0,    'rgba(255,255,255,1)');
	grad.addColorStop(0.4,  'rgba(255,255,255,0.8)');
	grad.addColorStop(1,    'rgba(255,255,255,0)');
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, 32, 32);
	return new THREE.CanvasTexture(c);
})();

function Wave() {
	const ref = useRef();

	const size = 20;
	const divisions = 160;

	const positions = useMemo(() => {
		const arr = new Float32Array(divisions * divisions * 3);

		let i = 0;
		for (let x = 0; x < divisions; x++) {
			for (let y = 0; y < divisions; y++) {
				arr[i++] = (x / divisions - 0.5) * size;
				arr[i++] = 0;
				arr[i++] = (y / divisions - 0.5) * size;
			}
		}

		return arr;
	}, []);

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime() * 0.3;
		const pos = ref.current.geometry.attributes.position.array;

		let i = 0;
		for (let x = 0; x < divisions; x++) {
			for (let y = 0; y < divisions; y++) {
				const wave = Math.sin(x * 0.15 + t * 1.2) + Math.sin(y * 0.15 + t * 3.2);

				pos[i + 1] = wave * 0.25;

				i += 3;
			}
		}

		ref.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<points ref={ref} rotation={[-Math.PI / 3.5, 0, 0]}>
			<bufferGeometry>
				<bufferAttribute attach='attributes-position' array={positions} count={positions.length / 3} itemSize={3} />
			</bufferGeometry>

			<pointsMaterial
				size={0.065}
				color='#2D7CF6'
				transparent
				opacity={1}
				blending={THREE.AdditiveBlending}
				depthWrite={false}
				sizeAttenuation
				map={dotTexture}
			/>
		</points>
	);
}

export default function WaveBackground() {
	return (
		<Canvas camera={{ position: [0, 3, 8], fov: 55 }} gl={{ alpha: true }}>
			<Wave />
		</Canvas>
	);
}
