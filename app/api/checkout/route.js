import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req, res) {
    const body = await req.json();

    if (body.lineItems.length === 0) {
        return new Response('Error', {
            status: 405
        });
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
            apiVersion: '2020-08-27'
        });

        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/thank-you',
            cancel_url: 'http://localhost:3000/cancel',
            line_items: body.lineItems,
            mode: 'payment'
        });

        return NextResponse.json({ session });
    } catch (err) {
        console.error(err);
        return new Response('Error', {
            status: 500
        });

    }
}