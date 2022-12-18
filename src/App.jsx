function Header() {
    return (
       <div class="card">
         <div class="card-content">
           <span class="card-title">Fish Images</span>
         </div>
       </div>
     );
  }

  function Main() {
    return (
      <main>
        <nav>
          <div class="nav-wrapper">
            <ul class="hide-on-med-and-down">
              <li>
                 <a href="#Acadian Redfish">Acadian Redfish</a>
              </li>
              <li>
                  <a href="#Alaska Pollpck">Alaska Pollpck</a>
              </li>
              <li>
                  <a href="#Alaska Snow Crab">Alaska Snow Crab</a>
              </li>
              <li>
                  <a href="#American Lobster">American Lobster</a>
              </li>
              <li>
                  <a href="#Arrowtooth Flounder">Arrowtooth Flounder</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container red lighten-5">
          <figure>
            <div id = "Acadian Redfish">
            <img src = "https://www.fishwatch.gov/sites/default/files/acadian_redfish.png"/ >
            </div>
            <div id = "Alaska Pollpck">
              <img src = "https://www.fishwatch.gov/sites/default/files/alaska_pollock.png"/>
            </div>
            <div id = "Alaska Snow Crab">
              <img src = "https://www.fishwatch.gov/sites/default/files/alaska_snow_crab.png"/>
            </div>
            <div id = "American Lobster">
              <img src = "https://www.fishwatch.gov/sites/default/files/Lobster_American_NB_Web.png"/>
            </div>
            <div id = "Arrowtooth Flounder">
              <img src = "https://www.fishwatch.gov/sites/default/files/arrowtooth_flounder_0.png"/>
            </div>          
          </figure>
        </div>
      </main>
    );
  }

  function Footer() {
    return (
      <footer class="page-footer">
        <div class="container">
          <div class="center-align">
            <p>Fish images are retrieved from FishWatch API</p>
            <p>
              <a href="https://www.fishwatch.gov/developers">Donate to FishWatch API</a>
            </p>
          </div>  
        </div>
        <div class="footer-copyright">
          <div class="container">
            <div class="center-align">
              日本大学文理学部情報科学科 Webプログラミング 演習3
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;