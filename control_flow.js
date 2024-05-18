let userRole = "manager";
let accessLevel;

if (userRole === "admin") {
  accessLevel = "Full Access granted";
} else if (userRole === "manager") {
  accessLevel = "Limited Access for manager";
} else {
  accessLevel = "Access Denied";
}

console.log("Access Level:", accessLevel);
