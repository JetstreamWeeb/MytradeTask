import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const Footer = () => {
  return (
    <footer
      className={css`
        align-self: stretch;
        background-color: var(--color-darkslateblue);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        padding: var(--padding-12xl) 0px var(--padding-base);
        box-sizing: border-box;
        position: relative;
        gap: var(--gap-mini);
        max-width: 100%;
        text-align: left;
        font-size: var(--font-size-base);
        color: var(--color-4);
        font-family: var(--font-roboto-condensed);
        @media screen and (max-width: 450px) {
          padding-top: var(--padding-xl);
          padding-bottom: var(--padding-xl);
          box-sizing: border-box;
        }
      `}
    >
      <div
        className={css`
          align-self: stretch;
          height: 360px;
          position: relative;
          background-color: var(--color-darkslateblue);
          display: none;
          z-index: 0;
        `}
      />
      <div
        className={css`
          width: 1896px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl) var(--padding-base);
          box-sizing: border-box;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            width: 1264px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            max-width: 100%;
            gap: var(--gap-xl);
            @media screen and (max-width: 925px) {
              flex-wrap: wrap;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-6xl);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                width: 84.5px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-9xs) 0px 0px;
                box-sizing: border-box;
                font-size: var(--font-size-2xl-9);
                color: var(--color-3);
                font-family: var(--font-oswald);
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  height: 70px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  z-index: 1;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
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
                </div>
                <img
                  className={css`
                    position: absolute;
                    height: calc(100% - 14.5px);
                    top: 7.8px;
                    bottom: 6.7px;
                    left: 3.1px;
                    max-height: 100%;
                    width: 63.4px;
                    z-index: 1;
                  `}
                  alt=""
                  src="/parentssibling.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 12.5px;
                    left: 6.3px;
                    width: 52.4px;
                    height: 46.1px;
                    z-index: 2;
                  `}
                  alt=""
                  src="/vector-4.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 18px;
                    left: 10.2px;
                    width: 39.9px;
                    height: 35.2px;
                    z-index: 3;
                  `}
                  alt=""
                  src="/vector-5.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 21.1px;
                    left: 14.9px;
                    width: 57.9px;
                    height: 28.5px;
                    z-index: 4;
                  `}
                  alt=""
                  src="/vector-2.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: 18.8px;
                    left: 21.9px;
                    font-weight: 500;
                    display: inline-block;
                    min-width: 44px;
                    z-index: 5;
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-lg);
                    }
                  `}
                >
                  NTSC
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-9xl) 0px 0px;
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
                padding: var(--padding-9xl) 0px 0px;
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
                Новости
              </Link>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-9xl) 0px 0px;
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
                  min-width: 75px;
                  z-index: 1;
                `}
                to="/2"
              >
                контакты
              </Link>
            </div>
          </div>
          <div
            className={css`
              width: 293px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-10xl) 0px 0px;
              box-sizing: border-box;
              font-size: var(--font-size-sm);
              color: var(--gray-6);
              font-family: var(--font-roboto);
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-3xs);
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  font-size: var(--font-size-base);
                  text-transform: uppercase;
                  font-family: var(--font-roboto-condensed);
                  color: var(--color-4);
                  z-index: 1;
                `}
              >
                Контакты
              </div>
              <div
                className={css`
                  position: relative;
                  z-index: 1;
                `}
              >
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  055538, Республика Казахстан,
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  г. Алматы, ул. Чайкиной, 4
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  НТЦ Безопасности Ядерных Технологий
                </p>
              </div>
              <div
                className={css`
                  width: 285px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-8xs);
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    z-index: 1;
                  `}
                >
                  Телефоны:
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    white-space: nowrap;
                    z-index: 1;
                  `}
                >
                  +7-727-2646801
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    white-space: nowrap;
                    z-index: 1;
                  `}
                >
                  +7-727-2646701
                </div>
              </div>
              <div
                className={css`
                  width: 285px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-8xs);
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    z-index: 1;
                  `}
                >
                  Факс:
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    white-space: nowrap;
                    z-index: 1;
                  `}
                >
                  +7-727-2646803
                </div>
              </div>
              <div
                className={css`
                  width: 285px;
                  position: relative;
                  display: inline-block;
                  z-index: 1;
                `}
              >
                {`Е-mail: `}
                <a
                  className={css`
                    color: inherit;
                  `}
                  href="mailto:ntsc@ntsc.kz"
                  target="_blank"
                >
                  <span
                    className={css`
                      text-decoration: underline;
                    `}
                  >
                    ntsc@ntsc.kz
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          height: 1px;
          position: relative;
          background-color: var(--gray-4);
          z-index: 1;
        `}
      />
      <div
        className={css`
          width: 64px;
          height: 56px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          display: none;
          z-index: 3;
          font-size: var(--font-size-mid-5);
          color: var(--color-white1);
          font-family: var(--font-oswald);
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
          src="/vector-1-2.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 6.3px;
            left: 2.5px;
            width: 50.7px;
            height: 44.4px;
          `}
          alt=""
          src="/vector-3-2.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 10px;
            left: 5px;
            width: 41.9px;
            height: 36.9px;
          `}
          alt=""
          src="/vector-4-2.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 14.4px;
            left: 8.1px;
            width: 31.9px;
            height: 28.2px;
          `}
          alt=""
          src="/vector-5-2.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 16.9px;
            left: 11.9px;
            width: 46.3px;
            height: 22.8px;
          `}
          alt=""
          src="/vector-2-2.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 15px;
            left: 17.5px;
            font-weight: 500;
          `}
        >
          NTSC
        </div>
      </div>
      <div
        className={css`
          width: 233px;
          display: none;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          z-index: 4;
          font-family: var(--font-oswald);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            height: 24px;
            position: relative;
            text-transform: uppercase;
            display: inline-block;
          `}
        >
          NUCLEAR TECHNOLOGY SAFETY CENTER
        </div>
      </div>
      <button
        className={css`
          cursor: pointer;
          border: none;
          padding: 0;
          background-color: transparent;
          width: 45px;
          height: 45px;
          position: absolute;
          margin: 0 !important;
          top: -23px;
          right: 340px;
          overflow: hidden;
          flex-shrink: 0;
          z-index: 2;
        `}
      />
      <img
        className={css`
          width: 13px;
          height: 18px;
          position: relative;
          display: none;
          z-index: 6;
        `}
        alt=""
        src="/essentials--pin.svg"
      />
      <img
        className={css`
          width: 15px;
          height: 15px;
          position: relative;
          display: none;
          z-index: 7;
        `}
        alt=""
        src="/essentials--phone.svg"
      />
      <img
        className={css`
          width: 15px;
          height: 15px;
          position: relative;
          display: none;
          z-index: 8;
        `}
        alt=""
        src="/essentials--phone.svg"
      />
      <img
        className={css`
          width: 15px;
          height: 15px;
          position: relative;
          display: none;
          z-index: 9;
        `}
        alt=""
        src="/essentials--envelope.svg"
      />
      <div
        className={css`
          display: none;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-base);
          z-index: 4;
        `}
      >
        <img
          className={css`
            height: 32px;
            width: 32px;
            position: relative;
            min-height: 32px;
          `}
          alt=""
          src="/facebook.svg"
        />
        <div
          className={css`
            height: 32px;
            width: 32px;
            position: relative;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 87.5%;
              width: 87.5%;
              top: 6.25%;
              right: 6.25%;
              bottom: 6.25%;
              left: 6.25%;
              border-radius: var(--br-37xl);
              background-color: var(--color-white1);
            `}
          />
          <img
            className={css`
              position: absolute;
              top: 8px;
              left: 6px;
              width: 21px;
              height: 17.3px;
            `}
            alt=""
            src="/twitter.svg"
          />
        </div>
        <div
          className={css`
            height: 32px;
            width: 32px;
            position: relative;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 87.5%;
              width: 87.5%;
              top: 6.25%;
              right: 6.25%;
              bottom: 6.25%;
              left: 6.25%;
              border-radius: var(--br-7xs);
              background-color: var(--color-dodgerblue);
            `}
          />
          <img
            className={css`
              position: absolute;
              height: 37.5%;
              width: 62.5%;
              top: 34.38%;
              right: 18.75%;
              bottom: 28.13%;
              left: 18.75%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            alt=""
            src="/vk.svg"
          />
        </div>
        <div
          className={css`
            height: 32px;
            width: 32px;
            position: relative;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 87.5%;
              width: 87.5%;
              top: 6.25%;
              right: 6.25%;
              bottom: 6.25%;
              left: 6.25%;
              border-radius: var(--br-37xl);
              background-color: var(--color-steelblue);
            `}
          />
          <img
            className={css`
              position: absolute;
              height: 43.75%;
              width: 46.88%;
              top: 25%;
              right: 25%;
              bottom: 31.25%;
              left: 28.13%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            alt=""
            src="/linked-in.svg"
          />
        </div>
      </div>
      <div
        className={css`
          width: 146px;
          position: relative;
          text-transform: uppercase;
          display: none;
          z-index: 11;
        `}
      >
        База данных по ЭК
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-5xl) 0px var(--padding-xl);
          box-sizing: border-box;
          max-width: 100%;
          font-size: var(--font-size-sm);
          color: var(--gray-6);
          font-family: var(--font-roboto);
        `}
      >
        <div
          className={css`
            width: 1234px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px 0px 0px 0px;
            box-sizing: border-box;
            gap: var(--gap-722xl);
            max-width: 100%;
            z-index: 1;
            @media screen and (max-width: 1875px) {
              flex-wrap: wrap;
            }
            @media screen and (max-width: 1400px) {
              gap: var(--gap-351xl);
            }
            @media screen and (max-width: 925px) {
              gap: var(--gap-166xl);
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-74xl);
            }
          `}
        >
          <div
            className={css`
              width: 258px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: 0px 0px 0px 0px;
              box-sizing: border-box;
              gap: var(--gap-8xs);
              flex-shrink: 0;
            `}
          >
            <img
              className={css`
                height: 15px;
                width: 15px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              loading="lazy"
              alt=""
              src="/copyright-1.svg"
            />
            <div
              className={css`
                width: 260px;
                position: relative;
                line-height: 16px;
                display: inline-block;
                flex-shrink: 0;
              `}
            >{`Nuclear technology safety center `}</div>
          </div>
          <div
            className={css`
              height: 22px;
              width: 162px;
              display: none;
            `}
          />
          <div
            className={css`
              height: 22px;
              width: 143px;
              display: none;
            `}
          />
          <div
            className={css`
              height: 19px;
              width: 259px;
              display: none;
            `}
          />
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-8xs);
            `}
          >
            <img
              className={css`
                height: 18px;
                width: 18px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                min-height: 18px;
              `}
              loading="lazy"
              alt=""
              src="/documenttext.svg"
            />
            <a
              className={css`
                text-decoration: none;
                position: relative;
                color: inherit;
              `}
            >
              Политика конфиденциальности
            </a>
          </div>
          <div
            className={css`
              width: 1340px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: space-between;
              padding: 0px 0px 0px 0px;
              box-sizing: border-box;
              flex-shrink: 0;
              max-width: 109%;
              gap: var(--gap-xl);
              font-size: var(--font-size-base);
              @media screen and (max-width: 925px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 18px;
                width: 202px;
                position: relative;
                line-height: 111.87%;
                display: inline-block;
                flex-shrink: 0;
              `}
            >
              (c) has-industrial.kz
            </div>
            <div
              className={css`
                height: 22px;
                width: 162px;
                display: none;
              `}
            />
            <div
              className={css`
                height: 22px;
                width: 143px;
                display: none;
              `}
            />
            <div
              className={css`
                height: 19px;
                width: 259px;
                display: none;
              `}
            />
            <div
              className={css`
                height: 19px;
                width: 269px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-9xs) 0px 0px;
                box-sizing: border-box;
                gap: var(--gap-8xs);
              `}
            >
              <img
                className={css`
                  height: 18px;
                  width: 18px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/documenttext-1.svg"
              />
              <div
                className={css`
                  align-self: stretch;
                  flex: 1;
                  position: relative;
                `}
              >
                Политика конфиденциальности
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
