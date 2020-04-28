import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStipe = price * 100
    const pusblishableKey = 'pk_test_3PLMtFGFWcMJ2D2EGjNwWnky00FY4wGcVO'

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Crwn Clothing Store'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStipe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={pusblishableKey}
        />
    )
}

export default StripeCheckoutButton