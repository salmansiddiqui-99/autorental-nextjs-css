import "@/app/style.css";

export default function About() {
  return (
    <main>
      <header>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="hd_clr">
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./contact">Contact Us</a>
          </li>
        </ul>
      </header>

      <section className="cd">
        <div className="product">
          <h1 className="hd">Car Dealer</h1>
          <p>
            Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
            amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
            venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
            ipsum dolor sit amet nullam dolore.Etiam quis viverra lorem, in
            semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus
            arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et
            magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam
            dolore.
          </p>
        </div>
        <img src="/cd.jpg"></img>
      </section>

      <section className="cd">
        <div className="product">
          <h1 className="hd">Booking</h1>
          <p>
            tiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
            amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
            venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
            ipsum dolor sit amet nullam dolore.
          </p>
        </div>
        <img src="/book.jpg"></img>
      </section>

      <section className="cd">
        <div className="product">
          <h1 className="hd">Travel</h1>
          <p>
            tiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
            amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
            venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
            ipsum dolor sit amet nullam dolore.
          </p>
        </div>
        <img src="/travel.jpg"></img>
      </section>

      <footer>
        <h4>© Copyright All Rights Reserved 2018-2024</h4>
      </footer>
    </main>
  );
}
