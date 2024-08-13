import '../../style/feedback.css';
import Footer from '../layout/Footer';
import Header from '../layout/header';
const FeedbackPage = () => {
    return (
        <>
            <Header />
            <div className="container-feedback">
                <div className="col-text">
                    <span className='text-link'>- SUBMIT YOUR FEEDBACK</span><br />
                    <div className="title">Fill the form to submit your feedback</div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.</div>
                </div>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputname" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputname" placeholder="John Carter" />
                        <i class="far fa-user"></i>
                    </div>
                    <div className="col-md-6">
                        <label for="inputnumber" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="inputnumber"
                            placeholder='(123) 456 -7890'
                            required />
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div className="col-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" required />
                        <i class="far fa-envelope"></i>
                    </div>
                    <div className='col-12'>
                        <label for="validationTextarea" className="form-label">Textarea</label>
                        <textarea className="form-control textarea-icon" id="validationTextarea"
                            placeholder='If you have any additional feedback, please type it in here...'
                        ></textarea>
                    </div>
                    <div className="col-12">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit feedback</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )

}

export default FeedbackPage;