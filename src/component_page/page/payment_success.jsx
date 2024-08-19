import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoClose } from "react-icons/io5";

const PaymentSuccess = ({ isShowSuccess, onClose }) => {

    PaymentSuccess.propTypes = {
        isShowSuccess: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    const navigate = useNavigate();

    if (!isShowSuccess) return null;

    const handleClick = (name) => {
        switch (name) {
            case 'homepage':
                navigate('/')
                break;
            case 'contacts-tracking':
                navigate('/')
                break;
            default:
                break;
        }
    }

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-40 flex justify-center items-center z-10">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8">
                <div className='flex justify-between'>
                    <h2 className="text-xl font-bold mb-6">Notification</h2>
                    <IoClose className='text-2xl m-0 cursor-pointer' onClick={onClose} />
                </div>
                <div>
                    <h3 className='text-lg font-semibold text-center mb-6'>Congratulations on your successful payment</h3>
                    <p>Click to redirect to:</p>
                </div>
                <div className="flex justify-center mt-1 space-x-10">
                    <button
                        name='homepage'
                        className="px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded"
                        onClick={(e) => handleClick(e.target.name)}>
                        Homepage
                    </button>
                    <button
                        name='contacts-tracking'
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
                        onClick={(e) => handleClick(e.target.name)}>
                        Contracts Tracking
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess;