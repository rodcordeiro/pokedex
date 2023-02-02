export * from './colors';
export * from './interfaces';
export * from './icons';

export function paddy(num: number, padlen: number, padchar?: string) {
  var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
  var pad = new Array(1 + padlen).join(pad_char);
  return (pad + num).slice(-pad.length);
}

export function camelCase(string: string) {
  return string.replace(/-([a-z])/gi, function (all, letter: string) {
    return letter.toUpperCase();
  });
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}
