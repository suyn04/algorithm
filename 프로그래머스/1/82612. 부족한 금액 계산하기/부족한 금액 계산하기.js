function solution(price, money, count) {
    const total = price * (count * (count + 1)) / 2;
    return total > money ? total - money : 0;
}

