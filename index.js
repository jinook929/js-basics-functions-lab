// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  let distance = 42 - n
  if(distance < 0) {distance *= -1}
  return distance
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n) * 264
}

function distanceTravelledInFeet(n1, n2) {
  let distance = n1 - n2
  if(distance < 0) {distance *= -1}
  return distance * 264
}

function calculatesFarePrice(start, destination) {
  let traveledFeet = distanceTravelledInFeet(start, destination)
  if(traveledFeet < 400) {
    return 0
  } else if(traveledFeet <= 2000) {
    return (traveledFeet - 400) * .02
  } else if(traveledFeet < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}

console.log(calculatesFarePrice(43, 48))