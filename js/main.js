const createHeader = () => {
  let header = document.querySelector(".header");
  header.innerHTML = `<nav class="navbar">
  <div class="logo">
  <img
  src="./files/images/icons/Web Slices Logo.svg"
  alt=""
              srcset=""
            />
            <span>Web Slices</span>
          </div>
          <!-- Create Nav Links -->
          <ul class="ul">
          <li>
              <a href="home.html"><span class="material-icons">home</span> Home</a>
            </li>
            <li class="">
            <a
                href="https://tahawy111.github.io/My_Porfolio_Websie-1/"
                target="_blank"
                ><span class="material-icons">person_outline</span>About Us</a
                >
                </li>
                </ul>
                <!-- Ul For Menu -->
                
                <span class="buttons">
            <button class="btn btn-red"><a href="Get_started.html">get started</a></button>
            <button class="btn btn-gray"><a href="#">Download</a></button>
            </span>
          <div id="toggle"></div>
        </nav>
        <div class="menu-div">
          <ul>
            <a href="#home">Home</a>
            <a
              href="https://tahawy111.github.io/My_Porfolio_Websie-1/"
              target="_blank"
              >About Us</a
              >
              </ul>
              <span class="buttons">
              <button class="btn btn-red"><a href="#">get started</a></button>
              <button class="btn btn-gray"><a href="#">Download</a></button>
              </span>
              </div>`;
};
const createFooter = () => {
  let footer = document.querySelector(".footer");
  footer.innerHTML = `<div class="main-footer">
        <h1 class="title">Web Slices</h1>
        <p>You can follow me in this social media Web sites</p>

        <div class="social-icons">
          <a
            target="blank"
            href="https://www.linkedin.com/in/amer-tahawei-b1124b21b/"
            ><img src="./files/images/icons/linkedin.svg" alt=""
          /></a>
          <a target="blank" href="https://www.instagram.com/tahawei111/"
            ><img src="./files/images/icons/instagram.svg" alt=""
          /></a>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCZ8UXBv0rZZygWrDT5Bu1qw/featured"
            ><img src="./files/images/icons/youtube.svg" alt=""
          /></a>
          <a target="blank" href="https://github.com/tahawy111"
            ><img src="./files/images/icons/github.svg" alt=""
          /></a>
        </div>
      </div>`;
};

createHeader();
createFooter();
const toggle = document.getElementById("toggle");
let menuDiv = document.querySelector(".menu-div");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menuDiv.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (
    e.target.className !== "navbar" &&
    e.target.id !== "toggle" &&
    e.target.className !== "menu-div"
  ) {
    toggle.classList.remove("active");
    menuDiv.classList.remove("active");
  }
});
