getStudentInfo();
function getStudentInfo() {
    //获取的所有的班级信息
    Ajax({
        url:"http://localhost/project/server/classQueryAll.php",
        success(res){
            /* 存储一个班级数据 */
            sessionStorage.setItem("allClassInfo",res);
            //将班级数据转换成对象
            console.log(res);
            let result = JSON.parse(res)
            //调用渲染班级数据
            //获取body,渲染用户数据
            const tbody = document.querySelector("tbody")
            tbody.innerHTML = "";
            result.forEach(item=>{
                let str = `
                <tr>
                    <td>${item.c_id}</td>
                    <td>${item.c_name}</td>
                    <td><button type="button" class="btn btn-danger btn-sm">删除班级</button></td>
                    <td><button type="button" class="btn btn-info btn-sm">修改班级</button></td>
                    <td><button type="button" class="btn btn-primary btn-sm">添加班级</button></td>
                    <td><button type="button"  data-bs-toggle="modal" data-bs-target="#classQuery" class="btn btn-success btn-sm" data-o='query' data-id='${item.c_id}'>查询班级学生</button></td>
                </tr>
                `
                tbody.innerHTML += str;
            })
        }
    })
    //获取所有的学生信息
    Ajax({
        url: "http://localhost/project/server/queryStudentAll.php",
        success(res) {
            //将获取到的所有数据存储到sessionStorage里面去
            sessionStorage.setItem("allStudentInfo", res);

            res = JSON.parse(res)
            //页面一出来
            /* 设置当前页 */
            sessionStorage.setItem("pageCurrent", 1);
            /* 总共有多少页 每一页显示10条*/
            //总共的页面
            const pageCount = Math.ceil(res.length / 10)
            sessionStorage.setItem("pageCount", pageCount)

            /* 一页数据显示10条 */
            let result = res.slice(0, 10)

            /* 调用并渲染数据 */
            renderStudentInfo(result);
        }
    })
}
/* 实现删除和修改 */
deleteOrUpdate()
function deleteOrUpdate() {
    const tbody = document.querySelector("tbody")
    tbody.addEventListener("click", function (e) {

        e = e || window.event;
        /* 删除操作 */
        if (e.target.dataset.o == 'del') {
            //防止误删
            const flag = window.confirm("您确定要进行删除吗?")
            if (flag) {
                Ajax({
                    url: "http://localhost/project/server/studentDeleteById.php",
                    data: { id: e.target.dataset.id },
                    success(res) {
                        location.reload();
                    }
                })
            }
        }
        /* 修改操作 */
        if (e.target.dataset.o == 'update') {
            //先编辑,再修改
            //编辑就是获取你点击的那个id,那个学生信息
            Ajax({
                url: "http://localhost/project/server/studentQueryOne.php",
                data: { id: e.target.dataset.id },
                success(res) {
                    res = JSON.parse(res)
                    let username = document.getElementById("updateStudentUsername")
                    let name = document.getElementById("updateStudentName")
                    let password = document.getElementById("updateStudentPassword")
                    let age = document.getElementById("updateStudentAge")
                    let classId = document.getElementById("updateStudentClassId")
                    let updateStudentGender = document.getElementById("updateStudentGender")
                    let id = document.getElementById("updateStudentId")
                    username.value = res.s_username
                    name.value = res.s_name
                    password.value = res.s_password
                    age.value = res.s_age
                    classId.value = res.s_classId
                    updateStudentGender.value = res.s_gender
                    id.value = res.s_id
                }
            })
        }
    })
}
/* 实现添加用户信息 */
function addStudentInfo() {
    let username = document.getElementById("addStudentUsername").value
    let name = document.getElementById("addStudentName").value
    let password = document.getElementById("addStudentPassword").value
    let age = document.getElementById("addStudentAge").value
    let classId = document.getElementById("addStudentClassId").value
    let gender = document.querySelectorAll(".addStudentGender")
    if (gender[0].checked) {
        gender = '男'
    } else {
        gender = "女"
    }
    /* 非空判断 */
    if (!username || !name || !password || !age || !classId) return window.alert("请输入完整的数据")

    Ajax({
        url: "http://localhost/project/server/studentAdd.php",
        type: "POST",
        data: { username, password, name, gender, age, classId },
        success(res) {
            location.reload();
        }
    })
}
/* 修改学生信息 */
function updateStudentInfo() {
    let username = document.getElementById("updateStudentUsername").value
    let name = document.getElementById("updateStudentName").value
    let password = document.getElementById("updateStudentPassword").value
    let age = document.getElementById("updateStudentAge").value
    let classId = document.getElementById("updateStudentClassId").value
    let gender = document.getElementById("updateStudentGender").value
    let id = document.getElementById("updateStudentId").value
    Ajax({
        url: "http://localhost/project/server/studentUpdate.php",
        type: "POST",
        data: { username, password, name, gender, age, classId, id },
        success(res) {
            // console.log(res);
            location.reload();
        }
    })
}
/* 首页 */
function firstPage() {
    //设置当前页为第一页
    sessionStorage.setItem("pageCurrent", 1)
    //获取所有的学生信息
    let result = JSON.parse(sessionStorage.getItem("allStudentInfo"))
    /* 一页数据显示10条 */
    result = result.slice(0, 10)
    /* 调用,并渲染数据 */
    renderStudentInfo(result);
}
// 上一页
function upPage() {
    // 当前页-1 , 要获取当前页
    let pageCurrent = +sessionStorage.getItem("pageCurrent") - 1
    //获取所有的学生信息
    let allStudentInfo = JSON.parse(sessionStorage.getItem("allStudentInfo"))

    //如果当前<1,那么当前页就是第一页
    if (pageCurrent < 1) {
        pageCurrent = 1;
    }

    //存储当前页
    sessionStorage.setItem("pageCurrent", pageCurrent)

    //计算上一页的学习信息
    // allStudentInfo.slice((1-1)*10,1*10);//0,10
    // allStudentInfo.slice((2-1)*10,2*10);//10,20
    // allStudentInfo.slice((3-1)*10,3*10);//20,30
    let result = allStudentInfo.slice((pageCurrent - 1) * 10, pageCurrent * 10)
    //渲染数据
    renderStudentInfo(result);
}
/* 下一页 */
function downPage() {
    // 当前页-1 , 要获取当前页
    let pageCurrent = +sessionStorage.getItem("pageCurrent") + 1
    //获取所有的学生信息
    let allStudentInfo = JSON.parse(sessionStorage.getItem("allStudentInfo"))
    //获取最后一页
    let pageCount = +sessionStorage.getItem("pageCount")
    //如果当前大于最后一页,那么当前页就是等于最后一页
    if (pageCurrent > pageCount) {
        pageCurrent = pageCount;
    }

    //存储当前页
    sessionStorage.setItem("pageCurrent", pageCurrent)

    //计算上一页的学习信息
    // allStudentInfo.slice((1-1)*10,1*10);//0,10
    // allStudentInfo.slice((2-1)*10,2*10);//10,20
    // allStudentInfo.slice((3-1)*10,3*10);//20,30
    let result = allStudentInfo.slice((pageCurrent - 1) * 10, pageCurrent * 10)
    //渲染数据
    renderStudentInfo(result);
}
/* 尾页 */
function lastPage() {
    //获取最后的一页
    let pageCount = +sessionStorage.getItem("pageCount")
    //当前页就是尾页
    sessionStorage.setItem("pageCurrent", pageCount)
    //所有的学生信息
    let allStudentInfo = JSON.parse(sessionStorage.getItem("allStudentInfo"))
    // allStudentInfo.slice(0,10)
    // allStudentInfo.slice(10,20)
    // allStudentInfo.slice(20,30)
    let result = allStudentInfo.slice((pageCount - 1) * 10);
    /* 调用并渲染数据 */
    renderStudentInfo(result);
}

