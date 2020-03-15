import React from 'react'

export default function Header(props) {
  return (
    <>
      <header>
        <h1>Xbox Live Api</h1>
        {props.children}
      </header>
    </>
  );
}
