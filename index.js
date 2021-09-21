class Employee {
    constructor(fname, lname, address, pincode, state, country, gender, food) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.pincode = pincode;
        this.gender = gender;
        this.food = food;
        this.state = state;
        this.country = country;
    }
}

// UI Class
class UI {
    addEmployee(record) {
        const list = document.getElementById("table-row-list");

        const row = document.createElement("tr");

        row.innerHTML = `<td>${record.fname}</td>
            <td>${record.lname}</td>
            <td>${record.address}</td>
            <td>${record.pincode}</td>
            <td>${record.gender}</td>
            <td>${record.food}</td>
            <td>${record.state}</td>
            <td>${record.country}</td>`;

        console.log(row);

        list.appendChild(row);
    }

    diplayAlert(msg, flag) {
        const validate = document.querySelector(".alert");
        //  const container = document.querySelector(".container");

        console.log(msg, flag);
        validate.classList.toggle(flag);
        validate.innerHTML = `${msg}`;

        setTimeout(() => {
            validate.innerHTML = "";
            validate.classList.remove(flag);
        }, 1500);
    }
    clearfields() {
        fname.value = "";
        lname.value = "";
        address.value = "";
        pincode.value = "";
        state.value = "";
        country.value = "";

        gender.forEach((el) => {
            if (el.checked) {
                el.checked = false;
            }
        });
        foods.forEach((el) => {
            if (el.checked) {
                el.checked = false;
            }
        });
    }
}

// Global values which will be used
const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const address = document.getElementById("address");

const pincode = document.getElementById("pincode");
const state = document.getElementById("state");
const country = document.getElementById("country");

// Radio and checkbox items
const gender = document.getElementsByName("gender");
const foods = document.getElementsByName("food");

const handleSubmit = (e) => {
    e.preventDefault();

    let foodsChecked = [];
    let genderSelected = "";

    gender.forEach((el) => {
        if (el.checked) {
            genderSelected = el.value;
        }
    });
    foods.forEach((el) => {
        if (el.checked) {
            foodsChecked.push(el.value);
        }
    });

    const employee = new Employee(
        fname.value,
        lname.value,
        address.value,
        pincode.value,
        state.value,
        country.value,
        genderSelected,
        foodsChecked
    );

    // Inserting the inputted values in the Table
    const ui = new UI();

    if (fname.value && lname.value) {
        ui.addEmployee(employee);
        ui.diplayAlert("Record has been added to the table", "success");
        // Clearing the form fields
        ui.clearfields();
    } else {
        ui.diplayAlert(
            "Please enter the name fields for adding the record",
            "failure"
        );
    }
};
const btn = document.getElementById("submit-btn");

btn.addEventListener("click", handleSubmit);