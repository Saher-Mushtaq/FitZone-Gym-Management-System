// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute('href')
            );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// ===============================
// Members Management
// ===============================

function addMember() {

    let name =
        document.getElementById("memberName").value;

    let phone =
        document.getElementById("memberPhone").value;

    let email =
        document.getElementById("memberEmail").value;

    let plan =
        document.getElementById("memberPlan").value;

    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        plan === ""
    ) {

        alert("Please fill all fields.");

        return;
    }

    let table =
        document.getElementById("memberList");

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML = name;

    row.insertCell(1).innerHTML = phone;

    row.insertCell(2).innerHTML = email;

    row.insertCell(3).innerHTML = plan;

    row.insertCell(4).innerHTML =
        '<button onclick="deleteMember(this)">Delete</button>';

    document.getElementById("memberName").value = "";

    document.getElementById("memberPhone").value = "";

    document.getElementById("memberEmail").value = "";

    document.getElementById("memberPlan").value = "";

    saveMembers();

    updateDashboard();

}


// ===============================
// Delete Member
// ===============================

function deleteMember(button) {

    let row =
        button.parentNode.parentNode;

    row.remove();

    saveMembers();

    updateDashboard();

    searchMembers();

}


// ===============================
// Save Members
// ===============================

function saveMembers() {

    let members = [];

    let rows =
        document.getElementById("memberList").rows;

    for (let i = 0; i < rows.length; i++) {

        members.push({

            name:
                rows[i].cells[0].innerHTML,

            phone:
                rows[i].cells[1].innerHTML,

            email:
                rows[i].cells[2].innerHTML,

            plan:
                rows[i].cells[3].innerHTML

        });

    }

    localStorage.setItem(
        "fitZoneMembers",
        JSON.stringify(members)
    );

}


// ===============================
// Load Members
// ===============================

function loadMembers() {

    let savedMembers =
        JSON.parse(
            localStorage.getItem(
                "fitZoneMembers"
            )
        ) || [];

    let table =
        document.getElementById("memberList");

    savedMembers.forEach(function(member) {

        let row =
            table.insertRow();

        row.insertCell(0).innerHTML =
            member.name;

        row.insertCell(1).innerHTML =
            member.phone;

        row.insertCell(2).innerHTML =
            member.email;

        row.insertCell(3).innerHTML =
            member.plan;

        row.insertCell(4).innerHTML =
            '<button onclick="deleteMember(this)">Delete</button>';

    });

}


// ===============================
// Search Members
// ===============================

function searchMembers() {

    let search =
        document.getElementById(
            "memberSearch"
        ).value.toLowerCase();

    let rows =
        document.getElementById(
            "memberList"
        ).rows;

    for (
        let i = 0;
        i < rows.length;
        i++
    ) {

        let name =
            rows[i]
                .cells[0]
                .innerHTML
                .toLowerCase();

        if (name.includes(search)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }

    }

}


// ===============================
// Attendance Management
// ===============================

function markAttendance() {

    let name =
        document.getElementById(
            "attendanceName"
        ).value;

    let status =
        document.getElementById(
            "attendanceStatus"
        ).value;

    if (
        name === "" ||
        status === ""
    ) {

        alert(
            "Please enter member name and select attendance status."
        );

        return;
    }

    let table =
        document.getElementById(
            "attendanceList"
        );

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML =
        name;

    row.insertCell(1).innerHTML =
        status;

    row.insertCell(2).innerHTML =
        '<button onclick="deleteAttendance(this)">Delete</button>';

    document.getElementById(
        "attendanceName"
    ).value = "";

    document.getElementById(
        "attendanceStatus"
    ).value = "";

    saveAttendance();

    updateDashboard();

}


// ===============================
// Delete Attendance
// ===============================

function deleteAttendance(button) {

    let row =
        button.parentNode.parentNode;

    row.remove();

    saveAttendance();

    updateDashboard();

}


// ===============================
// Save Attendance
// ===============================

