import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import './AddMovie.css'



const AddMovie = ({ addMovie, setNewMovieName, setSrc,setRating }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleSubmit = (e) => {
        addMovie(e);
        setModalIsOpen(false);
    };




    return (<div className='Add-btn-container'>
        <Button className='Add-btn' onClick={() => setModalIsOpen(true)}>+</Button>
        
        <Modal className='add-modal ' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
            <form> 
            <label style={{ fontWeight: 'bold' }}>Movie Name</label>
            <input type="text" onChange={(e) => setNewMovieName(e.target.value)}></input>
            
            <label style={{ fontWeight: 'bold' }}>Image source</label>
            <input type="text" onChange={(e) => setSrc(e.target.value)} ></input>
            
            <label style={{ fontWeight: 'bold' }}>Rating</label>
            <input type="text" onChange={(e) => setRating(e.target.value)} ></input>
            </form>

            <Button className='Modal-btn' onClick={handleSubmit}>Add</Button>
        </Modal>
    </div>)
}
export default AddMovie;