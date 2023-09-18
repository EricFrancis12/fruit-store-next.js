import Link from 'next/link';

export default function CancelPage() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 mt-4'>
            <h1>Transaction canceled</h1>
            <Link href='/' className='underline'>Home</Link>
        </div>
    )
}
