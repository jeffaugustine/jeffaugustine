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

    testAClass = (duplicates[ab(r)] == 27 || duplicates[ab(r)] == 33) ? 'pass' : 'fail'; //27 correct // 33  at start
    testBClass = (duplicates[ab(c)] == 14 | duplicates[ab(c)] == 19) ? 'pass' : 'fail'; //6 correct // undefined at start
    testCClass = (duplicates[ab(rc)] == 6) ? 'pass' : 'fail'; //56 correct // 101 at start
    testDClass = (actualOutputResults.length == 100) ? 'pass' : 'fail'; // 100 correct // 151 at start

    testAStatus = (duplicates[ab(r)] == 27 || duplicates[ab(r)] == 33) ? 'SUCCESS!' : 'FALSE';
    testBStatus = (duplicates[ab(c)] == 14 | duplicates[ab(c)] == 19) ? 'SUCCESS!' : 'FALSE';
    testCStatus = (duplicates[ab(rc)] == 6) ? 'SUCCESS!' : 'FALSE';
    testDStatus = (actualOutputResults.length == 100) ? 'SUCCESS!' : 'FALSE';

    document.getElementById('tests').innerHTML = 
`<ul>
    <li>Prints ${ab(r)} - <span class="${testAClass}">${testAStatus}</span></li>
    <li>Prints ${ab(c)} - <span class="${testBClass}">${testBStatus}</span></li>
    <li>Prints ${ab(rc)} - <span class="${testCClass}">${testCStatus}</span></li>
    <li>Prints ${ab(hl)} - <span class="${testDClass}">${testDStatus}</span></li>
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