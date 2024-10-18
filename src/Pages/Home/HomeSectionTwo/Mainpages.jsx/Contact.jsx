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
            padding: 7rem;
          }

          @media (max-width: 768px) {
            .formone {
              grid-template-columns: 1fr;
              gap: 3rem;
              padding-top: 5rem;
            }

            .formone > * {
              padding: 4rem;
            }
          }

          @media (max-width: 480px) {
            .formone {
              padding-top: 3rem;
              gap: 2rem;
            }

            .formone > * {
              padding: 1rem;
            }
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
