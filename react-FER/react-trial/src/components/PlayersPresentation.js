import React from 'react';

export default function PlayersPresentation({ a }) {

    return (
        <div className='container'>
            <div className='row'>
                {a.map((player) => (
                    <div className='col-sm-4' key={player.id}>
                        <div className='card'>
                            <img src={player.img} />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

