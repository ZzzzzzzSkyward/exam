- [x] 本文档为前端实现。

已有实现（github上找的）：https://exam.yfhl.net/

已部署：https://www.zzzs.ml/exam/

# 1.登录页面

要求在readme.md中已写清楚。

补充：

1. 增加一个进度条，能够显示登录状态是否异常
2. 向iaaa申请接口
3. 考虑向oj申请接口

# 2.主页

不确定内容。

# 3.考试页

该页面应包括所有试题。

暂不确定是否将题目页像oj一样独立出来，还是像中国大学慕课一样连成一张试卷。

# 4.后台页

该页面应能够允许有权限的人对班级、学生、成绩、题目、试卷、回答进行批量增加、删除、查询、修改，以及上传与下载excel文档（可以简单地实现为csv格式）。

该页面应允许权限的赋予与收回。

# 5.性能

### 离线缓存

把文件缓存到浏览器，省得浪费服务器流量。

仅查询是否有最新更新，如果有则下载并重启。

### 从各种地方获取更新

更新状态时，应当用浏览器的API通知其他页面。

打开新页面时，应当从服务器获取最新状态。

重启页面时，也应如是。

### 预读取

有必要的情况下，考试开始前预读取试题（可以使用某种加密方法，在考试开始时公布密钥）。

### 本地化

有必要的情况下，将一部分服务器的服务加载到浏览器上执行。

对于vs code，可能必须使用本地的服务器，有待研究。

# 6.维护

设计一个专用的console，只显示异常信息。



# 前端的工作

# 1.业务逻辑设计（写算法）

设计纯前端的业务逻辑，如前所述

与后端一起设计前后端接口

# 2.UI设计（画画）

必须支持的技术：HTML 5+CSS 3+ECMA Script 6

要求实现到具体代码

最简单的技术：HTML 5+CSS 3，例如HTML 5的`<audio>` `<video>` `<progress>`元素自带了API，例如CSS 3的`transform`支持三维仿射变换（用一个矩阵实现），`transition`支持补间动画，`animation`支持关键帧动画，`filter`支持模糊、色相、对比度、明度等。

补充：CSS 3无法实现的复杂效果可以用JS实现

其他：HTML元素`<svg>`用于绘制矢量图、文本、渐变、路径，HTML元素`<canvas>`（要用JS写）用于绘制位图、逐帧播放动画、处理图片。

不支持更难的技术。

# 3.产品研发（敲代码）

将算法与UI落实到代码本身

1. 如果框架提供了API，就用它
2. 否则，如果H5+CSS3+ES6提供了API，就用它
3. 否则，如果ES6能够实现该功能，就自己写一个函数
4. 否则，需要借助其他手段解决问题



# 需求的实现

- [ ] 单项选择题

```javascript
question={
    title:"",
    content:null,
    choice:["A","B","C","D"],
    answer:0
}
choice={
    contentType:"text"|"latex"|"image"|"HTMLElement"
    content:""
}
puzzle={
    className:"",
    question:{},
    id:"",
    student_choice:-1    
}
```

- [ ] 填空题

```javascript
question={
    title:"",
    content:null,
    answer:""
}
puzzle.student_answer=""
```



- [ ] 文件题

```javascript
question={
	title:"",
    content:{
        timeLimit:"",
        memoryLimit:"",
        description:""
    },
    hint:"",
    sampleInput:"",
    sampleOutput:"",
    codeArea:<HTMLElement>
}
```

- [ ] 自动判分与人工判分

```javascript
score={
    type:"match"|"RegExp"|"function",
    scoringMethod:function(studentAnswer,answer,type,func){},
    string:"",
    regexp:"",
    func:null
}
```
- [ ] 管理题目

```javascript
function add(){}
function del(){}
function modify(){}
function query(){}
function importFromExcel(){}
function exportToExcel(){}
```

- [ ] 管理试卷

```javascript
exam={
    title:"",
    content:[
        questions
    ],
    time:{
        start:0,
        stop:0,
        duration:0
    }
}
function add(){}
function del(){}
function modify(){}
function query(){}
function importFromExcel(){}
function exportToExcel(){}
```



- [ ] 管理学生

```javascript
function add(){}
function del(){}
function modify(){}
function query(){}
function importFromExcel(){}
function exportToExcel(){}
```



- [ ] 管理老师

```javascript
function add(){}
function del(){}
function modify(){}
function query(){}
function importFromExcel(){}
function exportToExcel(){}
```



- [ ] 权限系统

```javascript
function grant(){}
function revoke(){}
function login(){}
function logout(){}
function getToken(){}//像树洞一样用于长期维持登录状态
```



# 高级需求（选做）

- [ ] 代码高亮
- [ ] 自动补全
- [ ] 连接本地服务器，或远程服务器debug
