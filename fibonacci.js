function fibonacci(n)
{
    const fib_series = [0,1];
    for(let i = 2; i < n; i++)
    {
        fib_series[i] = fib_series[i - 1] + fib_series[i - 2];
    }
    return fib_series;
}
console.log(fibonacci(10));