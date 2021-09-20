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
}

const handleSubmit = (e) => {
    e.preventDefault();

    let foodsChecked = [];
    let genderSelected = "";

    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;

    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // Radio and checkbox items
    const gender = document.getElementsByName("gender");
    const foods = document.getElementsByName("food");

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

    console.log(
        fname,
        lname,
        pincode,
        state,
        country,
        genderSelected,
        foodsChecked
    );

    const employee = new Employee(
        fname,
        lname,
        address,
        pincode,
        state,
        country,
        genderSelected,
        foodsChecked
    );

    // Inserting the inputted values in the Table
    const ui = new UI();

    ui.addEmployee(employee);
};
const btn = document.getElementById("submit-btn");

btn.addEventListener("click", handleSubmit);