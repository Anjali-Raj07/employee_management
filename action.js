
// add_employee...............




document.getElementById("add").onclick = function () {
    displayfunction()

}
let overlay = document.getElementById("Addoverlay")

function displayfunction() {
    document.getElementById("add_form").style.display = "block"
    document.getElementById("Addoverlay").style.display = "block"
    ClearAddform()
}

document.getElementById("add_close").onclick = function () {
    Addclosefunction()
}

function Addclosefunction() {
    document.getElementById("add_form").style.display = "none"
    document.getElementById("Addoverlay").style.display = "none"

}

document.getElementById("add_cancel").onclick = function () {
    Addcancelfunction()
}
document.getElementById("Addoverlay").onclick = function () {
    Addclosefunction()
}


function Addcancelfunction() {
    document.getElementById("add_form").style.display = "none"
    document.getElementById("Addoverlay").style.display = "none"

}


const add_employeeBtn = document.getElementById('add_employee');
add_employeeBtn.addEventListener('click', () => {
    const validation = addValidation();
    if (!validation) {
        return;
    }
    else {
        add_employee();

    }
})



function addValidation() {
    const salutation = document.getElementById("addsalutation").value.trim();
    const firstName = document.getElementById("addFirstName").value.trim();
    const lastName = document.getElementById("addLastName").value.trim();
    const email = document.getElementById("addEmail").value.trim();
    const phone = document.getElementById("addMobilenumber").value.trim();


    // gender.....

    const gender = document.querySelector('input[name="gender"]:checked')
    const gender_addValidation = document.getElementById("gendererror")



    const qualifications = document.getElementById("addQualification").value.trim();
    const address = document.getElementById("addAddress").value.trim();
    const country = document.getElementById("addCountry").value.trim();
    const state = document.getElementById("addState").value.trim();
    const city = document.getElementById("addCity").value.trim();
    const pin = document.getElementById("addPin").value.trim();
    const username = document.getElementById("addUsername").value.trim();
    const password = document.getElementById("addPassword").value.trim();

    // dob.....


    const dob = document.getElementById("addDob")
    const dob_addValidation = document.getElementById("addDoberror")
    const dob_value = dob.value.trim();

    // patterns...
    const namePattern = /^[A-za-z]+$/
    const phonePattern = /^\d{10}$/
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let Valid = true;

    // validation of dob & gender....

    if (gender) {
        gender_addValidation.textContent = ""

    }
    else {
        gender_addValidation.textContent = "*please fill the field"
        Valid = false;

    }

    if (dob_value === "") {
        dob_addValidation.textContent = "*please fill the field"
        Valid = false;
    }

    // validation of form ...

    if (salutation == "" || salutation == "select") {
        document.getElementById('addsalutationerror').textContent = "*please fill the field"
    }

    if (!namePattern.test(firstName)) {
        document.getElementById('addFirstNameerror').textContent = "*please fill the field"
        Valid = false;
    }

    if (!namePattern.test(lastName)) {
        document.getElementById('addLastNameerror').textContent = "*please fill the field"
        Valid = false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById('addEmailerror').textContent = "*enter a valid e-mail"
        Valid = false;
    }

    if (!phonePattern.test(phone)) {
        document.getElementById('addMobilenumbererror').textContent = "*enter a valid Phone number"
        Valid = false;
    }

    if (qualifications == "") {
        document.getElementById('addQualificationerror').textContent = "*Please fill the field"

    }

    if (address == "") {
        document.getElementById('addAddresserror').textContent = "*Please fill the field"

    }

    if (country == "" || country == "Select") {
        document.getElementById('addCountryerror').textContent = "*please fill the field"
    }
    if (state == "" || state == "Select") {
        document.getElementById('addStateerror').textContent = "*please fill the field"
    }

    if (city == "") {
        document.getElementById('addCityerror').textContent = "*please fill the field"
    }

    if (pin == "") {
        document.getElementById('addPinerror').textContent = "*please fill the field"
    }

    if (username == "") {
        document.getElementById('addUsernameerror').textContent = "*please fill the field"
    }

    if (password == "") {
        document.getElementById('addPassworderror').textContent = "*please fill the field"
        Valid = false
    }

    // validation of text event....


    document.getElementById('add_form').addEventListener('input', (event) => {
        inputid = event.target.id;
        const errorid = `${inputid}error`;
        document.getElementById(errorid).textContent = "";
    })

    // validation of gender
    const male = document.getElementById("maleId")
    const female = document.getElementById("femaleId")

    male.addEventListener("click", () => {
        document.getElementById("gendererror").textContent = "";
    })

    female.addEventListener("click", () => {
        document.getElementById("gendererror").textContent = "";
    })


    return Valid;
}
function ClearAddform() {
    document.getElementById("upload_img").src ="";
    document.getElementById('addsalutationerror').textContent = "";
    document.getElementById('addFirstNameerror').textContent = "";
    document.getElementById('addLastNameerror').textContent = "";
    document.getElementById('addEmailerror').textContent = "";
    document.getElementById('addMobilenumbererror').textContent = "";
    document.getElementById('addQualificationerror').textContent = "";
    document.getElementById('addAddresserror').textContent = "";
    document.getElementById('addCountryerror').textContent = "";
    document.getElementById('addStateerror').textContent = "";
    document.getElementById('addCityerror').textContent = "";
    document.getElementById('addPinerror').textContent = "";
    document.getElementById('addUsernameerror').textContent = "";
    document.getElementById('addPassworderror').textContent = "";
    document.getElementById('addDoberror').textContent = "";
    document.getElementById('gendererror').textContent = "";


    document.getElementById("addsalutation").value = "select";
    document.getElementById("addFirstName").value = "";
    document.getElementById("addLastName").value = "";
    document.getElementById("addEmail").value = "";
    document.getElementById("addMobilenumber").value = "";
    const radiobuttons = document.querySelectorAll('input[name="gender"]:checked');
    document.getElementById("addQualification").value = "";
    document.getElementById("addAddress").value = "";
    document.getElementById("addCountry").value = "Select";
    document.getElementById("addState").value = "Select";
    document.getElementById("addCity").value = "";
    document.getElementById("addPin").value = "";
    document.getElementById("addUsername").value = "";
    document.getElementById("addPassword").value = "";
    document.getElementById('addDob').value = "";
    radiobuttons.forEach(function (radiobuttons) {
        radiobuttons.checked = false;
    });

}
function ClearEditform() {
    document.getElementById("upload_editimage").src ="";
    document.getElementById('editsalutationerror').textContent = "";
    document.getElementById('editFirstnameerror').textContent = "";
    document.getElementById('editLastnameerror').textContent = "";
    document.getElementById('editEmailerror').textContent = "";
    document.getElementById('editMobilenumerror').textContent = "";
    document.getElementById('editQualificationerror').textContent = "";
    document.getElementById('editAddresserror').textContent = "";
    document.getElementById('editCountryerror').textContent = "";
    document.getElementById('editStateerror').textContent = "";
    document.getElementById('editCityerror').textContent = "";
    document.getElementById('editPinerror').textContent = "";
    document.getElementById('editUsernameerror').textContent = "";
    document.getElementById('editPassworderror').textContent = "";
    document.getElementById('editDoberror').textContent = "";
    document.getElementById('editGendererror').textContent = "";


    document.getElementById("editsalutation").value = "select";
    document.getElementById("editFirstname").value = "";
    document.getElementById("editLastname").value = "";
    document.getElementById("editEmail").value = "";
    document.getElementById("editMobilenum").value = "";
    const radiobuttons = document.querySelectorAll('input[name="editGender"]:checked');
    document.getElementById("editQualification").value = "";
    document.getElementById("editAddress").value = "";
    document.getElementById("editCountry").value = "Select";
    document.getElementById("editState").value = "Select";
    document.getElementById("editCity").value = "";
    document.getElementById("editPin").value = "";
    document.getElementById("editUsername").value = "";
    document.getElementById("editPassword").value = "";
    document.getElementById('editDob').value = "";
    radiobuttons.forEach(function (radiobuttons) {
        radiobuttons.checked = false;
    });

}

