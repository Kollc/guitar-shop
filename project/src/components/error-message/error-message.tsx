import { TypeRequests } from '../../consts';

type ErrorMessageProps = {
  error: string,
  type: TypeRequests,
}

function ErrorMessage({error, type}: ErrorMessageProps): JSX.Element | null {
  if (error) {
    return (
      <div
        data-testid='error-message'
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
          zIndex: '100',
        }}
      >
        {`Error on ${type}: ${error}`}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
