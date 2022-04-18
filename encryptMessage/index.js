// Encryption function
function getEncryptString(str) {
	
	// Remove spaces from string
	let string = str.replace(/\s/g,'').toLowerCase();	
	
	// Calculate square root
	let sqrRoot = Math.sqrt(string.length);
	
	// Calculate number of rows and columns
	let row = Math.floor(sqrRoot);
    let column = Math.ceil(sqrRoot);
	
	// Add string in array
	let s = new Array();
	let k = 0;
	for (let i = 0; i < row; i++)
	{
		s[i] = new Array(column);
		for (let j = 0; j < column; j++)
		{
			 if(k < string.length){
				s[i][j] = string[k];
			 }else{
				s[i][j] = ''; 
			 }
			k++;
		}
		
	}
	
	// Reverse the array
	reverseArray = reverseArr(s);
	
	// Combine the charecters
	reverseArray.forEach(combineWord);
	
	// Get final encryptd string
	return reverseArray.join().replaceAll(',',' '); 
	
}

function reverseArr(a) {
	
	// Convert row to column and column to row
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

function combineWord(string, index, arr) {
	
	// Create encrypt message with spaces
	arr[index] = string.join().replaceAll(',','');
}