function add_employee() {
    const salutation = document.getElementById("addsalutation").value
    const firstName = document.getElementById("addFirstName").value
    const lastName = document.getElementById("addLastName").value
    const email = document.getElementById("addEmail").value
    const phone = document.getElementById("addMobilenumber").value
    const gender = document.querySelector('input[name="gender"]:checked').value
    const qualifications = document.getElementById("addQualification").value
    const address = document.getElementById("addAddress").value
    const country = document.getElementById("addCountry").value
    const state = document.getElementById("addState").value
    const city = document.getElementById("addCity").value
    const pin = document.getElementById("addPin").value
    const username = document.getElementById("addUsername").value
    const password = document.getElementById("addPassword").value
    const originalDatestring = document.getElementById('addDob').value


    let dateparts = originalDatestring.split("-");
    let year = dateparts[0];
    let month = dateparts[1];
    let day = dateparts[2];

    let formatedDate = `${day}-${month}-${year}`;
    console.log(formatedDate);
    const date = formatedDate;

    const newData = {
        salutation,
        firstName,
        lastName,
        email,
        phone,
        gender,
        qualifications,
        address,
        country,
        city,
        pin,
        state,
        username,
        password,
        dob: date

    }

    console.log(newData);
    add_data(newData)
}


function add_data(newData) {
    fetch("http://localhost:3000/employees", {

        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData)

    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Data Saved Successfully!", data);

            const inputfile = document.getElementById("input_File");
            let formdata = new FormData()
            formdata.append("avatar", inputfile.files[0]);
            fetch(`http://localhost:3000/employees/${data.id}/avatar`, {
                method: "POST",
                body: formdata,
            });

        })
        .then(() => {
            fetchData()
            Addcancelfunction()
        })


}


