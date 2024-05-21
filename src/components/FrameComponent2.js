import { css } from "@emotion/css";

const FrameComponent2 = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding: 0px var(--padding-xl) var(--padding-101xl);
        box-sizing: border-box;
        position: relative;
        max-width: 100%;
        text-align: left;
        font-size: var(--font-size-xl);
        color: var(--color-3);
        font-family: var(--font-roboto-condensed);
        @media screen and (max-width: 925px) {
          padding-bottom: var(--padding-59xl);
          box-sizing: border-box;
        }
        @media screen and (max-width: 450px) {
          padding-bottom: var(--padding-32xl);
          box-sizing: border-box;
        }
      `}
    >
      <div
        className={css`
          width: 1240px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-7xl);
          max-width: 100%;
        `}
      >
        <h3
          className={css`
            margin: 0;
            width: 519px;
            position: relative;
            font-size: inherit;
            text-transform: uppercase;
            font-weight: 400;
            font-family: inherit;
            display: inline-block;
            max-width: 100%;
            z-index: 3;
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-base);
            }
          `}
        >
          Направление деятельности
        </h3>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 20px 18px;
            min-height: 658px;
            max-width: 100%;
            font-size: var(--font-size-mid);
            color: var(--color-white1);
            font-family: var(--font-roboto);
          `}
        >
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xl) var(--padding-6xs) var(--padding-25xl)
                var(--padding-smi);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/freeiconsupport2519236-1.svg"
            />
            <div
              className={css`
                height: 138px;
                flex: 1;
                position: relative;
                display: inline-block;
                min-width: 211px;
                max-width: 100%;
                z-index: 1;
              `}
            >
              Научно-техническая поддержка Комитета атомного и энергетического
              контроля и надзора Министерства энергетики Республики Казахстан
              (КАЭКН МЭ РК);
            </div>
          </div>
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xl) var(--padding-2xs) var(--padding-12xl)
                var(--padding-xs);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/execute-1.svg"
            />
            <div
              className={css`
                height: 151px;
                flex: 1;
                position: relative;
                display: inline-block;
                min-width: 209px;
                max-width: 100%;
                z-index: 1;
              `}
            >
              Управление проектами в области ядерной безопасности и
              нераспространения; проектированием объектов использования атомной
              энергии; выводом из эксплуатации объектов использования атомной
              энергии;
            </div>
          </div>
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xl) var(--padding-xs) var(--padding-22xl);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/failure-1.svg"
            />
            <div
              className={css`
                height: 141px;
                flex: 1;
                position: relative;
                display: inline-block;
                min-width: 206px;
                z-index: 1;
              `}
            >
              Оценка и проведение анализа безопасности объектов и технологий,
              связанных с использованием атомной энергии;
            </div>
          </div>
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xl) var(--padding-xs) var(--padding-25xl);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              font-size: var(--font-size-lg);
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/acceptance-1.svg"
            />
            <div
              className={css`
                height: 138px;
                flex: 1;
                position: relative;
                display: inline-block;
                min-width: 209px;
                max-width: 100%;
                z-index: 1;
              `}
            >
              <p
                className={css`
                  margin: 0;
                `}
              >{`Экспертиза проектов `}</p>
              <p
                className={css`
                  margin: 0;
                `}
              >
                и технической документации в области использования атомной
                энергии;
              </p>
            </div>
          </div>
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xl) var(--padding-2xs) var(--padding-26xl)
                var(--padding-xs);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/dove-1.svg"
            />
            <div
              className={css`
                height: 137px;
                flex: 1;
                position: relative;
                display: inline-block;
                min-width: 209px;
                max-width: 100%;
                z-index: 1;
              `}
            >
              Разработка, экспертиза и научно-техническое обоснование правовой и
              нормативной документации в области мирного использования атомной
              энергии;
            </div>
          </div>
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xl) var(--padding-2xs) var(--padding-22xl)
                var(--padding-xs);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/analyze-1.svg"
            />
            <div
              className={css`
                height: 141px;
                flex: 1;
                position: relative;
                display: inline-block;
                min-width: 209px;
                max-width: 100%;
                z-index: 1;
              `}
            >
              Аналитическая поддержка безопасности действующих и будущих
              реакторов и других ядерных объектов Республики Казахстан;
            </div>
          </div>
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xl) var(--padding-xs) var(--padding-13xl);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/radiation-1.svg"
            />
            <div
              className={css`
                height: 150px;
                flex: 1;
                position: relative;
                display: inline-block;
                min-width: 209px;
                max-width: 100%;
                z-index: 1;
              `}
            >
              Научно-техническое сопровождение работ по физике и безопасности
              реакторов, радиационному материаловедению (проведение
              расчетно-теоретических обоснований), ядерно-топливному циклу;
            </div>
          </div>
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-xs) var(--padding-2xs);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                object-fit: contain;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/cooperation-1@2x.png"
            />
            <div
              className={css`
                flex: 1;
                position: relative;
                display: inline-block;
                min-width: 205px;
                z-index: 1;
              `}
            >
              Международное сотрудничество в области безопасности ядерной и
              термоядерной энергетики, физики реакторов и радиационного
              материаловедения, радиоэкологии, новых конверсионных и ядерных
              технологий, экспортного контроля и нераспространения, включая
              обмен информацией и персоналом;
            </div>
          </div>
          <div
            className={css`
              width: 400px;
              box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
              background-color: var(--color-darkslateblue);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xl) var(--padding-xs) var(--padding-22xl);
              box-sizing: border-box;
              gap: var(--gap-mini);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                height: 206px;
                width: 400px;
                position: relative;
                box-shadow: 0px 0px 14px rgba(0, 174, 255, 0.4);
                background-color: var(--color-darkslateblue);
                display: none;
                max-width: 100%;
              `}
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/learning-1-1.svg"
            />
            <div
              className={css`
                height: 141px;
                width: 312px;
                position: relative;
                display: inline-block;
                flex-shrink: 0;
                z-index: 1;
              `}
            >
              Обучение и тренинги в области нераспространения и ядерной
              безопасности, включая организацию международных конференций и
              семинаров.
            </div>
          </div>
        </div>
      </div>
      <img
        className={css`
          height: 418.1px;
          width: 489.4px;
          position: absolute;
          margin: 0 !important;
          right: 372.6px;
          bottom: -391.1px;
          overflow: hidden;
          flex-shrink: 0;
          object-fit: contain;
        `}
        loading="lazy"
        alt=""
        src="/-1-4@2x.png"
      />
      <div
        className={css`
          height: 280.2px;
          width: 430px;
          position: absolute;
          margin: 0 !important;
          bottom: -178.2px;
          left: 0px;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 100%;
            top: 0px;
            bottom: 0px;
            left: -76px;
            max-height: 100%;
            width: 506px;
            overflow: hidden;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/-1-3.svg"
        />
        <h3
          className={css`
            margin: 0;
            position: absolute;
            top: 141px;
            left: 353px;
            font-size: inherit;
            text-transform: uppercase;
            font-weight: 400;
            font-family: inherit;
            display: inline-block;
            min-width: 74px;
            z-index: 2;
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-base);
            }
          `}
        >
          Миссия
        </h3>
      </div>
    </section>
  );
};

export default FrameComponent2;
