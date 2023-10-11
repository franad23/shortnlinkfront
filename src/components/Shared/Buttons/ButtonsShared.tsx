import './buttonsShared.css'

interface ButtonFormProps {
  buttonName: string;

}

export function ButtonForm({buttonName}:ButtonFormProps) {
  return (
    <button>{buttonName}</button>
  )
}
