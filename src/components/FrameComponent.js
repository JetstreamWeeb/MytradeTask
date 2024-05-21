import { css } from "@emotion/css";
import GroupComponent from "./GroupComponent";

const FrameComponent = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding: 0px var(--padding-xl) 0px var(--padding-2xl);
        box-sizing: border-box;
        max-width: 100%;
        text-align: left;
        font-size: var(--font-size-xl);
        color: var(--color-darkslateblue);
        font-family: var(--font-roboto-condensed);
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
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: var(--gap-xl);
            @media screen and (max-width: 450px) {
              flex-wrap: wrap;
            }
          `}
        >
          <div
            className={css`
              width: 107px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-11xs-5) 0px 0px;
              box-sizing: border-box;
            `}
          >
            <h3
              className={css`
                margin: 0;
                align-self: stretch;
                position: relative;
                font-size: inherit;
                text-transform: uppercase;
                font-weight: 400;
                font-family: inherit;
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-base);
                }
              `}
            >
              нОВОСТИ
            </h3>
          </div>
          <div
            className={css`
              height: 26px;
              width: 57px;
              position: relative;
            `}
          >
            <img
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 26px;
                height: 26px;
                object-fit: contain;
              `}
              loading="lazy"
              alt=""
              src="/basics--upsmall@2x.png"
            />
            <img
              className={css`
                position: absolute;
                top: 0px;
                left: 31px;
                width: 26px;
                height: 26px;
                object-fit: contain;
              `}
              alt=""
              src="/basics--upsmall-1@2x.png"
            />
          </div>
        </div>
        <div
          className={css`
            width: 1240px;
            height: 395px;
            overflow-x: auto;
            flex-shrink: 0;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-xl);
            max-width: 100%;
            font-size: var(--font-size-sm);
            color: var(--color-3);
            font-family: var(--font-roboto);
          `}
        >
          <GroupComponent
            rectangle13="/rectangle-13@2x.png"
            prop="Международное заседание по сотрудничеству в области нормативного регулирования"
            prop1="Норвежское агентство по радиационной защите (NRPA) и Агентство по ядерной и радиационной безопасности (NRSA) Республики ..."
          />
          <GroupComponent
            rectangle13="/rectangle-13-1@2x.png"
            prop="Рабочее совещание представителей Казахстана и Японии, посвященное вопросу  ... "
            prop1="1 ноября 2018 года в конференц-зале НТЦ БЯТ состоялось рабочее совещание представителей Казахстана и Японии, посвященное вопросу ..."
          />
          <GroupComponent
            rectangle13="/rectangle-13-2@2x.png"
            prop="Cовещание рабочей группы по разработке проекта нормативного документа по ..."
            prop1="В рамках сотрудничества между Министерством энергетики Республики Казахстан и Министерством энергетики США 30-31 октября на базе Учебного ..."
          />
          <GroupComponent
            rectangle13="/rectangle-13-3@2x.png"
            prop="Радиационная безопасность и обращение с РАО в Центральной Азии, России и Украине"
            prop1="27-28 января 2016 года в г. Бишкек прошло очередное совещание по вопросам регуляторной поддержки в радиационной безопасности и ..."
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
