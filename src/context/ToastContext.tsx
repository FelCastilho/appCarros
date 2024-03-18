
import { createContext, ReactNode, useState } from 'react'
import { Toast } from '../components/toast'

interface ToastContextData {
  showToast: (message: string, type: TypeMessage) => void;
}

type TypeMessage = "DEFAULT" | "SUCCESS"

export interface MessagesProps {
  message: string;
  type: TypeMessage
}

export const ToastContext = createContext({} as ToastContextData);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<MessagesProps[]>([])

  const showToast = (newMessage: string, type: TypeMessage) => {
    let message: MessagesProps = { 
      message: newMessage,
      type: type
    }

    //Pegando todas as mensgens que já estão e adicionando mais 
    setMessages( (prevMessages) => [...prevMessages, message])

    //Adicionando temporizador para remover o toast

    setTimeout(() => {
      hideToast()
    }, 1000) //Após um segundo ele sairá da tela
  }

  const hideToast = () => {
    setMessages( (prevMessages) => prevMessages.slice(1))
  }


  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {messages.length > 0 && <Toast messages={messages} hideToast={hideToast} />}
    </ToastContext.Provider>
  )
}