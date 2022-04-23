import * as THREE from 'three'
import React, { useRef,} from 'react'
import {  useFrame } from '@react-three/fiber'

type BallProps = {
    number: number,
}

const Ball =(props: JSX.IntrinsicElements['mesh'] & BallProps )=> {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => (ref.current.rotation.z += 0.01))
  
//   const texture = new THREE.TextureLoader().load(require(`../../assets/${props.number}.png`))
  return (
    <mesh
      {...props}
      ref={ref}
      >
      <sphereGeometry  args={[1]} />
      <meshStandardMaterial  color={'white'} />
    </mesh>
  )
}
export default Ball