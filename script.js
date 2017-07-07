function process_data() {                                               // when the button is clicked, process the textarea contents
   
   var js_message = document.getElementById("text-data");               // 
   var y = js_message.elements["inputText"].value;                      // put textarea contents into a string variable
   var MessageStringLength = y.length;                                  // calculate the string variable length
   var MessageStringArray = []; 		                                    // create an empty MessageStringArray array

   for (var i = 0; i < MessageStringLength; i++) {
     MessageStringArray[i] = y.charAt(i);                               // populate the MessageStringArray array
   }

  if (MessageStringLength === 0) {
    alert("Please enter text in textarea before clicking the stats button!");  // Error Handling
  }
  else {
  // -------------------  Process the textarea data  -------------------------------------

    var calcTextData = calcData(MessageStringArray, MessageStringLength);	     // call function to calc stats on textarea data

    var TotNumWords = calcTextData[0];		                                     // assign total number of words to a variable
    var TotNumWS = calcTextData[1];			                                       // assign total number of whitespaces to a variable
    var TotNumSen = calcTextData[2];		                                       // assign total number of sentences to a variable
    var AvgWPS = calcTextData[3];			                                         // assign total number of whitespaces to a variable

    // Display the calculated results of the textarea entry to the user

    document.getElementById("row1").innerHTML="Number of Words Typed: "+TotNumWords;
    document.getElementById("row2").innerHTML="Number of Sentences Typed: "+TotNumSen;
    document.getElementById("row3").innerHTML="Number of Spaces in Textarea: "+TotNumWS;
    document.getElementById("row4").innerHTML="Avg. Words per Sentence: "+AvgWPS;
    }
  }

function calcData(MessageStringArray, MessageStringLength){              // Calculate total number of words and 
                                                                         // whitespaces in MessageStringArray
   
  var dataResults = [];                  	                               // create an empty dataResults array that will  
                                                                         // be used to store computed data

  var tnw_m1 = 0;                                                        // initialize (total number of words minus 1)
  var tnw = 0;                                                           // initialize (total number of words)
  var tns = 0;                                                           // initialize total number of sentences

// -- Calc total number of words, whitespaces, sentences, and avg. no. of words/sentence in the string array ---- 

  for (var j = 0; j < MessageStringLength; j++) {                        
    if (MessageStringArray[j] === " ") {                                 
      tnw_m1++;                                                          // count whitespaces                     
    } else if (MessageStringArray[j] === "." || MessageStringArray[j] === "?" || MessageStringArray[j] === "!") {
      tns++;                                                             // count sentences
    }
  }
  
  dataResults[0] = tnw = tnw_m1 + 1;                                     // assign tnw to calcData array (words)
  dataResults[1] = tnws = tnw_m1;                                        // assign tnws to calcData array (whitespaces)
  dataResults[2] = tns;                                                  // assign tns to calcData array (sentences)
  dataResults[3] = (tnw / tns);                                          // assign avgwps to calcData array (average)
  
  return dataResults;                                                    // pass back computed data
}
