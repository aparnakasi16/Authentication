class profile{
        constructor(){

            this.Text = createElement("h2");
            this.Text1 = createElement("h2");
            this.Text2 = createElement("h2");
            this.Text3 = createElement("h1");
            this.Text4 = createElement("h2");
            this.Text5 = createElement("h2");

        }


            display(){
            var userInfoRef = database.ref('schools');
            userInfoRef.on("value",(data)=>{
              allUsers= data.val();

             this.Text.position(width / 2 - 150, height / 2 - 350);
             this.Text1.position(width / 2 - 660, height / 2 - 240);
             this.Text2.position(width / 2 -660, height / 2.14 - 80);
             this.Text3.position(width / 2 - 660, height / 1.85 - 0);
             this.Text4.position(width / 1.3 - 160, height / 2.14 - 80);
             this.Text5.position(width / 1.3 - 160, height / 2 - 230);


             this.Text.class("greeting");
             this.Text1.class("greeting1");
             this.Text2.class("greeting2");
             this.Text3.class("greeting2");
             this.Text4.class("greeting2");
             this.Text5.class("greeting2");


             var mess = `School Name :`;
             this.Text.html(mess);
             this.Text1.html()
           
            })
          }
}