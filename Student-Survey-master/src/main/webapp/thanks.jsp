<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Thank you</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <style>
        *{
            box-sizing:border-box;
            border-radius: 15px;
        }
        body{
            background: #ffffff;
            background: linear-gradient(to bottom, #ffffff 0%,#e1e8ed 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e1e8ed',GradientType=0 );
            height: 100%;
            margin: 0;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

        .wrapper-1{
            width:100%;
            height:100vh;
            display: flex;
            flex-direction: column;
        }
        .wrapper-2{
            padding :30px;
            text-align:center;
        }
        h1{
            font-size:4em;
            letter-spacing:3px;
            color:#5892FF ;
            margin:0;
            margin-bottom:20px;
        }
        .wrapper-2 p{
            margin:0;
            font-size:1.3em;
            color:#aaa;
            font-family: 'Source Sans Pro', sans-serif;
            letter-spacing:1px;
        }
        .footer-like p{
            margin:0;
            padding:4px;
            color:#5892FF;
            font-family: 'Source Sans Pro', sans-serif;
            letter-spacing:1px;
        }
        .footer-like p a{
            text-decoration:none;
            color:#5892FF;
            font-weight:600;
        }

        @media (min-width:360px){
            h1{
                font-size:4.5em;
            }
            .go-home{
                margin-bottom:20px;
            }
        }

        @media (min-width:600px){
            .content{
                max-width:1000px;
                margin:0 auto;
            }
            .wrapper-1{
                height: initial;
                max-width:620px;
                margin:0 auto;
                margin-top:50px;
                box-shadow: 4px 8px 40px 8px rgba(88, 146, 255, 0.2);
            }

        }
    </style>
</head>
<body>
<div class=content>
    <div class="wrapper-1">
        <div class="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for your survey response.  </p>
        </div>
    </div>
</div>
</body>
</html>
