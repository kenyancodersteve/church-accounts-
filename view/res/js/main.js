var total = []

var totalmpesatythe = 0.0
var cashtithe = 0.0
var othermpesa = 0.0
var othercash = 0.0
var totalexpence=0.0
var expence=[]
var ampty = []
var acaty = []
var ampot = []
var acaoth = []
var cashiersI = []
var banked = 0
var totithe = 0
var toother=0
var tocash =0
var tompesa =0
var overal1 = 0
var overal2 = 0
const currentDate = new Date();






function toggleOverlay(index) {
    var overlays = document.querySelectorAll('.overlay');
    overlays.forEach(function(overlay) {
      overlay.style.display = 'none';
    });
  
    var overlay = document.getElementById('overlay' + index);
    overlay.style.display = 'block';
  }
  
  function addRow(containerId) {
    var container = document.getElementById(containerId);
    var newRow = document.createElement('div');
    newRow.className = 'row';


    if (containerId == "container7"  ) {


        newRow.innerHTML = `
        <div class="cell"><input type="text" placeholder="Expence"></div>
        <div class="cell"><input type="phone" placeholder="Receipt code"></div>
        <div class="cell"><input type="text" placeholder="Phone"></div>
        <div class="cell"><input type="number" placeholder="Amount"></div>
        <div class="cell"><button class="remove-row-button" onclick="removeRow(this, '${containerId}')">Remove</button></div>
    `;


    }
    if (containerId == "container0"  ) {


        newRow.innerHTML = `
        <div class="cell"><input type="text" placeholder="Mpesa Code"></div>
        <div class="cell"><input type="phone" placeholder="Phone Number"></div>
        <div class="cell"><input type="text" placeholder="Members No"></div>
        <div class="cell"><input type="number" placeholder="Amount"></div>
        <div class="cell"><button class="remove-row-button" onclick="removeRow(this, '${containerId}')">Remove</button></div>
    `;


    } else
     if (containerId == "container1"  ) { 
    

        newRow.innerHTML = `
       
        <div class="cell"><input type="text" placeholder="Members No / Name"></div>
        <div class="cell"><input type="number" placeholder="Amount"></div>
        <div class="cell"><button class="remove-row-button" onclick="removeRow(this, '${containerId}')">Remove</button></div>
    `;

          
    } else
     if (containerId == "container2"  ){ 
     

        newRow.innerHTML = `
       
        <div class="cell"><input type="text" placeholder="Members No / Name"></div>
        <div class="cell"><input type="number" placeholder="Amount"></div>
        <div class="cell"><button class="remove-row-button" onclick="removeRow(this, '${containerId}')">Remove</button></div>
    `;

    
    } else 
    if (containerId == "container3"  ) {
      
    
        newRow.innerHTML = `
         <div class="cell"><input type="text" placeholder="type"></div>
        <div class="cell"><input type="number" placeholder="Amount"></div>
        <div class="cell"><button class="remove-row-button" onclick="removeRow(this, '${containerId}')">Remove</button></div>
    `;


     } else if(containerId == "container4" ) {
    
        newRow.innerHTML = `
        <div class="cell"><input type="text" placeholder="Name"></div>
        <div class="cell"><input type="phone" placeholder="phone"></div>
        <div class="cell"><button class="remove-row-button" onclick="removeRow(this, '${containerId}')">Remove</button></div>
    `;



    }
    container.insertBefore(newRow, container.querySelector('.button'));
}

function removeRow(button, containerId) {
    var container = document.getElementById(containerId);
    var rowToRemove = button.parentNode.parentNode;
    rowToRemove.parentNode.removeChild(rowToRemove);
}



