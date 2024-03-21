const express =require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");




router.post ("/register",(req,res)=>{
    const {name,email,subject,message} = req.body;
      console.log(name,email,subject,message);


    try{

const transporter =nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});

const  mailOptions = {

    from : process.env.EMAIL,
    to : email,         
    subject : subject, 
    text:message, 
    // html : `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    // </head>
    // <body>
    // <div style="width:800px; background:#99d4ec33; height:300px;">
    // <div style="margin:50px; padding:30px;">
    // <h1> Email  </h1>
    // <p> Name: ${name}</p> 
    // <p> Email: ${email}</p> 
    // <p> Subject: ${subject}</p> 
    // <p> Message: ${message}</p> 
    // </div>
   
    // </div>

      
    // </body>
    // </html>`,
    html:`<html lang="en">
    <head>
      <!--  HEAD    -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Enquiry Form</title>

      <style>
     
      
      .container {
         background-color:  #fff;
        width:80%;
        max-width:600px;
        margin-left:auto;
        margin-right:auto;
      }
      
      .inner_container {
        background-color: #e1e1e245;
        padding: 15px;
        box-shadow: 0px 0px 6px #ccc !important;
    }
      
      header, footer {
        text-align:center;
      }
      
      .email_inner_section {
        padding:20px 0 50px 0;
      }
      
     
      
      h1 {
    color: #000;
   
}
h3{
  padding-left:15px;
}
      
      .enquiry_submission table {
        text-align:left;
        margin-top:40px;
      }
      
      .enquiry_submission table tbody tr th {
        width: 30%;
        vertical-align:top;
      }
      
      .enquiry_submission th, .enquiry_submission td {
        padding: 7px 15px;
        margin:0;
      }
      
      .enquiry_submission th {
    color: #000;
    font-weight: 800;
}
      
      .enquiry_submission td {
        font-weight:100;
      }
      
      .email_footer {
        font-size:10px;
        color: #ffffff;
        padding:20px 0;
      }
      
      .email_footer a {
        color: #ffffff;
        text-decoration:none;
      }
      
      @media only screen and (max-width:500px){
        .enquiry_submission th, .enquiry_submission td {
          display: block;
          width: 100% !important;
      }
      }
      
      </style>
    </head>
    <!-- BODY   -->
    <body>
      <div class="container">
        <div class="inner_container">
          <header>
               <!-- <img src="http://localhost:8002/public/img/logo-site.png" width="100px"/>    -->
          <h1>One world Submission <hr></h1>
        </header>
          
          <div class="email_content">
          <div class="email_inner_section">
            <section>
            <h3>Hi  ${name}.</h3>
          </section>
            <section class="enquiry_submission">
            <table>
              <tbody>
                <tr>
                  <th> Name</th>
                  <td>${name}</td>
                </tr>
                <tr>
                  <th> Email Address</th>
                  <td> ${email}</td>
                </tr>
                <tr>
                  <th>Subject</th>
                  <td>${subject}</td>
                </tr>
                <tr>
                  <th>Message</th>
                  <td> ${message}</td>
                </tr>
              </tbody>
            </table>
          </section>
          </div>
        </div>
        </div>
        <!--   Footer     -->
          <!-- <footer>
            <section class="email_footer">
          <img src="https://www.shutterstock.com/image-vector/people-care-logo-600w-1375582364.jpg" width="100px"/> 
             <p>
               <a href="#">companylorem.com</a>
             </p>
             <p>Address 1, 123 Road, MY</p>
             <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Your Name All Rights Reserved</p>
              </section>
          </footer> -->
        <!--   footer ends     -->
      </div>
    </body>
  </html>`
};



transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log("Error" , error)
    }else{
        console.log("Email sent"  + info.response);
        res.status(201).json({status:201,info})
    }
})

    }catch(error){
          
        res.status(201).json({status:401,error})   
    }

});

module.exports = router