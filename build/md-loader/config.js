const Config = require('markdown-it-chain');
const anchorPlugin = require('markdown-it-anchor');
const tocPlugin = require('markdown-it-toc-done-right');
const slugify = require('transliteration').slugify;
const containers = require('./containers');
const overWriteFenceRule = require('./fence');

const config = new Config();

config
  .options.html(true).end()

  .plugin('anchor').use(anchorPlugin, [
    {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkSymbol: '#'
    }
  ]).end()

  .plugin('toc').use(tocPlugin, [
    {
      level: 2,
      slugify: slugify,
      containerId: 'doc-toc',
      containerClass: 'doc-toc',
      listClass: 'doc-toc__list',
      itemClass: 'doc-toc__item',
      linkClass: 'doc-toc__link',
      format(x, encode) {
        return `- <span>${encode(x)}</span>`;
      }
    }
  ]).end()

  .plugin('containers').use(containers).end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
