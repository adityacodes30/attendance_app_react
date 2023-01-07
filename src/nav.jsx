import React from "react";





function Nav()
{  return (

  <nav>
	<input id="nav-toggle" type="checkbox" />
	<div class="logo">react<strong>Attendance</strong></div>
	<ul class="links">
		<li><a href="#">Home</a></li>
		<li><a href="#">Log</a></li>
		<li><a href="#work">Github Repo </a></li>
	</ul>
	<label for="nav-toggle" class="icon-burger">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</label>
</nav>
  )}

export default Nav ;



// <nav class="navbar navbar-expand-lg navbar-dark">
//   <div class="container-fluid ">
//     <a class="navbar-brand " href="#">Attendance System</a>
  
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Search</a>
//         </li>
        
//         <li class="nav-item">
//           <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Github repo</a>
//         </li>
//       </ul>
//       </div>
    
//   </div>
// </nav>

