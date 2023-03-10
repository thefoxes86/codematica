import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const { useRef } = require('react')

const Title = props => {
  const ref = useRef()

  const scroll = useScroll()
  useFrame(() => {
    const r2 = scroll.range(1 / 3, 1 / 3)
    console.log('REF', r2)
    ref.current.left = `${r2 * 100} px`
  })
  return (
    <span className="scroll--right">
      <h1
        ref={ref}
        style={{
          left: 0,
          overflow: 'hidden',
          width: '100vw',
          position: 'absolute',
          top: '140vh',
          fontSize: '9.5rem',
          color: 'white',
        }}
      >
        {props.children}
      </h1>
    </span>
  )
}

export default Title
