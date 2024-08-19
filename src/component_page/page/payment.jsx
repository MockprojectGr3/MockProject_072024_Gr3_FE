import React, { useState } from 'react';

import PaymentConfirm from './payment_confirm.jsx';

const Payment = () => {

    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <>
            <div className="max-w-5xl mx-auto p-8">
                <div className='flex justify-between items-center'>
                    <h1 className="text-center uppercase text-3xl font-bold mb-8">Payment</h1>
                </div>
                <form className="">
                    <div className='flex justify-between'>
                        <div className='grid gap-y-4 w-1/2 pr-7 border-r border-[#0f2030]'>
                            {/* Customer Information */}
                            <div className="grid gap-y-3">
                                <h3 className="text-lg uppercase font-semibold">1. Customer information</h3>

                                <div className='flex justify-between items-center'>
                                    <label className="text-sm font-medium">Full Name:</label>
                                    <input type="text" className="w-3/4 border rounded px-2 py-1" />
                                </div>

                                <div className='flex justify-between items-center'>
                                    <label className="text-sm font-medium">Number phone:</label>
                                    <input type="text" className="w-3/4 border rounded px-2 py-1" />
                                </div>

                                <div className='flex justify-between items-center'>
                                    <label className="text-sm font-medium">Address:</label>
                                    <input type="text" className="w-3/4 border rounded px-2 py-1" />
                                </div>

                                <div className="flex justify-between gap-x-2">
                                    <div className="flex w-1/2 items-center gap-x-2">
                                        <label className="text-sm font-medium">City:</label>
                                        <input type="text" className="w-4/5 border rounded px-2 py-1" />
                                    </div>
                                    <div className="flex w-1/2 items-center gap-x-2">
                                        <label className="text-sm font-medium">State:</label>
                                        <select className="w-4/5 border rounded px-2 py-1">
                                            <option value="">Select State</option>
                                            <option value="">Select State</option>
                                            <option value="">Select State</option>
                                            <option value="">Select State</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium">Mail Address:</label>
                                    <input type="email" className="w-3/4 border rounded px-2 py-1" />
                                </div>
                            </div>

                            {/* Service Type */}
                            <div className="grid gap-2 border border-[#0f2030] p-2">
                                <h3 className="text-lg font-semibold uppercase">2. Service Type</h3>
                                <div className='grid px-2'>
                                    <label className="text-sm font-medium">Service Name: ...</label>
                                    <label className="text-sm font-medium">Price: ...</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-y-4 w-1/2 pl-7 border-l border-[#0f2030]'>
                            {/* Note & Request */}
                            <div className="flex flex-col gap-y-3">
                                <h3 className="text-lg uppercase font-semibold">3. Note & Request</h3>
                                <textarea className="w-full h-36 border rounded px-2 py-1" placeholder="Enter your note or request"></textarea>
                            </div>

                            {/* Payments */}
                            <div className="flex flex-col gap-y-3">
                                <h3 className="text-lg uppercase font-semibold">4. Payments</h3>
                                <div className="">
                                    <div className="flex items-center">
                                        <input type="radio" name="payment" value="credit-card" className="mr-2" />
                                        <label className=' font-medium'>Pay by credit card</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" name="payment" value="transfer" className="mr-2" />
                                        <label className='font-medium'>Transfer</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" name="payment" value="installment" className="mr-2" />
                                        <label className=' font-medium'>Installment payment</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="col-span-2 flex justify-center mt-8 space-x-4">
                        <button type="button" className="px-6 py-2 bg-gray-300 hover:bg-[#d1d5dbb3] rounded text-[#0f2030] font-semibold">Cancel</button>
                        <button
                            type="button"
                            className="px-6 py-2 bg-[#0f2030] hover:bg-[#0f2030d6] text-white rounded"
                            onClick={() => setShowConfirm(true)}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <PaymentConfirm open={showConfirm} onClose={() => setShowConfirm(false)} />
        </>
    );
}

export default Payment;
