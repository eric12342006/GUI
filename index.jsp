<!DOCTYPE html>

<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- css import-->
        <link rel="stylesheet" href="css/style.css">

        
    </head>
    <body class="cover-page">
        <section class="logo">
            <div class="brand2">
                <a href="#home" class="brand-name">BuyBestProduct</a>
            </div>
        </section>
        
       <div class="index-center">
           <div class="index-center-left">

                <a href="ItemsServlet?action=list&Tel=<%=Tel%>" class="a-white">
                    <button class="cover-btn" style="vertical-align:middle">
                             <span>Let's get your amazing clothes!</span>
                    </button>
                </a>

           </div>
           <div class="index-center-right">
               <a href="login/login.jsp">
                    <button class="cover-btn cover-btn2" style="vertical-align:middle">
                         <span>Login</span>
                     </button>
               </a>
               <a href="register.jsp">
               <button class="cover-btn cover-btn2" style="vertical-align:middle">
                    <span>Sign Up</span>
                </button>
               
               
           </div>
       </div>
    </body>
</html>
