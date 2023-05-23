import { useState, useEffect } from 'react'
import '../scss/main.scss'



const itemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }
    useEffect(() => {
      setCount(parseInt(initial));
    }, [initial])
    
     

  return (

    <div className='counter'>
        <button className='btn-count' disabled={count <= 1} onClick={decrease}> - </button>
        <span> {count}</span>
        <button className='btn-count' disabled={count >= stock} onClick={increase}> + </button>
        <div>
            <button className='btn-count' disabled={stock <= 0} onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    </div>

  )
}

export default itemCount;