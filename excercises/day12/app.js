function sum(x, y){
    return x + y
}




function lessThanOrEqualTo(x){
    if( x <= 0){
		return true
	}
	else
		return false
}

module.exports = {
    sum: sum,
    lessThanOrEqualTo: lessThanOrEqualTo,
}