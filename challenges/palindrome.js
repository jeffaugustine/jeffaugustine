challenge.getSession().setValue(ab('Ly8gVGFzawovLyBXcml0ZSBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIGEgc3RyaW5nIGlzIGEgcGFsaW5kcm9tZS4KCi8vIHBhbGluZHJvbWUgLSBub3VuCi8vIEEgd29yZCwgbnVtYmVyLCBwaHJhc2UsIG9yIG90aGVyIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgd2hpY2ggcmVhZHMgdGhlIHNhbWUgYmFja3dhcmQgYXMgZm9yd2FyZC4='));
challenge.setReadOnly(true);

editor.getSession().setValue(ab('Ly8gWW91ciBjb2RlIGhlcmUh'));

expectedOutput = ab('aXNQYWxpbmRyb21lKCdpbnRyYW5ldCcpID0+IGZhbHNlCmlzUGFsaW5kcm9tZSgnMTEyMjExJykgPT4gdHJ1ZQppc1BhbGluZHJvbWUoJ3JhY2VjYXInKSA9PiB0cnVl');

function tests() {
    console.debug('Found Tests');
    var duplicates = {};
    actualOutputResults.forEach((x) => {
        duplicates[x] = (duplicates[x] || 0) + 1;
    });

    testA = isPalindrome('intranet') === false;
    testB = isPalindrome('112211') === true;
    testC = isPalindrome('racecar') === true;

    document.getElementById('tests').innerHTML =
        `<ul>
    <li>${ab(t1)} - <span class="${testA ? "pass" : "fail"}">${testA ? "PASSING!" : "Failing"}</span></li>
    <li>${ab(t2)} - <span class="${testB ? "pass" : "fail"}">${testB ? "PASSING!" : "Failing"}</span></li>
    <li>${ab(t3)} - <span class="${testC ? "pass" : "fail"}">${testC ? "PASSING!" : "Failing"}</span></li>
</ul>`
}

function initTests() {
    document.getElementById('tests').innerHTML =
        `<ul>
        <li>${ab(t1)} - ???</li>
        <li>${ab(t2)} - ???</li>
        <li>${ab(t3)} - ???</li>
    </ul>`
}

function revealExpectedOutput() {
    console.debug('Reveal');
    expected = ace.edit('expected');
    expected.setTheme('ace/theme/monokai');
    expected.setReadOnly(true);
    expected.getSession().setValue(expectedOutput.toString().replace(/,/g, '\n'));
}

var t1 = 'aXNQYWxpbmRyb21lKCdpbnRyYW5ldCcp';
var t2 = 'aXNQYWxpbmRyb21lKCcxMTIyMTEnKQ==';
var t3 = 'aXNQYWxpbmRyb21lKCdyYWNlY2FyJyk=';
setTimeout(() => {
    // runCode();
    initTests();
    tests();
    clearActualOutput();
}, 10);