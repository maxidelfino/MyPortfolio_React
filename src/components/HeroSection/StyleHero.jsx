import styled from "styled-components";

const StyleHero = styled.div`
  .hero {
    width: 100%;
    overflow: visible !important;
  }

  .hero__container {
    width: 90% !important;
    height: 90vh;
    max-width: 1160px;
    margin: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 55% 45%;
    grid-template-columns: 55% 45%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  @media screen and (max-width: 1160px) {
    .hero__container {
      width: 90%;
      max-width: 980px;
    }
    .hero__container .reset {
      display: none;
    }
    .hero__container .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 980px) {
    .hero__container {
      width: 90%;
      padding-top: 90px;
    }
    .hero__container .reset {
      display: none;
    }
    .hero__container .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 480px) {
    .hero__container {
      width: 90% !important;
      padding-top: 100px;
      margin: 0 auto;
    }
    .hero__container .reset {
      display: none;
    }
    .hero__container .reset-responsive {
      display: block !important;
    }
  }

  .hero__content {
    width: 520px;
    height: 394px;
    max-width: 520px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  @media screen and (max-width: 1160px) {
    .hero__content {
      width: 490px;
      max-width: 490px;
    }
    .hero__content .reset {
      display: none;
    }
    .hero__content .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 480px) {
    .hero__content {
      width: 432px;
    }
    .hero__content .reset {
      display: none;
    }
    .hero__content .reset-responsive {
      display: block !important;
    }
  }

  .hero__img {
    width: 520px;
    height: 472px;
  }

  @media screen and (max-width: 1160px) {
    .hero__img {
      max-width: 502px;
      height: 402px;
      position: absolute;
      right: 3%;
    }
    .hero__img .reset {
      display: none;
    }
    .hero__img .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 980px) {
    .hero__img {
      display: none;
    }
    .hero__img .reset {
      display: none;
    }
    .hero__img .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 480px) {
    .hero__img {
      display: none;
    }
    .hero__img .reset {
      display: none;
    }
    .hero__img .reset-responsive {
      display: block !important;
    }
  }

  .hero__img img {
    max-width: 520px;
    max-height: 472px;
  }

  @media screen and (max-width: 1160px) {
    .hero__img img {
      width: 100%;
      min-width: 350px;
      height: 402px;
    }
    .hero__img img .reset {
      display: none;
    }
    .hero__img img .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 980px) {
    .hero__img img {
      display: none;
    }
    .hero__img img .reset {
      display: none;
    }
    .hero__img img .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 480px) {
    .hero__img img {
      display: none;
    }
    .hero__img img .reset {
      display: none;
    }
    .hero__img img .reset-responsive {
      display: block !important;
    }
  }

  .hero__title {
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
    z-index: 999;
  }

  @media screen and (max-width: 1160px) {
    .hero__title {
      font-size: 40px;
    }
    .hero__title .reset {
      display: none;
    }
    .hero__title .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 980px) {
    .hero__title {
      font-size: 36px;
    }
    .hero__title .reset {
      display: none;
    }
    .hero__title .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 480px) {
    .hero__title {
      font-size: 28px;
    }
    .hero__title .reset {
      display: none;
    }
    .hero__title .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 360px) {
    .hero__title {
      font-size: 24px;
    }
    .hero__title .reset {
      display: none;
    }
    .hero__title .reset-responsive {
      display: block !important;
    }
  }

  .hero__typed-text {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: 4px;
  }

  .hero__typed-text span {
    font-size: 16px;
    margin-bottom: -0.35rem;
  }

  .hero__typed-text span.typed-text {
    font-size: 28px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 1160px) {
    .hero__typed-text span.typed-text {
      font-size: 26px;
    }
    .hero__typed-text span.typed-text .reset {
      display: none;
    }
    .hero__typed-text span.typed-text .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 480px) {
    .hero__typed-text span.typed-text {
      font-size: 24px;
    }
    .hero__typed-text span.typed-text .reset {
      display: none;
    }
    .hero__typed-text span.typed-text .reset-responsive {
      display: block !important;
    }
  }

  .hero__typed-text span.bar {
    display: inline-block;
    background-color: #f39c12;
    width: 3px;
    -webkit-animation: blink 0.9s infinite;
    animation: blink 0.9s infinite;
  }

  .hero__typed-text span.bar.typing {
    -webkit-animation: none;
    animation: none;
  }

  @-webkit-keyframes blink {
    0% {
      background-color: #f39c12;
    }
    49% {
      background-color: #f39c12;
    }
    50% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
    100% {
      background-color: #f39c12;
    }
  }

  @keyframes blink {
    0% {
      background-color: #f39c12;
    }
    49% {
      background-color: #f39c12;
    }
    50% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
    100% {
      background-color: #f39c12;
    }
  }

  @media screen and (max-width: 480px) {
    .hero__p {
      width: 100%;
      max-width: 320px;
    }
    .hero__p .reset {
      display: none;
    }
    .hero__p .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 360px) {
    .hero__p {
      width: 60%;
      max-width: none;
    }
    .hero__p .reset {
      display: none;
    }
    .hero__p .reset-responsive {
      display: block !important;
    }
  }

  .hero__paragraph {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #b6b6b7;
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 1160px) {
    .hero__paragraph {
      font-size: 14px;
    }
    .hero__paragraph .reset {
      display: none;
    }
    .hero__paragraph .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 980px) {
    .hero__paragraph {
      max-width: 420px;
    }
    .hero__paragraph .reset {
      display: none;
    }
    .hero__paragraph .reset-responsive {
      display: block !important;
    }
  }

  @media screen and (max-width: 360px) {
    .hero__paragraph {
      font-size: 13px;
    }
    .hero__paragraph .reset {
      display: none;
    }
    .hero__paragraph .reset-responsive {
      display: block !important;
    }
  }

  .hero__btn {
    margin-top: 32px;
    width: 224px;
    height: 64px;
    border-radius: 8px;
    background-color: #f39c12;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: #2d2e32;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hero__btn:hover {
    box-shadow: 0px 5px 20px 1px rgba(243, 156, 18, 0.25);
    -webkit-box-shadow: 0px 5px 20px 1px rgba(243, 156, 18, 0.25);
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hero__social {
    margin-top: 32px;
  }

  .hero__social ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .hero__social ul li {
    cursor: pointer;
    margin-right: 8px;
  }

  .hero__social ul li:last-child {
    margin-right: 0;
  }

  .hero__social ul li:hover .hero__social--svg {
    fill: #f39c12;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hero__social--svg {
    fill: #656568;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;
export default StyleHero;
