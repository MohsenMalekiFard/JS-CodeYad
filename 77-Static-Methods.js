class User {
    construction(username, email) {
        this.username = username;
        this.email = email;
    }
    
    getInfo() {
        return `نام کاربری: ${this.username}, ایمیل: ${this.email}`;
    }
    
    //static Method
    static validetoEmail(email) {
        if (!email || !email.trim() == '') return false;
        
        if(!email.includes("@")) return false;
        
        return true;
    }
}
const isValid = User.validetoEmail("Mohsenmaleki1389@gmail.com"));

if(isValid){
    const user1 = new User("Mohsen_Maleki", "Mohsenmaleki1389@gmail.com");
}
