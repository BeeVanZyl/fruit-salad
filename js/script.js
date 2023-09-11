const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")
const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit
    li.addEventListener("click", removeFruit)
    fruitList.appendChild(li)
}
const removeFruit = e => {
    removeEventListener("click", removeFruit)
    e.target.remove()
}
fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    addFruit(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})
console.log(fruitList.children)