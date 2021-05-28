// function hmac (key, message) {
//     var opad = '5c5c5c5c5c5c5c5c5c5c5c';
//     var ipad = '3636363636363636363636';
//     var H = 12322342;
//     return H((key ^ opad).concat(H(key ^ ipad).concat(message)));
// }

/*
HMAC(K, m) = H((K’ XOR opad) concat H(K’ XOR ipad) concat m), где
K - секретный ключ
K’ = K, если длина секретного ключа не больше размера блока, в ином случае K’ = H(K)
opad - внешняя добавка, включающая повторяющиеся байты 0x5C
ipad - внутрення добавка, включающая повторяющиеся байты 0x36
concat - конкатинация
*/

// async function HMAC(key, message) {
//     const g = str => new Uint8Array([...unescape(encodeURIComponent(str))].map(c => c.charCodeAt(0))),
//         k = g(key),
//         m = g(message),
//         c = await crypto.subtle.importKey('raw', k, { name: 'HMAC', hash: 'SHA-256' }, true, ['sign']),
//         s = await crypto.subtle.sign('HMAC', c, m);
//     [...new Uint8Array(s)].map(b => b.toString(16).padStart(2, '0')).join('');
//     return btoa(String.fromCharCode(...new Uint8Array(s)))
// }

// HMAC("mypassword", "Hello world!").then(e => console.log(e))

// HMAC("mypassword", "Hello world!").then(e => console.log(e))