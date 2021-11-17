challenge.getSession().setValue(ab('Ly8gVGFzawovLyBXcml0ZSBhIHByb2dyYW0gdGhhdCBwcmludHMgdGhlIGludGVnZXJzIGZyb20gMSB0byAxMDAgKGluY2x1c2l2ZSkuCgovLyBCdXQ6Ci8vIGZvciBtdWx0aXBsZXMgb2YgdGhyZWUsIHByaW50IFJhY2UgKGluc3RlYWQgb2YgdGhlIG51bWJlcikKLy8gZm9yIG11bHRpcGxlcyBvZiBmaXZlLCBwcmludCBDYXIgKGluc3RlYWQgb2YgdGhlIG51bWJlcikKLy8gZm9yIG11bHRpcGxlcyBvZiBib3RoIHRocmVlIGFuZCBmaXZlLCBwcmludCBSYWNlQ2FyIChpbnN0ZWFkIG9mIHRoZSBudW1iZXIp'));
challenge.setReadOnly(true);

editor.getSession().setValue(ab('Zm9yICh2YXIgaSA9IDE7IGkgPCAxMDA7IGkrKykgew0KICAgIGlmIChpICUgMyA9PSAwKSB7DQogICAgICAgIGNvbnNvbGUubG9nKCJSYWNlIik7DQogICAgfQ0KICAgIGlmIChpICUgNSA9PSAwKSB7DQogICAgICAgIGNvbnNvbGUubG9nKCJDYXIiKTsNCiAgICB9DQogICAgLy8gaWYgKGkgJSAxNSA9PSAwKSB7DQogICAgLy8gICAgIGNvbnNvbGUubG9nKCJSYWNlQ2FyIik7DQogICAgLy8gfQ0KICAgIGNvbnNvbGUubG9nKGkpOw0KfQ=='));

expectedOutput = ab('MSwyLFJhY2UsNCxDYXIsUmFjZSw3LDgsUmFjZSxDYXIsMTEsUmFjZSwxMywxNCxSYWNlQ2FyLDE2LDE3LFJhY2UsMTksQ2FyLFJhY2UsMjIsMjMsUmFjZSxDYXIsMjYsUmFjZSwyOCwyOSxSYWNlQ2FyLDMxLDMyLFJhY2UsMzQsQ2FyLFJhY2UsMzcsMzgsUmFjZSxDYXIsNDEsUmFjZSw0Myw0NCxSYWNlQ2FyLDQ2LDQ3LFJhY2UsNDksQ2FyLFJhY2UsNTIsNTMsUmFjZSxDYXIsNTYsUmFjZSw1OCw1OSxSYWNlQ2FyLDYxLDYyLFJhY2UsNjQsQ2FyLFJhY2UsNjcsNjgsUmFjZSxDYXIsNzEsUmFjZSw3Myw3NCxSYWNlQ2FyLDc2LDc3LFJhY2UsNzksQ2FyLFJhY2UsODIsODMsUmFjZSxDYXIsODYsUmFjZSw4OCw4OSxSYWNlQ2FyLDkxLDkyLFJhY2UsOTQsQ2FyLFJhY2UsOTcsOTgsUmFjZSxDYXI=');

function tests() {
    console.debug('Found Tests');
    var duplicates = {};
    actualOutputResults.forEach((x) => {
        duplicates[x] = (duplicates[x] || 0) + 1;
    });

    testA = (duplicates[ab(r)] == 27 || duplicates[ab(r)] == 33); //27 correct // 33  at start
    testB = (duplicates[ab(c)] == 13 || duplicates[ab(c)] == 14 || duplicates[ab(c)] == 19); //14 correct // 19 at start // allow 13 to also pass
    testC = (duplicates[ab(rc)] == 6); //6 correct // undefined at start
    testD = (actualOutputResults.length == 100); // 100 correct // 151 at start

    document.getElementById('tests').innerHTML =
        `<ul>
    <li>Prints ${ab(r)} - <span class="${testA ? "pass" : "fail"}">${testA ? "PASSING!" : "FALSE"}</span></li>
    <li>Prints ${ab(c)} - <span class="${testB ? "pass" : "fail"}">${testB ? "PASSING!" : "FALSE"}</span></li>
    <li>Prints ${ab(rc)} - <span class="${testC ? "pass" : "fail"}">${testC ? "PASSING!" : "FALSE"}</span></li>
    <li>Prints ${ab(hl)} - <span class="${testD ? "pass" : "fail"}">${testD ? "PASSING!" : "FALSE"}</span></li>
</ul>`
}

function initTests() {
    document.getElementById('tests').innerHTML =
        `<ul>
        <li>Prints ${ab(r)} - ???</li>
        <li>Prints ${ab(c)} - ???</li>
        <li>Prints ${ab(rc)} - ???</li>
        <li>Prints ${ab(hl)} - ???</li>
    </ul>`
}

function revealExpectedOutput() {
    console.debug('Reveal');
    expected = ace.edit('expected');
    expected.setTheme('ace/theme/monokai');
    expected.setReadOnly(true);
    expected.getSession().setValue(expectedOutput.toString().replace(/,/g, '\n'));
}

var r = 'UmFjZQ==';
var c = 'Q2Fy';
var rc = 'UmFjZUNhcg==';
var hl = 'MTAwIGxpbmVz';
setTimeout(() => {
    initTests();
}, 10);