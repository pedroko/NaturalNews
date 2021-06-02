/* Global */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Oswald", sans-serif;
    background-color: #000000;
    /* Pattern from https://www.heropatterns.com/ */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23540606' fill-opacity='0.4'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    color: #1e272e;
    color: #fff;
    font-size: 16px;
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  .container {
    width: 90%;
    margin: auto;
  }
  
  /* Navigation */
  .nav-main {
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 20px 0;
  }
  
  .nav-brand {
    width: 50px;
  }
  
  /* Navbar Left */
  .nav-main ul {
    display: flex;
  }
  
  .nav-main ul li {
    padding: 10px;
  }
  
  .nav-main ul li a {
    padding: 2px;
  }
  
  .nav-main ul li a:hover {
    border-bottom: 2px solid #fff;
  }
  
  .nav-main ul.nav-menu {
    flex: 1;
    margin-left: 20px;
  }
  
  hr {
    margin: 10px 0;
  }
  
  /* Responsive Button */
  .menu-btn {
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 30px;
    z-index: 2;
    display: none;
  }
  
  /* SHOWCASE */
  
  .btn {
    cursor: pointer;
    display: inline-block;
    border: 0;
    font-weight: bold;
    padding: 10px 20px;
    background: #262626;
    color: #fff;
    font-size: 15px;
    border: 1px solid #fff;
  }
  
  .btn:hover {
    opacity: 0.9;
  }
  
  .showcase {
    width: 100%;
    height: 550px;
    background: url("./img/showcase2.jpg") no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    padding-bottom: 50px;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .showcase h2,
  .showcase p {
    margin-bottom: 10px;
  }
  
  .showcase .btn {
    margin-top: 20px;
  }
  
  /* News Cards */
  .news-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin: 70px 0;
  }
  
  .news-cards img {
    width: 100%;
    height: 180px;
  }
  
  .news-cards h3 {
    font-size: 20px;
    margin: 10px 0;
  }
  
  .news-cards a {
    padding: 10px 0;
    color: #f2f2f2;
    text-transform: uppercase;
    display: inline-block;
    font-weight: bold;
  }
  
  /* CARDS BANNER ONE */
  .cards-banner-one {
    width: 100%;
    height: 350px;
    background: url("./img/tech-red.jpg");
    margin-bottom: 40px;
  }
  
  .cards-banner-one .content {
    width: 40%;
    padding: 90px 0 0 30px;
    color: #fff;
  }
  
  .cards-banner-one p,
  .cards-banner-two p {
    margin: 10px 0 20px 0;
  }
  
  /* CARDS BANNER TWO*/
  .cards-banner-two {
    width: 100%;
    height: 350px;
    background: url("./img/image-five.jpg") no-repeat center center/cover;
  }
  
  .cards-banner-two .content {
    width: 50%;
    padding: 100px 0 0 30px;
  }
  
  /* Follow */
  .social {
    margin: 50px;
  }
  .social p {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .links a {
    margin: 0 30px;
  }
  
  .links a i {
    font-size: 3rem;
  }
  
  /* Links */
  .footer-links {
    background: #2f3640;
    color: #616161;
    font-size: 12px;
    padding: 35px 0;
  }
  
  .footer-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
  }
  
  .footer-container ul {
    margin: 0 auto;
  }
  
  .footer-links li {
    line-height: 2.8;
  }
  
  .footer {
    background: #2f3640;
    color: #616161;
    font-size: 12px;
    padding: 20px 0;
    text-align: center;
    font-size: 1rem;
    padding-bottom: 20px;
  }
  
  /* Mobil */
  @media (max-width: 700px) {
    .menu-btn {
      display: block;
    }
  
    .menu-btn:hover {
      opacity: 0.5;
    }
  
    .nav-main ul.nav-menu {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: #2f3640;
      width: 50%;
      height: 100%;
      border-right: #ccc 1px solid;
      opacity: 0.9;
      padding: 30px;
      transform: translateX(-500px);
      transition: transform 0.5s ease-in-out;
    }
  
    .nav-main ul.nav-menu li {
      padding: 20px;
      border-bottom: #ccc solid 1px;
      font-size: 14px;
    }
    .nav-main ul.nav-menu li:last-child {
      border-bottom: 0;
    }
  
    .nav-main ul.nav-menu.show {
      transform: translateX(-20px);
    }
  
    .nav-main ul.nav-menu-right {
      margin-right: 50px;
    }
  
    .news-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  
    .cards-banner-one .content,
    .cards-banner-two .content {
      width: 80%;
    }
  
    .footer-links .footer-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 500px) {
    .news-cards {
      grid-template-columns: 1fr;
    }
  
    .cards-banner-one .content,
    .cards-banner-two .content {
      width: 100%;
      padding: 60px 20px;
    }
    .footer-links .footer-container {
      grid-template-columns: 1fr;
    }
  
    .footer-links .footer-container ul {
      text-align: center;
    }
  }