import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

const { useFrame } = require('@react-three/fiber')

const CameraScroll = () => {
  const controls = useRef()

  useFrame(state => controls.current.update())

  return (
    <OrbitControls
      enablePan={false}
      enableRotate={false}
      enableZoom={false}
      ref={controls}
    />
  )
}

export default CameraScroll
