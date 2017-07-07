function process_data() {                                               // when the button is clicked, process the textarea contents
   
   var js_message = document.getElementById("text-data");               // 
   var y = js_message.elements["inputText"].value;                      // put textarea contents into a string variable
  
   var MessageStringLength = y.length;                                  // calculate the string variable length
   var MessageStringArray = []; 		                                    // create an empty MessageStringArray array

   for (var i = 0; i < MessageStringLength; i++) {
     MessageStringArray[i] = y.charAt(i);                               // populate the MessageStringArray array
   }

// -------------------  Process the textarea data  -------------------------------------

  //var calcTextData = [];                  	                            // create an empty calcTextData array

  var calcTextData = calcWordCnt(MessageStringArray, MessageStringLength);	 // call function to calc the word and sentence counts

  var TotNumWords = calcTextData[0];		                               // assign total number of words to a variable
  var TotNumWS = calcTextData[1];			                               // assign total number of whitespaces to a variable

  var AvgWPS = calcAvgWPS(MessageStringArray, MessageStringLength, TotNumWords); // call function to calc the average 
                                                                                 // words per sentence
  
  // need to display (TotNumWords, TotNumWS, AvgWPS) on the Contact page

  console.log(TotNumWords);
  console.log(TotNumWS);  
  console.log(AvgWPS);
}

function calcWordCnt(MessageStringArray, MessageStringLength){           // Calculate total number of words and 
                                                                         // whitespaces in MessageStringArray
   
  var tnw_m1 = 0;                                                        // init (total number of words minus 1)
  var tnw = 0;                                                           // init (total number of words)
  var calcData = [];                                                     // create an empty calcData array
  
  for (var j = 0; j < MessageStringLength; j++) {                        // count the (number of words minus 1)
    if (MessageStringArray[j] === " ") {
      tnw_m1++;                                                                                
    }
  }
  
  calcData[0] = tnw = tnw_m1 + 1;                                        // assign tnw to calcData array
  calcData[1] = tnws = tnw_m1;                                           // assign tnws to calcData array

  return calcData;                                                       // pass back tns and tnws
} 

// -- Calculate the average number of words per sentence in the string array ----

function calcAvgWPS(MessageStringArray, MessageStringLength, tnw){       // Calc avg num of words per sentence in 
                                                                         // MessageStringArray
  var tns = 0;                                                           // init Total number of words per sentence
  
  for (var k = 0; k < MessageStringLength; k++) {                        // count the (total number of sentences)
    if (MessageStringArray[k] === ".")
      tns++;
  }
  
  return (tnw / tns);                                                    // pass back (average number of words per sentence)
}
