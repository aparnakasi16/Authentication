class UserAuth{
    constructor(){
        this.username= null; 
        this.password = null;
        this.index = null;
    }
    adduser(){
      //try removing the user and store as "userDetails/"+this.index
        var userIndex = "userDetails/user" + this.index
    
        database.ref(userIndex).set({
        usern: this.username,
        pass: this.password
        });
      }
      verifyuser()
      {
        // console.log(this.username);
        // console.log(this.password);
       
      
        
      }
      getCount() {
        var userCountRef = database.ref("userCount");
        userCountRef.on("value", data => {
          userCount = data.val();
        });
      }
    
      updateCount(count) {             
        database.ref("/").update({
          userCount: count
        });
      }

      static userPlayerInfo(username, password, userCount){
        var userInfoRef = database.ref('userDetails');
        userInfoRef.on("value",(data)=>{
          allUsers= data.val();
          console.log(allUsers);

          //try for loop with respect to usercount
        for(var i=1; i< userCount; i++){
          console.log(i);
         // var x = "user"+i
        //  console.log(x)
        //  if(username== allUsers.user1.usern && password == allUsers.user1.pass){
        if(username == "user" && password == "pass"){
        console.log("authentication success")
            home = new Home()
            home.display();
          }  
        }
      
         
      
        })
      
      }
}