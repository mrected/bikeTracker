const getStatusColor = (status) => {
    if(status <= 80){
        return 'good'
    } else if( status > 80 && status <= 100){
        return 'warning'
    } else{
        return 'danger'
    }
}



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
    
    statusText = getStatusColor(remainingPercentage)
    
    displayString = `<p>Of ${totalMiles} total miles, you have ${remainingMiles} left until you have to replace this.</p>`
    displayString += `<p>You have put ${currentMileageOnItem} on this so far</p>`
    displayString += `<p>The current condition of this is <span style="color: ${statusColor[statusText]}">${statusText}</span></p>`
    display.innerHTML = displayString

    // get todays date
    const today = new Date();
    // get the number of miles they'll go in a week
    const estNumberOfMilesPerWeek = document.getElementById('userMiles').value
    // divide that by 7 to get numberOfMilesPerDay
    const numberOfMilesPerDay = Math.round(estNumberOfMilesPerWeek / 7)
    // divide remaining miles by numberOfMilesPerDay to get numberOfDaysToReplacement
    const numberOfDaysToReplacement = Math.round(remainingMiles / numberOfMilesPerDay)
    // add numberOfDaysToReplacement to today to get estTimeToReplace
    const estReplacementDate = new Date()
    estReplacementDate.setDate(today.getDate() + numberOfDaysToReplacement)

    console.log(`user miles per week: ${estNumberOfMilesPerWeek}\n 
                number of miles per day: ${numberOfMilesPerDay}\n
                days to replacement: ${numberOfDaysToReplacement}\n
                today: ${today}\n
                date with days added: ${estReplacementDate}`)
})
