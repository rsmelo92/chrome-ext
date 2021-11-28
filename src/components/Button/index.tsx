import React from 'react'
import clsx from 'clsx';

import Spinner from '../../components/spinner';
import './index.css';

type Props = {
  onClick: () => void,
  children: React.ReactNode,
  type?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large',
  isLoading?: boolean,
}

function Button({ 
    onClick, 
    children, 
    type = 'primary', 
    size = 'medium',
    isLoading = false,
  }: Props) {
  return (
    <button disabled={isLoading} className={clsx('Button', type, size)} onClick={onClick}>
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
