import React from "react";
import "./Landingpage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div>📞 (+1) 3344 999 999</div>
        <div>✉️ info@reachtheme.com</div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Echooling.</div>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Pages</li>
          <li>Courses</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <input type="text" placeholder="Search Course" className="search-input" />
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <span className="badge">Great Quality Social Life</span>
          <h1 className="hero-title">
            Discover the world of possible university.
          </h1>
          <button className="cta-button">Admissions</button>
        </div>
      </div>
      {/* Card Section */}
<section className="card-section">
  <h2 className="section-title">Our Popular Courses</h2>
  <div className="card-container">
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Course 1" />
      <h3>Web Development</h3>
      <p>Learn HTML, CSS, JavaScript and become a full-stack developer.</p>
      <button>Explore</button>
    </div>

    <div className="card">
      <img src="https://media.istockphoto.com/id/1479759169/photo/data-science-and-big-data-technology-data-scientist-computing-analysing-and-visualizing.webp?a=1&b=1&s=612x612&w=0&k=20&c=AMwuPLf0j_GZewydKMfh3_Olszwzk0IQlkMA8laRj2g=" alt="Course 2" />
      <h3>Data Science</h3>
      <p>Master data analysis, visualization and machine learning skills.</p>
      <button>Explore</button>
    </div>

    <div className="card">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Course 3" />
      <h3>UI/UX Design</h3>
      <p>Design beautiful, user-friendly websites and apps with Figma & Adobe XD.</p>
      <button>Explore</button>
    </div>
  </div>
</section>




     <section class="hero">
    <div class="hero-left">
      <div class="main-image">
        <img src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuaXZlcnNpdHklMjBzdHVkZW50fGVufDB8fDB8fHww" alt="Students" />
      </div>
    </div>
    <div class="hero-right">
      <h1>
        <span class="blue">Welcome to</span><br />
        <span class="red">Echooling LMS<br />Platform</span>
      </h1>
      <p>
        Education is both the act of teaching knowledge to others<br />
        and the act of receiving knowledge from someone else.
      </p>
      <p class="guide">
        Have questions? <a href="#">Get Free Guide</a>
      </p>
    </div>
  </section>


  <div className="campus-life-container">
      <h1 className="campus-life-heading">Campus Life</h1>
      
      <ul className="campus-life-list">
        <li className="campus-life-item">
          <h2 className="item-title">Do More, Stress Less</h2>
          <p className="item-content">
            Why I say old chap that is spilling he legged<br />
            It in my flat easy pesay.
          </p>
        </li>
        
        <li className="campus-life-item">
          <h2 className="item-title">The Business Intelligence</h2>
          <p className="item-content">
            Why I say old chap that is spilling he legged<br />
            It in my flat easy pesay.
          </p>
        </li>
        
        <li className="campus-life-item">
          <h2 className="item-title">System Administration</h2>
          <p className="item-content">
            Why I say old chap that is spilling he legged<br />
            It in my flat easy pesay.
          </p>
        </li>
      </ul>
      
      <a href="#" className="campus-life-link">More about Campus Life</a>
    </div>
  
  <br></br>
  <br></br>
  <br></br>
 <div class="stats-container">
        <div class="stat-card">
            <div class="stat-title">Successfully Trained</div>
            <div class="stat-number">1478</div>
            <div class="stat-label">ENROLLED LEARNERS</div>
        </div>

        <div class="stat-card">
            <div class="stat-title">Successfully Trained</div>
            <div class="stat-number">1731</div>
            <div class="stat-label">ENROLLED LEARNERS</div>
        </div>

        <div class="stat-card">
            <div class="stat-title">Successfully Trained</div>
            <div class="stat-number">280</div>
            <div class="stat-label">ENROLLED LEARNERS</div>
        </div>

        <div class="stat-card">
            <div class="stat-title">Successfully Trained</div>
            <div class="stat-number">1045</div>
            <div class="stat-label">ENROLLED LEARNERS</div>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>

    
  <section class="testimonial-section">
    <h2 class="section-title">What our student saying</h2>
    <div class="testimonial-card">
      <img src="https://images.pexels.com/photos/7125138/pexels-photo-7125138.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Student" class="testimonial-img" />
      <div class="testimonial-content">
        <h3>Justin Case</h3>
        <p class="student-role">Student</p>
        <p class="testimonial-text">
          Nulla porttitor accumsan tincidunt. Vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.
        </p>
        <div class="rating">
          ⭐⭐⭐⭐☆ <span class="rating-value">4.9</span> (<span class="reviews">14 Reviews</span>)
        </div>
      </div>
    </div>
  </section>

  <br></br>
  <br></br>
  <br></br>

   

 <section class="blogs-section">
    <h2 class="section-title">Echooing News and Blogs</h2>

    <div class="cards-container">
    
      <div class="blog-card">
        <div class="blog-img">
          <img src="https://images.pexels.com/photos/5905453/pexels-photo-5905453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Blog 1" />
          <span class="blog-date">April 18</span>
        </div>
        <div class="blog-content">
          <p class="blog-category">Education</p>
          <h3 class="blog-title">Kids future Schools & Corona Prevent to Growth</h3>
          <div class="blog-author">👤 Charlie Doyle</div>
        </div>
      </div>

    
      <div class="blog-card">
        <div class="blog-img">
          <img src="https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Blog 2" />
          <span class="blog-date">April 18</span>
        </div>
        <div class="blog-content">
          <p class="blog-category">Education</p>
          <h3 class="blog-title">Echooing future Schools & social Innovation</h3>
          <div class="blog-author">👤 Charlie Doyle</div>
        </div>
      </div>

     
      <div class="blog-card">
        <div class="blog-img">
          <img src="https://images.pexels.com/photos/6209469/pexels-photo-6209469.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Blog 3" />
          <span class="blog-date">April 18</span>
        </div>
        <div class="blog-content">
          <p class="blog-category">Education</p>
          <h3 class="blog-title">7 Learning system design tips For better eLearning</h3>
          <div class="blog-author">👤 Charlie Doyle</div>
        </div>
      </div>

    
      <div class="blog-card">
        <div class="blog-img">
          <img src="https://images.pexels.com/photos/5905453/pexels-photo-5905453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Blog 4" />
          <span class="blog-date">April 18</span>
        </div>
        <div class="blog-content">
          <p class="blog-category">Education</p>
          <h3 class="blog-title">Why schools should continue remote study</h3>
          <div class="blog-author">👤 Charlie Doyle</div>
        </div>
      </div>
    </div>
  </section>
  <br></br>

 <br></br>
  <br></br>
   <br></br>

