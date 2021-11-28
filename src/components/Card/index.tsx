import React from 'react';
import './index.css';

interface Props {
  children: React.ReactNode,
}

function Card({ children }: Props) {
  return (
    <div className="Card">{children}</div>
  );
}

export default Card
