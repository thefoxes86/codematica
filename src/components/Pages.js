import { useThree, useFrame, OrbitControls } from '@react-three/fiber'
import Page from './Page'
import Cloud from './Cloud'
import { Fragment, useRef } from 'react'

const Pages = () => {
  const { height } = useThree(state => state.viewport)
  const ref = useRef(0)

  useFrame(() => {
    ref.current += 0.5
  })

  return (
    <Fragment>
      <Page position={[0, height * 0, 0]}>
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Cloud count={8} radius={23} />
      </Page>
      <Page position={[0, height * 1, 0]}></Page>
      <Page position={[0, height * 2, 0]}></Page>
    </Fragment>
  )
}

export default Pages
