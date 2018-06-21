function average(n: Number[]) {
    var i: any;
    var total : any;
    for (i = 0; i< n.length; i++){
        total += n[i];
    }
    return total/n.length;

}
console.log(average([1,2,3,5]));