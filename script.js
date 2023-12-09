function isSameType(value1, value2) {
	//your js code here
  
	  if(isNaN(value1) && isNaN(value2)){
		  return true;
	  }
  
	  return typeof value1===typeof value2;
	  
  }

  // do not change the code below.
  let value1 = prompt("Enter Start of the Range.");
  let value2 = prompt("Enter End Of the Range.");
  
  //just change the Data type of the perticular 
  value1= isNaN(value1)?value1:parseInt(value1);

  value2= isNaN(value2)?value2:parseInt(value2);
  alert(isSameType(value1, value2));
  