// add_image..............

let profilepic = document.getElementById("upload_img");
let inputfile = document.getElementById("input_File");

inputfile.onchange = function () {
    profilepic.src = URL.createObjectURL(inputfile.files[0]);
}




// editemployeee...........>>>>>>>>>>>>>>>>>>>>>>>>>>




document.getElementById("edit_cancel").onclick = function () {
    Editcancelfunction()
}


function Editcancelfunction() {
    document.getElementById("edit_form").style.display = "none"
    document.getElementById("Editoverlay").style.display = "none"

}
document.getElementById("Editoverlay").onclick = function () {
    Editclosefunction()
}


document.getElementById("edit_close").onclick = function () {
    Editclosefunction()
}

function Editclosefunction() {
    document.getElementById("edit_form").style.display = "none"
    document.getElementById("Editoverlay").style.display = "none"

}
// add_image. of edit.............


let b = document.getElementById('image_editupload')
b.addEventListener('click', () => {

    let profilEditepic = document.getElementById("upload_editimage");
    let inputEditfile = document.getElementById("input_Fileedit");
    inputEditfile.onchange = function () {
        profilEditepic.src = URL.createObjectURL(inputEditfile.files[0]);
    }

})

function edit_Employee(empid) {

    // display edit form

    document.getElementById("edit_form").style.display = "block"
    document.getElementById("Editoverlay").style.display = "block"

    //  fetchdata

    fetch(`http://localhost:3000/employees/${empid}`, {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json',
        },

    })

        // getting whole data in id

        .then((response) => response.json())
        .then((data) => {

            var img = document.getElementById("upload_editimage");
            img.src = `http://localhost:3000/employees/${empid}/avatar`;
            document.getElementById("editsalutation").value = data.salutation;
            document.getElementById("editFirstname").value = data.firstName;
            document.getElementById("editLastname").value = data.lastName;
            document.getElementById("editEmail").value = data.email;
            document.getElementById("editMobilenum").value = data.phone;
            document.getElementById('editCity').value = data.city;
            document.getElementById("editGender").value = data.gender;
            document.getElementById("editQualification").value = data.qualifications;
            document.getElementById("editAddress").value = data.address;
            document.getElementById("editCountry").value = data.country;
            document.getElementById("editState").value = data.state;
            document.getElementById("editPin").value = data.pin;
            document.getElementById("editUsername").value = data.username;
            document.getElementById("editPassword").value = data.password;
            // dob change....!!!!!!!
            const [day, month, year] = data.dob.split("-");
            const newDob = `${year}-${month}-${day}`;
            document.getElementById('editDob').value = newDob;
            // gender....!!!!
            document.querySelector(`input[name='editGender'][value='${data.gender}']`).checked = true;

        })
    // image preview 

    const edit_employeeBtn = document.getElementById('updateEmployee');
    function clickHandler() {
        const validation = editValidation();
        if (!validation) {
            return;
        } else {
            saveChanges(empid);
            // Remove the event listener
            edit_employeeBtn.removeEventListener('click', clickHandler);
            console.log('removed')
        }
    }
    edit_employeeBtn.addEventListener('click', clickHandler);
    
            
        
        
    ClearEditform()
    
    
      

}
function image_preview() {
    const imgPreview = document.getElementById("input_Fileedit");
    imgPreview.src = URL.createObjectURL(event.target.files[0]);

}

