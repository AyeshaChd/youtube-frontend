import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-8 mt-3 border-black border-l-[1px]">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
