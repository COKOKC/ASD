/* 获取所有借阅数据 */
booksBoorwingClass()
function booksBoorwingClass() {
    Ajax({
        url: "../server/booksBoorwingClass.php",
        success(res) {
            /* 存储一个借阅数据 */
            sessionStorage.setItem("allClassInfo", res);
            //将班级数据转换成对象
            let result = JSON.parse(res)
            //调用渲染班级数据
            renderClassInfo(result)
        }

    })
}
function renderClassInfo(result) {
    //获取body,渲染用户数据
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = "";
    result.forEach(item => {
        let str = `
        <tr>
            <td>${item.card}</td>
            <td>${item.bookname}</td>
            <td>${item.adminname}</td>
            <td>${item.username}</td>
            <td>${item.begintime}</td>
            <td>${item.endtime}</td>
            <td>
            <button type="button" data-bs-target="#classQuery" class="btn btn-default btn-sm" data-o='booksTime' data-id='${item.hid}'>归还</button>
            <button type="button" data-bs-target="#classQuery" class="btn btn-default btn-sm" data-o='booksDel' data-id='${item.hid}'>删除</button>
            <button type="button" data-bs-target="#classQuery" class="btn btn-default btn-sm" data-o='booksUpdate' data-id='${item.hid}'data-toggle="modal" data-target="#booksUpdateClass">修改</button>
            </td>
        </tr>
        `
        tbody.innerHTML += str;
    })

}
booksDate()
function booksDate() {
    const tbody = document.querySelector("tbody")

    tbody.addEventListener("click", function (e) {

        e = e || window.event;
        /* 删除操作 */
        if (e.target.dataset.o == 'booksDel') {
            //防止误删
            const flag = window.confirm("您确定要进行删除吗?")
            if (flag) {
                Ajax({
                    url: "../server/booksDeleteById.php",
                    data: { id: e.target.dataset.id },
                    success(res) {
                        // let result = JSON.parse(res)     
                        alert(res)
                        location.reload();
                    }
                })
            }
        }

        // 归还操作
        if (e.target.dataset.o == 'booksTime') {
            // 确认归还
            const flag = window.confirm("您确定要进行归还吗?")
            var t = new Date();//获取到的就是当前时间
            endtime = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate();
            if (flag) {
                Ajax({
                    url: "../server/booksEndtime.php",
                    data: { id: e.target.dataset.id, endtime },
                    success(res) {
                        // let result = JSON.parse(res)   
                        location.reload();
                        alert(res)

                    }
                })
            }
        }

        /*修改操作 */
        if (e.target.dataset.o == 'booksUpdate') {
            //编辑就是获取你点击的那个id,那个学生信息
            Ajax({
                url: "../server/booksQuery.php",
                data: { id: e.target.dataset.id },
                success(res) {
                    res = JSON.parse(res)
                    let updatecard = document.getElementById("updatecard")
                    let updatebookname = document.getElementById("updatebookname")
                    let updateadminname = document.getElementById("updateadminname")
                    let updateusername = document.getElementById("updateusername")
                    let updatebegintime = document.getElementById("updatebegintime")
                    let updateendtime = document.getElementById("updateendtime")
                    let id = document.getElementById("updateBooksId")
                    updatecard.value = res.card
                    updatebookname.value = res.bookname
                    updateadminname.value = res.adminname
                    updateusername.value = res.username
                    updatebegintime.value = res.begintime
                    updateendtime.value = res.endtime
                    id.value = res.hid
                    console.log(updatebegintime.value)
                }
            })
        }
    })
}
// // 模糊查询
function booksQueryClass() {
    const name = document.querySelector("#booksVagueQuery").value
    Ajax({
        url: "../server/booksQueryLike.php",
        data: { name },
        success(res) {
            // location.reload();
            sessionStorage.setItem("booksClassInfo", res);
            //将班级数据转换成对象
            let result = JSON.parse(res)
            //调用渲染班级数据
            renderClassInfo(result)
        }
    })
}
/* 返回一开始的页面 */
const fanHui = document.querySelector("#fanHui")
fanHui.addEventListener("click", function () {
    let booksVagueQuery = document.querySelector("#booksVagueQuery")
    booksBoorwingClass();
    // 清空文本框里的文字
    booksVagueQuery.value = ""

})
/* 借阅 */
function addbooksInfo() {
    let card = document.getElementById("card").value
    let bookname = document.getElementById("bookname").value
    let adminname = document.getElementById("adminname").value
    let username = document.getElementById("username").value
    let begintime = document.getElementById("begintime").value

    /* 非空判断 */
    if (!username || !card || !bookname || !adminname || !begintime) return window.alert("请输入完整的数据")
    // 发送ajax
    Ajax({
        url: "../server/booksAdd.php",
        type: "POST",
        data: { card, bookname, adminname, username, begintime },
        success(res) {
            location.reload();
        }
    })
}
// 修改借阅信息，
function updateBooksInfo() {
    let card = document.getElementById("updatecard").value
    let bookname = document.getElementById("updatebookname").value
    let adminname = document.getElementById("updateadminname").value
    let username = document.getElementById("updateusername").value
    let begintime = document.getElementById("updatebegintime").value
    let endtime = document.getElementById("updateendtime").value
    let id = document.getElementById("updateBooksId").value
    Ajax({
        url: "../server/booksUpdate.php",
        type: "POST",
        data: { card, bookname, adminname, username, begintime, endtime, id },
        success(res) {
            // console.log(res);
            location.reload();
        }
    })
}
