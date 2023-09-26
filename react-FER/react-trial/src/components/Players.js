import React from 'react'
import { Players } from '../shared/ListOfPlayers'
export default function Player() {
    return (
        <div className='container'>
            <div className='row'>
                {Players.map((Player) => (
                    <div className='col-sm-4' key={Player.id}>
                        <div className='card'>
                            <img src={Player.img} />
                            <h3>{Player.name}</h3>
                            <p className='title'>{Player.club}</p>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

