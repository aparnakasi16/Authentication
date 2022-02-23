class Home{
    constructor()
    {
        this.loginButton = createButton("Login");
        this.registerButton = createButton("Register");
        this.Text = createElement("h2");
        this.Text1 = createElement("h2");
        this.Text2 = createElement("h2");
    }
    setElementsStyle() {
   
        this.loginButton.class("customButton");
        this.registerButton.class("customButton");
        this.Text.class("greeting");
        this.Text1.class("greeting1");
        this.Text2.class("greeting1");
    }

    handleMousePressed()
    {
        var mess = `SCHOOL VACCINATION CENTER`;
         this.Text.html(mess);
        var mess2 = `Already User? `;
         this.Text1.html(mess2);
         var mess3 = `New User? `;
         this.Text2.html(mess3);
        this.registerButton.mousePressed(()=>{
            this.Text.hide();
             this.Text1.hide();
             this.Text2.hide();
           
            this.loginButton.hide();
            this.registerButton.hide();
            form= new Form();
            form.display();
           
        })
        this.loginButton.mousePressed(()=>{
            this.Text.hide();
             this.Text1.hide();
             this.Text2.hide();
           
            this.loginButton.hide();
            this.registerButton.hide();

            login = new Login();
            login.display();
    })
}

    setElementsPosition() {
    
        this.loginButton.position( width / 2 - 90, height / 2- 150);
        this.registerButton.position(width / 2 - 90, height / 2 - 20);
        this.Text.position(width / 2 - 250, height / 2 - 350);
        this.Text1.position(width / 2 - 300, height / 2 - 160);
        this.Text2.position(width / 2 - 270, height / 2 - 35);
    }
    display()
    {
        this.setElementsStyle()
        this.handleMousePressed();
        this.setElementsPosition()
        
    }
}