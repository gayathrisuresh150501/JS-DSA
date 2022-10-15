// function linearSearch(num)
// {
//     let array = [1,2,3,4,5];
//     for(let i = 0; i < array.length; i++)
//     {
//         if(num === array[i])
//         {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(linearSearch(5));
// console.log(linearSearch(15));


function linearSearch(numArr, target)
{
    for(let i = 0; i < numArr.length; i++)
    {
        if(numArr[i] === target)
        {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,2,3,4],5));
console.log(linearSearch([15,3,5],15));