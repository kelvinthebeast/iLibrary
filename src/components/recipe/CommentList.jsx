const CommentList = ({ comments }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">💬 Comments</h3>

      {comments.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 italic">No comments yet. Be the first!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-gray-50 dark:bg-gray-800 transition"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-blue-600 dark:text-blue-400">
                  {comment.username}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(comment.timestamp).toLocaleString()}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-200">{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
