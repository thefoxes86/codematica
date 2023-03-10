const { forwardRef, useEffect } = require('react')

const Title = forwardRef((props, ref) => {
  useEffect(() => {}, [ref.current])
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
})

export default Title
