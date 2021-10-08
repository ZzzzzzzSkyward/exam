function logout(e) {
    var e = e || this.event || window.event;
    e.stopPropagation();
    e.preventDefault();
    if (window.msg) return nologout(e);
    zzz.anim.set(zzz.get.id("main"), {
        filter: "blur(10px)"
    });
    window.msg = zzz.create("div", {
        innerHTML: "<div class='flex btn center'>你确定要注销吗？</div>",
        id: "logout",
        className: "flex",
        onclick: "logout2()"
    }, {
        fontSize: "1em",
        left: "40%",
        top: "40%",
        right: "40%",
        bottom: "40%",
        position: "fixed",
        background: "var(--pku-dark)",
        boxShadow: "0 0 3px black",
        color: "white",
        textAlign: "center"
    }, document.body);
    zzz.incidence.bind(zzz.get.id("main"), "click", nologout);
    return false;
}

function nologout(e) {
    console.log(e);
    e.preventDefault();
    e = zzz.incidence.interpret(e);
    if (e.target.id === "logout") return false;
    zzz.anim.set(zzz.get.id("main"), {
        filter: "blur(0)"
    });
    if (msg && (!zzz.incidence.erase(zzz.get.id("main"), "click", nologout)) && document.body.removeChild(msg)) msg = null;
    return false;
}

function logout2() {
    zzz.storage.del("status");
    window.user_status = {};
    window.open("index.html", "_self");
}


function login() {
    var original_url = "https://iaaa.pku.edu.cn/iaaa/oauth.jsp?appID=syllabus&appName=%E5%AD%A6%E7%94%9F%E9%80%89%E8%AF%BE%E7%B3%BB%E7%BB%9F&redirectUrl=http://elective.pku.edu.cn:80/elective2008/ssoLogin.do";
    var user_name = zzz.get("input")[0],
        password = zzz.get("input")[1];
    if (!user_name.value) user_name.setAttribute("placeholder", "请填写学号");
    else if (!password.value) password.setAttribute("placeholder", "请输入密码");
    else {
        var token_url = "https://iaaa.pku.edu.cn/iaaa/oauthlogin.do";
        var redirect_url = "main.html";
        var res = zzz.fetch.ajax({
            url: token_url,
            method: "POST",
            data: "appid=syllabus&userName=" + user_name.value + "&password=" + password.value + "&redirUrl=" + zzz.code.path.encode("http://elective.pku.edu.cn:80/elective2008/ssoLogin.do"),
            header: {
                "Host": "iaaa.pku.edu.cn",
                "Origin": "https://iaaa.pku.edu.cn",
                "Referer": "https://iaaa.pku.edu.cn/iaaa/oauth.jsp?appID=syllabus&appName=%E5%AD%A6%E7%94%9F%E9%80%89%E8%AF%BE%E7%B3%BB%E7%BB%9F&redirectUrl=http://elective.pku.edu.cn:80/elective2008/ssoLogin.do",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            async: false
        }).responseText;
        var js = JSON.parse(res);
        console.log("fetch=", js);
        if (!js.token) {
            password.value = "";
            password.setAttribute("placeholder", js.msg || "发生了其他错误");
            return;
        }
        var status = {
            name: user_name.value,
            token: js.token,
            time: zzz.time.now(),
            other_information_from_server: undefined
        };
        zzz.storage.json("status", status);
        location.replace(redirect_url);
    }
}

function init() {
    var status = zzz.storage.json("status");
    if (status) {
        window.user_status = status;
    }
    var button = zzz.get("#user_name");
    if (window.user_status) {
        button.innerText = user_status.name;
        zzz.incidence.bind(button, "click", function (e) {
            logout(e);
        });
    } else {
        zzz.incidence.bind(button, "click", function (e) {
            var old_panel = zzz.get("#login_panel");
            if (old_panel) {
                old_panel.className = "fasttrans " + (old_panel.className.indexOf("upandaway") === -1 ? "upandaway" : "");
                return;
            }
            var iframe = `
            <form id="f" class="flexv center" onsubmit="return false;">
        <div style="position: relative;"><p>学号</p><input type="text"><a contenteditable="false" style="display: inline;background-color: #7c0909;position: absolute;color: white;height: 1.5em;line-height:1.5em;width: 1.5em;right:0;text-align: center;" onclick="zzz.get.tag('input')[0].value='';">×</a></div>
        <div><p>密码</p><input type="password"></div>
        <div style='width:100%'>
            <input type="button" value="登录"
                style="background: #7c0909;border: 0px;margin-top: 0.5em;padding: 5px;right: 0;display: block;position: relative;color: white;cursor: pointer;width:100%;"
                onclick="login()">
        </div>
    </form>`;
            let panel = zzz.create("div", {
                id: "login_panel",
                className: "fasttrans upandaway",
                innerHTML: iframe
            }, {
                position: "absolute",
                right: 0,
                top: '3em',
                backgroundColor: 'rgba(104, 0, 0, 0.44)',
                opacity: 0.9,
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
            }, zzz.get("#main"));
            setTimeout(function () {
                panel.className = 'fasttrans';
            }, 10);
        });
    }
}
init();
function bind_events(){
	var helps=zzz.get.cls("btn flex center");
	var help=helps[helps.length-1];
	zzz.incidence.bind(help,"click",(e)=>{if(window.md)return;zzz.fetch.js("https://cdn.jsdelivr.net/npm/marked/marked.min.js");let md=zzz.fetch.ajax({url:"front-edge-function.md",method:"get",async:false}).responseText;let h=zzz.create("div",{className:"flexv"},{position:'absolute',backgroundColor:"rgba(255,255,255,0.8)"},document.body);setTimeout(()=>{h.innerHTML=marked(md);window.md=1;},1000);});
}
bind_events();