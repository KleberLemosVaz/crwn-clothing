import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import { 
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from './checkout.styles'

const CheckoutPage = ({ cartItems, total }) => (

    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span className="">Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span className="">Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span className="">Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span className="">Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span className="">Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
        }
        <TotalContainer>TOTAL: ${total}</TotalContainer>
            <WarningContainer>
                ** Utilizar os dados abaixo para efetuar o pagamento **
                <br/>
                4242 4242 4242 4242 - Vcto:01/21 - CVV: 123
            </WarningContainer>
            <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)