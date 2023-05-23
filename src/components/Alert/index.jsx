import '../scss/main.scss'

export default function Alert({ message }) {
    return (
      <div className='alert'>
        <span >{message}</span>
      </div>
    );
  }