// validation of.edit............


function editValidation() {
    const salutation = document.getElementById("editsalutation").value.trim();
    const firstName = document.getElementById("editFirstname").value.trim();
    const lastName = document.getElementById("editLastname").value.trim();
    const email = document.getElementById("editEmail").value.trim();
    const phone = document.getElementById("editMobilenum").value.trim();


    // gender.....

    const gender = document.querySelector('input[name="editGender"]:checked')
    const gender_editValidation = document.getElementById("editGendererror")



    const qualifications = document.getElementById("editQualification").value.trim();
    const address = document.getElementById("editAddress").value.trim();
    const country = document.getElementById("editCountry").value.trim();
    const state = document.getElementById("editState").value.trim();
    const city = document.getElementById("editCity").value.trim();
    const pin = document.getElementById("editPin").value.trim();
    const username = document.getElementById("editUsername").value.trim();
    const password = document.getElementById("editPassword").value.trim();

    // dob.....


    const dob = document.getElementById("editDob")
    const dob_addValidation = document.getElementById("editDoberror")
    const dob_value = dob.value.trim();

    // patterns...
    const namePattern = /^[A-za-z]+$/
    const phonePattern = /^\d{10}$/
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let Valid = true;

    // validation of dob & gender....

    if (gender) {
        gender_editValidation.textContent = ""
    }
    else {
        gender_editValidation.textContent = "*please fill the field"
        Valid = false;

    }

    if (dob_value === "") {
        dob_addValidation.textContent = "*please fill the field"
        Valid = false;
    }

    // validation of form ...

    if (salutation == "" || salutation == "select") {
        document.getElementById('editsalutationerror').textContent = "*please fill the field"
        Valid = false
    }

    if (!namePattern.test(firstName)) {
        document.getElementById('editFirstnameerror').textContent = "*please fill the field"
        Valid = false;
    }

    if (!namePattern.test(lastName)) {
        document.getElementById('editLastnameerror').textContent = "*please fill the field"
        Valid = false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById('editEmailerror').textContent = "*enter a valid e-mail"
        Valid = false;
    }

    if (!phonePattern.test(phone)) {
        document.getElementById('editMobilenumerror').textContent = "*enter a valid Phone number"
        Valid = false;
    }

    if (qualifications == "") {
        document.getElementById('editQualificationerror').textContent = "*Please fill the field"
        Valid = false

    }

    if (address == "") {
        document.getElementById('editAddresserror').textContent = "*Please fill the field"
        Valid = false

    }

    if (country == "" || country == "Select") {
        document.getElementById('editCountryerror').textContent = "*please fill the field"
        Valid = false
    }
    if (state == "" || state == "Select") {
        document.getElementById('editStateerror').textContent = "*please fill the field"
        Valid = false
    }

    if (city == "") {
        document.getElementById('editCityerror').textContent = "*please fill the field"
        Valid = false
    }

    if (pin == "") {
        document.getElementById('editPinerror').textContent = "*please fill the field"
        Valid = false
    }

    if (username == "") {
        document.getElementById('editUsernameerror').textContent = "*please fill the field"
        Valid = false
    }

    if (password == "") {
        document.getElementById('editPassworderror').textContent = "*please fill the field"
        Valid = false
    }

    // validation of text event....

    document.getElementById('edit_form').addEventListener('input', (event) => {
        inputid = event.target.id;
        const errorid = `${inputid}error`;
        document.getElementById(errorid).textContent = "";
    })
    // validation of gender
    const male = document.getElementById("maleid")
    const female = document.getElementById("femaleid")

    male.addEventListener("click", () => {
        document.getElementById("editGendererror").textContent = "";
    })

    female.addEventListener("click", () => {
        document.getElementById("editGendererror").textContent = "";
    })


    return Valid;

}
// put to json


