const { ScrollControls, Scroll, useScroll } = require('@react-three/drei')
const { useRef, useEffect } = require('react')
import Pages from '@/components/Pages'
import { useFrame } from '@react-three/fiber'
import Title from './Title'

const Layout = () => {
  return (
    <ScrollControls pages={1}>
      <Scroll>
        <Pages />
      </Scroll>
      <Scroll html>{/* <Title>industry 4.0</Title> */}</Scroll>
    </ScrollControls>
  )
}

export default Layout
