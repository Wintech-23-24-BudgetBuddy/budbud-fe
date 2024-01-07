import React from 'react';

function List(props) {
  let titleText = props.type;
  return (
    <div>
      <h1>{titleText}</h1>
      <ul>{props.children}</ul>
    </div>
  );
}

export default List;
