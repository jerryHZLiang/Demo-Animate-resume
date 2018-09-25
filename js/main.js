/*把code写到#code和style标签里 */
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0;
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML =
            Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown, fn){
    let n = 0;
    let domPaper = document.querySelector('#paper > .content')
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML =markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

var result = `/*
* 面试官你好, 我是何镇良
* 我将以动画的方式介绍我自己
* 首先准备一些样式
*/

*{
    transition: all 1s;
}
html{
    background: rgb(222,222,222);
    font-size: 16px;
}
#code{
    border: 1px solid red;
    padding: 16px;
}

/*
 *我需要一些代码高亮
 */

.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/*接下来我来介绍一下自己*/
/*我需要一张白纸*/
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px
}

#paper > .content{
    background: white;
    height: 100%;
    width: 100%;
}
`
var result2 = `
#paper{
}
/*接下来把 Markdown 变成 HTML - marked.js*/

/*接下来给html加样式*/
`

var md = `

# 自我介绍
我叫何镇良
xxxx年x月

xxx学校软件工程专业毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍
1. xxx轮播
2. xxx简历
3. 画板

联系方式:
微信: xxx
`
writeCode('', result, () => {
    creatPapper(() => {
        console.log('papper 有了')
    //     writeCode(result, result2, ()=>{
    //         writeMarkdown(md, ()=>{
    //             markdownToHTML(()=>{
                
    //             })
    //         })
    //     })
     })
})


function creatPapper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
