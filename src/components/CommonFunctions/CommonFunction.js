export function handleLogout(setUser) {
    localStorage.removeItem('user')
    setUser(null)
}

export function validatePassword(password) {
    if (password.length < 8) {
        alert('The password must be at least 8 characters long.')
      return false;
    } 
    if (!/[A-Z]/.test(password)) {
        alert('The password must contain at least one uppercase letter.')
      return false;
    } 
    if (!/[a-z]/.test(password)) {
        alert('The password must contain at least one lowercase letter.')
      return false;
    }
    if (!/[0-9]/.test(password)) {
        alert('The password must contain at least one digit.')
        return false;
    }  
    if (!/[!@#$%^&*()_+~`-]/.test(password)) {
        alert('The password must contain at least one special character.')
        return false;
    }
  
    return true;
  }