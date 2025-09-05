import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./product.module.scss";
const cx = classNames.bind(styles);

function Product() {
  const [products, setProducts] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=16")
        .then((res) => res.json())
        .then((res) =>
          setProducts(
            res.map((item) => ({
              ...item,
              title: item.title[0].toUpperCase() + item.title.slice(1),
              bodyCompact:
                item.body.length > 97 ? item.body.slice(0, 97) + "..." : item.body,
            }))
          )
        );
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={cx("products-list")}>
        {products ? (
          products.map((product) => (
            <div key={product.id} className={cx("product-card")}>
              <div className={cx("product-row")}>
                <div className={cx("row-label")}>ID: </div>
                <div className={cx("row-content")}>{product.id}</div>
              </div>
              <div className={cx("product-row")}>
                <div className={cx("row-label")}>Title: </div>
                <div className={cx("row-content")}>{product.title}</div>
              </div>
              <div className={cx("product-row")}>
                <div className={cx("row-label")}>Content: </div>
                <div className={cx("row-content")}>{product.bodyCompact}</div>
              </div>
              <button
                onClick={() => setModalData(product)}
                className={cx("detail-btn")}
              >
                Xem chi tiết
              </button>
            </div>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>

      {modalData && (
        <div className={cx("modal-overlay")}>
          <div className={cx("modal-content")}>
            <button
              className={cx("close-btn")}
              onClick={() => setModalData(null)}
            >
              X
            </button>
            <h3 className={cx("modal-title")}>Product detail</h3>
            <div className={cx("modal-section")}>
              <span className={cx("modal-label")}>ID:</span>
              <span className={cx("modal-value")}>{modalData.id}</span>
            </div>
            <div className={cx("modal-section")}>
              <span className={cx("modal-label")}>Title:</span>
              <span className={cx("modal-value")}>{modalData.title}</span>
            </div>
            <div className={cx("modal-section")}>
              <span className={cx("modal-label")}>Content:</span>
              <span className={cx("modal-value")}>{modalData.body}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
