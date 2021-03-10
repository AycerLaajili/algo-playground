function maxElement() {
    let array = [5, 8, 2, 3, 9, 4]
    console.log('Input: ', array)

    let MaxValue = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > MaxValue)
            MaxValue = array[i]

    }
    console.log('Output:', MaxValue)
}