import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Button from '../../../components/button';
import CartResume from '../../../components/cart-resume';
import Section from '../../../components/section';
import CheckoutPaymentForm from './checkout-payment-form';

import { sentCart } from '../../../actions';

class CheckoutPayment extends React.Component<any> {

  state = {
    form: {
      isValid: false,
      data: null,
    },
  }

  handleChange = (form: any) => {
    console.log(form)
    this.setState(() => ({ form }))
  }

  handleSubmit = () => {

    console.log(this.state.form.data);
    this.props.sentCart(this.state.form.data)
    this.props.history!.push('/checkout/confirmation')
  }

  render() {

    const { cart } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>Payment | Checkout</title>
          <meta name="description" content="Payment step" />
        </Helmet>
        <div>
          <Section title="Cartão de crédito">
            <CheckoutPaymentForm onFormChange={this.handleChange} />
          </Section>
          <CartResume cart={cart} />
          <Button onClick={this.handleSubmit} disabled={!this.state.form.isValid}>Finalizar o pedido</Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) =>
  ({ cart: state.cart })

const mapDispatchToProps = (dispatch: any) =>
  ({ sentCart: (data: any) => dispatch(sentCart(data)) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPayment);
