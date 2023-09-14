// eslint-disable-next-line react/prop-types
export default function KeypressedCounter({ count, incrementCounter }) {
  return (
    <div>
      <div className="container">
        <h4 className="mt-3">Press key and change textarea</h4>
        <form>
          <div className="form-group">
            <label className="text-warning mb-1  ">
              You changed {count} Times
            </label>
            <textarea
              onChange={incrementCounter}
              className="form-control"
              rows="5"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
