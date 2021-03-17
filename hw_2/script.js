var allStars = 7;
var star = '';

// 1. square
for (var i = 1; i <= allStars; i++) {
    for (var a = 1; a <= allStars; a++) {
        star += '* ';
    }
        star += '\n';
}

star = '';
// 2. 
for (var i = 1; i <= allStars; i++) {
    for (var a = 1; a <= allStars; a++) { 
          
        if (a === 1 || a === 7 || i === 1 || i === allStars) {
            star += '* ';
        } else {
            star += '  ';
        }

    }
        star += '\n';
}

star = '';
// 3. 
for (var i = 1; i <= allStars; i++) {
    for (var j = 1; j <= allStars; j++) {
        if (j === 1 || i === 1 || (j === allStars + 1 - i) ) {
            star += '* ';
        } else {
            star += '  ';       
        }
    }
    star += '\n';
}

star = '';
// 4. 
for (var i = 1; i <= allStars; i++) {
    for (var j = 1; j <= allStars; j++) {
        if (j === 1 || i === allStars || (j === i) ) {
            star += '* ';
        } else {
            star += '  ';       
        }
    }
    star += '\n';
}

star = '';
// 5. 
for (var i = 1; i <= allStars; i++) {
    for (var j = 1; j <= allStars; j++) {
        if (j === allStars || i === allStars || (j === allStars + 1 - i) ) {
            star += '* ';
        } else {
            star += '  ';       
        }
    }
    star += '\n';
}

star = '';
// 6. 
for (var i = 1; i <= allStars; i++) {
    for (var j = 1; j <= allStars; j++) {
        if (j === allStars || i === 1 || (j === i) ) {
            star += '* ';
        } else {
            star += '  ';       
        }
    }
    star += '\n';
}

star = '';
// 7. 
for (var i = 1; i <= allStars; i++) {
    for (var j = 1; j <= allStars; j++) {
        if (j === i || (j === allStars + 1 - i)) {
            star += '* ';
        } else {
            star += '  ';       
        }
    }
    star += '\n';
}

star = '';
// 8. 
var middle = allStars/2;

for (var i = 1; i <= allStars; i++) {
    for (var j = 1; j <= allStars; j++) {
        if (
            i === 1 || 
            ( (j === (allStars + 1 - i) || (j === i) ) && 
            i < middle + 1)
        ) {
            star += '* ';     
        } else {
            star += '  ';
        }
    }
    star += '\n';
}

star = '';
// 9. 
for (var i = 1; i <= allStars; i++) {
    for (var j = 1; j <= allStars; j++) {
        if (i === allStars || 
            ( (j === (allStars + 1 - i) || (j === i) ) &&
            i > middle)
            ) {
            star += '* ';     
        } else {
            star += '  ';
        }
    }
    star += '\n';
}

