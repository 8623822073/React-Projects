export const Header = () => {
  return (
    <>
      <section className="section section-one">
        <nav className="navlinks">
          <div className="logo">Maharaja Hotel</div>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">SERVICE</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">GALLERY</a>
            </li>
            
          </ul>
          <div className="btn">
          <input type="text" className="search" placeholder="search here..."/>
            <button className="book-now">Book Now</button></div>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>

        
      </section>
    </>
  );
};
