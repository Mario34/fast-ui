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
  script = script.trim();
  if (script) {
    script = script.replace(/export\s+default/, 'const democomponentExport =');
  } else {
    script = 'const democomponentExport = {}';
  }

  if (template) {
    template = template.replace(/`/g,'\\`')
  }

  console.log(template)

  //TODO: template需要编译成render函数，需要相关编译方法
  let demoComponentContent = `(function() {
    ${script}
    return defineComponent({
      template: \`<div>${template}</div>\`,
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
