// eslint-disable-next-line react/prop-types
export default function HoverCounter({ count, incrementCounter }) {
  return (
    <div>
      <div onMouseOver={incrementCounter} className="myDIV">
        Hover over me.
      </div>
      <div className="hide">You Hovered</div>
      <span className="text-warning ">Hovered {count} Times </span>
    </div>
  );
}
