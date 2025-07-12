const CommentList = ({ comments }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">Comments</h3>
      {comments.map((comment, index) => (
        <div key={index} className="border-b py-2">
          <p className="font-semibold">{comment.username}</p>
          <p>{comment.text}</p>
          <p className="text-gray-500 text-sm">{new Date(comment.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}
export default CommentList