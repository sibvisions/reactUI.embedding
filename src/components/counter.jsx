import React from "react";

const Counter = (props) => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = props.counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-1">
          <span style={{ fontSize: 24 }} className={getBadgeClasses()}>
            {formatCount()}
          </span>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-secondary"
            onClick={() => props.onIncrement(props.counter)}
          >
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>
          <button
            className="btn btn-info m-2"
            onClick={() => props.onDecrement(props.counter)}
            disabled={props.counter.value === 0 ? "disabled" : ""}
          >
            <i className="fa fa-minus-circle" aria-hidden="true" />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.onDelete(props.counter.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Counter;
