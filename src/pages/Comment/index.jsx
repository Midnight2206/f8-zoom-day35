import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

export default function Comment() {
  const [comments, setComments] = useState(null);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const fetchComments = () =>
      fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then((res) => res.json())
        .then((res) =>
          setComments(
            res.map((item) => ({
              ...item,
              name: item.name[0]?.toUpperCase() + item.name.slice(1),
              avt_src: `https://ui-avatars.com/api/?name=${encodeURIComponent(
                item.name
              )}&background=random`,
            }))
          )
        );
    fetchComments();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target).entries();
    const newComment = {
      ...Object.fromEntries(formData),
      id: comments.length + 1,
      avt_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8YgBJ9ngm3gHu6uRHnyVQAnA-52oyD_AsQ&s"
    };
    setComments(prev => [newComment, ...prev])
    setShowForm(false);
    e.target.reset();
  }

  return (
    <>
        <div className={cx("comment-content")}>
          <h2 className={cx("comment-title")}>Bình luận bài viết của Khánh</h2>
  
          <div className={cx("comment-post")}>
            <img src="https://avatarmoi.com/wp-content/uploads/2025/06/Anh-gai-xinh-mong-bu-sexy.webp" />
            <img src="https://vapa.vn/wp-content/uploads/2022/12/hinh-gai-xinh.jpg" />
            <img src="https://vnclass.edu.vn/wp-content/uploads/2025/01/anh-gai-xinh-sexy-24.jpg" />
          </div>
  
          <div className={cx("comment-interaction-bar")}>
            <span>123 likes</span>
            <span>{comments?.length} comments</span>
          </div>
  
          {!comments ? (
            <span>Loading...</span>
          ) : (
            <div className={cx("comments-list")}>
              {!comments.length ? (
                <span>Chưa có bình luận nào</span>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id}>
                    <div className={cx("comment-item")}>
                      <img className={cx("comment-avt")} src={comment.avt_src} />
                      <div className={cx("comment-box")}>
                        <span className={cx("comment-username")}>
                          {comment.name}
                        </span>
                        <span className={cx("comment-email")}>
                          {comment.email}
                        </span>
                        <span className={cx("comment-body")}>{comment.body}</span>
                      </div>
                    </div>
                    <div className={cx("comment-info")}>
                      <span>11 giờ trước</span>
                      <span>Thích</span>
                      <span>Trả lời</span>
                    </div>
                  </div>
                ))
              )}
              <div className={cx("comments-list-footer")}>
                <Button
                  primary
                  rounded
                  className={cx("comment-btn")}
                  onClick={() => setShowForm(true)}
                >
                  Viết bình luận
                </Button>
              </div>
            </div>
          )}
        </div>
      
      {showForm && (
        <div className={cx("form-overlay")}>
          <div className={cx("form-content")}>
            <button
              className={cx("close-form")}
              onClick={() => setShowForm(false)}
            >
              X
            </button>
            <form id="commentForm" className={cx("comment-form")} onSubmit={(e) => handleSubmit(e)}>
              <div className={cx("comment-input")}>
                <label>Name</label>
                <input type="text" name="name"/>
              </div>
              <div className={cx("comment-input")}>
                <label>Email</label>
                <input type="text" name="email"/>
              </div>
              <div className={cx("comment-input")}>
                <label>Your Comment</label>
                <textarea name="body"/>
              </div>
            </form>
            <Button primary rounded type="submit" form="commentForm" className={cx("submit-btn")}>Gửi</Button>
          </div>
        </div>
      )}
    </>
  );
}
