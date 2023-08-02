import React from 'react'
import { Icon } from '@mui/material';

const IconSwitch = ({ onSwitch, icon }) => {
  return (
      <div className='icon-container'>
          <Icon onClick={onSwitch}>{icon}</Icon>
      </div>
  )
}

export default IconSwitch;
