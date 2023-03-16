import CardContainer from './components/card-container/card-container'
import CardForm from './components/card-form/card-form'

export default function App() {
  console.log(
    '%c Hey there! \n You can heck out the repo of this project here: \n https://github.com/salvarez96/FEM-interactive-card-form ', 
    "font-size: 18px; font-weight: bold; background-color: rgba(255,255,0,0.3); text-shadow: #000;"
  );
  return (
    <>
      <CardContainer />
      <CardForm />
    </>
  )
}
