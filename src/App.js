import './App.css';
import AboutMe from './AboutMe.js';

function App() {
    return (
        <div className="App">
            <header className="text-center">
                <h1>
                    <div className="d-inline-block pt-3 strokeme" style={{ fontFamily: "Permanent Marker" }}>Jacob</div>
                    <div className="d-inline pt-3 ps-2" style={{ fontFamily: "Permanent Marker" }}>Chen</div>
                </h1>
            </header>
            <div className="container pt-3">
                <nav>
                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist" style={{ fontFamily: "Varela Round" }}>
                        <button 
                            className="nav-link text-dark active fw-bold" id="nav-aboutme-tab" 
                            data-bs-toggle="tab" data-bs-target="#nav-aboutme" 
                            type="button" role="tab" aria-controls="nav-aboutme" 
                            aria-selected="true">About Me</button>
                        <button 
                            className="nav-link disabled text-muted" id="nav-portfolio-tab" 
                            data-bs-toggle="tab" data-bs-target="#nav-portfolio" 
                            type="button" role="tab" aria-controls="nav-portfolio" 
                            aria-selected="false">Portfolio</button>
                        <button 
                            className="nav-link disabled text-muted" id="nav-blog-tab" 
                            data-bs-toggle="tab" data-bs-target="#nav-blog" 
                            type="button" role="tab" aria-controls="nav-blog" 
                            aria-selected="false">Blog</button>
                        <button 
                            className="nav-link text-dark" id="nav-contact-tab" 
                            data-bs-toggle="tab" data-bs-target="#nav-contact" 
                            type="button" role="tab" aria-controls="nav-contact" 
                            aria-selected="false">Contact</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-aboutme" role="tabpanel" aria-labelledby="nav-aboutme-tab">
                        <AboutMe />
                    </div>
                    <div className="tab-pane fade" id="nav-portfolio" role="tabpanel" aria-labelledby="nav-portfolio-tab">

                    </div>
                    <div className="tab-pane fade" id="nav-blog" role="tabpanel" aria-labelledby="nav-blog-tab">

                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
