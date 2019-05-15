

const submitBtn = document.getElementById('submitBtn')
const tireType = document.getElementById('tireType')
const display = document.getElementById('displayData')
const statusColor = {
    'good' : '#06c600',
    'warning' : '#ede500',
    'danger' : '#ed0000'
}

const currentMileageOnItem = 1573


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let totalMiles = 0
    let remainingMiles = 0
    let displayString = ''
    let statusText = ''
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
    remainingMiles = totalMiles - currentMileageOnItem
    const remainingPercentage = Math.round((currentMileageOnItem / totalMiles) * 100)
    
    if(remainingPercentage <= 80){
        statusText = 'good'
    } else if( remainingPercentage > 80 && remainingPercentage <= 100){
        statusText = 'warning'
    } else{
        statusText = 'danger'
    }
    
    displayString = `<p>Of ${totalMiles} total miles, you have ${remainingMiles} left until you have to replace this.</p>`
    displayString += `<p>The current condition of this is <span style="color: ${statusColor[statusText]}">${statusText}</span></p>`
    display.innerHTML = displayString
})