function saveAttendance() {

    let attendance = [];

    let rows =
        document.getElementById(
            "attendanceList"
        ).rows;

    for (
        let i = 0;
        i < rows.length;
        i++
    ) {

        attendance.push({

            name:
                rows[i].cells[0].innerHTML,

            status:
                rows[i].cells[1].innerHTML

        });

    }

    localStorage.setItem(
        "fitZoneAttendance",
        JSON.stringify(attendance)
    );

}


// ===============================
// Load Attendance
// ===============================

function loadAttendance() {

    let savedAttendance =
        JSON.parse(
            localStorage.getItem(
                "fitZoneAttendance"
            )
        ) || [];

    let table =
        document.getElementById(
            "attendanceList"
        );

    savedAttendance.forEach(
        function(attendance) {

            let row =
                table.insertRow();

            row.insertCell(0).innerHTML =
                attendance.name;

            row.insertCell(1).innerHTML =
                attendance.status;

            row.insertCell(2).innerHTML =
                '<button onclick="deleteAttendance(this)">Delete</button>';

        }
    );

}


// ===============================
// Payments Management
// ===============================

function addPayment() {

    let member =
        document.getElementById(
            "paymentMember"
        ).value;

    let amount =
        document.getElementById(
            "paymentAmount"
        ).value;

    let plan =
        document.getElementById(
            "paymentPlan"
        ).value;

    let status =
        document.getElementById(
            "paymentStatus"
        ).value;

    if (
        member === "" ||
        amount === "" ||
        plan === "" ||
        status === ""
    ) {

        alert(
            "Please fill all payment fields."
        );

        return;
    }

    let table =
        document.getElementById(
            "paymentList"
        );

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML =
        member;

    row.insertCell(1).innerHTML =
        "$" + amount;

    row.insertCell(2).innerHTML =
        plan;

    row.insertCell(3).innerHTML =
        status;

    row.insertCell(4).innerHTML =
        '<button onclick="deletePayment(this)">Delete</button>';

    document.getElementById(
        "paymentMember"
    ).value = "";

    document.getElementById(
        "paymentAmount"
    ).value = "";

    document.getElementById(
        "paymentPlan"
    ).value = "";

    document.getElementById(
        "paymentStatus"
    ).value = "";

    savePayments();

    updateDashboard();

}


// ===============================
// Delete Payment
// ===============================

function deletePayment(button) {

    let row =
        button.parentNode.parentNode;

    row.remove();

    savePayments();

    updateDashboard();

}


// ===============================
// Save Payments
// ===============================

function savePayments() {

    let payments = [];

    let rows =
        document.getElementById(
            "paymentList"
        ).rows;

    for (
        let i = 0;
        i < rows.length;
        i++
    ) {

        payments.push({

            member:
                rows[i].cells[0].innerHTML,

            amount:
                rows[i].cells[1].innerHTML,

            plan:
                rows[i].cells[2].innerHTML,

            status:
                rows[i].cells[3].innerHTML

        });

    }

    localStorage.setItem(
        "fitZonePayments",
        JSON.stringify(payments)
    );

}


// ===============================
// Load Payments
// ===============================

function loadPayments() {

    let savedPayments =
        JSON.parse(
            localStorage.getItem(
                "fitZonePayments"
            )
        ) || [];

    let table =
        document.getElementById(
            "paymentList"
        );

    savedPayments.forEach(
        function(payment) {

            let row =
                table.insertRow();

            row.insertCell(0).innerHTML =
                payment.member;

            row.insertCell(1).innerHTML =
                payment.amount;

            row.insertCell(2).innerHTML =
                payment.plan;

            row.insertCell(3).innerHTML =
                payment.status;

            row.insertCell(4).innerHTML =
                '<button onclick="deletePayment(this)">Delete</button>';

        }
    );

}


// ===============================
// Trainers Management
// ===============================

