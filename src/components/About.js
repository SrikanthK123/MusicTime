import React from 'react'

const About = () => {
  return (
    <div>
      <div class="container">
        <div class="bd-example-snippet bd-code-snippet">
  <div class="bd-example m-1 border-0">
    
  <nav style={{margin:'10px',padding:'20px'}}>
  <div class="nav nav-tabs mb-3 justify-content-evenly  " id="nav-tab" role="tablist">
    <a class="nav-link" id="nav-Melody-tab" data-bs-toggle="tab" data-bs-target="#nav-Melody" href="#" role="tab" aria-controls="nav-Melody" aria-selected="false">Melody</a>
    <a class="nav-link" id="nav-Devotional-tab" data-bs-toggle="tab" data-bs-target="#nav-Devotional" href="#" role="tab" aria-controls="nav-Devotional" aria-selected="false">Devotional</a>
    
    <a class="nav-link" id="nav-Pop-tab" data-bs-toggle="tab" data-bs-target="#nav-Pop" href="#" role="tab" aria-controls="nav-Pop" aria-selected="false">Pop</a>
   
    <a class="nav-link" id="nav-Classical-tab" data-bs-toggle="tab" data-bs-target="#nav-Classical" href="#" role="tab" aria-controls="nav-Classical" aria-selected="true">Classical</a>
  </div>
</nav>

        <div class="tab-content " id="nav-tabContent">
          <div class="tab-pane fade" id="nav-Melody" role="tabpanel" aria-labelledby="nav-Melody-tab">
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
          {
    MelodySongs.map((item,index)=>(
      <div className='col d-flex justify-content-center my-2' >
          <div class="card" id="MovieCard" >
<div class="card-body d-flex align-items-center " style={{background:`url(${item.ImageUrl})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'100% 100%',borderRadius:'10px'}} >
 <h3 className='MovieName text-white'> {item.Name} </h3>
</div>
<div class="footer" style={{backgroundColor:'rgb(202 40 105'}}>
 <p class="lead fw-bold text-white "> <img src='https://cdn-icons-png.flaticon.com/512/3293/3293810.png' style={{width:'40px',height:'40px'}} /> {item.MovieSong} </p>
  
</div>
</div>
      </div>
    ))
  }
  </div>
          
          </div>
          <div class="tab-pane fade" id="nav-Devotional" role="tabpanel" aria-labelledby="nav-Devotional-tab">
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
          {
    Devotional.map((item,index)=>(
      <div className='col d-flex justify-content-center my-2'>
          <div class="card" id="MovieCard" >
          <div class="card-body d-flex align-items-center " style={{background:`url(${item.ImageUrl})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'100% 100%',borderRadius:'10px'}} >
 <h3 className='MovieName text-white'> {item.Name} </h3>
</div>
<div class="footer" style={{backgroundColor:'rgb(202 40 105'}}>
 <p class="lead fw-bold text-white "> <img src='https://cdn-icons-png.flaticon.com/512/3293/3293810.png' style={{width:'40px',height:'40px'}} /> {item.MovieSong} </p>
  
</div>
</div>
      </div>
    ))
  }
          </div>
          </div>
          <div class="tab-pane fade" id="nav-Pop" role="tabpanel" aria-labelledby="nav-Pop-tab">
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
          {
    PopSong.map((item,index)=>(
      <div className='col d-flex justify-content-center my-2'>
          <div class="card" id="MovieCard" >
          <div class="card-body d-flex align-items-center " style={{background:`url(${item.ImageUrl})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'100% 100%',borderRadius:'10px'}} >
 <h3 className='MovieName text-white'> {item.Name} </h3>
</div>
<div class="footer" style={{backgroundColor:'rgb(202 40 105'}}>
 <p class="lead fw-bold text-white "> <img src='https://cdn-icons-png.flaticon.com/512/3293/3293810.png' style={{width:'40px',height:'40px'}} /> {item.MovieSong} </p>
  
</div>
</div>
      </div>
    ))
  }
          </div>
          </div>
          <div class="tab-pane fade" id="nav-Classical" role="tabpanel" aria-labelledby="nav-Classical-tab">
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
            {
      ClassicalSong.map((item,index)=>(
          <div className='col d-flex justify-content-center my-2'>
              <div class="card" id="MovieCard" >
              <div class="card-body d-flex align-items-center " style={{background:`url(${item.ImageUrl})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'100% 100%',borderRadius:'10px'}} >
    <h3 className='MovieName text-white'> {item.Name} </h3>
    </div>
    <div class="footer" style={{backgroundColor:'rgb(202 40 105'}}>
    <p class="lead fw-bold text-white "> <img src='https://cdn-icons-png.flaticon.com/512/3293/3293810.png' style={{width:'40px',height:'40px'}} /> {item.MovieSong} </p>
      
    </div>
    </div>
          </div>
      ))
    }
            </div>
          </div>
        </div>
        
  </div>
</div>

        </div>
    </div>
  )
}

export default About
