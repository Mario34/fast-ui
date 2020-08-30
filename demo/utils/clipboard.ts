function copy(str: string) {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', str);
    input.setAttribute('style', 'dispaly: none; position: fixed');
    document.body.appendChild(input);
    input.setSelectionRange(0, 99999);
    input.select();
    if (document.execCommand('copy')) {
      resolve();
    } else {
      reject(new Error('Does not support "document.execCommand"'));
    }
    document.body.removeChild(input);
  });
}

export default copy;
