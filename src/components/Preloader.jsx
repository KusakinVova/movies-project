function Preloader (props) {
  const {text} = props;
  return (
    <div>
      <h3>{text}</h3>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
}
export {Preloader};
