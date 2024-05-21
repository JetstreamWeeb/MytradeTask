import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;
--font-roboto-condensed: 'Roboto Condensed';
--font-oswald: Oswald;
--font-arsenal: Arsenal;
--font-inter: Inter;

/* font sizes */
--font-size-base: 16px;
--font-size-sm: 14px;
--font-size-mid-5: 17.5px;
--font-size-2xl-9: 21.9px;
--font-size-lg: 18px;
--font-size-mid: 17px;
--font-size-xl: 20px;
--font-size-2xl: 21px;
--font-size-9xl: 28px;
--font-size-3xl: 22px;
--font-size-99xl: 118px;
--font-size-16xl: 35px;
--font-size-40xl: 59px;
--font-size-mini: 15px;
--font-size-21xl: 40px;
--font-size-5xl: 24px;
--font-size-13xl: 32px;
--font-size-2xs-3: 10.3px;

/* Colors */
--color-white1: #fff;
--color-darkslateblue: #03245f;
--gray-6: #f2f2f2;
--color-4: #89e4ff;
--color-steelblue: #1275b1;
--color-dodgerblue: #2789f6;
--gray-4: #bdbdbd;
--color-3: #00225f;
--color-gray-100: #fafafa;
--gray-3: #828282;
--color-black: #1a1a1a;
--color-1: #00aeff;
--color-gainsboro: #e3e3e3;
--color-darkslategray: #454545;
--text-black-400: #626262;

/* Gaps */
--gap-3xl: 22px;
--gap-mini: 15px;
--gap-722xl: 741px;
--gap-351xl: 370px;
--gap-74xl: 93px;
--gap-166xl: 185px;
--gap-xl: 20px;
--gap-8xs: 5px;
--gap-base: 16px;
--gap-3xs: 10px;
--gap-6xl: 25px;
--gap-7xl: 26px;
--gap-5xs: 8px;
--gap-26xl: 45px;
--gap-4xs: 9px;
--gap-11xl: 30px;
--gap-8xl: 27px;
--gap-12xl: 31px;
--gap-2xs: 11px;
--gap-36xl: 55px;
--gap-smi: 13px;

/* Paddings */
--padding-12xl: 31px;
--padding-base: 16px;
--padding-xl: 20px;
--padding-5xl: 24px;
--padding-9xs: 4px;
--padding-10xl: 29px;
--padding-9xl: 28px;
--padding-2xl: 21px;
--padding-11xl: 30px;
--padding-3xs: 10px;
--padding-2xs: 11px;
--padding-11xs-5: 1.5px;
--padding-296xl: 315px;
--padding-321xl: 340px;
--padding-151xl: 170px;
--padding-138xl: 157px;
--padding-66xl: 85px;
--padding-59xl: 78px;
--padding-xs: 12px;
--padding-101xl: 120px;
--padding-32xl: 51px;
--padding-22xl: 41px;
--padding-13xl: 32px;
--padding-26xl: 45px;
--padding-25xl: 44px;
--padding-6xs: 7px;
--padding-smi: 13px;
--padding-4xs: 9px;
--padding-6xl-5: 25.5px;
--padding-mini: 15px;
--padding-7xs: 6px;
--padding-320xl: 339px;
--padding-10xs: 3px;
--padding-150xl: 169px;
--padding-6xl: 25px;
--padding-lg: 18px;
--padding-47xl: 66px;
--padding-19xl: 38px;
--padding-8xs: 5px;
--padding-190xl: 209px;

/* Border radiuses */
--br-37xl: 56px;
--br-7xs: 6px;
--br-6xs: 7px;

}
`;
}
