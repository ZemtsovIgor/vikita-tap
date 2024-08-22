import {useContext} from 'react'
import {PizzaContext} from '../contexts/webSocketContext'

const usePizza = () => {
  const pizzaContext = useContext(PizzaContext)

  if (pizzaContext === undefined) {
    throw new Error('Pizza context undefined')
  }

  return pizzaContext
}

export default usePizza