function addTrainer() {

    let name =
        document.getElementById(
            "trainerName"
        ).value;

    let specialization =
        document.getElementById(
            "trainerSpecialization"
        ).value;

    let availability =
        document.getElementById(
            "trainerAvailability"
        ).value;

    if (
        name === "" ||
        specialization === "" ||
        availability === ""
    ) {

        alert(
            "Please fill all trainer fields."
        );

        return;
    }

    let table =
        document.getElementById(
            "trainerList"
        );

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML =
        name;

    row.insertCell(1).innerHTML =
        specialization;

    row.insertCell(2).innerHTML =
        availability;

    row.insertCell(3).innerHTML =
        '<button onclick="deleteTrainer(this)">Delete</button>';

    document.getElementById(
        "trainerName"
    ).value = "";

    document.getElementById(
        "trainerSpecialization"
    ).value = "";

    document.getElementById(
        "trainerAvailability"
    ).value = "";

    saveTrainers();

    updateDashboard();

}


// ===============================
// Delete Trainer
// ===============================

function deleteTrainer(button) {

    let row =
        button.parentNode.parentNode;

    row.remove();

    saveTrainers();

    updateDashboard();

}


// ===============================
// Save Trainers
// ===============================

function saveTrainers() {

    let trainers = [];

    let rows =
        document.getElementById(
            "trainerList"
        ).rows;

    for (
        let i = 0;
        i < rows.length;
        i++
    ) {

        trainers.push({

            name:
                rows[i].cells[0].innerHTML,

            specialization:
                rows[i].cells[1].innerHTML,

            availability:
                rows[i].cells[2].innerHTML

        });

    }

    localStorage.setItem(
        "fitZoneTrainers",
        JSON.stringify(trainers)
    );

}


// ===============================
// Load Trainers
// ===============================

function loadTrainers() {

    let savedTrainers =
        JSON.parse(
            localStorage.getItem(
                "fitZoneTrainers"
            )
        ) || [];

    let table =
        document.getElementById(
            "trainerList"
        );

    savedTrainers.forEach(
        function(trainer) {

            let row =
                table.insertRow();

            row.insertCell(0).innerHTML =
                trainer.name;

            row.insertCell(1).innerHTML =
                trainer.specialization;

            row.insertCell(2).innerHTML =
                trainer.availability;

            row.insertCell(3).innerHTML =
                '<button onclick="deleteTrainer(this)">Delete</button>';

        }
    );

}


// ===============================
// Equipment Management
// ===============================

function addEquipment() {

    let name =
        document.getElementById(
            "equipmentName"
        ).value;

    let quantity =
        document.getElementById(
            "equipmentQuantity"
        ).value;

    let condition =
        document.getElementById(
            "equipmentCondition"
        ).value;

    if (
        name === "" ||
        quantity === "" ||
        condition === ""
    ) {

        alert(
            "Please fill all equipment fields."
        );

        return;
    }

    let table =
        document.getElementById(
            "equipmentList"
        );

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML =
        name;

    row.insertCell(1).innerHTML =
        quantity;

    row.insertCell(2).innerHTML =
        condition;

    row.insertCell(3).innerHTML =
        '<button onclick="deleteEquipment(this)">Delete</button>';

    document.getElementById(
        "equipmentName"
    ).value = "";

    document.getElementById(
        "equipmentQuantity"
    ).value = "";

    document.getElementById(
        "equipmentCondition"
    ).value = "";

    saveEquipment();

    updateDashboard();

}


// ===============================
// Delete Equipment
// ===============================

function deleteEquipment(button) {

    let row =
        button.parentNode.parentNode;

    row.remove();

    saveEquipment();

    updateDashboard();

}


// ===============================
// Save Equipment
// ===============================

function saveEquipment() {

    let equipment = [];

    let rows =
        document.getElementById(
            "equipmentList"
        ).rows;

    for (
        let i = 0;
        i < rows.length;
        i++
    ) {

        equipment.push({

            name:
                rows[i].cells[0].innerHTML,

            quantity:
                rows[i].cells[1].innerHTML,

            condition:
                rows[i].cells[2].innerHTML

        });

    }

    localStorage.setItem(
        "fitZoneEquipment",
        JSON.stringify(equipment)
    );

}


// ===============================
// Load Equipment
// ===============================

