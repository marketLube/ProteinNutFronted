import React from "react";
import { Contactpage } from "../Component.jsx/Contactpage";
import { Bill } from "../Component.jsx/Bill";
import { css } from "styled-components";

export const Contact = () => {
  return (
    <div>
      <style>
        {css`
          .formone {
            padding-top: 10rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10rem;
            background-color: #f3f1e8;
          }

          .formone > * {
            display: flex;
            padding: 10rem;
          }
        `}
      </style>

      <div className="formone">
        <Contactpage />
        <Bill />
      </div>
    </div>
  );
};
