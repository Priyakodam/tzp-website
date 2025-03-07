import React, { useState, useEffect } from 'react';
import AdminDashboard from '../Dashboard/AdminDashboard';
import { db } from "../../Firebase/Firebase"; 
import { collection, getDocs } from "firebase/firestore";
import './Contacts.css'
const Contacts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Contacts"));
        const contactList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactList);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className='vm-container'>
      <AdminDashboard onToggleSidebar={setCollapsed} />
      <div className={`vm-content ${collapsed ? 'collapsed' : ''}`}>
        <h2 style={{ textAlign: 'center' }} className='heading-vmq'>Contacts</h2>

        <div className="table-container">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map(contact => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.subject}</td>
                    <td>{contact.message}</td>
                    <td>{new Date(contact.createdAt?.seconds * 1000).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>No Contacts Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
