/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
function changePageCMS() {
  alert('Comming soon')
}
function changePage() {
  document.location.href = './official-page/editPage.html'
}

function changeToBuild() {
  document.location.href = './official-page/editBuild.html'
}

function logout() {
  var lg = confirm('ต้องการออกจากระบบ?')
  if (lg) {
    document.location.href = './login.html'
  }
}

function generate_table(a) {
  var table = document.getElementById('list')
  console.log(a)
  console.log('check length ' + a.data.length)
  for (var i = 0; i < a.data.length; i++) {
    console.log('loop pass')
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
    crud.innerHTML = `<button data-toggle="modal" data-target="#editUser" onclick="selectData(this)" class="btn btn-success">Edit</button> <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`
  }
}

function generate_table_exam(a) {
  var table = document.getElementById('list')
  console.log(a)
  console.log('check length ' + a.data.length)
  for (var i = 0; i < a.data.length; i++) {
    console.log('loop pass')
    var newRow = table.insertRow(1)

    var id = newRow.insertCell(0)
    var className = newRow.insertCell(1)
    var room = newRow.insertCell(2)
    var group = newRow.insertCell(3)
    var date = newRow.insertCell(4)
    var startTime = newRow.insertCell(5)
    var endTime = newRow.insertCell(6)
    var crud = newRow.insertCell(7)

    id.innerHTML = a.data[i]._id
    className.innerHTML = a.data[i].className
    room.innerHTML = a.data[i].room
    group.innerHTML = a.data[i].group
    date.innerHTML = a.data[i].date
    startTime.innerHTML = a.data[i].startTime
    endTime.innerHTML = a.data[i].endTime
    crud.innerHTML = `<button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`
  }
}

function generate_table_class(a) {
  var table = document.getElementById('list')
  console.log(a)
  console.log('check length ' + a.data.length)
  for (var i = 0; i < a.data.length; i++) {
    console.log('loop pass')
    var newRow = table.insertRow(1)

    var id = newRow.insertCell(0)
    var className = newRow.insertCell(1)
    var classID = newRow.insertCell(2)
    var teacher = newRow.insertCell(3)
    var group = newRow.insertCell(4)
    var crud = newRow.insertCell(5)

    id.innerHTML = a.data[i]._id
    className.innerHTML = a.data[i].className
    classID.innerHTML = a.data[i].classID
    teacher.innerHTML = a.data[i].teacher
    group.innerHTML = a.data[i].group
    crud.innerHTML = `<button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`
  }
}

function selectClass(td) {
  selectedRow = td.parentElement.parentElement
  document.getElementById('className-1').value = selectedRow.cells[1].innerHTML
  document.getElementById('classID-1').value = selectedRow.cells[2].innerHTML
  document.getElementById('section-1').value = selectedRow.cells[4].innerHTML
}

function generate_table_classEdit(a) {
  var table = document.getElementById('list')
  console.log(a)
  console.log('check length ' + a.data.length)
  for (var i = 0; i < a.data.length; i++) {
    console.log('loop pass')
    var newRow = table.insertRow(1)

    var id = newRow.insertCell(0)
    var className = newRow.insertCell(1)
    var classID = newRow.insertCell(2)
    var teacher = newRow.insertCell(3)
    var group = newRow.insertCell(4)
    var crud = newRow.insertCell(5)

    id.innerHTML = a.data[i]._id
    className.innerHTML = a.data[i].className
    classID.innerHTML = a.data[i].classID
    teacher.innerHTML = a.data[i].teacher
    group.innerHTML = a.data[i].group
    crud.innerHTML = `<button data-toggle="modal" data-target="#editClass" onclick="selectData(this)" class="btn btn-success">Edit</button> <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`
  }
}

function generate_table_build(a) {
  var table = document.getElementById('list')
  console.log(a)
  console.log('check length ' + a.data.length)
  for (var i = 0; i < a.data.length; i++) {
    console.log('loop pass')
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
    crud.innerHTML = `<button data-toggle="modal" data-target="#editBuild" onclick="selectBuild(this)" class="btn btn-success">Edit</button> <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`
  }
}

