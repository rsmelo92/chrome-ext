import React from 'react'

type Props = {
  onClick: () => void,
  children: React.ReactNode,
  
}

function Button({
  onClick,
  children
}: Props) {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
