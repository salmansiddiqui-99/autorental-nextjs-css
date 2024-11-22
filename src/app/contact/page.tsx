import "@/app/style.css";

export default function About() {
  return (
    <main>
      <header>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
          <li className="hd_clr">
            <a href="./contact">Contact Us</a>
          </li>
        </ul>
      </header>

      <section className="cd">
        <div className="product">
          <h1 className="hd">Contact Us</h1>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />

            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Your message here..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="cd">
        <div className="product">
          <h1 className="hd">Contact Info</h1>
        </div>
        <div className="contact-info">
          <ul>
            <li>
              <strong>Phone:</strong> +123 456 7890
            </li>
            <li>
              <strong>Email:</strong> info@carrental.com
            </li>
            <li>
              <strong>Location:</strong> 123 Main Street, City, Country
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <h4>© Copyright All Rights Reserved 2018-2024</h4>
      </footer>
    </main>
  );
}