function generate_table_subjects(a) {
  var table = document.getElementById('list')
  console.log(a)
  console.log('check length ' + a.data.length)
  for (var i = 0; i < a.data.length; i++) {
    console.log('loop pass')
    var newRow = table.insertRow(1)

    var id = newRow.insertCell(0)
    var className = newRow.insertCell(1)
    var credit = newRow.insertCell(2)
    var faculty = newRow.insertCell(3)
    var crud = newRow.insertCell(4)

    id.innerHTML = a.data[i].id
    className.innerHTML = a.data[i].className
    credit.innerHTML = a.data[i].credit
    faculty.innerHTML = a.data[i].faculty
    crud.innerHTML = `<button data-toggle="modal" data-target="#editClassModal" onclick="selectSubject(this)" class="btn btn-success">Edit</button> <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`
  }
}
function generate_table_rooms(a) {
  var table = document.getElementById('list')
  console.log(a)
  console.log('check length ' + a.data.length)
  for (var i = 0; i < a.data.length; i++) {
    console.log('loop pass')
    var newRow = table.insertRow(1)

    var id = newRow.insertCell(0)
    var build = newRow.insertCell(1)
    var floor = newRow.insertCell(2)
    var faculty = newRow.insertCell(3)
    var seat = newRow.insertCell(4)
    var crud = newRow.insertCell(5)

    id.innerHTML = a.data[i].id
    build.innerHTML = a.data[i].build
    floor.innerHTML = a.data[i].floor
    faculty.innerHTML = a.data[i].faculty
    seat.innerHTML = a.data[i].seat
    crud.innerHTML = `<button data-toggle="modal" data-target="#editRoomModal" onclick="selectRoom(this)" class="btn btn-success">Edit</button> <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>`
  }
}

function selectData(td) {
  // eslint-disable-next-line no-undef
  selectedRow = td.parentElement.parentElement
  document.getElementById('id-1').value = selectedRow.cells[0].innerHTML
  document.getElementById('password-1').value = selectedRow.cells[1].innerHTML
  document.getElementById('type-1').value = selectedRow.cells[2].innerHTML
  document.getElementById('sex-1').value = selectedRow.cells[3].innerHTML
  document.getElementById('name-1').value = selectedRow.cells[4].innerHTML
  document.getElementById('lastname-1').value = selectedRow.cells[5].innerHTML
}

function clearData() {
  console.log('clear data pass')
  document.getElementById('id').value = ''
  document.getElementById('password').value = ''
  document.getElementById('type').value = ''
  document.getElementById('sex').value = ''
  document.getElementById('name').value = ''
  document.getElementById('lastname').value = ''
}
function deleteData(td) {
  selectedRow = td.parentElement.parentElement
  var obj = selectedRow.cells[0].innerHTML
  console.log('delete data ' + obj)
  deleteRow(obj)
}

