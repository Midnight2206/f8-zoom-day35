import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./todo.module.scss";
const cx = classNames.bind(styles);

function Todo() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("entry-bar")}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={cx("btn")}
          onClick={() => {
            setTasks((prev) => [
              ...prev,
              { name: value, id: Date.now(), complete: false },
            ]);
            setValue("");
          }}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <span>Chưa có công việc nào, hãy thêm công việc đầu tiên!</span>
      ) : (
        <ul className={cx("tasks-list")}>
          {tasks.map((task) => (
            <li
              data-complete={task.complete}
              className={cx("task-item")}
              key={task.id}
            >
              <span>{task.name}</span>
              <div className={cx("task-control")}>
                <button
                  className={cx("del-btn")}
                  onClick={() =>
                    setTasks((prev) => prev.filter((t) => t.id !== task.id))
                  }
                >
                  Del
                </button>
                <button
                  className={cx("check-btn")}
                  data-complete={task.complete}
                  onClick={() =>
                    setTasks((prev) =>
                      prev.map((t) =>
                        t.id === task.id
                          ? { ...t, complete: !t.complete }
                          : t
                      )
                    )
                  }
                >
                  {task.complete ? <span>✔</span> : <span>✖</span>}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className={cx("footer")}>
        <span>
          Tổng: {tasks.length} công việc, Hoàn thành:{" "}
          {tasks.filter((task) => task.complete).length} công việc, Chưa hoàn
          thành: {tasks.filter((task) => !task.complete).length} công việc
        </span>
      </div>
    </div>
  );
}

export default Todo;
