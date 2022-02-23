class Login{
    constructor()
    {
        this.input = createInput("").attribute("placeholder", "Username");
        this.input1 = createInput("").attribute("placeholder", "Password");
        this.loginButton = createButton("Login");
        this.username = "";
        this.password= "";
        this.Text = createElement("h2");
        this.Text1 = createElement("h2");
        this.Text2 = createElement("h2");
        this.Text3 = createElement("h2");
        this.Text4 = createElement("h2");
        
        
   
    }
    setElementsPosition() {
        this.input.position(width / 2-200 , height / 2 - 180);
        this.input1.position(width / 2-200 , height / 2.14 - 30);
        this.loginButton.position(width / 2 - 90, height / 2 + 20);
    }

    setElementsStyle() {
        this.input.class("customInput1");
        this.input1.class("customInput1");
        this.loginButton.class("customButton");
    }
   async handleMousePressed() {

        this.loginButton.mousePressed(()=>{
       
                this.input.hide();
                this.input1.hide();
                this.loginButton.hide();
                this.username = this.input.value();
                this.password = this.input1.value();
            
                var userInfoRef = database.ref('schools');
                userInfoRef.on("value",(data)=>{
                allUsers= data.val();
              
                 users =  Object.values(allUsers);
                login = new Login()
            

                for(var i=0; i<users.length; i++){
                   // console.log(users[i].username)
                    if(this.username == users[i].username && this.password == users[i].password){
                        console.log("Authentication Successful");
                            this.Text.hide();
                          
                            this.Text1.position(width / 2 - 350, height / 2 -350);
                            this.Text2.position(width / 2 + 250, height / 2 -350);
                            this.Text1.class("greeting");
                            this.Text2.class("greeting");
                            var mess1 = `schoolname`;
                            this.Text1.html(mess1)
                            this.Text2.html(users[i].name)
                
                            this.Text3.position(width / 2 - 350, height / 2 -250);
                            this.Text4.position(width / 2 + 250, height / 2 -250);
                            this.Text3.class("greeting");
                            this.Text4.class("greeting");
                            var mess2 = `Registration number`;
                            this.Text3.html(mess2)
                            this.Text4.html(users[i].registrationNo)


                    }

                     if(this.username !== users[i].username && this.password !== users[i].password){
                        this.Text.position(width / 2 - 150, height / 2 - 350);
                        this.Text.class("greeting");
                        var mess = `Please Register`;
                         this.Text.html(mess);
                    }
                }
                })
        })
    }
    
    
    display()
    {

        this.setElementsStyle()
        this.handleMousePressed();
        this.setElementsPosition();
       
      
        
    }
       
}