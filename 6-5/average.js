function average(n) {
    var i;
    var total;
    for (i = 0; i < n.length; i++) {
        total += n[i];
    }
    return total / n.length;
}
console.log(average([1, 2, 3, 5]));
//# sourceMappingURL=average.js.map