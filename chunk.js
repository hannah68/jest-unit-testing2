const chunkedArr = (arr, len) => {
	const chunkArr = [];
	arr.forEach(val => {
		// get last item
		const last = chunkArr[chunkArr.length-1];
		// check if last and if last length is equal to the chunk len
		if(!last || last.length === len){
			chunkArr.push([val])
		}else{
			last.push(val)
		}
	});
	
    return chunkArr
};

module.exports = chunkedArr;
