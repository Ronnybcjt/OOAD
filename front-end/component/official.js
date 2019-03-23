function changePageCMS() {
    alert("Comming soon")
}
function changePage() {
    document.location.href = './official-page/editPage.html';
}

function changeToBuild() {
    document.location.href = './official-page/editBuild.html';
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
        crud.innerHTML = `<button data-toggle="modal" data-target="#editUser" onclick="selectData(this)" class="btn btn-success">Edit</button> <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`;
    }
}

function generate_table_build(a) {
    var table = document.getElementById("list");
    console.log(a)
    console.log("check length " + a.data.length)
    for(var i = 0; i< a.data.length;i++){
        console.log("loop pass")
        var newRow = table.insertRow(1)
        
        var id = newRow.insertCell(0)
        var nameBuild = newRow.insertCell(1)
        var areaBuild = newRow.insertCell(2)
        var facBuild = newRow.insertCell(3)
        var floorBuild = newRow.insertCell(4)
        var crud = newRow.insertCell(5)

        id.innerHTML = a.data[i].id
        nameBuild.innerHTML = a.data[i].nameBuild
        areaBuild.innerHTML = a.data[i].areaBuild
        facBuild.innerHTML = a.data[i].facBuild
        floorBuild.innerHTML = a.data[i].floorBuild
        crud.innerHTML = `<button data-toggle="modal" data-target="#editUser" onclick="selectBuild(this)" class="btn btn-success">Edit</button> <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`;
    }
}

function selectData(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id-1").value = selectedRow.cells[0].innerHTML;
    document.getElementById("password-1").value = selectedRow.cells[1].innerHTML;
    document.getElementById("type-1").value = selectedRow.cells[2].innerHTML;
    document.getElementById("sex-1").value = selectedRow.cells[3].innerHTML;
    document.getElementById("name-1").value = selectedRow.cells[4].innerHTML;
    document.getElementById("lastname-1").value = selectedRow.cells[5].innerHTML;
}

function clearData(){
    console.log("clear data pass")
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

function deleteDataBuild(td){
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

function checkEmptyBuild(){
    if(document.getElementById("id").value !== ""){
        if(document.getElementById("nameBuild").value !== ""){
            if(document.getElementById("areaBuild").value !== ""){
                if(document.getElementById("facBuild").value !== ""){
                    if(document.getElementById("floorBuild").value !== ""){
                        return true;
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

function selectBuild(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nameBuild").value = selectedRow.cells[1].innerHTML;
    document.getElementById("areaBuild").value = selectedRow.cells[2].innerHTML;
    document.getElementById("facBuild").value = selectedRow.cells[3].innerHTML;
    document.getElementById("floorBuild").value = selectedRow.cells[4].innerHTML;
}

function clearBuild(){
    document.getElementById("id").value = ""
    document.getElementById("nameBuild").value = ""
    document.getElementById("areaBuild").value = ""
    document.getElementById("facBuild").value = ""
    document.getElementById("floorBuild").value = ""

}

