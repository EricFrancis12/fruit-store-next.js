import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 mt-4'>
            <h1>Thank you for your purchase!</h1>
            <p>We are packaging up your order right now and getting ready to send it to you!</p>
            <Link href='/' className='underline'>Home</Link>
        </div>
    )
}
