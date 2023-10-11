import Logo from '../../assets/enlace.png'
import './loginpage.css'

//Components
import InputShared from '../../components/Shared/InputShared/InputShared'
import { ButtonForm } from '../../components/Shared/Buttons/ButtonsShared'

function Loginpage() {
  return (
    <div className='loginPageMainContainer'>
      <div className='formLoginContainer'>
        <div className='loginTitleContainer'>
          <img src={Logo} alt="logo" className='logo'/>
          <h2 className='title'>ShortnLink</h2>
        </div>
        <form >
          <InputShared
            nameInput='email'
            placeholder='email@email.com'
            titleInput='Email'
            typeInput='email'
            inputChange={(name, value) => console.log(`${name}: ${value}`)}
          />
          <InputShared
            nameInput='password'
            placeholder='***********'
            titleInput='Contraseña'
            typeInput='password'
            inputChange={(name, value) => console.log(`${name}: ${value}`)}
          />
          <ButtonForm
            buttonName='Entrar'
          />
        </form>
      </div>
    </div>
  )
}

export default Loginpage