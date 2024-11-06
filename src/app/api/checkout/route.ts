import paypal from '@paypal/checkout-server-sdk';
import { NextRequest, NextResponse } from 'next/server';

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string;
const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_SECRET as string;

const environment =
  process.env.NEXT_PUBLIC_NODE_ENV === 'production'
    ? new paypal.core.LiveEnvironment(clientId, clientSecret)
    : new paypal.core.SandboxEnvironment(clientId, clientSecret);

// const environment = new paypal.core.LiveEnvironment(clientId, clientSecret);
// const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);

const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { currency_code, value, orderId } = body;
  const request = new paypal.orders.OrdersCreateRequest();

  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code,
          value,
        },
        invoice_id: orderId,
        // items: [
        //   {
        //     name: 'test item',
        //     description: 'des 123',
        //     quantity: '1',
        //     unit_amount: {
        //       currency_code: 'USD',
        //       value: '1',
        //     },
        //     category: 'PHYSICAL_GOODS',
        //   },
        // ],
      },
    ],
  });

  const response = await client.execute(request);

  // return res.status(201).json({ id: response.result.id });
  return NextResponse.json({ id: response.result.id });
}
