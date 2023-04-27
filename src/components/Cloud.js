import Image from 'next/image'
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import wordsList from '@/utils/words'
import { Text } from '@react-three/drei'
import { gsap } from 'gsap'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = {
    fontSize: 0.25,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = e => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    console.log('props', ref.current)
    ref.current.color = `#99000000`
    gsap.fromTo(
      ref.current.position,
      { z: -1000 },
      {
        z: props.position.z,
        duration: 2,
        delay: props.index * 0.2,
        ease: 'power2.out',
      }
    )
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
  })
  return (
    <Text
      ref={ref}
      onClick={() => console.log('clicked')}
      {...props}
      {...fontProps}
      children={children}
    />
  )
}

const Cloud = ({ count = 4, radius = 20 }) => {
  // Create a count x count random words with spherical distribution
  const mousePosition = useRef([0, 0])
  const { camera } = useThree()
  const material = new THREE.Material()

  const words = useMemo(() => {
    const temp = []
    for (let i = 1; i < wordsList.length + 1; i++)
      temp.push([
        new THREE.Vector3(
          Math.random() * 14,
          Math.random() * 6,
          Math.random() * 2
        ),
        wordsList[i - 1],
      ])

    return temp
  }, [count, radius])

  const mouseMovement = e => {
    mousePosition.current = [e.clientX, e.clientY]
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseMovement)

    material.visible = false
    return () => document.removeEventListener('mousemove', mouseMovement)
  }, [])

  useFrame(() => {
    gsap.to(camera.position, {
      x: mousePosition.current[0] / 1000,
      y: mousePosition.current[1] / 1000,
      duration: 4.5,
      ease: 'power2.out',
    })
  })

  return (
    <mesh position={[-8, -3, 1]}>
      <planeBufferGeometry args={[1.9, 1]} />
      <meshBasicMaterial
        attach="material"
        color="black"
        opacity={0}
        transparent
      />
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} index={index} children={word} />
      ))}
    </mesh>
  )
}

export default Cloud
