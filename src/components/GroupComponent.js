import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const GroupComponent = ({ rectangle13, prop, prop1 }) => {
  return (
    <div
      className={css`
        align-self: stretch;
        width: 295px;
        box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.15);
        background-color: var(--color-white1);
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 0px 0px var(--padding-11xl);
        box-sizing: border-box;
        gap: var(--gap-mini);
        text-align: left;
        font-size: var(--font-size-sm);
        color: var(--color-3);
        font-family: var(--font-roboto);
      `}
    >
      <div
        className={css`
          align-self: stretch;
          height: 395px;
          position: relative;
          box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.15);
          background-color: var(--color-white1);
          display: none;
        `}
      />
      <img
        className={css`
          align-self: stretch;
          flex: 1;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
          z-index: 1;
        `}
        loading="lazy"
        alt=""
        src={rectangle13}
      />
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 0px var(--padding-3xs) 0px var(--padding-2xs);
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-5xs);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--font-size-mid);
              z-index: 1;
            `}
          >
            {prop}
          </div>
          <div
            className={css`
              width: 267px;
              position: relative;
              color: var(--gray-3);
              display: inline-block;
              z-index: 1;
            `}
          >
            {prop1}
          </div>
          <Link
            className={css`
              cursor: pointer;
              text-decoration: underline;
              position: relative;
              color: var(--color-darkslateblue);
              display: inline-block;
              min-width: 73px;
              z-index: 1;
            `}
            to="/3"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
