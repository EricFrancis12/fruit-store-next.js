"use client"

import React from 'react';
import Link from 'next/link';
import useCart from './(store)/store';
import Modal from './Modal';

export default function Header() {
    const { cart: cartItems, openModal, setOpenModal } = useCart();

    return (
        <header className='flex items-center justify-between sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8'>
            {openModal === true
                ? <Modal />
                : ''}
            <Link href='/'>
                <h1 className='uppercase cursor-pointer hover:scale-110'>Fruit Shop</h1>
            </Link>
            <div onClick={e => setOpenModal()} className='relative cursor-pointer grid place-items-center group'>
                {cartItems.length > 0
                    ? <div className='absolute pointer-events-none aspect-square h-5 sm:h-6 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2'>
                        <p className='text-xl sm:text-sm'>{cartItems.length}</p>
                    </div>
                    : ''}
                <i className='fa-solid fa-cart-shopping cursor-pointer group-hover:text-slate-500'></i>
            </div>
        </header>
    )
}
