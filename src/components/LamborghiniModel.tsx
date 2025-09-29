'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Loader } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/3d-models/lamborghini.glb');
  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
}

function FallbackModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 1, 4]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}

const LamborghiniModel = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<FallbackModel />}>
          {/* Ambient lighting for overall illumination */}
          <ambientLight intensity={0.8} />
          
          {/* Main directional lights */}
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, 5, 5]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[0, -10, 5]} intensity={1.0} color="#ffffff" />
          
          {/* Point lights for dramatic effect */}
          <pointLight position={[5, 5, 5]} intensity={1.0} color="#4ade80" distance={20} />
          <pointLight position={[-5, 5, 5]} intensity={1.0} color="#38bdf8" distance={20} />
          <pointLight position={[0, 0, 10]} intensity={0.8} color="#ffffff" distance={15} />
          
          {/* Spot lights for focused illumination */}
          <spotLight 
            position={[0, 15, 0]} 
            intensity={1.2} 
            angle={0.4} 
            penumbra={0.5}
            color="#ffffff"
            castShadow
          />
          <spotLight 
            position={[8, 8, 8]} 
            intensity={0.8} 
            angle={0.3} 
            penumbra={0.3}
            color="#fbbf24"
          />
          <spotLight 
            position={[-8, 8, 8]} 
            intensity={0.8} 
            angle={0.3} 
            penumbra={0.3}
            color="#a78bfa"
          />
          
          {/* Rim lighting for edge definition */}
          <directionalLight position={[0, 0, -10]} intensity={0.6} color="#ffffff" />
          
          <Model />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LamborghiniModel;
    