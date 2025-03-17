import "./comment.css";

const comments = [
  { id: 1, text: "This is a great post!", user: "Alice" },
  { id: 2, text: "I totally agree with this.", user: "Bob" },
];

const CommentList = () => {
  return (
    <>
      <div className="border p-2 w-100">
        {comments.map((comment, idx) => {
          const { user, text } = comment;
          return (
            <div key={idx} className="border py-2 my-2">
              <div className="flex justify-around">
                <strong>{user}</strong> : {text}
                <button className="border px-2 rounded-sm">Delete</button>
                <button className="border px-2 rounded-sm">Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentList;
