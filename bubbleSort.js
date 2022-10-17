function bubbleSort(numArr)
{
    let swapped;
    do
    {
        swapped = false;
        for(let i = 0; i < numArr.length - 1; i++)
        {
            if(numArr[i] > numArr[i + 1])
            {
                let temp = numArr[i];
                numArr[i] = numArr[i + 1];
                numArr[i + 1] = temp;
                swapped = true; 
            }
        }

    }while(swapped);

}

const numberArray = [-1, -2, 2, 1];
bubbleSort(numberArray);
console.log(numberArray);