import React, { useState } from 'react';
import AdminDashboard from '../Dashboard/AdminDashboard';
import { db, storage } from "../../Firebase/Firebase"; // Import Firebase config and storage
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage methods
import './BlogUpload.css'

const BlogUploads = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [heading, setHeading] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!heading || !paragraph || !image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    setLoading(true);
    try {
      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `Bloguploads/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Add the document to Firestore
      await addDoc(collection(db, "BlogUploads"), {
        heading,
        paragraph,
        imageUrl,
        createdAt: new Date(),
      });

      // Reset form fields
      setHeading('');
      setParagraph('');
      setImage(null);
      alert("Data uploaded successfully.");
    } catch (error) {
      console.error("Error uploading data: ", error);
      alert("Failed to upload data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className='vm-container'>
      <AdminDashboard onToggleSidebar={setCollapsed} />
      <div className={`vm-content ${collapsed ? 'collapsed' : ''}`}>
        <h2 style={{textAlign:'center'}} className='heading-vmq'>Blog Uploads</h2>
        <form className='resource-upload-form' onSubmit={handleFormSubmit}>
          <div className='form-group'>
            <label htmlFor='heading'>Heading</label>
            <input
              type='text'
              id='heading'
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder='Enter heading'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='paragraph'>Paragraph</label>
            <textarea
              id='paragraph'
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              placeholder='Enter paragraph'
              required
            ></textarea>
          </div>

          <div className='form-group'>
            <label htmlFor='image'>Image</label>
            <input
              type='file'
              id='image'
              accept='image/*'
              onChange={handleImageChange}
              required
            />
          </div>
<div style={{textAlign:'center'}}>
          <button type='submit' className='submit-btn' disabled={loading}>
            {loading ? 'Uploading...' : 'Submit'}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogUploads;
