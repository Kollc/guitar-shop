type CouponMessageProps = {
  isLoaded: boolean,
  error: string,
}

function CouponMessage({isLoaded, error}: CouponMessageProps): JSX.Element | null {
  if(!isLoaded) {
    return null;
  }

  if(error) {
    return <p className="form-input__message form-input__message--error">неверный промокод</p>;
  }

  return <p className="form-input__message form-input__message--success">Промокод принят</p>;
}

export default CouponMessage;
