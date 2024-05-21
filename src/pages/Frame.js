import { css } from "@emotion/css";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const Frame = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--color-white1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 88px;
        letter-spacing: normal;
        line-height: normal;
        text-align: left;
        font-size: var(--font-size-xl);
        color: var(--color-3);
        font-family: var(--font-roboto);
        @media screen and (max-width: 1400px) {
          gap: 44px;
        }
        @media screen and (max-width: 925px) {
          gap: var(--gap-3xl);
        }
      `}
    >
      <img
        className={css`
          width: 831px;
          position: relative;
          max-height: 100%;
          object-fit: contain;
          display: none;
          max-width: 100%;
          z-index: 0;
        `}
        alt=""
        src="/-1-1@2x.png"
      />
      <FrameComponent3 />
      <FrameComponent2 />
      <img
        className={css`
          width: 576.1px;
          height: 384.7px;
          position: absolute;
          margin: 0 !important;
          top: 513px;
          left: -222px;
          overflow: hidden;
          flex-shrink: 0;
          object-fit: contain;
          z-index: 2;
        `}
        alt=""
        src="/-1-12@2x.png"
      />
      <div
        className={css`
          align-self: stretch;
          height: 395px;
          position: relative;
          background-color: var(--gray-6);
          display: none;
          z-index: 4;
        `}
      />
      <div
        className={css`
          display: none;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-26xl);
          max-width: 100%;
          z-index: 5;
          @media screen and (max-width: 1400px) {
            flex-wrap: wrap;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-3xs);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 420px;
              height: 28px;
              position: relative;
              text-transform: uppercase;
              display: inline-block;
              flex-shrink: 0;
              max-width: 100%;
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-base);
              }
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >{`Создан 12 января `}</p>
            <p
              className={css`
                margin: 0;
              `}
            >
              &nbsp;
            </p>
          </div>
          <div
            className={css`
              width: 420px;
              height: 175px;
              position: relative;
              font-size: var(--font-size-99xl);
              font-weight: 200;
              font-family: var(--font-oswald);
              display: inline-block;
              max-width: 100%;
              @media screen and (max-width: 925px) {
                font-size: var(--font-size-40xl);
              }
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-16xl);
              }
            `}
          >
            1998 года
          </div>
        </div>
        <div
          className={css`
            height: 223px;
            width: 3px;
            position: relative;
            background-color: var(--color-darkslateblue);
            @media screen and (max-width: 1400px) {
              width: 100%;
              height: 3px;
            }
          `}
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-3xs);
            max-width: 100%;
            font-size: var(--font-size-9xl);
            color: var(--color-darkslateblue);
            font-family: var(--font-oswald);
          `}
        >
          <div
            className={css`
              height: 41px;
              position: relative;
              text-transform: uppercase;
              display: inline-block;
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-3xl);
              }
            `}
          >
            История создания
          </div>
          <div
            className={css`
              width: 715px;
              height: 96px;
              position: relative;
              font-size: var(--font-size-base);
              font-family: var(--font-roboto);
              color: var(--color-3);
              display: inline-block;
              flex-shrink: 0;
              max-width: 100%;
            `}
          >
            Создан для организации научно-технической поддержки регулирующему
            органу в области использования атомной энергии. 12 января 1998 года
            НТЦ БЯТ был официально зарегистрирован как «Объединение юридических
            лиц в форме ассоциации «Научно-технический центр безопасности
            ядерных технологий».
          </div>
        </div>
      </div>
      <div
        className={css`
          width: 1334px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl) var(--padding-xs);
          box-sizing: border-box;
          max-width: 100%;
          font-size: var(--font-size-2xl);
        `}
      >
        <h3
          className={css`
            margin: 0;
            width: 652px;
            position: relative;
            font-size: inherit;
            font-weight: 400;
            font-family: inherit;
            display: inline-block;
            flex-shrink: 0;
            max-width: 100%;
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-mid);
            }
          `}
        >
          <ul
            className={css`
              margin: 0;
              font-family: inherit;
              font-size: inherit;
              padding-left: var(--padding-9xl);
            `}
          >
            <li
              className={css`
                margin-bottom: 0px;
              `}
            >
              Совершенствование инфраструктуры ядерной и радиационной
              безопасности в Республике Казахстан
            </li>
          </ul>
          <p
            className={css`
              margin: 0;
            `}
          >
            &nbsp;
          </p>
          <ul
            className={css`
              margin: 0;
              font-family: inherit;
              font-size: inherit;
              padding-left: var(--padding-9xl);
            `}
          >
            <li
              className={css`
                margin-bottom: 0px;
              `}
            >
              Сотрудничество с международными организациями в области ядерной
              безопасности
            </li>
          </ul>
          <p
            className={css`
              margin: 0;
            `}
          >
            &nbsp;
          </p>
          <ul
            className={css`
              margin: 0;
              font-family: inherit;
              font-size: inherit;
              padding-left: var(--padding-9xl);
            `}
          >
            <li className={css``}>
              Содействие уменьшению угрозы распространения ядерного оружия,
              радиоактивных и ядерных материалов
            </li>
          </ul>
        </h3>
      </div>
      <FrameComponent1 />
      <img
        className={css`
          width: 737.3px;
          position: relative;
          max-height: 100%;
          overflow: hidden;
          object-fit: contain;
          display: none;
          max-width: 100%;
          z-index: 8;
        `}
        alt=""
        src="/-1-2@2x.png"
      />
      <FrameComponent />
      <img
        className={css`
          width: 730px;
          position: relative;
          max-height: 100%;
          overflow: hidden;
          display: none;
          max-width: 100%;
          z-index: 10;
        `}
        alt=""
        src="/-1-15.svg"
      />
      <Footer />
    </div>
  );
};

export default Frame;
