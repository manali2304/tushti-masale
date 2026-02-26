import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { amount, productName, size, customerName, customerEmail, customerPhone } = await request.json()

  const orderData = {
    order_amount: amount,
    order_currency: 'INR',
    order_id: `order_${Date.now()}`,
    customer_details: {
      customer_id: `customer_${Date.now()}`,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
    },
    order_meta: {
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?order_id={order_id}`,
    },
    order_note: `${productName} - ${size}`,
  }

  const response = await fetch('https://sandbox.cashfree.com/pg/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-client-id': process.env.CASHFREE_APP_ID!,
      'x-client-secret': process.env.CASHFREE_SECRET_KEY!,
      'x-api-version': '2023-08-01',
    },
    body: JSON.stringify(orderData),
  })

  const order = await response.json()
  return NextResponse.json(order)
}
