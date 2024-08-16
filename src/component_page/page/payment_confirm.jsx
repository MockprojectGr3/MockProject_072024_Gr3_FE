import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoClose } from "react-icons/io5";
import PaymentSuccess from './payment_success';

const PaymentConfirm = ({ open, onClose }) => {

    const [showSuccess, setShowSuccess] = useState(false);

    PaymentConfirm.propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-40 flex justify-center items-center z-10">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
                    <div className='flex justify-between'>
                        <h2 className="text-xl font-bold mb-6">Notification</h2>
                        <IoClose className='text-2xl m-0 cursor-pointer' onClick={onClose} />
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='grid-cols-1'>
                            {/* Customer Info */}
                            <div className=' pb-2'>
                                <h3 className="font-bold pb-2">1. Customer</h3>
                                <ul>
                                    <li>Full Name: ...............</li>
                                    <li>Number phone: ...............</li>
                                    <li>Address: ...............</li>
                                    <li>City: ............ State: .........</li>
                                    <li>Mail: ....................</li>
                                </ul>
                            </div>
                            {/* Service Info */}
                            <div className=' pb-2'>
                                <h3 className="font-bold pb-2">3. Service</h3>
                                <p className='m-0'>Type of service: Event security</p>
                                <p className='m-0'>Scope of services:</p>
                                <ul className="list-disc ml-6">
                                    <li>Directing and assisting attendees</li>
                                    <li>Access control and crowd management</li>
                                    <li>Maintaining order and preventing disturbances</li>
                                </ul>
                            </div>
                            {/* Equipment Info */}
                            <div>
                                <h3 className="font-bold pb-2">5. Add equipment</h3>
                                <p>Walkie talkie</p>
                            </div>
                        </div>
                        <div className='grid-cols-1'>
                            {/* Company Info */}
                            <div className=' pb-2'>
                                <h3 className="font-bold pb-2">2. Company</h3>
                                <ul>
                                    <li>Full Name: ...............</li>
                                    <li>Number phone: ...............</li>
                                    <li>Address: ...............</li>
                                    <li>City: ............ State: .........</li>
                                    <li>Mail: ....................</li>
                                </ul>
                            </div>
                            {/* Note & Request */}
                            <div>
                                <h3 className="font-bold pb-2">4. Note & Request</h3>
                                <p className="w-full h-28 border border-gray-300 rounded-lg px-2 overflow-y-auto">
                                    ................................................<br />
                                    ................................................<br />
                                    ................................................<br />
                                </p>
                            </div>
                            {/* Price Info */}
                            <div>
                                <h3 className="font-bold pb-2">6. Price</h3>
                                <p className='m-0'>Service prices: ..... USD</p>
                                <p className='m-0'>Equipment prices: .... USD</p>
                                <p className='m-0'>Total: ...... USD</p>
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-end mt-10 space-x-4">
                        <button className="px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded" onClick={onClose}>Cancel</button>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded" onClick={() => setShowSuccess(true)}>Submit</button>
                    </div>
                </div>
            </div>
            <PaymentSuccess isShowSuccess={showSuccess} onClose={() => setShowSuccess(false)} />
        </>
    )
}

export default PaymentConfirm;