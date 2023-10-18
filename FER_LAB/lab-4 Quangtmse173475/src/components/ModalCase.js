import React from 'react'
import { Button, Modal } from 'react-materialize'

export default function ModalCase({ setIsOpen, film }) {
    return (
        <div className="modal-show" >
            <div id="modal1" className="modal" style={{ display: 'block', top: '15%' }}>
                <div className="modal-header">
                    <a className="modal-close red-text" onClick={() => setIsOpen(false)}>Close</a>
                </div>
                <div className="modal-content">
                    <p>
                        <iframe width="100%" height="400px" src={film.clip} title={film.name} frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </p>
                </div>

            </div>
        </div>
    )
}
