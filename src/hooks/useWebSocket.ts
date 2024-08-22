import {useContext} from 'react'
import {WebSocketContext} from '../contexts/webSocketContext'

const useWebSocket = () => {
  const webSocketContext = useContext(WebSocketContext)

  if (webSocketContext === undefined) {
    throw new Error('WebSocket context undefined')
  }

  return webSocketContext
}

export default useWebSocket
