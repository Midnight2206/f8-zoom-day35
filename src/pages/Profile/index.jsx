import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./profile.module.scss";
const cx = classNames.bind(styles);

function ProfileCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = () =>
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((res) => setUser(res));
    fetchData();
  }, []);

  return (
    <div className={cx("card")}>
      {!user ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className={cx("card-avt")}>
            <img
              src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/483336trX/anh-mo-ta.png"
              className={cx("card-img")}
            />
          </div>
          <div className={cx("card-row")}>
            <div className={cx("row-label")}>Name: </div>
            <span className={cx("row-value")}>{user.name}</span>
          </div>
          <div className={cx("card-row")}>
            <div className={cx("row-label")}>Username: </div>
            <span className={cx("row-value")}>{user.username}</span>
          </div>
          <div className={cx("card-row")}>
            <div className={cx("row-label")}>Email: </div>
            <span className={cx("row-value")}>{user.email}</span>
          </div>
          <div className={cx("card-row")}>
            <div className={cx("row-label")}>Phone: </div>
            <span className={cx("row-value")}>{user.phone}</span>
          </div>
          <div className={cx("card-row")}>
            <div className={cx("row-label")}>Website: </div>
            <span className={cx("row-value")}>{user.website}</span>
          </div>
          <div className={cx("card-row")}>
            <div className={cx("row-label")}>Address: </div>
            <span className={cx("row-value")}>
              {user?.address?.street}, {user?.address?.city}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileCard;
