function translateMonacoKey(keys) {
    if (typeof keys === "string") keys = [keys];
    let result = 0,
        t = 0;
    for (let key of keys) {
        key = key.toLowerCase();
        let k = monaco.KeyMod;
        let dict = {
            control: k.CtrlCmd,
            ctrl: k.CtrlCmd,
            alt: k.AltCmd,
            shift: k.Shift,
            '[': k.US_OPEN_SQUARE_BRACKET,
            '=': k.US_EQUAL,
            '-': k.US_MINUS,

        }
        if (dict.hasOwnProperty(key)) t = dict[key];
        else t = k[key];
        result |= t;
    }
    return result;
}

function translateMonacoAction(action) {
    switch (action) {
        case 'unfoldAll':
            action = "unfondRecursively";
            break;
    }
    action = "editor." + action;
    return action;
}

function startMonaco(input, parent, id, options) {
    if (!id) id = "vscode";
    var v = zzz.create("div", {
        id: id
    }, {
        minHeight: "10em"
    }, parent || zzz.get.id("main"));
    require(['vs/editor/editor.main'], function () {
        window[id] = monaco.editor.create(v, {
            value: "",
            language: 'python',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            automaticLayout: true,
            lineNumbers: true,
            glyphMargin: true,
            //fontFamily:"",
            minimap: {
                enabled: true
            },
            lightbulb: {
                enabled: true
            },
            fontSize: zzz.browser.screenX / 100 * 1.5 + "px"
        });
        window[id].bindKey = function (key, action) {
            key = translateMonacoKey(key);
            action = translateMonacoAction(action);
            editor.addCommand(key, function () {
                editor.trigger('', action);
            });
        }

        if (options) window[id].updateOptions(options);
        monaco.editor.defineTheme('anotherTheme', {
            base: 'vs',
            inherit: true,
            fontSize: "1em",
            rules: [{
                background: 'FFFFFF'
            }]
        });
        monaco.editor.setTheme('anotherTheme');
        for (let i = 1; i <= input.length; i++) {
            let substr = input.substring(0, i);
            setTimeout(() => {
                window[id].setValue(substr);
            }, i * 100);
        }
    });
    return v;
}

function startBrython() {
    require(["https://cdn.jsdelivr.net/npm/brython@3.10.0/brython.min.js", "https://cdn.jsdelivr.net/npm/brython@3.10.0/brython_stdlib.js"], function () {
        zzz.create("script", {
            id: "runner",
            type: "text/python"
        }, null, document.body);
        console.out = function () {
            var t = "";
            for (let i of arguments) t += i;
            vscodeConsole.setValue(vscodeConsole.getValue() + t);
        }
        __BRYTHON__.stdout.out = "out";
        zzz.incidence.bind(zzz.get.cls("answer")[0].firstElementChild, "dblclick", (e) => {
            zzz.get.id("runner").innerHTML = vscode.getValue();
            brython({
                debug: 1
            });
        });
    });
}
require.config({
    paths: {
        'vs': 'script/monaco/min/vs'
    }
});
require(["vs/loader"], function () {
    var defaultText = "def init():\n\tprint('Hello World')\n#This is a demo page powered by monaco.\n#You can freely type any code you favor.";
    startMonaco(defaultText, zzz.get.cls("answer")[0]);
    startMonaco("Here is a console", zzz.get.cls("answer")[0], "vscodeConsole", {
        lineNumbers: "off",
        readOnly: true,
        minimap: {
            enabled: false
        }
    });
    startBrython();
});