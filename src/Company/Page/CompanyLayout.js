import React, { useEffect, useRef } from "react";

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

  const documentId = '65a1115598845be4f92a'; // Replace with your actual document ID
  const subscriptionsRef = useRef([]);

  useEffect(() => {
    const subscribeToRealtimeUpdates = (documentId) => {
      console.log("Subscribing to document ID", documentId);

      const subscription = client.subscribe(
        `databases.data-level-1.collections.AdminDB.documents.${documentId}`,
        (response) => {
          console.log("Full Realtime Response:", response);
          console.log(
            `Received Appwrite event for document ${documentId}:`,
            response.events
          );

          // Your custom logic here
          // Example: Log the payload
          const payload = response.payload;
          console.log('Payload:', payload);

          // Example: Check the Product-Key attribute and print messages
          if (payload['Product-Key'] === 10) {
            console.log('Avoiral');
          } else if (payload['Product-Key'] === 11) {
            console.log('Kartikey');
          }

          // Example: Check if the status attribute changed
          if (payload.status) {
            alert('Hello');
          }
        }
      );

      subscriptionsRef.current = [subscription];
    };

    subscribeToRealtimeUpdates(documentId);

    // Cleanup subscription on component unmount
    return () => {
      subscriptionsRef.current.forEach((subscription) => subscription());
    };
  }, [client, documentId]);
  return (
    <div style={{display:'flex',flexDirection:'row',height:'100vh',width:'100vw',backgroundColor:'red'}}>
      <div style={{backgroundColor:'green',height:"100vh",width:"18vw"}}>
<CompanySideBar/>
      </div>
    
      <div style={{backgroundColor:'yellow',height:'100vh',width:'82vw'}}>
       <Upper/>
     {/* <CompanyMain/> */}
     <Inventory/>
      </div>
    </div>
  )
};

export default CompanyLayout
