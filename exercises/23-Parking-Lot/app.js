let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

let getParkingLotState = (arr) => {
    let state = {
        totalSlots: 0, 
        availableSlots: 0,
        occupiedSlots: 0
    }

    for(let i = 0; i < arr.length; i++){
        for (let j= 0; j < arr[i].length; j++) {
            if (arr[i][j] == 2) {
                state.availableSlots++;
                state.totalSlots++
            } else if (arr[i][j] === 1) {
                state.occupiedSlots++; 
                state.totalSlots++
            }
        }
    }
    return state;
}
console.log(getParkingLotState(parking_state))
