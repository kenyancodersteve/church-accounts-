// server.js

const admin = require('../config');
const db = admin.firestore()
const crypto = require('crypto');
// const secretKey = crypto.randomBytes(16).toString('hex'); 
const secretKey = 'dd907758de5b1d3317f2fdce899ffa18'


  
  // Decryption
  function decryptToObject(encryptedData, secretKey, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return JSON.parse(decrypted);
  }

const tres = async (req, res) => {

    
  
  
    try {
      const collectionPath = 'data'; // Specify your collection path here
      const snapshot = await admin.firestore().collection(collectionPath).get();
  
      const docs = [];
      const docm = [];
      var datarecords ={
        documents:docs
            }
             var mdatarecords ={
              documents:docm
                  } 
              
     
  
  function areSimilarStrings(string1, string2) {
    // Convert strings to lowercase for case-insensitive comparison
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
  
    // Remove whitespaces from both strings
    string1 = string1.replace(/\s/g, '');
    string2 = string2.replace(/\s/g, '');
  
    // Define similarity threshold
    const similarityThreshold = 0.8;
  
    // Calculate the length of the longer string
    const maxLength = Math.max(string1.length, string2.length);
  
    // Calculate the Levenshtein distance (edit distance)
    let distance = 0;
    for (let i = 0; i < maxLength; i++) {
        if (string1[i] !== string2[i]) {
            distance++;
        }
    }
  
    // Calculate similarity ratio
    const similarityRatio = 1 - distance / maxLength;
  
    // Return true if similarity ratio is above the threshold, false otherwise
    return similarityRatio >= similarityThreshold;
  }
  var docy = '';
  var ydatarecords ={
    documents:docy
        }
  
  function replaceOthersWithAmpotAndAcaoth(ampotArray, acaothArray, additionalTable) {
    // Remove the 'others' category if it exists
    for (let i = 0; i < additionalTable.length; i++) {
        if (additionalTable[i][0].toLowerCase() === 'others') {
            additionalTable.splice(i, 1);
            break;
        }
    }
  
    // Append arrays from ampot
    for (let i = 0; i < ampotArray.length; i++) {
        additionalTable.push([ampotArray[i][0], parseInt(ampotArray[i][1]), 0, parseInt(ampotArray[i][1])]);
    }
    
    // Append arrays from acaoth
    for (let i = 0; i < acaothArray.length; i++) {
        let categoryExists = false;
        // Check if category already exists in additionalTable
        for (let j = 0; j < additionalTable.length; j++) {
            if (areSimilarStrings(additionalTable[j][0], acaothArray[i][0])) {
                additionalTable[j][2] = parseInt(acaothArray[i][1]);
                additionalTable[j][3] += parseInt(acaothArray[i][1]);
                categoryExists = true;
                break;
            }
        }
        // If category doesn't exist, add it to additionalTable
        if (!categoryExists) {
            additionalTable.push([acaothArray[i][0], 0, parseInt(acaothArray[i][1]), parseInt(acaothArray[i][1])]);
        }
    }
  
  
  // Ensure 'total' and "expenses" nested arrays are the last arrays respectively
  let totalRow = null;
  let expensesRow = null;
  
  for (let i = 0; i < additionalTable.length; i++) {
      if (additionalTable[i][0].toLowerCase() === 'total') {
          totalRow = additionalTable.splice(i, 1)[0];
          i--; // Adjust index after splicing
          break;
      } 
   
  }
  
  if (totalRow) {
      additionalTable.push(totalRow);
  }
  
  
  // Ensure 'expenses' row is the last row
  let expRow = null;
  
  for (let i = 0; i < additionalTable.length; i++) {
      if (additionalTable[i][0].toLowerCase() === 'expensies') {
          expRow = additionalTable.splice(i, 1)[0];
          i--; // Adjust index after splicing
          break;
      }
  }
  
  if (expRow) {
      additionalTable.push(expRow);
  }
    }
  
    function organizeDatesByMonth(dates) {
      const datesByMonth = {};
    
      // Group dates by month
      dates.forEach(dateObj => {
        const date = new Date(dateObj.id);
        const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    
        if (!datesByMonth[month]) {
          datesByMonth[month] = [];
        }
    
        datesByMonth[month].push(dateObj);
      });
    
      return datesByMonth;
    }
  
  
    function extractValues(originalArray) {
      let resultArray = [];
      let netCashBanked = [];
    
      // Iterate over the original array
      for (let i = 1; i < originalArray.length; i++) {
        const entry = originalArray[i];
    
        // Skip the 'total' entry
        if (entry[0] === 'expensies') {
          const expensiesIndex = entry.indexOf('expensies');
          const cashBankedIndex = entry.indexOf('cash banked');
    
          // Extract values of 'expensies' and 'cash banked'
          const expensiesValue = entry[expensiesIndex + 1];
          const cashBankedValue = entry[cashBankedIndex + 1];
    
          // Push 'expensies' and 'cash banked' with their respective values
          resultArray.push(['expensies', expensiesValue]);
          resultArray.push(['cash banked', cashBankedValue]);
    
          // Calculate net cash banked
          const netCashBankedValue = (originalArray[i - 1][originalArray[i - 1].length - 1] - expensiesValue) + cashBankedValue;
          netCashBanked.push(['net banked', netCashBankedValue]);
        } else {
          // For other entries, push the first and last values
          resultArray.push([entry[0], entry[entry.length - 1]]);
        }
      }
      resultArray.push(netCashBanked[0])
    
      return [resultArray];
    }
    var month = []
   
    // // Test the function
    // const originalArray = [
    //   ['categories', 'mpesa', 'cash', 'total'],
    //   ['tithe', 10825, 2950, 13775],
    //   ['Thanks giving', 200, 12000, 12200],
    //   ['Offering', 6590, 2700, 9290],
    //   ['Tas', 970, 0, 970],
    //   ['total', 19585, 17650, 37235],
    //   ['expensies', 11710, 'cash banked', 5940]
    // ];
    
    // console.log(extractValues(originalArray));
    
  async function fetchAndOrganizeDocuments() {
    try {
      const snapshot = await db.collection('data').get();
      const documentsByMonth = {};
  
      snapshot.forEach(doc => {
        
        const decryptedObject = decryptToObject(doc.data().encryptedData, secretKey, doc.data().iv);     
        replaceOthersWithAmpotAndAcaoth(decryptedObject.ampot, decryptedObject.acaoth, decryptedObject.additionalTable);
  
  
        var array = decryptedObject.additionalTable
        const wholeNumber = array[array.length - 1][array[array.length - 1].length - 1];
        const docData = wholeNumber;
        const docId = doc.id;
        const docDate = new Date(docId); // Assuming timestamp field exists in your document
        const monthKey = `${docDate.getFullYear()}-${(docDate.getMonth() + 1).toString().padStart(2, '0')}`;
        // docs.push({ id: docId, data: decryptedObject.additionalTable }); 
  
        if (!documentsByMonth[monthKey]) {
          documentsByMonth[monthKey] = [];
        }
        documentsByMonth[monthKey].push({ id: docId, t: decryptedObject.additionalTable, doc: decryptedObject });
        docs.push({ id: docId, data: decryptedObject.additionalTable }); 
        var monthd = extractValues(decryptedObject.additionalTable)
  console.log("monthd",monthd)
  month.push({ id: docId, data: monthd })
        console.log('helped',decryptedObject.additionalTable,decryptedObject)
  
      });
  
      docy = documentsByMonth
  
      return documentsByMonth;
    } catch (error) {
      console.error('Error fetching documents: ', error);
      throw error; // Re-throw the error to be caught by the caller
    }
  }
  
  
  // Call the function to fetch and organize documents
  async function fetchData() {
    try {
      const orgdata = await fetchAndOrganizeDocuments();
      console.log('retrunedorgdata',orgdata);
      return orgdata
    } catch (error) {
      console.error('Error fetching and logging data: ', error);
    }
  }
  
  
   var dat = await fetchData();
  
  console.log('hope ',dat)
  
  //   // updateDocIdIfTimeExists(collectionPath, docId);
  //   const decryptedObject = decryptToObject(doc.data().encryptedData, secretKey, doc.data().iv);
  //   console.log('Decrypted:', decryptedObject.additionalTable);
  // var array=decryptedObject.additionalTable
  // replaceOthersWithAmpotAndAcaoth(decryptedObject.ampot, decryptedObject.acaoth, decryptedObject.additionalTable);
  
  // docs.push({ id: doc.id, data: decryptedObject.additionalTable }); 
  //   const wholeNumber = array[array.length - 1][array[array.length - 1].length - 1];
        
      console.log('Documents in collection in month:', docy);
    
      // res.status(200).send(datarecords);
      // res.render('rec2', { ddocuments: datarecords.ddocuments });
    } catch (error) {
      console.error('Error accessing collection:', error);
      res.status(500).send('Error accessing collection');
    }
    let combinedArray = [];
  
  const combineArrays = (array) => {
    const keys = new Set([...combinedArray.map(entry => entry[0]), ...array.map(entry => entry[0])]);
  
    keys.forEach(key => {
      const obj = combinedArray.find(entry => entry[0] === key) || [key];
      const value = array.find(entry => entry[0] === key);
      
      obj.push(value ? value[1] : 0);
      
      if (!combinedArray.find(entry => entry[0] === key)) {
        combinedArray.push(obj);
      }
    });
  }
  
  
    const organizedmDates = organizeDatesByMonth(month);
    console.log('month,',organizedmDates)
  // Call the function with your array of dates
  var combinedArry = []
  const addTotalToNestedArrays = (array) => {
    return array.map(innerArray => {
      const total = innerArray.slice(1).reduce((acc, curr) => acc + curr, 0);
      return [...innerArray, total];
    });
  };
  function mergeOthers(data) {
      let mergedData = [];
      let othersData = Array(data[0].length).fill(0);
  
      data.forEach(row => {
          let category = row[0];
          if (category === "tithe" || category ==='Date' || category === "Offering" || category === "Thanks giving" || category === "Tas" || category === "total" || category === "expensies" || category === "cash banked" || category === "net banked") {
              mergedData.push(row);
          } else {
              let startIndex = 1;
              while (row[startIndex] === 0 && startIndex < row.length) {
                  startIndex++;
              }
              for (let i = startIndex; i < row.length; i++) {
                  othersData[i] += row[i];
              }
          }
      });
  
      // Check if othersData starts with zero
      let allZero = true;
      for (let i = 1; i < othersData.length; i++) {
          if (othersData[i] !== 0) {
              allZero = false;
              break;
          }
      }
  
      if (!allZero) {
          mergedData.push(["Others", ...othersData]);
      }
      
      return mergedData;
  }
  function rearrangeData(dataArray) {
    // Find the index of the "Others" row
    const othersIndex = dataArray.findIndex(row => row[0] === 'Others');
    
    // Remove the "Others" row
    const othersRow = dataArray.splice(othersIndex, 1)[0];
    
    // Insert the "Others" row right above the "Total" row
    const totalIndex = dataArray.findIndex(row => row[0] === 'total');
    dataArray.splice(totalIndex, 0, othersRow);
    
    return dataArray;
  }
  
  function arrangeOutputArray(array) {
    // Find the index of 'net banked'
    let netBankedIndex = array.findIndex(item => item[0] === 'net banked');
  
    // Extract items below 'net banked' and remove them
    let itemsBelowNetBanked = array.splice(netBankedIndex + 1);
  
    // Find the index of 'total'
    let totalIndex = array.findIndex(item => item[0] === 'total');
  
    // Insert items below 'net banked' above 'total'
    array.splice(totalIndex, 0, ...itemsBelowNetBanked);
  
    return array;
  }
  function adjustArrayLength(array) {
    // Find the maximum length among all nested arrays
    let maxLength = Math.max(...array.map(arr => arr.length));
  
    // Iterate through each nested array
    array.forEach(arr => {
        // Calculate the number of zeros to add
        let zerosToAdd = maxLength - arr.length;
  
        // Add one zero before the last value if the array is shorter
        if (zerosToAdd > 0) {
            arr.splice(arr.length - 1, 0, 0);
        }
    });
  
    return array;
  }
  function convertToCamelCase(array) {
    return array.map(subArray => {
      // Convert the first element (word) to camel case
      const camelCaseWord = subArray[0].replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, ''); // Remove spaces
  
      // Create a new sub-array with the first element in camel case and the rest as is
      return [camelCaseWord, ...subArray.slice(1)];
    });
  }
  function convertToSentenceCase(array) {
    return array.map(subArray => {
      // Convert the first element (word) to sentence case
      const sentenceCaseWord = subArray[0].charAt(0).toUpperCase() + subArray[0].slice(1).toLowerCase();
  
      // Create a new sub-array with the first element in sentence case and the rest as is
      return [sentenceCaseWord, ...subArray.slice(1)];
    });
  }
  function removeZeroBeforeOthers(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] === 'Others' && data[i][1] === 0) {
            data[i].splice(1, 1); // Remove the zero at index 1
            break;
        }
    }
    return data;
  }
  // Access the arrays of dates organized by month
  for (const month in organizedmDates) {
    combinedArray = []
    console.log(month + ':');
    organizedmDates[month].forEach(dateObj => {
      console.log('single do',dateObj.data[0]);
      const date = new Date(dateObj.id);
  
  // Define an array of abbreviated days of the week
  const daysOfWeekAbbrev = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = date.getUTCDay();
  
  // Get the day of the month
  const dayOfMonth = date.getUTCDate();
  
  // Concatenate the abbreviated day of the week and the day of the month
  const dayString = daysOfWeekAbbrev[dayOfWeek] + ' ' + dayOfMonth;
  
  console.log(dayString); // Output: Sun 14
  
      dateObj.data[0].unshift(['Date', dayOfMonth])
      const combinedArry = combineArrays(dateObj.data[0]);
      console.log('combinedArry',combinedArry)
    
    });
  
    console.log('\n');
    // var ooutputArray = addTotalToNestedArrays(combinedArray);
    var cc = convertToCamelCase(combinedArray)
    var ouutputArray = arrangeOutputArray(combinedArray);
    let mergedData = mergeOthers(ouutputArray);
    let rearrangedData = rearrangeData(mergedData);
    let newData = removeZeroBeforeOthers(rearrangedData);
    var nooutputArray = addTotalToNestedArrays(newData);
    var adjustedArrayx = adjustArrayLength(nooutputArray);
   
  console.log(adjustedArrayx);
  // Replace the last element of the first sub-array with the word "Total"
  adjustedArrayx[0][adjustedArrayx[0].length - 1] = 'Total';
  
  const camelCaseArray = convertToSentenceCase(adjustedArrayx);
    combinedArry.push({'month':month,'combinedArray': camelCaseArray})
    console.log(camelCaseArray);
  
  
  }
  console.log("combinedArry ",combinedArry);   
  
    res.render('tresurer',{ 
      ddocuments: datarecords.documents,
      tdocuments: mdatarecords.documents, 
      adocuments: ydatarecords.documents,
      dat,
      organizedmDates,
      combinedArry
     });
  }
  
  
  

module.exports={
  tres

}
