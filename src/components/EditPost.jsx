import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editPost } from "api/posts";

export default function EditPost({ token, targetPost, setTargetPost }) {
  const [title, setTitle] = useState(targetPost.title);
  const [description, setDescription] = useState(targetPost.description);
  const [price, setPrice] = useState(targetPost.price);
  const [location, setLocation] = useState(targetPost.location);
  const [willDeliver, setWillDeliver] = useState(targetPost.willDeliver);

  let navigate = useNavigate();
  const postId = targetPost._id;

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await editPost(token, {
            postId,
            title,
            description,
            price,
            location,
            willDeliver,
          });
          setTargetPost({});
          navigate("/");
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        ></input>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></input>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        ></input>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        ></input>
        <label htmlFor="willDeliver">Will Deliver?</label>
        <input
          value={willDeliver}
          onChange={(e) => setWillDeliver(e.target.checked)}
          type="checkbox"
        ></input>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}