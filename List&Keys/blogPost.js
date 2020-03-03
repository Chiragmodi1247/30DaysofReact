function blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key="post.id">{post.user}</li>
      ))}
    </ul>
  );
  const comment = props.posts.map(post => {
    <div key="post.id">
      <h3>{post.user}</h3>
      <p>{post.comment}</p>
    </div>;
  });

  return(
      <div>
          {sidebar}
          <hr/>
          {comment}
      </div>
  )

}

const posts = [
  {
    id: "1",
    user: "Chirag",
    comment: "This is so good"
  },
  {
    id: "2",
    user: "Shreya",
    comment: "Don't be fool"
  }
];

ReactDOM.render(<blog posts={posts} />, document.getElementById("root"));
