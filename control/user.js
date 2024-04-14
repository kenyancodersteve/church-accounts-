
// server.js


const admin = require('../config');
  
  // Decryption
  function decryptToObject(encryptedData, secretKey, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return JSON.parse(decrypted);
  }

const user = async (req, res) => {
    const events={
  eventsdata:[
    { id: 'Jan 24', data:'Friday 27th Easter confrence all are welcome' },
    { id: 'Jan 25', data:'Mai mahiu retreate for couples on 19-21 october' },
    { id: 'Jan 24', data:'National youth confrence all are welcome on 20-27 december' }
  ]  }
  const tytherecords={
    tdata:[
      { id: 'Jan 24', data:'You sent 2000 0n 15 mar 2024 15:00 hrs mpesa code RTYGHFTYUX' },
      { id: 'Jan 25', data:'You sent 3000 0n 20 mar 2024 14:25 hrs mpesa code SCTYADGERV' },
      { id: 'Jan 24', data:'You sent 2570 0n 25 mar 2024 17:07 hrs mpesa code YDVBTYERTG' }
    ]  }
    const announcements={
    adata:[
        { id: 'Jan 24', data:'Waruku missions that will be held on 4th of april 2025 needs to be funded and all are welcome to give their contributions' 
      },
        { id: 'Jan 25', data:'Baraka church funddrive will be held on fourth two sudays ahead all are adviced to have it all together in one piece so as to ensure unity among all believers' },
        { 
          id: 'Jan 24', data:'Bishop Julius Mburu is resigning his position and the event will be conducted by the presinding bishop Dr Eliud Karanja here in baraka all are welcome' }
      ]  }
  
    // var datarecords ={
    //   edocuments:events,
    //   tdocuments:tytherecords,
    //   adocuments:announcements,    
  
    // }
  
  
  //   try {
  //     const collectionPath = 'data'; // Specify your collection path here
  //     const snapshot = await admin.firestore().collection(collectionPath).get();
    
  //     const docs = [];
  //     const docm = [];
  //     const docy = [];
  //     var datarecords ={
  //       documents:docs
  //           }
  //            var mdatarecords ={
  //             documents:docm
  //                 } 
  //                 var ydatarecords ={
  //                   documents:docy
  //                       }
  //     snapshot.forEach(doc => {
  //       // Usage example:
  //   const collectionPath = 'data';
  //   const docId = doc.id;
  //   // Function to fetch documents and organize them by month
  // async function fetchAndOrganizeDocuments() {
  //   try {
  //     const snapshot = await db.collection('data').get();
  //     const documentsByMonth = {};
  
  //     snapshot.forEach(doc => {
        
  //       const decryptedObject = decryptToObject(doc.data().encryptedData, secretKey, doc.data().iv);
  
  //       var array=decryptedObject.additionalTable
  //       const wholeNumber = array[array.length - 1][array[array.length - 1].length - 1];
  //       const docData = wholeNumber;
  //       const docId = doc.id;
  //       const docDate = new Date(docId); // Assuming timestamp field exists in your document
  //       const monthKey = `${docDate.getFullYear()}-${(docDate.getMonth() + 1).toString().padStart(2, '0')}`;
  
  //       if (!documentsByMonth[monthKey]) {
  //         documentsByMonth[monthKey] = [];
  //       }
  // console.log(docData)
  //       documentsByMonth[monthKey].push({ id: docId, t:docData });
  //     });
  
  //     console.log(documentsByMonth);
  //     docy.push(documentsByMonth)
  //     return documentsByMonth;
  //   } catch (error) {
  //     console.error('Error fetching documents: ', error);
  //   }
  // }
  
  // // Call the function to fetch and organize documents
  // fetchAndOrganizeDocuments();
    
  //   // updateDocIdIfTimeExists(collectionPath, docId);
  //   const decryptedObject = decryptToObject(doc.data().encryptedData, secretKey, doc.data().iv);
  //   console.log('Decrypted:', decryptedObject.additionalTable);
  // var array=decryptedObject.additionalTable
  //   docs.push({ id: doc.id, data: decryptedObject.additionalTable }); 
  //   const wholeNumber = array[array.length - 1][array[array.length - 1].length - 1];
  //   docm.push({ id: doc.id, data: wholeNumber }); 
  //     });
    
  //     console.log('Documents in collection:', docs);
  //     // res.status(200).send(datarecords);
  //     // res.render('rec2', { ddocuments: datarecords.ddocuments });
  //   } catch (error) {
  //     console.error('Error accessing collection:', error);
  //     res.status(500).send('Error accessing collection');
  //   }
    
    
  
    res.render('user',{ 
      ddocuments: events.eventsdata,
      tdocuments: tytherecords.tdata, 
      adocuments: announcements.adata
     });
    
    }

    module.exports={
        user      
      }