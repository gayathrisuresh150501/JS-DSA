function isPowerOfTwo(num)
{
    if(num < 1)
    {
        return false;
    }

    while(num > 1)
    {
        if(num % 2 !== 0)
        {
            return false;
        }
        num /= 2;
    }

    return true;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));
