const { compileTemplate } = require('@vue/compiler-sfc');

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function genInlineComponentText(template, script) {
  let compiled = ''
  script = script.trim();
  if (script) {
    script = script.replace(/export\s+default/, 'const democomponentExport =');
  } else {
    script = 'const democomponentExport = {}';
  }

  if (template) {
    compiled = compileTemplate({
      source: `<div>${template}</div>`,
      filename: 'demo'
    }).code

    let moduleStr = compiled.match(/(?<=import {).*?(?=} from "vue")/)
    if (moduleStr && moduleStr[0]) {
      compiled = compiled
        .replace(/(?<=import {).*?(?=} from "vue")/, moduleStr[0].replace(/ as/g, ':'))
        .replace(/import/, 'const')
        .replace(/from "vue"/, '= require("vue")')
        .replace(/export /, '')
    }
  }

  let demoComponentContent = `(function() {
    ${compiled}
    ${script}
    return defineComponent({
      render,
      ...democomponentExport
    })
  })()`;

  return demoComponentContent;
}

module.exports = {
  stripScript,
  stripStyle,
  stripTemplate,
  genInlineComponentText
};
