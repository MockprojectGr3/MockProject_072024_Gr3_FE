import React, { useState } from 'react';
import '../../style/feedback.css';
import { postFeedback } from '../../services/feedbackService';

const FeedbackPage = () => {

    const [form, setForm] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        content: ''
    })

    const handleChangeForm = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await postFeedback(form);
    }

    return (
        <>
            <div className="container-feedback">
                <div className="col-text">
                    <span className='text-link'>- SUBMIT YOUR FEEDBACK</span><br />
                    <div className="title">Fill the form to submit your feedback</div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.</div>
                </div>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputname" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputname" placeholder="John Carter" />
                        <i className="far fa-user"></i>
                    </div>
                    <div className="col-md-6 ">
                        <label htmlFor="inputnumber" className="form-label">Phone Number</label>
                        <input
                            name='phoneNumber'
                            type="number"
                            className="form-control"
                            id="inputnumber"
                            placeholder='(123) 456 -7890'
                            required />
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" required />
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className='col-12'>
                        <label htmlFor="validationTextarea" className="form-label">Textarea</label>
                        <textarea
                            name='content'
                            className="form-control textarea-icon"
                            id="validationTextarea"
                            placeholder='If you have any additional feedback, please type it in here...'
                            required
                            onChange={handleChangeForm}
                        ></textarea>
                    </div>
                    <div className="col-12">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                    <div className="col-12">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FeedbackPage;