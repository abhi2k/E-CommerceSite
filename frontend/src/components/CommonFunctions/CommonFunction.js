export function handleLogout(setUser) {
  localStorage.removeItem("user");
  setUser(null);
}

export function validatePassword(password) {
  if (password.length < 8) {
    alert("The password must be at least 8 characters long.");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    alert("The password must contain at least one uppercase letter.");
    return false;
  }
  if (!/[a-z]/.test(password)) {
    alert("The password must contain at least one lowercase letter.");
    return false;
  }
  if (!/[0-9]/.test(password)) {
    alert("The password must contain at least one digit.");
    return false;
  }
  if (!/[!@#$%^&*()_+~`-]/.test(password)) {
    alert("The password must contain at least one special character.");
    return false;
  }

  return true;
}

export function filterData(arr, value) {
  // Use the Array.filter method to create a new array with matching objects
  return arr.filter((obj) => {
    // Check if the "name" or "category" field of each object contains the specified value
    const nameMatch = obj.name.toLowerCase().includes(value.toLowerCase());
    const categoryMatch = obj.category
      .toLowerCase()
      .includes(value.toLowerCase());

    // Return true if either the "name" or "category" matches the value
    return nameMatch || categoryMatch;
  });
}

export function filterProducts(arr, value) {
  const resultArr = arr.filter((obj) => {
    if(obj.id===value){
      return true;
    }else{
      return false;
    }
  });
  if(resultArr.length>=1){
    return resultArr[0]
  }
}