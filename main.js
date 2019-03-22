var keys = {
    0:{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    1:{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    2:{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    length: 3
}

var hash = {
    q:'qq.com',
    w:'weibo.com',
    e:'ele.me',
    r:undefined,
    t:'tudou.com',
    y:'youtube.com',
    u:'youku.com',
    i:'iqiyi.com',
    a:'acfun.cn',
    z:'zhihu.com',
    b:'bilibili.com',
}

var hashInlocalstouage = setlocalstouage('click')
    if(hashInlocalstouage){
        hash = hashInlocalstouage
    }

var index = 0
while(index < keys['length']){
    var div1 = document.createElement('div')//创建<div>
    main1.appendChild(div1)//<main>下面添加<div>
    var index2 = 0
    var row = keys[index]
    while (index2 < row['length']) {
        var kbd1 = document.createElement('kbd') //创建<kbd>
        div1.appendChild(kbd1) //<div>下面添加<kbd>
        kbd1.id = row[index2]
        kbd1.className = 'kbd'


        var span1 = document.createElement('span')
        kbd1.appendChild(span1)
        span1.textContent = row[index2] //<span>内容

        var button1 = document.createElement('button')
        kbd1.appendChild(button1)
        button1.textContent = '编辑'
        button1.id = row[index2] //<button>ID

        button1.onclick = function(click){
            console.log(click)
            var key1 = click['target']
            var img2 = key1.nextSibling
            var key2 = key1['id']
            var x = prompt('请输入网址')
            if (x !== null) {
                hash[key2] = x
                localStorage.setItem('click', JSON.stringify(hash))
                img2.src = 'http://www.' + x + '/favicon.ico'
                img2.onerror = function(error) {
                error.target.src = './img/error.png'
                }
            }
        } 

        if (hash[row[index2]]) {
            var img1 = document.createElement('img')
            kbd1.appendChild(img1)
            img1.src = 'http://www.' + hash[row[index2]] + '/favicon.ico'}
        img1.onerror = function(error) {
            error.target.src = './img/error.png'}

        index2 = index2 + 1
    }
    index = index + 1
}

let nkbds = document.getElementsByClassName('kbd')
for(let n=0; n<nkbds.length; n++){
    nkbds[n].onclick = function(cl) { // 鼠标按键事件
        var cl22 = cl.currentTarget.id// cl.currentTarget 我们监听的元素
        var website = hash[cl22]
        window.open('http://www.'+website, '_blank')
    }
    nkbds[n].onkeypress = function(keybd){ // 键盘按键事件
        var key = keybd['key'] //
        var website = hash[key] 
        window.open('http://www.'+website, '_blank')//新窗口打开
    }    
}

function setlocalstouage(name) {
    JSON.parse(localStorage.getItem(name) || 'null')
}