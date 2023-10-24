let FName = document.getElementById('FName'),
    MName = document.getElementById('MName'),
    LName = document.getElementById('LName'),
    Age = document.getElementById('Age'),
    Gender = document.getElementById('Gender');
    Birthday = document.getElementById('Birthday');
    Course = document.getElementById('Course');
    SYear = document.getElementById('SYear');
submit = document.getElementById('submit')


let arrayOfEmployes 

let Mode = "create"

let TmpId  
// temporary variable to save the employe id 

// let's save informations in localstorage

if(localStorage.arrayOfEnrollees != null){
    arrayOfEnrollees = JSON.parse(localStorage.getItem('arrayOfEnrollees'))
}
else{
    arrayOfEnrollees = []
}



submit.addEventListener('click', function (e) {
    if(Mode === "create"){

        let EnrolleesObject = {
            FName: FName.value,
            MName: MName.value,
            LName: LName.value,
            Age: Age.value,
            Gender: Gender.value,
            Birthday: Birthday.value,
            Course: Course.value,
            SYear: SYear.value
        }
        arrayOfEnrollees.push(EnrolleesObject)
        localStorage.setItem('arrayOfEnrollees', JSON.stringify(arrayOfEnrollees))
        console.log(arrayOfEnrollees)
        DispayInfos()
        clearText()
    }
    else{
        submit.textContent = "Update"
        UpdateEnrollee(TmpId)  // here we replace id with TmpId var because id is local variable
        DispayInfos()
        submit.textContent = "Create"
        Mode = "create"
    }
    e.preventDefault()
})

function DispayInfos() {
    let table = '';
    for (let index = 0; index < arrayOfEnrollees.length; index++) {
      const enrolleeIndex = index; // Store the actual index
      table += `
        <tr>
       
          <td>${arrayOfEnrollees[index].FName}</td>
          <td>${arrayOfEnrollees[index].MName}</td>
          <td>${arrayOfEnrollees[index].LName}</td>
          <td>${arrayOfEnrollees[index].Age}</td>
          <td>${arrayOfEnrollees[index].Gender}</td>
          <td>${arrayOfEnrollees[index].Birthday}</td>
          <td>${arrayOfEnrollees[index].Course}</td>
          <td>${arrayOfEnrollees[index].SYear}</td>
          <td>
            <button class="btn btn-warning" onclick="UpdateEnrollee(${enrolleeIndex})">Edit</button>
            <button class="btn btn-danger" onclick="DeleteEnrollee(${enrolleeIndex})">Remove</button>
          </td>
        </tr>
      `;
    }
    document.getElementById('tbody').innerHTML = table;
  }
function clearText() {
        FName.value = "",
        MName.value = "",
        LName.value = "",
        Age.value = "",
        Gender.value = "",
        Birthday.value = "",
        Course.value = "",
        SYear.value = ""
}




function DeleteEnrollee(id) {
    arrayOfEnrollees.splice(id, 1) // deleting 
    localStorage.setItem('arrayOfEnrollees', JSON.stringify(arrayOfEnrollees)) 
    DispayInfos() 
}



function UpdateEnrollee(id) {
    TmpId = id //updating
    Mode = "update"
    submit.textContent = "Update"
    


    let EnrolleesObject = {
        FName: FName.value,
        MName: MName.value,
        LName: LName.value,
        Age: Age.value,
        Gender: Gender.value,
        Birthday: Birthday.value,
        Course: Course.value,
        SYear: SYear.value,

    }
    FName.value = arrayOfEnrollees[id].FName
    MName.value = arrayOfEnrollees[id].MName
    LName.value = arrayOfEnrollees[id].LName
    Age.value = arrayOfEnrollees[id].Age
    Gender.value = arrayOfEnrollees[id].Gender
    Birthday.value = arrayOfEnrollees[id].Birthday
    Course.value = arrayOfEnrollees[id].Course
    SYear.value = arrayOfEnrollees[id].SYear

       arrayOfEnrollees[TmpId] = EnrolleesObject
        localStorage.setItem('arrayOfEnrollees', JSON.stringify(arrayOfEnrollees))
}


DispayInfos();