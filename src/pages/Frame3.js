import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const Frame3 = () => {
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
        gap: 109px;
        letter-spacing: normal;
        line-height: normal;
        text-align: left;
        font-size: var(--font-size-xl);
        color: var(--color-3);
        font-family: var(--font-roboto);
        @media screen and (max-width: 1400px) {
          gap: 54px;
        }
        @media screen and (max-width: 925px) {
          gap: var(--gap-8xl);
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
      <img
        className={css`
          width: 477.1px;
          height: 666.7px;
          position: absolute;
          margin: 0 !important;
          top: 108px;
          left: -180px;
          overflow: hidden;
          flex-shrink: 0;
          object-fit: contain;
        `}
        loading="lazy"
        alt=""
        src="/-1-112@2x.png"
      />
      <img
        className={css`
          width: 584.6px;
          height: 584.6px;
          position: absolute;
          margin: 0 !important;
          top: 6px;
          right: -208.6px;
          overflow: hidden;
          flex-shrink: 0;
          object-fit: contain;
        `}
        loading="lazy"
        alt=""
        src="/-1-1211@2x.png"
      />
      <div
        className={css`
          align-self: stretch;
          height: 395px;
          position: relative;
          background-color: var(--gray-6);
          display: none;
          z-index: 3;
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
          z-index: 4;
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
      <img
        className={css`
          width: 737.3px;
          position: relative;
          max-height: 100%;
          overflow: hidden;
          object-fit: contain;
          display: none;
          max-width: 100%;
          z-index: 5;
        `}
        alt=""
        src="/-1-23@2x.png"
      />
      <img
        className={css`
          width: 561.3px;
          height: 401.6px;
          position: absolute;
          margin: 0 !important;
          bottom: 442.4px;
          left: -181px;
          overflow: hidden;
          flex-shrink: 0;
          object-fit: contain;
        `}
        alt=""
        src="/-1-33@2x.png"
      />
      <img
        className={css`
          width: 489.4px;
          height: 418.1px;
          position: absolute;
          margin: 0 !important;
          right: -18.4px;
          bottom: 465.9px;
          overflow: hidden;
          flex-shrink: 0;
          object-fit: contain;
        `}
        loading="lazy"
        alt=""
        src="/-1-42@2x.png"
      />
      <img
        className={css`
          width: 730px;
          position: relative;
          max-height: 100%;
          overflow: hidden;
          display: none;
          max-width: 100%;
          z-index: 8;
        `}
        alt=""
        src="/-1-15.svg"
      />
      <main
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: var(--gap-11xl);
          max-width: 100%;
        `}
      >
        <header
          className={css`
            align-self: stretch;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            background-color: var(--color-white1);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px 0px var(--padding-4xs);
            box-sizing: border-box;
            gap: var(--gap-4xs);
            max-width: 100%;
            z-index: 1;
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
              padding: var(--padding-7xs) var(--padding-320xl)
                var(--padding-10xs);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              z-index: 1;
              text-align: left;
              font-size: var(--font-size-mini);
              color: var(--gray-3);
              font-family: var(--font-roboto);
              @media screen and (max-width: 925px) {
                padding-left: var(--padding-151xl);
                padding-right: var(--padding-151xl);
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
                  height: 70px;
                  width: 80px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  z-index: 1;
                  font-size: var(--font-size-2xl-9);
                  font-family: var(--font-oswald);
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
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 14.9px);
                      top: 7.8px;
                      bottom: 7.1px;
                      left: 3.1px;
                      width: 63.4px;
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                      `}
                      alt=""
                      src="/parentssibling.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: 4.7px;
                        left: 3.2px;
                        width: 52.4px;
                        height: 46.1px;
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 100%;
                          height: 100%;
                          z-index: 2;
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
                          z-index: 3;
                        `}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 18.8px;
                    left: 14.9px;
                    width: 57.9px;
                    height: 32px;
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 2.3px;
                      left: 0px;
                      width: 57.9px;
                      height: 28.5px;
                      z-index: 4;
                    `}
                    loading="lazy"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 7px;
                      font-weight: 500;
                      display: inline-block;
                      min-width: 44px;
                      z-index: 5;
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
                  color: var(--color-1);
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
                  <a
                    className={css`
                      text-decoration: none;
                      position: relative;
                      text-transform: uppercase;
                      color: inherit;
                      display: inline-block;
                      min-width: 65px;
                      z-index: 1;
                    `}
                  >
                    новости
                  </a>
                  <Link
                    className={css`
                      cursor: pointer;
                      text-decoration: none;
                      position: relative;
                      text-transform: uppercase;
                      color: var(--color-3);
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
        <section
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl) 0px 23px;
            box-sizing: border-box;
            max-width: 100%;
            text-align: left;
            font-size: var(--font-size-base);
            color: var(--color-3);
            font-family: var(--font-roboto);
          `}
        >
          <div
            className={css`
              width: 1243px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-smi);
              max-width: 100%;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px var(--padding-xs);
                box-sizing: border-box;
                gap: var(--gap-8xs);
                max-width: 100%;
                @media screen and (max-width: 925px) {
                  flex-wrap: wrap;
                }
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  text-decoration: none;
                  position: relative;
                  color: inherit;
                `}
                to="/"
              >
                Главная страница
              </Link>
              <img
                className={css`
                  height: 20px;
                  width: 20px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  min-height: 20px;
                `}
                loading="lazy"
                alt=""
                src="/chevronright.svg"
              />
              <Link
                className={css`
                  cursor: pointer;
                  text-decoration: none;
                  position: relative;
                  color: inherit;
                  display: inline-block;
                  min-width: 67px;
                `}
                to="/1"
              >
                Новости
              </Link>
              <img
                className={css`
                  height: 20px;
                  width: 20px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  min-height: 20px;
                `}
                alt=""
                src="/chevronright.svg"
              />
              <div
                className={css`
                  position: relative;
                  color: var(--color-1);
                  display: inline-block;
                  max-width: 100%;
                `}
              >
                Международное заседание по сотрудничеству в области нормативного
                регулирования
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: var(--font-size-xl);
                font-family: var(--font-roboto-condensed);
                z-index: 1;
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-base);
                }
              `}
            >
              Международное заседание по сотрудничеству в области нормативного
              регулирования
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px var(--padding-smi);
                box-sizing: border-box;
                gap: 28px;
                max-width: 100%;
                font-size: var(--font-size-xl);
                color: #6a6e70;
                font-family: var(--font-roboto-condensed);
              `}
            >
              <div
                className={css`
                  width: 1204px;
                  position: relative;
                  display: inline-block;
                  max-width: 100%;
                  z-index: 1;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-base);
                  }
                `}
              >
                16.08.2018
              </div>
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-smi);
                  max-width: 100%;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: space-between;
                    padding: 322px var(--padding-6xl);
                    box-sizing: border-box;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: top;
                    max-width: 100%;
                    gap: var(--gap-xl);
                    z-index: 1;
                    @media screen and (max-width: 925px) {
                      padding-top: var(--padding-190xl);
                      padding-bottom: var(--padding-190xl);
                      box-sizing: border-box;
                    }
                    @media screen and (max-width: 450px) {
                      flex-wrap: wrap;
                    }
                  `}
                >
                  <img
                    className={css`
                      height: 676px;
                      width: 1240px;
                      position: relative;
                      object-fit: cover;
                      display: none;
                      max-width: 100%;
                    `}
                    alt=""
                    src="/dushanbe-1@2x.png"
                  />
                  <img
                    className={css`
                      height: 32px;
                      width: 32px;
                      position: relative;
                      object-fit: contain;
                      min-height: 32px;
                      z-index: 2;
                    `}
                    loading="lazy"
                    alt=""
                    src="/group-24@2x.png"
                  />
                  <img
                    className={css`
                      height: 32px;
                      width: 32px;
                      position: relative;
                      object-fit: contain;
                      min-height: 32px;
                      z-index: 2;
                    `}
                    loading="lazy"
                    alt=""
                    src="/group-23@2x.png"
                  />
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 0px var(--padding-5xl) 0px var(--padding-xl);
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 7px;
                    `}
                  >
                    <div
                      className={css`
                        height: 16px;
                        width: 16px;
                        position: relative;
                        border-radius: 50%;
                        background-color: var(--color-3);
                      `}
                    />
                    <div
                      className={css`
                        height: 16px;
                        width: 16px;
                        position: relative;
                        border-radius: 50%;
                        border: 0px solid var(--text-black-400);
                        box-sizing: border-box;
                      `}
                    />
                    <div
                      className={css`
                        height: 16px;
                        width: 16px;
                        position: relative;
                        border-radius: 50%;
                        border: 0px solid var(--text-black-400);
                        box-sizing: border-box;
                      `}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px var(--padding-xs);
                gap: 74px;
                @media screen and (max-width: 925px) {
                  gap: 37px;
                }
                @media screen and (max-width: 450px) {
                  gap: 18px;
                }
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                `}
              >
                <p
                  className={css`
                    margin: 0;
                  `}
                >{`Норвежское агентство по радиационной защите (NRPA) и Агентство по ядерной и радиационной безопасности (NRSA) Республики Таджикистан с 13 по 15 августа 2018 года провели совместное заседание в г. Душанбе, Таджикистан, в котором приняли участие Министерство здравоохранения, Государственное агентство по охране окружающей среды и лесному хозяйству (SAEPF) и Чуйская экологическая лаборатория (CHEL) из Кыргызстана; `}</p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  &nbsp;
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  Государственная Инспекция «САНОАТГЕОКОНТЕХНАЗОРАТ» Агентство
                  по надзору за безопасным ведением работ в промышленности,
                  горном деле и коммунально-бытовом секторе и Институт ядерной
                  физики Узбекистана; Министерство энергетики, Комитет по
                  атомному и энергетическому надзору и контролю и
                  Научно-технический центр безопасности ядерных технологий из
                  Казахстана; Общество по развитию научного сотрудничества
                  (SODESCO) и NRSA из Таджикистана.
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  &nbsp;
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  Цель заседания состояла в обсуждении текущей ситуации в
                  области нормативного регулирования радиационной и ядерной
                  безопасности в Казахстане, Кыргызстане, Таджикистане и
                  Узбекистане. Изучение внедрения нормативных документов, ранее
                  разработанных при сотрудничестве с NRPA в 2009-2016 годах.
                  Обсуждение возможности новых направлений сотрудничества и
                  возможной поддержки со стороны NRPA на основе Докладов по
                  оценке угроз, подготовленных каждой из стран.
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  &nbsp;
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  Следующее заседание состоится в 1 квартале 2019 года.
                </p>
              </div>
              <img
                className={css`
                  align-self: stretch;
                  height: 676px;
                  position: relative;
                  max-width: 100%;
                  overflow: hidden;
                  flex-shrink: 0;
                  object-fit: cover;
                  z-index: 1;
                `}
                alt=""
                src="/dushanbe-1@2x.png"
              />
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
              >{`Норвежское агентство по радиационной защите (NRPA) и Агентство по ядерной и радиационной безопасности (NRSA) Республики Таджикистан с 13 по 15 августа 2018 года провели совместное заседание в г. `}</p>
            </div>
          </div>
        </section>
      </main>
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
          gap: var(--gap-12xl);
          max-width: 100%;
          text-align: left;
          font-size: var(--font-size-base);
          color: var(--color-4);
          font-family: var(--font-roboto-condensed);
          @media screen and (max-width: 925px) {
            gap: var(--gap-mini);
          }
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
            padding: 0px var(--padding-xl);
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
                    <div
                      className={css`
                        position: absolute;
                        height: calc(100% - 14.9px);
                        top: 7.8px;
                        bottom: 7.1px;
                        left: 3.1px;
                        width: 63.4px;
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 100%;
                          height: 100%;
                          z-index: 1;
                        `}
                        alt=""
                        src="/parentssibling.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          top: 4.7px;
                          left: 3.2px;
                          width: 52.4px;
                          height: 46.1px;
                        `}
                      >
                        <img
                          className={css`
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 100%;
                            height: 100%;
                            z-index: 2;
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
                            z-index: 3;
                          `}
                          alt=""
                          src="/vector-5.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className={css`
                      cursor: pointer;
                      border: none;
                      padding: 0;
                      background-color: transparent;
                      position: absolute;
                      top: 18.8px;
                      left: 14.9px;
                      width: 57.9px;
                      height: 32px;
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        top: 2.3px;
                        left: 0px;
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
                        top: 0px;
                        left: 7px;
                        font-size: var(--font-size-2xl-9);
                        font-weight: 500;
                        font-family: var(--font-oswald);
                        color: var(--color-3);
                        text-align: left;
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
                  </button>
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
            width: 64px;
            height: 56px;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
            display: none;
            z-index: 2;
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
            z-index: 3;
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
        <a
          className={css`
            text-decoration: none;
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
            z-index: 5;
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
            z-index: 6;
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
          src="/essentials--envelope.svg"
        />
        <div
          className={css`
            display: none;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-base);
            z-index: 3;
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
            z-index: 10;
          `}
        >
          База данных по ЭК
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-mini);
            max-width: 100%;
            font-size: var(--font-size-sm);
            color: var(--gray-6);
            font-family: var(--font-roboto);
          `}
        >
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
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: center;
              padding: 0px var(--padding-5xl) 0px var(--padding-xl);
              box-sizing: border-box;
              max-width: 100%;
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
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Политика конфиденциальности
                </div>
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
        </div>
      </footer>
    </div>
  );
};

export default Frame3;
