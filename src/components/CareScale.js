import water from '../assets/water.svg'
import light from '../assets/sun.svg'

function CareScale({scaleValue, careType}) {
  const range = [1, 2, 3]

  const scaleType = careType === 'light' ? (
  <img src={light} alt='light'/>)
   : (
  <img src={water} alt='water' />)

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante a besoin de ${quantity(scaleValue)} ${careType === 'light' ? 'de lumière' : "d'eau"}`
        )
        }>

    {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
    )}
    </div>
  )
}

function quantity(value){
if (value === 1)
 return 'peu'
if (value === 2)
 return 'modérément'
else
return 'beaucoup'
}

export default CareScale
