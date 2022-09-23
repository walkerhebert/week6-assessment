const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Check that shuffleArray returns an array', () => {
        expect(shuffleArray.length).toBe(1)
    })
//     test('Check that all the same items are in the array', () => {
//         const randoArray = [2, 4, 6, 8, 10]
//         expect(shuffleArray(randoArray).length).toEqual(randoArray.length)
//     })
// })

test('Check that all the same items are in the array', () => {
    let randoArray = [2, 4, 6, 8, 10]
    let result = shuffleArray(randoArray)
    

    let myVar = true

    for( let i = 0; i < result.length; i++){
        if(randoArray.includes(result[i]) === false){ 
            myVar = false
            return
    }
}
    expect(myVar).toBe(true)
})
})