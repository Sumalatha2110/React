import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submitted successfully!');
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='contact-form'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Add a review</h2>
                <div className='detail-form'>
                    <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleInputChange} required />
                </div>
                <label>Your review</label>
                <textarea value={formData.message} name='message' onChange={handleInputChange} required />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
