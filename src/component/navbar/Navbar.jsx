import react from "react";
import "./navbar.css"
import { Link } from 'react-router-dom';

//<nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav">
//         <a class="nav-link active" aria-current="page" href="#">Home</a>
//         <a class="nav-link" href="#">Features</a>
//         <a class="nav-link" href="#">Pricing</a>
//         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </div>
//     </div>
//   </div>
// </nav>


function Navbar() {
    return (
        <nav class="navbar navbar-dark">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand text-white">
                    <img src="https://i.ibb.co/B6RJYxK/Untitled-design-96-1-1024x576-removebg.png" />
                    Jai Hind Students
                </Link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" className="nav-link active" aria-current="page" >Main</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;