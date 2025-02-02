/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Gregory Shcherbakov (https://sketchfab.com/gostarts)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/handpaint-girl-01-b007aa325b2946ef9f044c8c9471d0b3
Title: Handpaint - Girl 01
*/
"use client";
import React, { useRef } from 'react'
// import { useGLTF } from "@react-three/drei";
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function HatModel(props) {
  const group = useRef();
  // Use React.memo for performance optimization
  const { nodes, materials, animations } = useGLTF(
    "/models/scene-transformed.glb"
  );
  // const { actions } = useAnimations(animations, group)
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={[2.8, 1.8, 1.8]}
      rotation={[0.4, -1, 0]}
      position={[0, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.girl02girl02_bodydwn_albedo}
          skeleton={nodes.Object_7.skeleton}
          scale={0.009}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.girl02girl02_head_albedo}
          skeleton={nodes.Object_9.skeleton}
          scale={0.009}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.girl02girl02_eyes_albedo}
          skeleton={nodes.Object_11.skeleton}
          scale={0.009}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials.girl02girl02_bodyup_albedo}
          skeleton={nodes.Object_13.skeleton}
          scale={0.009}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials.girl02girl02_hair_albedo}
          skeleton={nodes.Object_15.skeleton}
          scale={0.009}
        />
        <mesh
          name="Plane001_GROUND_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane001_GROUND_0.geometry}
          material={materials.GROUND}
          scale={0.009}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/scene-transformed.glb')




