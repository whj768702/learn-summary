function getRGB(value){
	var temp = value.slice(1);
	var arr = [];
	var number = [];
	
	for(var i =0,j=0; i<temp.length/2;i++){
		arr[i] = temp.slice(j,2+j);
		j = j+2;
	}
	for(var k = 0; k < arr.length; k++){
		number[k] = parseInt(arr[k], 16);
	}

	return 'rgb('+number[0]+','+number[1]+','+number[2]+')';
}