import { plantList } from '../datas/plantList'

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
            <ul>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
            <ul>
              {plantList.map((plant) => (
                <li key={plant.id}>{plant.name}
                {(plant.isBestSale || plant.category === "classique") && <span>🔥</span>}
                </li>
              ))}

            </ul>
        </div>)
}




export default ShoppingList
