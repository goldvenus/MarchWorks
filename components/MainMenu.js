import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import Text from '../classes/Text';
import Link from './Link';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClass: 'menu',
    };

    this.classToggle = this.classToggle.bind(this);
    this.canvas = {
      home: React.createRef(),
      about: React.createRef(),
      contact: React.createRef(),
      tuto: React.createRef(),
    };
    this.obj = [];
  }

  componentDidMount() {
    const { obj } = this;
    for (const ref in this.canvas) {
      const canvas = this.canvas[ref].current;
      obj.push(
        new Text(
          canvas,
          canvas.getAttribute('name'),
          18,
          'Georgia',
          this.props.theme === 'light' ? '#000000' : '#ffffff',
          this.props.theme === 'light' ? '#444444' : '#aaaaaa',
          4,
        ),
      );
    }
  }

  componentDidUpdate(prev) {
    if (prev.theme !== this.props.theme) {
      for (const canvas of this.obj) {
        canvas.setColors(
          this.props.theme === 'light' ? '#000000' : '#ffffff',
          this.props.theme === 'light' ? '#444444' : '#aaaaaa',
        );
      }
    }
  }

  classToggle(target) {
    this.setState((state) => {
      if (target === 'menu') {
        if (state.menuClass === 'menu close') {
          setTimeout(this.props.transformation, 500);
        } else {
          this.props.transformation();
        }

        return {
          menuClass: state.menuClass === 'menu' ? 'menu close' : 'menu',
          liClass: state.menuClass === 'menu' ? 'liTransition' : '',
        };
      }
    });
  }

  render() {
    const color = this.props.theme === 'light' ? '#222222' : '#ffffff';
    return (
      <menu
        id="mainMenu"
        style={this.state.menuClass === 'menu close' ? { left: 0 } : null}
      >
        <span className="design">
          <span />
          <span />
        </span>
        <span className="design">
          <span />
          <span />
        </span>
        <span className="design">
          <span />
          <span />
        </span>
        <span className="design">
          <span />
          <span />
        </span>
        <div
          name="menu"
          className={this.state.menuClass}
          onClick={() => {
            this.classToggle('menu');
          }}
        >
          <span />
          <span />
        </div>
        <h2>
          <Link href="/">
            <img className="logo" src="/static/logo.svg" alt="" />
          </Link>
        </h2>
        <nav>
          <ul>
            <li className={this.state.liClass}>
              <Link activeClassName="is-active" href="/">
                <a>
                  <div className="arrow" />
                  <canvas name="HOME" ref={this.canvas.home}>
                    HOME
                  </canvas>
                  <span />
                  <span />
                </a>
              </Link>
            </li>

            <li className={this.state.liClass}>
              <Link activeClassName="is-active" href="/about">
                <a>
                  <div className="arrow" />
                  <canvas name="ABOUT" ref={this.canvas.about}>
                    ABOUT
                  </canvas>
                  <span />
                  <span />
                </a>
              </Link>
            </li>

            <li className={this.state.liClass}>
              <Link activeClassName="is-active" href="/contact">
                <a>
                  <div className="arrow" />
                  <canvas name="CONTACT" ref={this.canvas.contact}>
                    CONTACT
                  </canvas>
                  <span />
                  <span />
                </a>
              </Link>
            </li>

            <li className={this.state.liClass}>
              <Link activeClassName="is-active" href="/blog">
                <a>
                  <div className="arrow" />
                  <canvas name="BLOG" ref={this.canvas.tuto}>
                    BLOG
                  </canvas>
                  <span />
                  <span />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="socialMedia">
          <a
            href="https://github.com/marchworks"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" color={color} />
          </a>
          <a
            href="https://twitter.com/marchworks"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" color={color} />
          </a>
          <a
            href="https://stackoverflow.com/users/story/8619959"
            title="Stack Overflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} size="lg" color={color} />
          </a>
        </div>
        <style jsx>
          {`
          .logo {
            width: 80%;
            max-width: 250px;
            cursor: pointer;
          }
          #mainMenu {
            position: relative;
            z-index: 10000;
            height: 100%;
            width: 300px;
            margin: 0;
            background-color: var(--menu-bg);
            color: var(--menu-color);
            transition: 0.4s ease-in 0.3s;
            left: 0;
            box-sizing: border-box;
          }

          #mainMenu h2 {
            margin-top: 50px;
          }

          #mainMenu .menu {
            display: none;
            width: 40px;
            height: 28px;
            position: fixed;
            top: 20px;
            right: 20px;
            cursor: pointer;
          }

          #mainMenu .menu span {
            width: 100%;
            height: 2px;
            background-color: ${this.props.theme === 'light' ? '#444' : '#ccc'};
            position: absolute;
            transform-origin: center;
            transition: 0.6s ease-out;
          }

          #mainMenu .menu span:first-child {
            top: 8px;
          }

          #mainMenu .menu span:first-child:before {
            top: -8px;
          }

          #mainMenu .menu span:last-child {
            top: 16px;
          }

          #mainMenu .menu span:last-child:before {
            top: 8px;
          }

          #mainMenu .menu span:before {
            content: '';
            width: 100%;
            height: 2px;
            background-color: ${this.props.theme === 'light' ? '#444' : '#ccc'};
            position: absolute;
            top: 10px;
            transition: 0.3s 0.3s linear;
          }

          #mainMenu .close span {
            background-color: ${this.props.theme === 'light' ? '#000' : '#fff'};
          }

          #mainMenu .close span:first-child {
            transform: rotateZ(45deg);
            top: 16px;
          }

          #mainMenu .close span:last-child {
            transform: rotateZ(-45deg);
          }

          #mainMenu .close span:before {
            width: 0;
          }

          #mainMenu .socialMedia {
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            position: absolute;
            width: 100%;
            left: 0;
          }
          #mainMenu .socialMedia a {
            margin: 0 10%;
          }
          @media only screen and (min-width: 601px) {
            #mainMenu {
              left: 0;
              position: relative;
              min-width: 300px;
            }
          }

          #mainMenu nav {
            height: calc(100% - 200px);
            max-height: calc(100% - 200px);
            overflow: hidden;
          }

          #mainMenu ul {
            color: #a2a2a2;
            font-weight: 700;
            font-size: 18px;
            font-family: none;
            letter-spacing: 2px;
            height: 100%;
          }

          #mainMenu li {
            margin: 20px 0 20px 0;
            padding: 20px 0 20px 0;
            position: relative;
          }
          @media only screen and (max-height: 540px) {
            #mainMenu li {
              margin: 10px 0 10px 0;
              padding: 10px 0 10px 0;
            }
          }
          @media only screen and (max-height: 435px) {
            #mainMenu li {
              margin: 5px 0 5px 0;
              padding: 5px 0 5px 0;
            }
          }
          @media only screen and (max-width: 600px) {
            #mainMenu li {
              text-align: center;
              transform: translate(-100%, 0);
            }
          }
          #mainMenu li:nth-child(1) {
            transition: 0.4s ease-in 0.2s;
          }
          #mainMenu li:nth-child(2) {
            transition: 0.4s ease-in 0.3s;
          }
          #mainMenu li:nth-child(3) {
            transition: 0.4s ease-in 0.4s;
          }
          #mainMenu li:nth-child(4) {
            transition: 0.4s ease-in 0.5s;
          }
          #mainMenu .liTransition {
            transform: translate(0%, 0);
          }

          #mainMenu li a {
            color: #a2a2a2;
            padding: 5px 0px 5px 0px;
            display: inline-flex;
            position: relative;
          }

          #mainMenu li a:hover {
            color: #efefefef;
            border-bottom: 2px #aaaaaa solid;
          }

          #mainMenu li a span {
            display: none;
          }

          #mainMenu .is-active {
            color: #dcdcdc;
          }

          #mainMenu .is-active .arrow {
            position: absolute;
            right: 100%;
            border-top: 10px transparent solid;
            border-bottom: 10px transparent solid;
            border-right: 10px transparent solid;
            border-left: 15px #2d2222 solid;
          }

          #mainMenu .is-active:hover {
            color: #dcdcdc;
            border-bottom: none;
          }
          @media only screen and (max-width: 600px) {
            #mainMenu .design span:before,
            #mainMenu .design span:after,
            #mainMenu li a span:before,
            #mainMenu li a span:after {
              background-color: ${this.props.theme === 'light' ? '#000000' : '#ffffff'};
              position: absolute;
              content: '';
            }
            #mainMenu .design {
              position: absolute;
            }
            #mainMenu .design:nth-child(1) {
              top: 5px;
              left: 5px;
            }
            #mainMenu .design:nth-child(1) span:first-child:before {
              width: 25px;
              height: 2px;
              left: 100%;
              top: 5px;
            }

            #mainMenu .design:nth-child(1) span:first-child:after {
              width: 2px;
              height: 25px;
              top: 5px;
            }

            #mainMenu .design:nth-child(1) span:last-child:before {
              width: 25px;
              height: 2px;
              left: calc(100% + 5px);
            }

            #mainMenu .design:nth-child(1) span:last-child:after {
              width: 2px;
              height: 25px;
              left: 5px;
            }

            #mainMenu .design:nth-child(2) {
              bottom: 5px;
              right: 5px;
            }

            #mainMenu .design:nth-child(2) span:first-child:before {
              width: 25px;
              height: 2px;
              right: 100%;
              bottom: 5px;
            }

            #mainMenu .design:nth-child(2) span:first-child:after {
              width: 2px;
              height: 25px;
              bottom: 5px;
            }

            #mainMenu .design:nth-child(2) span:last-child:before {
              width: 25px;
              height: 2px;
              right: calc(100% + 5px);
            }

            #mainMenu .design:nth-child(2) span:last-child:after {
              width: 2px;
              height: 25px;
              right: 5px;
              bottom: 100%;
            }

            #mainMenu .design:nth-child(3) {
              bottom: 5px;
              left: 5px;
            }

            #mainMenu .design:nth-child(3) span:first-child:before {
              width: 25px;
              height: 2px;
              left: 100%;
              bottom: 5px;
            }

            #mainMenu .design:nth-child(3) span:first-child:after {
              width: 2px;
              height: 25px;
              bottom: 5px;
            }

            #mainMenu .design:nth-child(3) span:last-child:before {
              width: 25px;
              height: 2px;
              left: calc(100% + 5px);
            }

            #mainMenu .design:nth-child(3) span:last-child:after {
              width: 2px;
              height: 25px;
              left: 5px;
              bottom: 100%;
            }

            #mainMenu .design:nth-child(4) {
              top: 5px;
              right: 5px;
            }

            #mainMenu .design:nth-child(4) span:first-child:before {
              width: 25px;
              height: 2px;
              right: 100%;
              top: 5px;
            }

            #mainMenu .design:nth-child(4) span:first-child:after {
              width: 2px;
              height: 25px;
              top: 5px;
            }

            #mainMenu .design:nth-child(4) span:last-child:before {
              width: 25px;
              height: 2px;
              right: calc(100% + 5px);
              top: 0px;
            }

            #mainMenu .design:nth-child(4) span:last-child:after {
              width: 2px;
              height: 25px;
              right: 5px;
              top: 100%;
            }
            #mainMenu h2 {
              text-align: center;
              margin-bottom: 40px;
            }
            #mainMenu .menu {
              display: block;
            }
            #mainMenu {
              left: -100vw;
              position: fixed;
              width: 100vw;
              padding: 0;
              min-width: infinite;
            }
            #mainMenu ul {
              padding: 0;
            }
            #mainMenu li a {
              width: 150px;
            }
            #mainMenu li a canvas {
              margin: auto;
            }
            #mainMenu li a span {
              display: block;
              position: absolute;
            }
            #mainMenu li a span:nth-child(3) {
              top: 0;
              right: 0;
            }
            #mainMenu li a span:nth-child(3):before {
              content: '';
              width: 15px;
              height: 2px;
              position: absolute;
              right: 100%;
            }
            #mainMenu li a span:nth-child(3):after {
              content: '';
              width: 2px;
              height: 15px;
              position: absolute;
            }
            #mainMenu li a span:nth-child(4) {
              bottom: 0;
              left: 0;
            }
            #mainMenu li a span:nth-child(4):before {
              content: '';
              width: 15px;
              height: 2px;
              position: absolute;
            }
            #mainMenu li a span:nth-child(4):after {
              content: '';
              width: 2px;
              height: 15px;
              position: absolute;
              bottom: 100%;
            }
            #mainMenu .is-active .arrow {
              display: none;
            }
          }
        `}
        </style>
      </menu>
    );
  }
}

export default MainMenu;
