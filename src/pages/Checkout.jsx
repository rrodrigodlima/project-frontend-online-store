import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getCart } from '../services/storage';

export default class Checkout extends Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    phone: '',
    zipCode: '',
    address: '',
    isValid: false,
    clicked: false,
    paymentMethod: '',
    checkouList: [],
  };

  componentDidMount() {
    const listCart = getCart();
    this.setState({
      checkouList: listCart,
    });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, () => this.validation());
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    if (this.validation()) {
      localStorage.removeItem('shoppingCart');
      history.push('/');
    }
    this.setState({
      clicked: true,

    });
  };

  validation = () => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const { email, name, cpf, phone, zipCode, address, paymentMethod } = this.state;
    const validateEmail = regexEmail.test(email);
    const validateName = name.length > 0;
    const validateCpf = cpf.length > 0;
    const validatePhone = phone.length > 0;
    const validateZipCode = zipCode.length > 0;
    const validateAddress = address.length > 0;
    const validatePayment = paymentMethod.length > 0;
    const valid = validateEmail
      && validateName && validateCpf && validatePhone
      && validateZipCode && validateAddress && validatePayment;
    this.setState({
      isValid: valid,
    });
    return valid;
  };

  render() {
    const { name, email, cpf, phone, zipCode, address,
      isValid, clicked, checkouList } = this.state;
    return (
      <div>
        {
          checkouList.map((product) => (
            <p key={ product.productId }>{ product.productName }</p>
          ))
        }
        <form onSubmit={ this.handleSubmit } action="">
          <input
            type="text"
            name="name"
            value={ name }
            placeholder="Nome completo"
            data-testid="checkout-fullname"
            onChange={ this.handleChange }
          />
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Email"
            data-testid="checkout-email"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="cpf"
            value={ cpf }
            placeholder="CPF"
            data-testid="checkout-cpf"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="phone"
            value={ phone }
            placeholder="Telefone"
            data-testid="checkout-phone"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="zipCode"
            value={ zipCode }
            placeholder="CEP"
            data-testid="checkout-cep"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="address"
            value={ address }
            placeholder="endereço"
            data-testid="checkout-address"
            onChange={ this.handleChange }
          />
          <div onChange={ this.handleChange }>
            <input
              type="radio"
              name="paymentMethod"
              data-testid="ticket-payment"
              value="ticket-payment"
            />
            <input
              type="radio"
              name="paymentMethod"
              data-testid="visa-payment"
              value="visa-payment"
            />
            <input
              type="radio"
              name="paymentMethod"
              data-testid="master-payment"
              value="master-payment"
            />
            <input
              type="radio"
              name="paymentMethod"
              data-testid="elo-payment"
              value="elo-payment"
            />
          </div>
          <button
            data-testid="checkout-btn"
            type="submit"
          >
            Finalizar Compra
          </button>
        </form>
        <div>
          {
            (!isValid && clicked) && <p data-testid="error-msg">Campos inválidos</p>
          }
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,

};
