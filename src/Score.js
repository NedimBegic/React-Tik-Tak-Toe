import React, { useState } from 'react';
import './Score.css';

const Score = props => {   

    return (
        <div className='score'>
            <h4 className='playerX'>Player_X: &nbsp;&nbsp;{props.pointX}</h4>
            <h4 className='playerO'>Player_O: &nbsp;&nbsp;{props.pointO}</h4>
        </div>
    )
};

export default Score;