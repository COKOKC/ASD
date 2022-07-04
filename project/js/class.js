/* 获取所有的班级数据 */
getClassInfo()
function getClassInfo(){
    Ajax({
        url:"http://localhost/project/server/classQueryAll.php",
        success(res){
            /* 存储一个班级数据 */
            sessionStorage.setItem("allClassInfo",res);
            //将班级数据转换成对象
            let result = JSON.parse(res)
            //调用渲染班级数据
            renderClassInfo(result)
        }
    })
}
function renderClassInfo(result){
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

/* 查询班级对应的学生 */
// 使用事件委派来实现
deleteOrUpdateOrAddOrQueryOne();
function deleteOrUpdateOrAddOrQueryOne(){
    const tbody = document.querySelector("tbody")
    /* 事件的委派,是爹来触发的 */
    tbody.onclick = function(e){
        e = e || window.event
        // console.log(e.target.dataset.o,e.target.dataset.id);
        if(e.target.dataset.o == 'query'){
            Ajax({
                url:"http://localhost/project/server/classQueryAndStudent.php",
                data:{id:e.target.dataset.id},
                success(res){
                    const ClassAndStudent = document.getElementById("ClassAndStudent")
                    ClassAndStudent.innerHTML = ""
                    JSON.parse(res).forEach(item=>{
                        let str = `
                        <tr>
                            <td>${item.s_username}</td>
                            <td>${item.s_name}</td>
                            <td>${item.s_gender}</td>
                            <td>${item.s_age}</td>
                        </tr>
                        `
                        ClassAndStudent.innerHTML += str;
                    })
                }
            })
        }
    }
}