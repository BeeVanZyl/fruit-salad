const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")
const fruitNutrition = document.querySelector("#nutritionSection p")
let totalCal = 0
const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit.name
    li.addEventListener("click", function(){removeFruit(li,fruit)})
    fruitList.appendChild(li)
    totalCal += fruit.nutritions.calories
    fruitNutrition.textContent = totalCal
}
const removeFruit = (e,fruit) => {
    // removeEventListener("click", removeFruit)
    totalCal -= fruit.nutritions.calories
    fruitNutrition.textContent = totalCal
    e.target.remove()
}
fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})
const fetchFruitData = fruit => {
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        addFruit(data)
    })
    .catch(e => console.error(e))
}