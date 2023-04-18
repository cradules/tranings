const description = "We need a floor";
const square = 100;
const speacialCoating = true;
const floorOption = ['carpet', 'hardwood', 20, true, false]
const renovationJob = {
    ownerName: "John",
    maximumPrice: 5000,
    category: 'bathroom',
    newShower: "true",
    colorOption: ['seagreen', 'ocean-blue']
};

const error = {
    statusCode: 400,
    description: "...",
    retry: true
}

console.log(renovationJob.category)

// Traditional function
//  calculatePrice(sqMeters) {
//     return sqMeters + 1000
// }

// const calculatePrice = function (sqMeter) {
//     return 1000 * sqMeter
// };
//
// console.log(calculatePrice(200))

// Mordern function

// const calculatePrice = (sqMeters) => {
//     return 1000 * sqMeters
// }
//
// console.log(calculatePrice(200))

//  const calculatePrice = sqMeter => 1000 * sqMeter;
// console.log(calculatePrice(11.2))

// const price = 9000
// // const result = "The total cost will be:" + price\
// const result = `The total cost will be: ${price}`
//
// // Traditional
// if (price > 2000) {
//     console.log(`The price is lower then ${price}`)
// }else {
//     console.log(`The price is higher then ${price}`)
// }
//
// // Modern
//
// price > 3000 ? console.log('hello'): console.log('bla')

//Manipulate HTML and CSS
// const text = "This has been changed by JS"
// const  headingEl = document.querySelector('.heading')
// headingEl.textContent = text
// headingEl.innerHTML = 'This is <span class="big-inner">inner</span>'

//Event handler

const headingEL = document.querySelector('.heading')
const clickHandler = () => {
    headingEL.style.color = 'red'
    console.log('changed color')
}
headingEL.addEventListener('click', clickHandler)


