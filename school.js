class School{
  constructor() {
    this.schoolname = null;
    this.registrationNumber = null ; 
    this.location = null ;
    this.mailId = null ; 
    this.phoneNumber = null ; 
    this.numberOfStudents = null ; 
    this.index=null;
    this.username = null;
    this.password = null;
    this.vaccine = null;
  }

  addschool(){
    var schoolIndex = "schools/school" + this.index

    database.ref(schoolIndex).set({
      username :this.username,
     password: this.password,
     name : this.schoolname ,
    registrationNo :this.registrationNumber,
      // locationOfSchool :this.location,
      // mailOfSchool:this.mailId ,
      // phoneNumberOfSchool :this.phoneNumber,
     
    });
  }
  getCount() {
    var schoolCountRef = database.ref("schoolCount");
    schoolCountRef.on("value", data => {
      schoolCount = data.val();
      console.log("school count at start"+ schoolCount)
    });
  }

  updateCount(count) {             
    database.ref("/").update({
      schoolCount:count
      
    })
    console.log(count);
  }

  static userPlayerInfo(){
    var userInfoRef = database.ref('schools');
    userInfoRef.on("value",(data)=>{
      allUsers= data.val();
      
    
    })
  }
}

