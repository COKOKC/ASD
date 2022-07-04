// 渲染数据
library();
let tbody = document.querySelector("tbody");
function library() {
    Ajax({
        url: "http://localhost/php/c_tushuCx.php",
        success(res) {

            
            // 存储l
            sessionStorage.setItem("k1", res);
            res = JSON.parse(res)
            // 一页显示10条数据
            // console.log(res);
            // let result = res.slice(0, 10)
            tbody.innerHTML = "";
            res.forEach(item => {
                let str = `
                <tr>
                    <td>${item.bid}</td>
                    <td>${item.name}</td>
                    <td>${item.card}</td>
                    <td>${item.autho}</td>
                    <td>${item.press}</td>
                    <td>${item.t_name}</td>
                    <td>
                    <button type="button" class="btn default btn-sm" data-bs-toggle="modal" data-bs-target="#studentUpdate"  data-o='update' data-id='${item.bid}'>修改</button>
                    <button type="button" class="btn default btn-sm" data-o='del' data-id='${item.bid}'>删除</button>
                    </td>
                </tr>
                `
                tbody.innerHTML += str;
            })

        }
    })
}

// 删除
delibrary()
function delibrary() {
    let tbody = document.querySelector('tbody')
    tbody.addEventListener('click', function (e) {
        e = e || window.event;
        if (e.target.dataset.o === 'del') {
            // 防止误删
            let flag = window.confirm('您确定要删除这本书么？')
            if (flag) {
                Ajax({
                    url: "http://localhost/php/c_detushuCx.php",
                    data: { id: e.target.dataset.id },
                    success(res) {
                        console.log(res)
                        location.reload(res)

                    }
                })
            }
        }
        // 修改功能
        if (e.target.dataset.o == 'update') {
            // console.log(target)
            Ajax({
                url: "../php/c_xiuxiutushuCx.php",
                data: { id: e.target.dataset.id },
                success(res) {
                    res = JSON.parse(res)
                    console.log(res)
                    let username = document.getElementById("updateName")
                    let Bid = document.getElementById("updateBid")
                    let Card = document.getElementById("updateCard")
                    let Autho = document.getElementById("updateAutho")
                    let Press = document.getElementById("updatePress")
                    let Type = document.getElementById("updateType")
                    username.value = res.name
                    Card.value = res.card
                    Autho.value = res.autho
                    Press.value = res.press
                    Type.value = res.t_name
                    Bid.value = res.bid
                    console.log(res.name, res.card, res.autho, res.press, res.t_name, res.bid);
                }
            })
        }
    })
}
// 实现添加功能
function addStudentInfo() {
    let addName = document.getElementById('addName').value;
    let addCard = document.getElementById('addCard').value;
    let addAutho = document.getElementById('addAutho').value;
    let addPress = document.getElementById('addPress').value;
    let addType = document.getElementById('addType').value;
    if (!addName || !addCard || !addAutho || !addPress || !addType) return window.alert("请输入完整的数据")
    Ajax({
        url: 'http://localhost/php/c_tianjiatushuCx.php',
        type: 'POST',
        data: { addName, addCard, addAutho, addPress, addType },
        success(res) {
            location.reload();
            // console.log(addName, addCard, addAutho, addPress, addType);
        }
    })
}

// 修改图书信息
function updateStudentInfo() {
    let username = document.getElementById("updateName").value
    let Card = document.getElementById("updateCard").value
    let Autho = document.getElementById("updateAutho").value
    let Press = document.getElementById("updatePress").value
    let Type = document.getElementById("updateType").value
    let Bid = document.getElementById("updateBid").value
    Ajax({
        url: '../php/c_xiugaitushuCx.php',
        type: 'POST',
        data: { username, Card, Autho, Press, Type, Bid },
        success(res) {
            location.reload();
            // console.log(res)
            // console.log(username, Card, Autho, Press, Type, Bid);
        }
    })
}



// 查询图书信息
function getLike() {
    let name = document.getElementById("nameLike").value
    if (name.trim().length == 0) {
        return window.alert('请输入书籍名！')
    }
    Ajax({
        url: "../php/c_chaxuntushuCx.php",
        data: {name},
        success(res) {
            // 覆盖数据
            sessionStorage.setItem("g1", res);
            // 覆盖总页数
            // sessionStorage.setItem("item", Math.ceil(JSON.parse(res).length / 10));
            // 转数据，渲染数据
            let item = JSON.parse(res);
            // console.log(item);
            let str = `
            <tr>
                <td>${item[0].bid}</td>
                <td>${item[0].name}</td>
                <td>${item[0].card}</td>
                <td>${item[0].autho}</td>
                <td>${item[0].press}</td>
                <td>${item[0].t_name}</td>
                <td>
                <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#studentUpdate" onclick="Xgts()"  data-o='update' data-id='${item.bid}'>修改</button>
                <button type="button" class="btn btn-danger btn-sm" data-o='del' data-id='${item.bid}'>删除</button>
                </td>
            </tr>
            `
            tbody.innerHTML = str;   
            console.log(item[0].bid,item[0].name,item[0].card,item[0].autho,item[0].press,item[0].t_name);
        }
      
    })  
}






