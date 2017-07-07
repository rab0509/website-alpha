var myButton = document.getElementById("js_project");

myButton.addEventListener("click", function(){
  alert("Click!!");
  //process_data();
});

function process_data() {                                               // When the button is clicked, process the textarea contents
  var js_message = document.getElementById("js_project").textContent;   // put textarea contents into a string variable
  var MessageStringLength = js_message.length();                        // Calc the string variable length
  var MessageStringArray = []; 		                                      // create an empty MessageStringArray array

// ---------------------  Load the string variable contents into the string array  --------

  for (var i = 0; i < MessageStringLength; i++) {
    MessageStringArray[i] = js_message.charAt(i);                       // populate the MessageStringArray array
  }
  
// -------------------  Calculate textarea data  -------------------------------------

  var calcTextData = [];                  	                             //create an empty calcTextData array

  calcTextData = calcWordCnt(MessageStringArray, MessageStringLength);	 // calc the word and sentence counts

  var TotNumWords = calcTextData[0];		                                 // 
  var TotNumWS = calcTextData[1];			                                   // 

  var AvgWPS = calcAvgWPS(MessageStringArray, MessageStringLength, TotNumWords); // calc the avg word per sentence
  
  // need to display (TotNumWords, TotNumWS, AvgWPS) on the Contact page
}

function calcWordCnt(MessageStringArray, MessageStringLength){          // Calc tot num of words and whitespaces in 
                                                                        // MessageStringArray
  var tnw_m1 = 0;                                                       // init (total number of words minus 1)
  var tnw = 0;                                                          // init (total number of words)
  var calcData = [];                                                    // create an empty calData array
  
  for (var j = 0; j < MessageStringLength; j++) {
    if (MessageStringArray[j] === " ")
      tnw_m1 = tnw_m1++;                                                                                
  }

  calcData[0] = tnw = tnw_m1 + 1;                                       // assign tnw to calcData array
  calcData[1] = tnws = tnw_m1;                                          // assign tnws to calcData array

  return calcData;                                                      // pass back calcData
} 

// -- Calculate the average number of words per sentence in the string array ----

function calcAvgWPS(MessageStringArray, MessageStringLength, tnw){      // Calc avg num of words per sentence in 
                                                                        // MessageStringArray
  var tns = 0;                                                          // init Total number of words per sentence
  
  for (var k = 0; k < MessageStringLength; k++) {
    if (MessageStringArray[k] === ".")
      tns = tns++;
  }

  return (tnw / tns);
}
