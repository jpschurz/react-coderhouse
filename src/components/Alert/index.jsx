export default function Alert({ message }) {
    return (
      <div className='alert alert-info'>
        <span >{message}</span>
      </div>
    );
  }