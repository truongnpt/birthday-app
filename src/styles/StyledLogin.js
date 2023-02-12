import styled from 'styled-components';

export const StyledLogin = styled.section`
  height: 100%;
  background: #a00061;

  .hero-image {
    text-align: center;
    margin-bottom: 100px;
   
    img {
      -webkit-animation: rotating 6s linear infinite;
      -moz-animation: rotating 6s linear infinite;
      -ms-animation: rotating 6s linear infinite;
      -o-animation: rotating 6s linear infinite;
      animation: rotating 6s linear infinite;
      border-radius: 100%;
      overflow: hidden;
      border: 5px solid #fff!important;
    }
  }

  @keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


.pulse {
    height: 200px;
    width: 200px;
    min-width: 100px;
    border: none;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 2px 2px 20px white;
}

.pulse::before {
    content: "";
    position: absolute;
    border: 1px solid white;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    animation: pulse 1.5s linear infinite
}

.pulse:hover {
  box-shadow: 2px 2px 20px white;
  &:before {
    border: 1px solid white;
  }

  &:after {
    border: 1px solid white;
  }
}

.pulse::after {
    content: "";
    position: absolute;
    border: 1px solid white;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    animation: pulse 1.5s linear infinite;
    animation-delay: 0.3s
}

@keyframes pulse {
    0% {
        transform: scale(0.5);
        opacity: 0
    }

    50% {
        transform: scale(1);
        opacity: 1
    }

    100% {
        transform: scale(1.3);
        opacity: 0
    }
}

.hero-content--learn-more {
  margin-top: 200px;
}

.button {
  background: none;
  border: 3px solid #fff;
  border-radius: 999px;
  box-shadow: #fff 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1.5px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 30px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;

  &:hover {
    background: #fff;
    color: #a00061;
    transform: translateY(-3px);
  }
}
`;

export const StyledHeroTitle = styled.div`
text-align: center;
margin: 20px 0;

h2 {
  font-size: 40px;
}
`
