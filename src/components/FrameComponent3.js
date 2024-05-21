import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const FrameComponent3 = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        height: 803px;
        position: relative;
        max-width: 100%;
        text-align: left;
        font-size: var(--font-size-21xl);
        color: var(--color-white1);
        font-family: var(--font-arsenal);
      `}
    >
      <img
        className={css`
          position: absolute;
          top: 0px;
          left: 1px;
          width: 1439px;
          height: 769px;
          object-fit: cover;
        `}
        loading="lazy"
        alt=""
        src="/rectangle-9@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 769px;
          left: 1920px;
          background: linear-gradient(#03245f, #03245f),
            linear-gradient(180deg, #16b5ff, rgba(0, 171, 251, 0));
          width: 1920px;
          height: 769px;
          transform: rotate(180deg);
          transform-origin: 0 0;
          z-index: 1;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: -9px;
            width: 601.1px;
            height: 332.8px;
            overflow: hidden;
            transform: rotate(-180deg);
            z-index: 2;
          `}
          alt=""
          src="/-1-11.svg"
        />
      </div>
      <h1
        className={css`
          margin: 0;
          position: absolute;
          top: 341px;
          left: 340px;
          font-size: inherit;
          text-transform: uppercase;
          font-weight: 400;
          font-family: inherit;
          z-index: 2;
          @media screen and (max-width: 925px) {
            font-size: var(--font-size-13xl);
          }
          @media screen and (max-width: 450px) {
            font-size: var(--font-size-5xl);
          }
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          Научно-технический центр
        </p>
        <p
          className={css`
            margin: 0;
            color: var(--color-4);
          `}
        >
          безопасности ядерных технологий
        </p>
      </h1>
      <h3
        className={css`
          margin: 0;
          position: absolute;
          top: 593px;
          left: 989px;
          font-size: var(--font-size-2xl);
          font-weight: 400;
          font-family: inherit;
          display: inline-block;
          width: 591px;
          height: 130px;
          z-index: 2;
          @media screen and (max-width: 450px) {
            font-size: var(--font-size-mid);
          }
        `}
      >
        Создан для организации научно-технической поддержки регулирующему органу
        в области использования атомной энергии. 12 января 1998 года НТЦ БЯТ был
        официально зарегистрирован как «Объединение юридических лиц в форме
        ассоциации «Научнотехнический центр безопасности ядерных технологий»
      </h3>
      <header
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
          background-color: var(--color-white1);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px var(--padding-4xs);
          box-sizing: border-box;
          gap: var(--gap-4xs);
          max-width: 100%;
          z-index: 3;
          text-align: left;
          font-size: var(--font-size-lg);
          color: var(--color-3);
          font-family: var(--font-oswald);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            height: 115px;
            position: relative;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            background-color: var(--color-white1);
            display: none;
          `}
        />
        <nav
          className={css`
            margin: 0;
            align-self: stretch;
            background-color: var(--color-gray-100);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            padding: var(--padding-7xs) var(--padding-320xl) var(--padding-10xs);
            box-sizing: border-box;
            gap: var(--gap-mini);
            max-width: 100%;
            z-index: 1;
            text-align: left;
            font-size: var(--font-size-mini);
            color: var(--gray-3);
            font-family: var(--font-roboto);
            @media screen and (max-width: 925px) {
              padding-left: var(--padding-150xl);
              padding-right: var(--padding-150xl);
              box-sizing: border-box;
            }
            @media screen and (max-width: 450px) {
              padding-left: var(--padding-xl);
              padding-right: var(--padding-xl);
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              height: 27px;
              width: 1920px;
              position: relative;
              background-color: var(--color-gray-100);
              display: none;
              max-width: 100%;
            `}
          />
          <div
            className={css`
              position: relative;
              display: inline-block;
              min-width: 64px;
              z-index: 2;
            `}
          >
            Қазақша
          </div>
          <div
            className={css`
              position: relative;
              color: var(--color-black);
              display: inline-block;
              min-width: 58px;
              z-index: 2;
            `}
          >
            Русский
          </div>
          <div
            className={css`
              position: relative;
              display: inline-block;
              min-width: 49px;
              z-index: 2;
            `}
          >
            English
          </div>
        </nav>
        <div
          className={css`
            width: 263px;
            position: relative;
            text-transform: uppercase;
            display: none;
            white-space: nowrap;
            z-index: 4;
          `}
        >
          NUCLEAR TECHNOLOGY SAFETY CENTER
        </div>
        <div
          className={css`
            width: 1085px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl);
            box-sizing: border-box;
            max-width: 100%;
            font-size: var(--font-size-base);
            font-family: var(--font-roboto-condensed);
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-mini);
              max-width: 100%;
            `}
          >
            <div
              className={css`
                width: 80px;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                font-size: var(--font-size-2xl-9);
                font-family: var(--font-oswald);
              `}
            >
              <div
                className={css`
                  height: 70.4px;
                  flex: 1;
                  position: relative;
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                  `}
                  alt=""
                  src="/vector-1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 9.3px);
                    top: 7.8px;
                    right: 6.2px;
                    left: 3.1px;
                    height: 55.5px;
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: 0px;
                      max-height: 100%;
                      width: 63.4px;
                    `}
                    alt=""
                    src="/parentssibling.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 13.3px;
                      left: 11.8px;
                      width: 57.9px;
                      height: 28.5px;
                      z-index: 1;
                    `}
                    loading="lazy"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 11px;
                      left: 18.8px;
                      width: 44px;
                      height: 32px;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-end;
                      justify-content: flex-start;
                      padding: 0px var(--padding-6xs) 0px 0px;
                      box-sizing: border-box;
                    `}
                  >
                    <div
                      className={css`
                        margin-top: -6.2999999999999545px;
                        width: 52.4px;
                        height: 46.1px;
                        position: relative;
                        flex-shrink: 0;
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 100%;
                          height: 100%;
                        `}
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 5.5px;
                          left: 3.9px;
                          width: 39.9px;
                          height: 35.2px;
                          z-index: 1;
                        `}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        margin: 0 !important;
                        top: 0px;
                        left: 0px;
                        font-weight: 500;
                        display: inline-block;
                        min-width: 44px;
                        height: 100%;
                        width: 100%;
                        z-index: 2;
                      `}
                    >
                      NTSC
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-6xl-5) var(--padding-mini) 0px 0px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  text-decoration: none;
                  position: relative;
                  text-transform: uppercase;
                  color: inherit;
                  display: inline-block;
                  min-width: 108px;
                  z-index: 1;
                `}
                to="/"
              >
                Деятельность
              </Link>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-6xl-5) 0px 0px;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-11xl);
                `}
              >
                <Link
                  className={css`
                    cursor: pointer;
                    text-decoration: none;
                    position: relative;
                    text-transform: uppercase;
                    color: inherit;
                    display: inline-block;
                    min-width: 65px;
                    z-index: 1;
                  `}
                  to="/1"
                >
                  новости
                </Link>
                <Link
                  className={css`
                    cursor: pointer;
                    text-decoration: none;
                    position: relative;
                    text-transform: uppercase;
                    color: inherit;
                    display: inline-block;
                    min-width: 75px;
                    z-index: 1;
                  `}
                  to="/2"
                >
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent3;
