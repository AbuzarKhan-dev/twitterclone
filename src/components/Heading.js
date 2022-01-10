

function Heading({ text, classname, textstart, textend }) {
  return (
    <div className="heading_container">
      <h1 className={ classname }>{text}<span>{textend}</span></h1>
    </div>
  );
}

export default Heading;
