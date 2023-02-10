let convertBtn = document.querySelector("#convert-btn")
let inputEl = document.querySelector("#input")
let lengthEl = document.querySelector("#length-el")
let volumeEl = document.querySelector("#volume-el")
let wheightEl = document.querySelector("#wheight-el")
let speedEl = document.querySelector("#speed-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
const kmhToMph = 0.621

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `
        ${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
        ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    volumeEl.textContent = `
        ${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | 
        ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
    wheightEl.textContent = `
        ${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | 
        ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`   
    speedEl.textContent = `
        ${baseValue} KMh = ${(baseValue * kmhToMph).toFixed(3)} MPh | 
        ${baseValue} MPh = ${(baseValue / kmhToMph).toFixed(3)} KMh`   
    
})

