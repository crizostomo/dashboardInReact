import React from 'react';
import {BiBrightness} from "react-icons/bi"

export default function Title({title, subtitle, text, text2}) {
  return <div className="title__container">
      <div className="title">
          <h5>{title}</h5>
          <h6>{subtitle}</h6>
      </div>
      <div className="option2">
          <h5>{text2}</h5>
      </div>
      <div className="option1">
        <h1>{text}</h1>
      </div>

      <div className="icon">
          <BiBrightness />
      </div>
  </div>;
}