{/* <footer class="footer">
    <div class="container">
    
      <div class="footer-col logo-col">
        <div class="footer-logo">
          <i class="fas fa-graduation-cap"></i>
          <span class="brand">Echoo<span style="color:#e60050;">ling</span>.</span>
        </div>
        <p>There are course and event custom post types so you can easily create and manage course, events.</p>
        <p><i class="fas fa-phone"></i> +(402) 762 441 83</p>
        <p><i class="fas fa-envelope"></i> info@echooling.com</p>
      </div>

     
      <div class="footer-col">
        <h4>About Us</h4>
        <ul>
          <li>About</li>
          <li>Courses</li>
          <li>Events</li>
          <li>Career</li>
          <li>Become a Teacher</li>
          <li>Contact</li>
        </ul>
      </div>

    
      <div class="footer-col">
        <h4>Useful Links</h4>
        <ul>
          <li>Browse Library</li>
          <li>Library</li>
          <li>Partners</li>
          <li>News & Blog</li>
          <li>FAQ</li>
          <li>Tutorials</li>
        </ul>
      </div>

     
      <div class="footer-col newsletter-col">
        <h4>Newsletter</h4>
        <p>Get the latest Echooling news delivered to you inbox</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit"><i class="fas fa-arrow-right"></i></button>
        </form>
      </div>
    </div>


     <div class="footer-bottom">
      <p>© 2022 <span style="color:#e60050;">Echooling.</span> All Rights Reserved</p>
      <div class="social-icons">
        <span>Follow us</span>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </footer> 

  */}


 </div>
  );
}
