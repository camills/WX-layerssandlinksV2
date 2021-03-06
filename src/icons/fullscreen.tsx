//tslint:disable
import * as React from 'react';

export interface Props {
  color?: string;
  size?: number;
  onClick?: React.ReactEventHandler<SVGElement>
}

const Fullscreen: React.StatelessComponent<Props> = ({ color = 'white', size = 25, onClick }) => (
  <svg version="1.1" width={size} height={size} viewBox="0 0 512 640" onClick={onClick}>
    <g>
      <path fill={color} d="M169.6,2H27.4C13.4,2,2,13.4,2,27.4v142.2c0,5.6,4.5,10.2,10.2,10.2h30.5c5.6,0,10.2-4.6,10.2-10.2V88.7l88,88   c4,4,10.4,4,14.4,0l21.5-21.5c4-4,4-10.4,0-14.4l-88-88h80.9c5.6,0,10.2-4.6,10.2-10.2V12.2C179.8,6.5,175.3,2,169.6,2z"/>
      <path fill={color} d="M484.6,2H342.4c-5.6,0-10.2,4.5-10.2,10.2v30.5c0,5.6,4.5,10.2,10.2,10.2h80.9l-88,88c-4,4-4,10.4,0,14.4l21.5,21.5   c4,4,10.4,4,14.4,0l88-88v80.9c0,5.6,4.5,10.2,10.2,10.2h30.5c5.6,0,10.2-4.6,10.2-10.2V27.4C510,13.4,498.6,2,484.6,2z"/>
      <path fill={color} d="M169.6,459.2H88.7l88-88c4-4,4-10.4,0-14.4l-21.5-21.5c-4-4-10.4-4-14.4,0l-88,88v-80.9c0-5.6-4.5-10.2-10.2-10.2H12.2   c-5.6,0-10.2,4.5-10.2,10.2v142.2c0,14,11.4,25.4,25.4,25.4h142.2c5.6,0,10.2-4.5,10.2-10.2v-30.5   C179.8,463.7,175.3,459.2,169.6,459.2z"/>
      <path fill={color} d="M499.8,332.2h-30.5c-5.6,0-10.2,4.5-10.2,10.2v80.9l-88-88c-4-4-10.4-4-14.4,0l-21.5,21.5c-4,4-4,10.4,0,14.4l88,88h-80.9   c-5.6,0-10.2,4.5-10.2,10.2v30.5c0,5.6,4.5,10.2,10.2,10.2h142.2c14,0,25.4-11.4,25.4-25.4V342.4   C510,336.7,505.5,332.2,499.8,332.2z"/>
    </g>
  </svg>
);

export default Fullscreen;
