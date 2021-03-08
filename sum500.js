function sumOddNumbers() {
    var sum = 0;
    for (let i = 1; i <= 5000; i += 2) {
        sum += i;
    }
    console.log(sum);
    return sum;
}
sumOddNumbers();