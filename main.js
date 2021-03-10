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

function minElement() {
    let array = [5, 8, 2, 3, 9, 4]
    console.log('Input: ', array)

    let MinValue = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < MinValue)
            MinValue = array[i]
    }


    console.log('Output:', MinValue)
}

function minmaxElement() {
    let array = [5, 8, 2, 3, 9, 4]
    console.log('Input: ', array)

    let minValue = array[0]
    let maxValue = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minValue)
            minValue = array[i]

        if (array[i] > maxValue)
            maxValue = array[i]
    }

    console.log(`Output: Min = ${minValue}, Max = ${maxValue}`)
}

function isSorted(){
    let tab = [5, 8, 9, 20, 21, 44]
    console.log('Input: ',tab)

    let sorted =true
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] <tab [i-1]) {
            sorted=false
            break
        }
       
    }

    console.log (sorted)
}