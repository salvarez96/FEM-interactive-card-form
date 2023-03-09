import { GlobalButton } from './globals.model'

export default function Button({ type, buttonText, onClick }: GlobalButton) {

  return (
    <button type={type} onClick={onClick}>{buttonText}</button>
  )
}
