import fastLogo from '@/demo/images/fast-logo.png';
import githubLogo from '@/demo/images/github.png';
import packageJson from '@/package.json';
import { RouterLink } from 'vue-router';
import './index.scss';

const Header = () => {
  return (
    <header class='header'>
      <div class='header__container'>
        <RouterLink to='/'>
          <div class='header__fast-logo'>
            <img
              alt='logo'
              src={fastLogo}
            />
            <span class='header__fast-logo-text'>
              FAST UI
            </span>
          </div>
        </RouterLink>
        <nav class='header__nav'>
          <RouterLink to='/guide'>
            <li>指南</li>
          </RouterLink>
          <RouterLink to='/components'>
            <li>组件</li>
          </RouterLink>
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
