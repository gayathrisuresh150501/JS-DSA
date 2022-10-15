function recursiveFib(term)
{
    if(term < 2)
    {
        return term;
    }

    return recursiveFib(term - 1) + recursiveFib(term - 2);
}

console.log(recursiveFib(7));