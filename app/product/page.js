"use client"

import useCart from '../(store)/store';

export default function ProductPage(props) {
    const { searchParams } = props;
    const { price_id } = searchParams;
    const product = useCart(state => state.product);
    const { cost, productInfo, name, description } = product;
    console.log(product);

    if (!product?.name) {
        window.location.href = '/';
    }

    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto'>
                <div className='md:p-2 md:shadow'>
                    <img src={productInfo.images[0]} alt={name} className='w-full h-full object-cover'></img>
                </div>
                <div className='flex flex-col gap-2 p-4'>
                    <h3>{name}</h3>
                    <p>{cost / 100}</p>
                    <p className='text-sm'>{description}</p>
                </div>
            </div>
        </div>
    )
}