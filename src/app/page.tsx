import "./style.css";

export default function Home() {
  return (
    <main>
      <header>
        <ul>
          <li className="hd_clr">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./contact">Contact Us</a>
          </li>
        </ul>
      </header>

      <div className="bg">
        <button className="center-button">BOOK NOW!</button>
        <img src="/bg.jpg"></img>
      </div>

      <div className="product">
        <div className="hd">
          <h1>Our Cars</h1>
        </div>
        <ul>
          <li>
            <img src="/p1.jpg"></img>
          </li>
          <li>
            <img src="/p2.jpg"></img>
          </li>
          <li>
            <img src="/p3.jpg"></img>
          </li>
        </ul>
      </div>

      <div className="product">
        <ul>
          <li>
            <img src="/p4.jpg"></img>
          </li>
          <li>
            <img src="/p5.jpg"></img>
          </li>
          <li>
            <img src="/p6.jpg"></img>
          </li>
        </ul>
      </div>

      <footer>
        <h4>© Copyright All Rights Reserved 2018-2024</h4>
      </footer>
    </main>
  );
}