function saveChanges(empid) {
    const salutation = document.getElementById("editsalutation").value
    const firstName = document.getElementById("editFirstname").value
    const lastName = document.getElementById("editLastname").value
    const email = document.getElementById("editEmail").value
    const phone = document.getElementById("editMobilenum").value
    const gender = document.querySelector('input[name="editGender"]:checked').value
    const qualifications = document.getElementById("editQualification").value
    const address = document.getElementById("editAddress").value
    const country = document.getElementById("editCountry").value
    const state = document.getElementById("editState").value
    const city = document.getElementById("editCity").value
    const pin = document.getElementById("editPin").value
    const username = document.getElementById("editUsername").value
    const password = document.getElementById("editPassword").value
    const originalDatestring = document.getElementById('editDob').value

    let dateparts = originalDatestring.split("-");
    let year = dateparts[0];
    let month = dateparts[1];
    let day = dateparts[2];
    let formatedDate = `${day}-${month}-${year}`;
    console.log(formatedDate);
    const date = formatedDate;

    const newData = {
        salutation,
        firstName,
        lastName,
        email,
        phone,
        gender,
        qualifications,
        address,
        country,
        city,
        pin,
        state,
        username,
        password,
        dob: date
    }

    console.log(newData);
    fetch(`http://localhost:3000/employees/${empid}`, {
        method: 'PUT',
        headers:
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData)
    })
        .then((response) => {
            if (!response.ok) {
                alert('Error')
            }
            else {
                return response.json();
            }
        })
        .then((data) => {
            console.log("Data Saved Successfully!", data);


            const inputfile = document.getElementById("input_Fileedit");
            var formdata = new FormData();
            formdata.append("avatar", inputfile.files[0]);
            fetch(`http://localhost:3000/employees/${empid}/avatar`, {
                method: "POST",
                body: formdata,
            })
                .then((response) => {
                    if (!response.ok) {
                        console.log("Avatar image upload failed");
                    } else {
                        console.log("Avatar image uploaded successfully");
                    }
                });
        })
        .then(() => {
            fetchData()
         })
        .catch((error) => {
            console.error("Error occurred:", error);
        });
        Editclosefunction()

}

//  delete_Employe.........................



document.getElementById("delete_close").onclick = function () {
    Deleteclosefunction()
}

function Deleteclosefunction() {
    document.getElementById("delete").style.display = "none"
    document.getElementById("Deleteoverlay").style.display = "none"

}


function delete_Employee(empid) {
    document.getElementById("delete").style.display = "block"
    document.getElementById("Deleteoverlay").style.display = "block"


    const deleteEmployee = document.getElementById('deleteData')
    deleteEmployee.addEventListener('click', () => {
        deletefunction(empid);
        Deletecancelfunction()
    })

}

function deletefunction(empid) {
    fetch(`http://localhost:3000/employees/${empid}`, {

        method: 'DELETE',

    })

        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("Data Deleted!", data);

        })
        .then(() => {
            fetchData()
        })
}


document.getElementById("delete_cancel").onclick = function () {
    Deletecancelfunction()
}

document.getElementById("Deleteoverlay").onclick = function () {
    Deletecancelfunction()
}



function Deletecancelfunction() {
    document.getElementById("delete").style.display = "none"
    document.getElementById("Deleteoverlay").style.display = "none"

}



// pagination.......................


var array_length = 0;
var table_size = 6;
var start_index = 1;
var end_index = 0;
var current_index = 1;
var max_index = 0;

let array = [];

