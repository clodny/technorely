import React from 'react';
import './PageTitle.scss';

export default function PageTitle(props) {
  return (
    <div className='page-title'>{props.children}</div>
  )
}