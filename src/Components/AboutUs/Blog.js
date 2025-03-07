import React, { useState, useEffect } from 'react';
import { db } from "../../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Blog.css"; // Import the CSS file

const Blog = () => {
        const [blogs, setBlogs] = useState([]);

        useEffect(() => {
                const fetchBlogs = async () => {
                        try {
                                const querySnapshot = await getDocs(collection(db, "BlogUploads")); // Fetch from Firestore
                                const blogList = querySnapshot.docs.map(doc => ({
                                        id: doc.id,
                                        ...doc.data(),
                                }));
                                setBlogs(blogList);
                        } catch (error) {
                                console.error("Error fetching blogs:", error);
                        }
                };

                fetchBlogs();
        }, []);

        return (
                <>
                        <h1 className="blog-title">Blogs</h1> {/* Added Heading */}

                        <div className="blog-container">
                                {blogs.length > 0 ? (
                                        blogs.map(blog => (
                                                <div className="blog-card" key={blog.id}>
                                                        <img src={blog.imageUrl} alt={blog.heading} className="blog-image" />
                                                        <h2 className="blog-heading">{blog.heading}</h2>
                                                        <p className="blog-paragraph">{blog.paragraph}</p>
                                                </div>
                                        ))
                                ) : (
                                        <p className="no-blogs">No Blogs Found</p>
                                )}
                        </div>
                </>
        );
};

export default Blog;