fetchData();
function fetchData() {
    fetch(`http://localhost:3000/employees`)
        .then((data) => {
            // console.log(data);
            return data.json();
        })
        .then((empData) => {
            array = empData.reverse();
            // console.log(array);
            // const len = empData
            displayIndexButtons()
        })


}



function preLoadCalculation() {
    array_length = array.length;
    // console.log("array length " + array_length);
    max_index = array_length / table_size;
    if ((array_length % table_size) > 0) {
        max_index++;
    }


}


function displayIndexButtons() {
    preLoadCalculation();
    $(".index_button button").remove();
    $(".index_button ").append('<button onclick="prev();"><<</button>');
    for (var i = 1; i <= max_index; i++) {
        $(".index_button ").append('<button onclick="indexPagenation(' + i + ');" index="' + i + '">' + i + '</button>');
    }
    $(".index_button ").append('<button onclick="next();">>></button>');
    for (var i = 0; i >= array_length; i--) {
        $(".index_button ").append('<button onclick="indexPagenation(' - i - ');" index="' - i - '">' - i - '</button>');
    }
    highlightIndexButton(array);
}



function highlightIndexButton() {
    start_index = ((current_index - 1) * table_size) + 1;
    end_index = (start_index + table_size) - 1
    if (end_index > array_length) {
        // console.log("length", array_length);
        end_index = array_length;
    }

    $(".select_page span").text("of" + "   " + array_length);
    $(".index-button button").removeClass('active');
    $(".index_button button[index='" + current_index + "']").addClass('active');

    displayTablerows();
}



// search...

var search_input = document.getElementById('search_input');
search_input.addEventListener("input", () => {
    fetchData();
})

function displayTablerows() {

    let querry = search_input.value;
    console.log(querry);


    let index = array.slice((start_index - 1), end_index)
    let s = start_index;
    let tableData = "";
    index.filter((eventData) => {
        if (querry === '') {
            return eventData
        }
        else if (eventData.salutation.toLowerCase().includes(querry)) {
            return eventData
        }
        else if (eventData.firstName.toLowerCase().includes(querry)) {
            return eventData
        }
        else if (eventData.lastName.toLowerCase().includes(querry)) {
            return eventData
        }
        else if (eventData.email.toLowerCase().includes(querry)) {
            return eventData
        }
        else if (eventData.phone.toLowerCase().includes(querry)) {
            return eventData
        }
        else if (eventData.gender.toLowerCase().includes(querry)) {
            return eventData
        }
        else if (eventData.dob.toLowerCase().includes(querry)) {
            return eventData
        }
        else if (eventData.country.toLowerCase().includes(querry)) {
            return eventData
        }
    }).map((values) => {
        tableData += `<tr>
            <td>#0${s++}</td>
            
            <td><img class="uploading" src="http://localhost:3000/employees/${values.id}/avatar">${values.salutation} ${values.firstName} ${values.lastName}</td>
            <td>${values.email}</td>
            <td>${values.phone}</td>
            <td>${values.gender}</td>
            <td>${values.dob}</td>
            <td>${values.country}</td>
            <td><div class="dropdown">
            <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
            <ul class="dropdown-menu">
            
            <li onclick="view_Employee('${values.id}')"><a class="dropdown-item" href="read.html?id=${values.id}"><i class="fa-solid fa-eye"></i>  View Details</a></li>
              <li onclick="edit_Employee('${values.id}')"><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i>  Edit </a></li>
              <li onclick="delete_Employee('${values.id}')"><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i>  Delete</a></li>
            </ul>
          </div>
        </td>
      </tr>`
    });
    document.getElementById("table_body").innerHTML = tableData;

}


function next() {
    array_length = array.length;
    console.log("array length " + array_length);
    max_index = array_length / table_size;
    if (current_index >= 1 & current_index < max_index) {
        current_index++;
        highlightIndexButton();
    }
}


function prev() {
    if (current_index > 1) {
        current_index--;
        highlightIndexButton();
    }
}


function indexPagenation(index) {
    current_index = parseInt(index);
    highlightIndexButton();

}


let topPagenation = document.getElementById('table_size')
topPagenation.addEventListener('change', () => {
    table_size = topPagenation.value;
    table_size = parseInt(table_size);
    console.log("top", table_size);
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
})

