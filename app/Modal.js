"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import ReactDom from 'react-dom';
import useCart from './(store)/store';

export default function Modal() {
    const [domReady, setDomReady] = useState(false);
    useEffect(() => setDomReady(true), []);

    const { cart: cartItems, setOpenModal } = useCart();
    const router = useRouter();

    async function checkout() {
        const lineItems = cartItems.map(cartItem => {
            return {
                price: cartItem.price_id,
                quantity: 1
            }
        });

        const res = await fetch('/api/checkout', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ lineItems })
        });
        const resJSON = await res.json();

        router.push(resJSON.session.url);
    }

    return domReady
        ? ReactDom.createPortal(
            <div className='fixed top-0 let-0 w-screen h-screen z-50'>
                <div onClick={e => setOpenModal()} className='absolute bg-transparent inset-0'></div>
                <div className='absolute flex flex-col bg-white right-0 top-0 h-screen w-screen sm:w-96 max-w-screen shadow-lg gap-4'>
                    <div className='relative flex items-center justify-between text-xl p-6'>
                        <h1>Cart</h1>
                        <i onClick={e => setOpenModal()} className='fa-solid fa-xmark cursor-pointer hover:opacity-60'></i>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-slate-300'></div>
                    </div>
                    <div className='flex flex-col flex-1 gap-4 p-4 overflow-scroll'>
                        {cartItems.length === 0
                            ? <p>There is nothing in your cart</p>
                            : <>
                                {cartItems.map((cartItem, index) => {
                                    return (
                                        <div key={index} className='flex flex-col gap-2 border-l border-solid border-slate-700 px-2'>
                                            <div className='flex items-center justify-between'>
                                                <h2>{cartItem.name}</h2>
                                                <p>${cartItem.cost / 100}</p>
                                            </div>
                                            <p className='text-slate-600 text-sm'>Quantity: 1</p>
                                        </div>
                                    )
                                })}
                            </>}
                    </div>
                    <div onClick={e => checkout()} className='border border-solid border-slate-700 text-xl m-4 p-6 uppercase grid plalce-items-center hover:opacity-60 cursor-pointer'>Checkout</div>
                </div>
            </div>,
            document.getElementById('portal')
        )
        : null
}
