import React from 'react'

const Badge:React.FC<React.PropsWithChildren<{text ?: string}>> = ({children,text}) => {
  return (
    <div className='badge'>{text? text : children}</div>
  )
}

export default Badge