async function submitData(containerId) {
    console.log(ampty,acaoth,acaty,ampot,cashiersI)

  
    if (containerId == "container0"  ) {
        ampty = []  
    } else
     if (containerId == "container1"  ) { 
        ampot = []          
    } else
     if (containerId == "container2"  ){ 
        acaty = []    
    } else 
    if (containerId == "container3"  ) { 
        acaoth = []    
     } else if(containerId == "container4" ) {
        cashiersI = []    
    } 
    else if(containerId == "container7" ) {
        expence = []    
    }

        var container = document.getElementById(containerId);
        total = []
        totale = []
        var rows = container.querySelectorAll('.row');
    var resultDiv = container.querySelector('.result');
  
    var resultHTML = '';

    

    rows.forEach(function(row, index) {



var inputs = row.querySelectorAll('input[type="text"],input[type="phone"],input[type="number"]');
var valuesArray = [];

inputs.forEach(function(input) {    
    valuesArray.push(input.value);
});

if (containerId == "container0"  ) {    
    ampty.push(valuesArray)
} else
 if (containerId == "container1"  ) { 
    ampot.push(valuesArray)
} else
 if (containerId == "container2"  ){ 
    acaty.push(valuesArray)
} else 
if (containerId == "container3"  ) { 
    acaoth.push(valuesArray)
 } else if(containerId == "container4" ) {
    cashiersI.push(valuesArray)
 }
 else if(containerId == "container7" ) {
    expence.push(valuesArray)
 }

console.log(valuesArray);

resultHTML += '<div class="box-container"> ' + (index + 1  ) + ' ';
if (containerId == "container7"  ) {


    inputs.forEach(function(input, inputIndex) {
        if(inputIndex==2){
            resultHTML +=  ' <div class="box">' + input.value + '</div>';
        }else
       if(inputIndex==3){     
        total.push(input.value)          
        resultHTML +=  '<div class="box n">  ' + input.value + '  </div> ';
        }else{
        resultHTML += ' <div class="box"> ' + input.value + ' </div>';
       }
    });
  
    resultHTML += '</div>';



}else

if (containerId == "container0"  ) {


        inputs.forEach(function(input, inputIndex) {
            if(inputIndex==2){
                resultHTML +=  ' <div class="box"> Members No : ' + input.value + '</div>';
            }else
           if(inputIndex==3){     
            total.push(input.value)          
            resultHTML +=  '<div class="box n">  ' + input.value + '  </div> ';
            }else{
            resultHTML += ' <div class="box"> ' + input.value + ' </div>';
           }
        });
      
        resultHTML += '</div>';



    }else{
        inputs.forEach(function(input, inputIndex) {
           
            if(inputIndex==1){     
                total.push(input.value)          
                resultHTML +=  '<div class="box n">  ' + input.value + '   </div> ';
                }else{
                    if (containerId == "container2") {
                        resultHTML += ' <div class="box">  Members No :' + input.value + ' </div>';
                    }else{
                        resultHTML += ' <div class="box"> ' + input.value + ' </div>';

                    }
               }
            });
    resultHTML += '</div>';
            
        


    }




});

var sum = 0
await total.forEach(v => {
var x = parseFloat(v)
sum += x
})




const formattedDate = currentDate.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

console.log(formattedDate);

if (containerId == "container7"  ) {
   
    resultHTML += ' <h4> Total Expensies: ' + sum + ' ............... Date :'+ currentDate +' </h4>';
    resultDiv.innerHTML = resultHTML;   
    var mtreceipt = document.getElementById('exe');
    mtreceipt.innerHTML = resultHTML;
       totalexpence = sum
    console.log(totalexpence)


}else
if (containerId == "container0"  ) {
   
    resultHTML += ' <h4> Total Mpesa Tythe: ' + sum + ' ............... Date :'+ currentDate +' </h4>';
    resultDiv.innerHTML = resultHTML;   
    var mtreceipt = document.getElementById('mtres');
    mtreceipt.innerHTML = resultHTML;
       totalmpesatythe = sum
    console.log(totalmpesatythe)


} else
 if (containerId == "container1"  ) { 
    var mgreceipt = document.getElementById('mgres');
    resultHTML += ' <H4> Total Mpesa other giving : ' + sum + ' .......... Date :'+ currentDate +' </H4>';
    resultDiv.innerHTML = resultHTML; 
    mgreceipt.innerHTML = resultHTML;
     othermpesa = sum
    console.log(othermpesa)

      
} else
 if (containerId == "container2"  ){ 
    var ctreceipt = document.getElementById('ctres');
    resultHTML += ' <H4> Total Cash Tythe : ' + sum + ' ........... Date :'+ currentDate +' <H4>';
    resultDiv.innerHTML = resultHTML;
    ctreceipt.innerHTML = resultHTML;

    cashtithe = sum
    console.log(cashtithe)

} else 
if (containerId == "container3"  ) { 

    resultHTML += ' <H4> Total Cash giving: ' + sum + '........... Date :'+ currentDate +' </H4>';
    resultDiv.innerHTML = resultHTML;
    var cgreceipt = document.getElementById('cgres');
    cgreceipt.innerHTML = resultHTML;
  
    othercash = sum
    console.log(othercash)

 } else if(containerId == "container4" ) {

    // Initialize an array to store null values
let nullVariables = [];

// Check if each variable is null and store it if it is
if (othercash === 0) {
    nullVariables.push(othercash);
}
if ( cashtithe === 0) {
    nullVariables.push(cashtithe);
}
if (othermpesa === 0) {
    nullVariables.push(othermpesa);
}
if ( totalmpesatythe === 0) {
    nullVariables.push(totalmpesatythe);
}

console.log(totalmpesatythe, cashtithe,tocash)
// Check if there were any null variables

   console.log("None of the variables are null.");


    resultHTML += ' <h5> Signitory Cashiers present </h5>';
    resultHTML += ' <H4> Date :'+ currentDate +' </H4>';
    resultDiv.innerHTML = resultHTML;
    var cashier = document.getElementById('cashier');
    cashier.innerHTML = resultHTML;


    var sresultDiv = document.getElementById('sresult');
    totithe = totalmpesatythe + cashtithe
    toother=(othercash + othermpesa)
    tocash = (cashtithe + othercash)
    tompesa = (totalmpesatythe + othermpesa)
    banked = (tocash-totalexpence)    

    overal1 = (tocash + tompesa)
    overal2 = (banked +tompesa)

 
    // if(overal1 != overal2){
    //     var resultHTML = `<h2 class = "T"> SOMETHING IS WRONG THE DATA IS NOT IN BALANCE</h2>`;
    //     resultDiv.innerHTML = resultHTML;
        
    //     var resultHTML = `<h2 class = "T"> SOMETHING IS WRONG THE INPUTS ARE EMPTY</h2>`;
    //     resultDiv.innerHTML = resultHTML;       

    // }


    var sresultHTML = `<h5> BOOKS IN BALANCE AS OF 
    ${currentDate}</h5>`;
    
    sresultHTML += `
    <div class="tresult" id="sresult">
                <div class="row">
                <div class="cell">Categories</div>
                <div class="cell">Mpesa</div>
                <div class="cell">Cash</div>
                <div class="cell n T">Total</div>
                </div> 
                
                <div class="row">
                <div class="cell">Tithe</div>
                <div class="cell T">${totalmpesatythe}</div>
                <div class="cell T">${cashtithe}</div>
                <div class="cell n T">${totithe}</div>
                </div> 

                <div class="row">
                <div class="cell">Offering, TAS, Thanksgiving</div>
                <div class="cell T">${othermpesa}</div>
                <div class="cell T">${othercash}</div>
                <div class="cell n T">${toother}</div>
                </div> 

                <div class="row">
                <div class="cell n T">Total</div>
                <div class="cell n T">${tompesa}</div>
                <div class="cell n T">${tocash}</div>
                <div class="cell n T"><b>  ${overal1}</b></div>
                </div>

                <div class="row e">
                <div class="cell c T ">Total expence</div>
                <div class="cell e n T ">${totalexpence}</div>
                <div class="cell  c T ">Total cash banked</div>
                <div class="cell e n T"> ${banked}</div>
                </div>
             
                </div>

                <h5> Net Balance Banked ${overal2} </h5>
                `

    sresultDiv.innerHTML = sresultHTML;
  
}

}
// Display tabular data
var outputElement = document.getElementById('output');
var combinedArrays = []
document.getElementById('downloadButton').addEventListener('click', function() {
      outputElement.innerHTML=''
      combinedArrays = []
 // Add table with four columns and four rows
 var additionalTable = [
    ['categories', 'mpesa', 'cash', 'total'],
    ['tithe',totalmpesatythe,cashtithe, totithe],
    ['others', othermpesa,othercash, toother],
    ['total', tompesa, tocash, overal1],    
    ['expensies', totalexpence,'cash banked', banked],

];
var simt = [['Baraka church mpesa tithe total',totalmpesatythe]] 
var simo = [['Baraka church mpesa others total',othermpesa]]
var sict = [['Baraka church cash tithe total',cashtithe]]
var sico = [['Baraka church cash others total',othercash]]
var sie = [['Baraka church expensies total',totalexpence]]
var sico = [['Baraka church cash others total',othercash]]
var sic = [['Baraka church casier incharge']]
var sit = [['Baraka church Balance check as of',currentDate]]
var rt = [['Baraka church net Balance banked',overal2]]
var si = [['Baraka church Receipt as of',currentDate]]


   // Combine arrays into a single array of arrays
    combinedArrays = [si,ampty,simt,acaty,sict,si,acaoth,sico,ampot,simo,sic,cashiersI,sie,expence,sit,additionalTable,rt,si];

    // Function to get the maximum length of each column in a 2D array
    function getColumnWidths(array) {
        const widths = [];
        for (const row of array) {
            row.forEach((cell, i) => {
                widths[i] = Math.max(widths[i] || 0, String(cell).length);
            });
        }
        return widths;
    }

    // Function to pad each cell to align columns
    function padCells(array, widths) {
        return array.map(row => {
            return row.map((cell, i) => {
                return String(cell).padEnd(widths[i], ' ');
            }).join(' | ');
        });
    }


    // Convert each array to text format with aligned columns
    const textContents = combinedArrays.map(array => {
        const widths = getColumnWidths(array);
        const paddedRows = padCells(array, widths);
        return paddedRows.join('\n');
    });

  
    textContents.forEach(text => {
        const table = document.createElement('pre');
        table.textContent = text;
        outputElement.appendChild(table);
    });

    // Function to save text content as a file
    function saveTextAsFile(text) {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Barakareceiptasof${currentDate}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Event listener for save button
    document.getElementById('saveButton').addEventListener('click', () => {
        if(overal1 && othercash && othermpesa && totalmpesatythe && overal2 && cashiersI){
            
            const allTextContents = textContents.join('\n\n');
            saveTextAsFile(allTextContents);
             
    
    // Assuming you have some arrays defined
    
    
    // Combine arrays into a single object to send to the backend
    const data = {
si,ampty,simt,acaty,sict,si,acaoth,sico,ampot,simo,sic,cashiersI,sie,expence,sit,additionalTable,rt,si
    };
    
    // Make a fetch request to your backend API
    fetch('data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle response from backend if needed
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with your fetch operation:', error);
    });  
            
        }
        else{
            alert('Ensure that all your fields are filled and submitted even cashiers')
        }


    });



})
 
