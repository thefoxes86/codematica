const { ScrollControls, Scroll, useScroll } = require('@react-three/drei')
const { useRef, useEffect } = require('react')
import Pages from '@/components/Pages'
import { useFrame } from '@react-three/fiber'
import Title from './Title'

const Layout = () => {
  const ref = useRef()

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <Pages refText={ref} />
      </Scroll>
      <Scroll html>
        <Title ref={ref}>industry 4.0</Title>
      </Scroll>
    </ScrollControls>
  )
}

export default Layout
