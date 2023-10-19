import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

  function blur() {
    if (!inputValue.includes('@')) {
      alert("Attention il n'y a pas de @, ce n'est pas une adresse mail valide")
    }
  }

  function handleInput(e){
    setInputValue(e.target.value)
    console.log(`target ${e.target}`)
    console.log(`target.value ${e.target.value}`)
  }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      <input
        placeholder='Entrez votre mail'
        onChange={handleInput}
        value={inputValue}
        onBlur={blur}
        />
		</footer>
	)
}


export default Footer
