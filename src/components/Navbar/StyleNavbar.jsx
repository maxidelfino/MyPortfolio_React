import styled from "styled-components";

const StyleNavbar = styled.nav`
.nav {
    width: 100%;
    height: 97px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-logo {
        max-width: 147px;
        max-height: 26px;
        margin-top: 2px;

        p {
            max-height: 26px;
            text-decoration: none;
            color: #fff;
        }
    }

    &-icon {
        display: none;
    }

    &-links ul {
        display: flex;

        li {
            list-style: none;

            p {
                color: #000;
                text-decoration: none;
                font-size: 18px;
                font-weight: 400;
                transition: all .2s ease-in-out;

                &::before {
                    content: '<';
                    color: transparent;
                    font-weight: bold;
                    position: relative;
                    top: 1px;
                }

                &::after {
                    content: '>';
                    color: transparent;
                    font-weight: bold;
                    position: relative;
                    top: 1px;
                }

                &:hover {
                    color: #f39c12;
                    transition: all .2s ease-in-out;
                }
            }
        }

        li:hover p::before {
            color: #f39c12;
            transition: all .1s;
        }

        li:hover p::after {
            color: #f39c12;
            transition: all .1s;
        }
    }
}


@media screen and (max-width: 980px) {
    .nav {
        position: fixed;
        background-color: #202022;
        z-index: 100;
    }
}

@media screen and (max-width: 980px) {
    .nav-links ul li p:hover {
        color: #f39c12;
    }
}

@media screen and (max-width: 1160px) {
    .nav-links ul li p {
        font-size: 16px;
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

@media screen and (max-width: 980px) {
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;

        &-icon {
            display: flex;
            justify-content: center;
            height: 35px;
            width: 40px;
            align-items: center;
            color: #f39c12;
            z-index: 999;
            cursor: pointer;
        }

        &-links {
            position: fixed;
            height: 100vh;
            right: 0;
            top: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            transition: all 1s ease;
            background: #202022;
            padding: 60px 60px;
            margin-top: 0;
            align-items: flex-start;

            ul {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: auto auto auto auto;

                li {
                    padding: 20px;

                    p {
                        color: #000;
                        font-size: 24px;
                        font-weight: 800;
                        margin-left: 0;

                        &::before {
                            display: none;
                        }

                        &::after {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    .nav-burger {
        width: 32px;
        height: 5px;
        background: #f39c12;
        position: relative;
        border-radius: 32px;
        overflow: visible;
        cursor: pointer;
        right: 0;

        &:before {
            content: '';
            background-color: #f39c12;
            width: 32px;
            height: 5px;
            background: #f39c12;
            position: absolute;
            border-radius: 32px;
        }

        &:after {
            content: '';
            background-color: #f39c12;
            width: 32px;
            height: 5px;
            background: #f39c12;
            position: absolute;
            top: 11px;
            border-radius: 32px;
        }
    }

    .nav .burger-open {
        animation: midToCross 0.7s ease-in-out forwards;

        &:before {
            animation: upToCross 0.7s ease-in-out forwards;
        }

        &:after {
            animation: botToCross 0.7s ease-in-out forwards;
        }
    }

    .nav .burger-closed {
        animation: CrossToMid 0.7s ease-in-out forwards;

        &:before {
            animation: CrossToUp 0.7s ease-in-out forwards;
        }

        &:after {
            animation: CrossToBot 0.7s ease-in-out forwards;
        }
    }

    @keyframes upToCross {
        0% {
            transform: none;
            top: -8px;
        }

        50% {
            transform: none;
            top: 0;
        }

        100% {
            top: 0;
            transform: rotate(-45deg);
        }
    }

    @keyframes midToCross {
        0% {
            background: #f39c12;
        }

        99% {
            background: transparent;
        }

        100% {
            background: transparent;
        }
    }

    @keyframes botToCross {
        0% {
            transform: none;
            top: 8px;
        }

        50% {
            transform: none;
            top: 0;
        }

        100% {
            top: 0;
            transform: rotate(45deg);
        }
    }

    @keyframes CrossToUp {
        0% {
            top: 0;
            transform: rotate(-45deg);
        }

        50% {
            transform: none;
            top: 0;
        }

        100% {
            transform: none;
            top: -8px;
        }
    }

    @keyframes CrossToBot {
        0% {
            top: 0;
            transform: rotate(45deg);
        }

        50% {
            transform: none;
            top: 0;
        }

        100% {
            transform: none;
            top: 8px;
        }
    }

    .nav .isOpen {
        clip-path: circle(0% at 100% 0%);
    }

    .nav .isClosed {
        clip-path: circle(150% at 100% 0%);
    }
}
`;
export default StyleNavbar;