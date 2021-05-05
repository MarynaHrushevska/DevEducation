function hmac (key, message) {
    var opad = '5c5c5c5c5c5c5c5c5c5c5c';
    var ipad = '3636363636363636363636';
    var H = 12322342;
    return H((key ^ opad).concat(H(key ^ ipad).concat(message)));
}

/*
HMAC(K, m) = H((K’ XOR opad) concat H(K’ XOR ipad) concat m), где
K - секретный ключ
K’ = K, если длина секретного ключа не больше размера блока, в ином случае K’ = H(K)
opad - внешняя добавка, включающая повторяющиеся байты 0x5C
ipad - внутрення добавка, включающая повторяющиеся байты 0x36
concat - конкатинация

*/
