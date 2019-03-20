function changePageCMS() {
    alert("Comming soon")
}
function changePage() {
    document.location.href = './official-page/editPage.html';
}
function logout() {
    var lg = confirm("ต้องการออกจากระบบ?")
    if(lg){
        document.location.href = './login.html';
    }
}

function generate_table(a) {
    var table = document.getElementById("list");
    console.log(a)
    console.log("check length " + a.data.length)
    for(var i = 0; i< a.data.length;i++){
        console.log("loop pass")
        var newRow = table.insertRow(1)
        
        var id = newRow.insertCell(0)
        var password = newRow.insertCell(1)
        var user_type = newRow.insertCell(2)
        var sex = newRow.insertCell(3)
        var name = newRow.insertCell(4)
        var lastname = newRow.insertCell(5)
        var crud = newRow.insertCell(6)

        id.innerHTML = a.data[i].id
        password.innerHTML = a.data[i].password
        user_type.innerHTML = a.data[i].user_type
        sex.innerHTML = a.data[i].sex
        name.innerHTML = a.data[i].name
        lastname.innerHTML = a.data[i].lastname
        crud.innerHTML = `<button onclick="selectData(this)" class="btn btn-success">Edit</button> <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`;
    }
}
function selectData(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("password").value = selectedRow.cells[1].innerHTML;
    document.getElementById("type").value = selectedRow.cells[2].innerHTML;
    document.getElementById("sex").value = selectedRow.cells[3].innerHTML;
    document.getElementById("name").value = selectedRow.cells[4].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[5].innerHTML;
}

function clearData(){
    document.getElementById("id").value = ""
    document.getElementById("password").value = ""
    document.getElementById("type").value = ""
    document.getElementById("sex").value = ""
    document.getElementById("name").value = ""
    document.getElementById("lastname").value = ""

}
function deleteData(td){
    selectedRow = td.parentElement.parentElement;
    var obj = selectedRow.cells[0].innerHTML;
    console.log("delete data " + obj)
    deleteRow(obj)
}

function checkEmpty(){
    if(document.getElementById("id").value !== ""){
        if(document.getElementById("password").value !== ""){
            if(document.getElementById("type").value !== ""){
                if(document.getElementById("sex").value !== ""){
                    if(document.getElementById("name").value !== ""){
                        if(document.getElementById("lastname").value !== ""){
                            return true
                        }else{
                            return false;
                        }
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}

