

const submitBtn = document.getElementById('submitBtn')
const tireType = document.getElementById('tireType')
const display = document.getElementById('displayData')

const miles

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let totalMiles = 0
    switch (tireType.value){
        case "default":
            totalMiles = 2000
            break;
        case "highEnd":
            totalMiles = 2500
            break;
        case "racing":
            totalMiles = 1000
            break;
        case "touring":
            totalMiles = 4000
            break;
        case "mountain":
            totalMiles = 1500
            break;
        default:
            alert('somehow you screwed this up')
    }
    display.innerHTML = totalMiles
})

// const tireMileage = (type, userMiles, currentMiles, datePurchased){
    
// }