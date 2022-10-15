function binarySearch(numArr, target)
{
    let firstIndex = 0;
    let lastIndex = numArr.length - 1;

    while(firstIndex <= lastIndex)
    {
        let midIndex = Math.floor(firstIndex + lastIndex)/2;

        if(numArr[midIndex] === target)
        {
            return midIndex;
        }

        else if(numArr[midIndex] > target)
        {
            lastIndex = midIndex - 1;
        }

        else if(numArr[midIndex] < target)
        {
            firstIndex = midIndex + 1;
        }
    }

    return -1;


}

console.log(binarySearch([1,2,3,4,5], 3));
console.log(binarySearch([9,8,7,6,5,4,3],1));