function checkEmpty() {
  if (document.getElementById('id').value !== '') {
    if (document.getElementById('password').value !== '') {
      if (document.getElementById('type').value !== '') {
        if (document.getElementById('sex').value !== '') {
          if (document.getElementById('name').value !== '') {
            if (document.getElementById('lastname').value !== '') {
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}
function checkEmptyEdit() {
  if (document.getElementById('id-1').value !== '') {
    if (document.getElementById('password-1').value !== '') {
      if (document.getElementById('type-1').value !== '') {
        if (document.getElementById('sex-1').value !== '') {
          if (document.getElementById('name-1').value !== '') {
            if (document.getElementById('lastname-1').value !== '') {
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

function checkEmptyBuild() {
  if (document.getElementById('id').value !== '') {
    if (document.getElementById('nameBuild').value !== '') {
      if (document.getElementById('areaBuild').value !== '') {
        if (document.getElementById('facBuild').value !== '') {
          if (document.getElementById('floorBuild').value !== '') {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

function checkEmptySubject() {
  if (document.getElementById('id').value !== '') {
    if (document.getElementById('className').value !== '') {
      if (document.getElementById('credit').value !== '') {
        if (document.getElementById('faculty').value !== '') {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

function roomBuild(a) {
  var select = document.getElementById('selectBuild')

  for (var i = 0; i < a.data.length; i++) {
    var opt = a.data[i].id
    var el = document.createElement('option')
    el.textContent = opt
    el.value = opt
    select.appendChild(el)
  }
  roomBuild2(a)
}

function build(a) {
  var select = document.getElementById('selectBuild')

  for (var i = 0; i < a.data.length; i++) {
    var opt = a.data[i].id
    var el = document.createElement('option')
    el.textContent = opt
    el.value = opt
    select.appendChild(el)
  }
}

function roomBuild2(a) {
  var select = document.getElementById('selectBuild-1')

  for (var i = 0; i < a.data.length; i++) {
    var opt = a.data[i].id
    var el = document.createElement('option')
    el.textContent = opt
    el.value = opt
    select.appendChild(el)
  }
}

function classSubject(a) {
  var select = document.getElementById('className')

  for (var i = 0; i < a.data.length; i++) {
    var opt = a.data[i].className
    var el = document.createElement('option')
    el.textContent = opt
    el.value = opt
    select.appendChild(el)
  }
  classSubject2(a)
}

function classSubject2(a) {
  // var select = document.getElementById('className-1')

  // for (var i = 0; i < a.data.length; i++) {
  //   var opt = a.data[i].className
  //   var el = document.createElement('option')
  //   el.textContent = opt
  //   el.value = opt
  //   select.appendChild(el)
  // }
}

function teacher(a) {
  var select = document.getElementById('teacherName')

  for (var i = 0; i < a.data.length; i++) {
    if (a.data[i].user_type === 'อาจารย์') {
      var opt = a.data[i].name + ' ' + a.data[i].lastname
      var el = document.createElement('option')
      el.textContent = opt
      el.value = opt
      select.appendChild(el)
    }
  }
  teacher2(a)
}

function teacher2(a) {
  // var select = document.getElementById('className-1')

  // for (var i = 0; i < a.data.length; i++) {
  //   var opt = a.data[i].className
  //   var el = document.createElement('option')
  //   el.textContent = opt
  //   el.value = opt
  //   select.appendChild(el)
  // }
}

function rooms(a) {
  var select = document.getElementById('selectRoom')

  for (var i = 0; i < a.data.length; i++) {
    var opt = a.data[i].id
    var el = document.createElement('option')
    el.textContent = opt
    el.value = opt
    select.appendChild(el)
  }
  //roomBuild2(a)
}

function checkEmptyRoom() {
  if (document.getElementById('id').value !== '') {
    if (document.getElementById('selectBuild').value !== '') {
      if (document.getElementById('floor').value !== '') {
        if (document.getElementById('faculty').value !== '') {
          if (document.getElementById('seat').value !== '') {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

function checkEmptySubjectEdit() {
  if (document.getElementById('id-1').value !== '') {
    if (document.getElementById('className-1').value !== '') {
      if (document.getElementById('credit-1').value !== '') {
        if (document.getElementById('faculty-1').value !== '') {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

function checkEmptyRoomEdit() {
  if (document.getElementById('id-1').value !== '') {
    if (document.getElementById('selectBuild-1').value !== '') {
      if (document.getElementById('floor-1').value !== '') {
        if (document.getElementById('faculty-1').value !== '') {
          if (document.getElementById('seat-1').value !== '') {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

function checkEmptyBuildEdit() {
  if (document.getElementById('id-1').value !== '') {
    if (document.getElementById('nameBuild-1').value !== '') {
      if (document.getElementById('areaBuild-1').value !== '') {
        if (document.getElementById('facBuild-1').value !== '') {
          if (document.getElementById('floorBuild-1').value !== '') {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

function selectBuild(td) {
  selectedRow = td.parentElement.parentElement
  document.getElementById('id-1').value = selectedRow.cells[0].innerHTML
  document.getElementById('nameBuild-1').value = selectedRow.cells[1].innerHTML
  document.getElementById('areaBuild-1').value = selectedRow.cells[2].innerHTML
  document.getElementById('facBuild-1').value = selectedRow.cells[3].innerHTML
  document.getElementById('floorBuild-1').value = selectedRow.cells[4].innerHTML
}

function clearBuild() {
  document.getElementById('id').value = ''
  document.getElementById('nameBuild').value = ''
  document.getElementById('areaBuild').value = ''
  document.getElementById('facBuild').value = ''
  document.getElementById('floorBuild').value = ''
}

function selectSubject(td) {
  selectedRow = td.parentElement.parentElement
  document.getElementById('id-1').value = selectedRow.cells[0].innerHTML
  document.getElementById('className-1').value = selectedRow.cells[1].innerHTML
  document.getElementById('credit-1').value = selectedRow.cells[2].innerHTML
  document.getElementById('faculty-1').value = selectedRow.cells[3].innerHTML
}
function selectRoom(td) {
  selectedRow = td.parentElement.parentElement
  document.getElementById('id-1').value = selectedRow.cells[0].innerHTML
  document.getElementById('selectBuild-1').value = selectedRow.cells[1].innerHTML
  document.getElementById('floor-1').value = selectedRow.cells[2].innerHTML
  document.getElementById('faculty-1').value = selectedRow.cells[3].innerHTML
  document.getElementById('seat-1').value = selectedRow.cells[4].innerHTML
}

// function selectClass (td) {
//   selectedRow = td.parentElement.parentElement
//   document.getElementById('id-1').value = selectedRow.cells[0].innerHTML
//   document.getElementById('nameBuild-1').value = selectedRow.cells[1].innerHTML
//   document.getElementById('areaBuild-1').value = selectedRow.cells[2].innerHTML
//   document.getElementById('facBuild-1').value = selectedRow.cells[3].innerHTML
//   document.getElementById('floorBuild-1').value = selectedRow.cells[4].innerHTML
// }

// function clearClass (td) {
//   selectedRow = td.parentElement.parentElement
//   document.getElementById('id-1').value = selectedRow.cells[0].innerHTML
//   document.getElementById('selectBuild-1').value = selectedRow.cells[1].innerHTML
//   document.getElementById('floor-1').value = selectedRow.cells[2].innerHTML
//   document.getElementById('faculty-1').value = selectedRow.cells[3].innerHTML
//   document.getElementById('seat-1').value = selectedRow.cells[4].innerHTML
// }
