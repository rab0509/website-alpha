function process_data() {                                               // When the button is clicked, process the textarea contents
   var js_message = document.getElementById("text-data");   // put textarea contents into a string variable
   var y = js_message.elements["inputText"].value;
  
   var MessageStringLength = y.length;     // Calc the string variable length

   var MessageStringArray = []; 		                                // create an empty MessageStringArray array

   for (var i = 0; i < MessageStringLength; i++) {
     MessageStringArray[i] = y.charAt(i);                     // populate the MessageStringArray array
   }
    
   console.log(MessageStringArray);

// -------------------  Calculate textarea data  -------------------------------------

  var calcTextData = [];                  	                             //create an empty calcTextData array

  calcTextData = calcWordCnt(MessageStringArray, MessageStringLength);	 // calc the word and sentence counts

  var TotNumWords = calcTextData[0];		                                 // 
  var TotNumWS = calcTextData[1];			                                   // 

  var AvgWPS = calcAvgWPS(MessageStringArray, MessageStringLength, TotNumWords); // calc the avg word per sentence
  
  // need to display (TotNumWords, TotNumWS, AvgWPS) on the Contact page

  //console.log(TotNumWords);
  //console.log(TotNumWS);  
  //console.log(AvgWPS);
}

function calcWordCnt(MessageStringArray, MessageStringLength){          // Calc tot num of words and whitespaces in 
                                                                        // MessageStringArray
  var tnw_m1 = 0;                                                       // init (total number of words minus 1)
  var tnw = 0;                                                          // init (total number of words)
  var calcData = [];                                                    // create an empty calData array

  console.log(MessageStringLength);  
  
  for (var j = 0; j < MessageStringLength; j++) {
    if (MessageStringArray[j] === " ")
      tnw_m1 = tnw_m1++;                                                                                

    console.log(j);
    console.log(MessageStringArray[j]);
    console.log(tnw_m1);
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
