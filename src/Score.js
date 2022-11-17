import React, {useState} from 'react';
import './Score.css';

const Score = props => {
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    return(
        <div className='score'>
            <h4 className='playerX'>Player_X: {scoreX}</h4>
            <h4 className='playerO'>Player_O: {scoreO}</h4>
        </div>
    )
};

export default Score;