/* 渲染的数据 */
function renderStudentInfo(result) {
    /* 显示数据的位置 */
    const tbody = document.querySelector("tbody")
    /* 在添加数据之前,现将数据给清空一遍 */
    tbody.innerHTML = ""
    //渲染数据
    result.forEach(item => {
        let str = `
        <tr>
            <td>${item.s_id}</td>
            <td>${item.s_name}</td>
            <td>${item.s_username}</td>
            <td>${item.s_age}</td>
            <td>${item.c_name}</td>
            <td>${item.s_gender}</td>
            <td>
            <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#studentUpdate" onclick='renderStudentAndClass()' data-o='update' data-id='${item.s_id}'>修改</button>
            <button type="button" class="btn btn-danger btn-sm" data-o='del' data-id='${item.s_id}'>删除</button>
            </td>
        </tr>
        `
        tbody.innerHTML += str;
    })
}

/* 根据性别查询学生信息 */
function getGender(gender){
    Ajax({
        url: "http://localhost/project/server/studentQueryGender.php",
        data:{gender},
        success(res) {
            //覆盖数据
            sessionStorage.setItem("allStudentInfo",res)
            //覆盖总页数
            sessionStorage.setItem("pageCount",Math.ceil(JSON.parse(res).length/10))
            //转数据,渲染数据
            let result = JSON.parse(res).slice(0,10)
            renderStudentInfo(result);
        }
    })
}

/* 模糊查询 */
function getLike(){
    let name = document.getElementById("nameLike").value
    //非空判断
    if(name.trim().length == 0){
        return window.alert("大哥,输入一点东西!")
    }
    //发送ajax
    Ajax({
        url: "http://localhost/project/server/queryStudentLike.php",
        data:{name},
        success(res) {
            //覆盖数据
            sessionStorage.setItem("allStudentInfo",res)
            //覆盖总页数
            sessionStorage.setItem("pageCount",Math.ceil(JSON.parse(res).length/10))
            //转数据,渲染数据
            let result = JSON.parse(res).slice(0,10)
            renderStudentInfo(result);
        }
    })
}


function renderStudentAndClass(){
    //获取数据
    let allClassInfo = JSON.parse(sessionStorage.getItem("allClassInfo"))
    //获取元素
    let updateStudentClassId = document.getElementById("updateStudentClassId")
    updateStudentClassId.innerHTML = "";

    allClassInfo.forEach(item=>{
        let option = `<option value="${item.c_id}">${item.c_name}</option>`
        updateStudentClassId.innerHTML += option
    })
}