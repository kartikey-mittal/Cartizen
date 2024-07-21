import React, { useEffect, useState } from "react";
import Upper from "../Components/Upper";
import Inventory from "./Inventory";
import CompanyMain from "./CompanyMain";
import CompanySideBar from "../Components/CompanySideBar";
import { Client, Databases } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('65773c8581b895f83d40'); // Your project ID

const CompanyLayout = () => {
  const databases = new Databases(client);
  const [itemKey, setItemKey] = useState(null); // State to store the Product-Key

  const documentId = '65a1115598845be4f92a'; // Replace with your actual document ID

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const response = await databases.getDocument(
          'data-level-1', // Replace with your database ID
          'AdminDB', // Replace with your collection ID
          documentId
        );

        console.log('Document Data:', response);

        // Check the Product-Key attribute and update the state
        if (response['Product-Key'] === 10) {
          localStorage.setItem('itemKey',10)
          setItemKey(10);
          console.log('Avoiral');
        } else if (response['Product-Key'] === 11) {
          setItemKey(11);
          localStorage.setItem('itemKey',11)
          console.log('Kartikey');
        } else if (response['Product-Key'] === 12) {
          setItemKey(12);
          localStorage.setItem('itemKey',12)
          console.log('Other Key 12');
        }

        // Example: Check the statuskey attribute
        if (response.statuskey) {
          alert('Hello');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchDocumentData();
  }, [databases, documentId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw', backgroundColor: 'red' }}>
      <div style={{ backgroundColor: '#58b34e', height: "100vh", width: "18vw" }}>
        <CompanySideBar />
      </div>
      <div style={{ backgroundColor: 'black', height: '100vh', width: '82vw' }}>
        <Upper />
        {/* <Inventory itemKey={itemKey} /> Pass the itemKey state to the Inventory component */}
        <CompanyMain/>
      </div>
    </div>
  )
};

export default CompanyLayout;
