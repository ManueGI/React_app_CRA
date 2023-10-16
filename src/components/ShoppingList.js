import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce((acc, plant) => {
    if (!acc.includes(plant.category)) {
      acc.push(plant.category)
;
        }
      return acc;
        }, [])

        return(
          <div>
            <ul class="lmj-plant-list ">
              {categories.map((category) => (
                <li key={category} class="lmj-plant-item">{category}</li>
              ))}
            </ul>
            <ul>
              {plantList.map((plant) => (
                <li key={plant.id} class="lmj-plant-item">{plant.name}
                {(plant.isBestSale || plant.category === "classique") && <span>🔥</span>}
                {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                <CareScale careType = 'water' scaleValue={plant.water} />
                <CareScale careType='light' scaleValue={plant.light} />
                </li>
              ))}
            </ul>
        </div>)
}

function CareScale({scaleValue, careType}) {
  const range = [1, 2, 3]

  const scaleType = careType === 'light' ? '☀️' : '💧'

  return (
  <div>
    {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
    )}
    </div>
  )
}




export default ShoppingList
