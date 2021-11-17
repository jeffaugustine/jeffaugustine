var challenge = ace.edit('challenge');
challenge.setTheme('ace/theme/monokai');
challenge.session.setMode('ace/mode/javascript');
challenge.getSession().setValue('//Well that wasnt right, maybe someone will give you something to paste in here!');

var editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.session.setMode('ace/mode/javascript');
editor.setOption('mergeUndoDeltas', 'always');
editor.getSession().setValue('//You can run JavaScript from this one! (Use the buttons when you\'re ready)\nconsole.log(\'Hello world\');');

var actual = ace.edit('actual');
actual.setTheme('ace/theme/monokai');
actual.setReadOnly(true);

var expected;

var error;
window.addEventListener('error', function (e) {
    this.error = e.error;
});

ba = (e) => { return window.btoa(e).toString(); } //enc
ab = (d) => { return window.atob(d).toString(); } //dec

include = (file) => {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}
include(`challenges/${ab(window.location.search.substr(1))}.js`);

var actualOutputResults = [];
function customLog(words) {
    actualOutputResults.push(words);
}
var rerunTests = false;

function runCode() {
    console.debug('Run My Code');

    actualOutputResults = [];
    error = null;

    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.innerHTML = editor.getSession().getValue().replace(/console.log/g, 'customLog');
    // console.log(editor.getSession().getValue().replace(/console.log/g, 'customLog'));
    document.getElementsByTagName('head').item(0).appendChild(newScript);

    if (error == null) {
        actual.getSession().setValue(actualOutputResults.toString().replace(/,/g, '\n'));
    } else {
        actual.getSession().setValue(this.error.toString());
    }

    if (rerunTests) {
        tests();
    }
}
function runTests() {
    console.debug('Run Tests');
    rerunTests = !rerunTests;
    var testButton = document.getElementById('test-button');
    if (rerunTests) {
        testButton.classList.remove('evil');
        testButton.classList.add('good');
        testButton.innerText = 'Tests On';
        tests();
    } else {
        testButton.classList.remove('good');
        testButton.classList.add('evil');
        testButton.innerText = 'Test Output';
    }
}


function clearActualOutput() {
    console.debug('Clear Output');
    actual.getSession().setValue('');
}