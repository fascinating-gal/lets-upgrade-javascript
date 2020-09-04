// question 1:program to search for a particular char in a string
let str="alekhyanadipalli";
let char="a";
if(str.indexOf(char)!=-1){
	console.log(`element ${char} is present at position ${str.indexOf(char)}`);
}
else{
	console.log("element not found");
}
// 
// question 2: program to covert min to sec
let minute=30;
let second=minute*60;
console.log(second);
// 
// question 3: program tosearch for an element in an array of string
let arr=["alekhya","achal","are","good","friends"];
arr.forEach((ele,i)=>{
	if(ele==="good"){
		console.log(`${ele} is present at position ${i}`);
	}
})
// 
// question 4:program to display only elements containing 'a' in them from an array
let arr1=["alekhya","achal","are","good","friends"];
arr1.forEach((ele,i)=>{
	if(ele.match(/a/gi)){
		console.log(ele);
		// gi is used for global case insensitive
		// g for global case sensitive
	}
})
// question 5: print an array in reverse order
let arr2=["alekhya","achal","are","good","friends"];
let arr3=arr2.reverse();
console.log(arr3);