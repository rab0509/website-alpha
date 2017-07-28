function process_data() {                                                     // when the button is clicked, process the textarea contents
   
  var js_message = document.getElementById("text-data")[0].value;             // store the textarea contents into a string array
  var MessageStringLength = js_message.length;                                // calculate the string variable length

  if (MessageStringLength === 0) {
    alert("Please enter text in textarea before clicking the stats button!");  // Error Handling
  }
  else {
  // -------------------  Process the textarea data  -------------------------------------

    var calcTextData = calcData(js_message, MessageStringLength);	             // call function to calc stats on textarea data

    // Display the calculated results of the textarea entry to the user

    document.getElementById("row1").innerHTML="Number of Words Typed: " + calcTextData[0];
    document.getElementById("row2").innerHTML="Number of Sentences Typed: " + calcTextData[1];
    document.getElementById("row3").innerHTML="Number of Spaces in Textarea: " + calcTextData[2];
    document.getElementById("row4").innerHTML="Avg. Words per Sentence: " + calcTextData[3].toFixed(2);
    }
  }

function calcData(js_message, MessageStringLength){                      // Calculate Data
                                                                         
  var dataResults = [];                  	                               // create array to store computed data 
  var tnw_m1 = 0;                                                        // initialize (total number of words minus 1)
  var tnw = 0;                                                           // initialize (total number of words)
  var tns = 0;                                                           // initialize total number of sentences

  for (var j = 0; j < MessageStringLength; j++) {                        
    if (js_message[j] === " ") {                                 
      tnw_m1++;                                                          // count whitespaces                     
    } else if (js_message[j] === "." || js_message[j] === "?" || js_message[j] === "!") {
      tns++;                                                             // count sentences
    }
  }
  
  dataResults[0] = tnw = tnw_m1 + 1;                                     // assign tnw to calcData array (words)
  dataResults[1] = tnws = tnw_m1;                                        // assign tnws to calcData array (whitespaces)
  dataResults[2] = tns;                                                  // assign tns to calcData array (sentences)
  dataResults[3] = (tnw / tns);                                          // assign avgwps to calcData array (average)
  
  return dataResults;                                                    // pass back computed data
}
