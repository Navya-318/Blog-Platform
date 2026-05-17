import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [blogs, setBlogs] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:8080/blogs");
    setBlogs(response.data);
  };

  const addBlog = async () => {

    const addComment = async () => {

  const commentData = {
    username,
    message
  };

  await axios.post("http://localhost:8080/comments", commentData);

  alert("Comment Added");

  setUsername("");
  setMessage("");
};

    const blogData = {
      title,
      content
    };

    await axios.post("http://localhost:8080/blogs", blogData);

    fetchBlogs();

    setTitle("");
    setContent("");
  };

  const addComment = async () => {

  const commentData = {
    username,
    message
  };

  await axios.post("http://localhost:8080/comments", commentData);

  alert("Comment Added");

  setUsername("");
  setMessage("");
};

  const registerUser = async () => {

    const userData = {
      name,
      email,
      password
    };

    await axios.post("http://localhost:8080/users/register", userData);

    alert("User Registered");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>User Registration</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={registerUser}>Register</button>

      <hr />

      <h1>Create Blog</h1>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={addBlog}>Create Blog</button>

      <hr />

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}

      <hr />

<h1>Add Comment</h1>

<input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

<br /><br />

<textarea
  placeholder="Comment"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>

<br /><br />

<button onClick={addComment}>Add Comment</button>

    </div>
  );
}

export default App;