import fastLogo from '@/demo/images/fast-logo.png';
import githubLogo from '@/demo/images/github.png';
import './index.scss';
import packageJson from '@/package.json';

const Header = () => {
  return (
    <header class='header'>
      <div class='header__container'>
        <div class='header__fast-logo'>
          <img
            alt='logo'
            src={fastLogo}
          />
          <span class='header__fast-logo-text'>
            FAST UI
          </span>
        </div>
        <nav class='header__nav'>
          <li>指南</li>
          <li>组件</li>
          <li>关于</li>
        </nav>
        <div class='header__memu'>
          <a
            class='header__memu-item'
            href={packageJson.homepage}
            target='__blank'
          >
            <img
              alt='logo'
              class='github-logo'
              src={githubLogo}
            />Github
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
