// eslint-disable-next-line react/prop-types
export default function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <button
        onClick={incrementCount}
        className="btn btn-primary btn-lg p-3 m-3  "
      >
        <span className="spinner-grow spinner-grow-sm me-2 "></span>
        Clicked {count} Times
      </button>
    </div>
  );
}