function loadEquipment() {

    let savedEquipment =
        JSON.parse(
            localStorage.getItem(
                "fitZoneEquipment"
            )
        ) || [];

    let table =
        document.getElementById(
            "equipmentList"
        );

    savedEquipment.forEach(
        function(equipment) {

            let row =
                table.insertRow();

            row.insertCell(0).innerHTML =
                equipment.name;

            row.insertCell(1).innerHTML =
                equipment.quantity;

            row.insertCell(2).innerHTML =
                equipment.condition;

            row.insertCell(3).innerHTML =
                '<button onclick="deleteEquipment(this)">Delete</button>';

        }
    );

}


// ===============================
// Dashboard
// ===============================

function updateDashboard() {

    let totalMembers =
        document.getElementById(
            "memberList"
        ).rows.length;


    let activePlans = 0;

    let memberRows =
        document.getElementById(
            "memberList"
        ).rows;

    for (
        let i = 0;
        i < memberRows.length;
        i++
    ) {

        let plan =
            memberRows[i]
                .cells[3]
                .innerHTML;

        if (
            plan === "Basic" ||
            plan === "Premium" ||
            plan === "VIP"
        ) {

            activePlans++;

        }

    }


    let totalTrainers =
        document.getElementById(
            "trainerList"
        ).rows.length;


    let totalAttendance =
        document.getElementById(
            "attendanceList"
        ).rows.length;


    let totalPayments =
        document.getElementById(
            "paymentList"
        ).rows.length;


    let totalEquipment =
        document.getElementById(
            "equipmentList"
        ).rows.length;


    document.getElementById(
        "totalMembers"
    ).innerHTML =
        totalMembers;

    document.getElementById(
        "activePlans"
    ).innerHTML =
        activePlans;

    document.getElementById(
        "totalTrainers"
    ).innerHTML =
        totalTrainers;

    document.getElementById(
        "totalAttendance"
    ).innerHTML =
        totalAttendance;

    document.getElementById(
        "totalPayments"
    ).innerHTML =
        totalPayments;

    document.getElementById(
        "totalEquipment"
    ).innerHTML =
        totalEquipment;

}


// ===============================
// Admin Login
// ===============================

function adminLogin() {

    let username =
        document.getElementById(
            "adminUsername"
        ).value;

    let password =
        document.getElementById(
            "adminPassword"
        ).value;

    let message =
        document.getElementById(
            "loginMessage"
        );

    let adminPanel =
        document.getElementById(
            "adminPanel"
        );


    if (
        username === "admin" &&
        password === "1234"
    ) {

        message.innerHTML =
            "Login successful! Welcome Admin.";

        adminPanel.style.display =
            "block";

        setAdminAccess(true);

        updateDashboard();

    } else {

        message.innerHTML =
            "Invalid username or password.";

        adminPanel.style.display =
            "none";

        setAdminAccess(false);

    }

}


// ===============================
// Admin Logout
// ===============================

function adminLogout() {

    document.getElementById(
        "adminPanel"
    ).style.display =
        "none";

    document.getElementById(
        "adminUsername"
    ).value = "";

    document.getElementById(
        "adminPassword"
    ).value = "";

    document.getElementById(
        "loginMessage"
    ).innerHTML =
        "Logged out successfully.";

    setAdminAccess(false);

}


// ===============================
// Admin Access Control
// ===============================

function setAdminAccess(isLoggedIn) {

    const adminSections = [
        "members",
        "attendance",
        "payments",
        "trainer-management",
        "equipment-management"
    ];


    adminSections.forEach(function(id) {

        const section =
            document.getElementById(id);

        if (section) {

            section.style.display =
                isLoggedIn ? "" : "none";

        }


        const navLink =
            document.querySelector(
                'a[href="#' + id + '"]'
            );

        if (navLink) {

            navLink.style.display =
                isLoggedIn ? "inline-block" : "none";

        }

    });


    const dashboardLink =
        document.querySelector(
            'a[href="#dashboard"]'
        );

    if (dashboardLink) {

        dashboardLink.style.display =
            isLoggedIn ? "inline-block" : "none";

    }

}


// ===============================
// Load Saved Data
// ===============================

window.addEventListener(
    "load",
    function() {

        loadMembers();

        loadAttendance();

        loadPayments();

        loadTrainers();

        loadEquipment();

        updateDashboard();

        setAdminAccess(false);

    }
);
