function recursiveBinarySearch(numArr, target)
{
    return search(numArr, target, 0, numArr.length - 1);
}

function search(numArr, target, firstIndex, lastIndex)
{
    if(firstIndex > lastIndex)
    {
        return -1;
    }

    let midIndex = Math.floor((firstIndex + lastIndex)/2);
    if(numArr[midIndex] === target)
    {
        return midIndex;
    }

    else if(numArr[midIndex] > target)
    {
        return search(numArr, target, firstIndex, midIndex - 1);
    }

    else
    {
        return search(numArr, target, midIndex + 1, lastIndex);

    }

}

console.log(recursiveBinarySearch([1,2,3,4],3));
console.log(recursiveBinarySearch([1,2,3,4],5));
