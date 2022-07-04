
// // 模糊查询
function booksQueryClass() {
    const name = document.querySelector("#booksVagueQuery").value
    // tbody.innerHTML=""

    // var name=booksVagueQuery
        Ajax({
            url: "../server/booksQueryLike.php",
            data:{name},
            success(res) {
                // location.reload();
                sessionStorage.setItem("allClassInfo", res);
                //将班级数据转换成对象
                let result = JSON.parse(res)
                //调用渲染班级数据
                renderClassInfo(result)
            }
        })

}
// booksQueryclass();
// let booksQuery = document.getElementById("booksQuery")
// booksQuery.onclick = function () {
//     // conlose.log(document.getElementById("booksQuery"))
//     console.log(document.getElementById("booksQuery"))
// // }

