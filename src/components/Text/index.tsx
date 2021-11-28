import React from 'react'

type Props = {
  children: React.ReactNode,
}

function Text({ children }: Props) {
  return (
    <p>{children}</p>
  );
}

export default Text;
