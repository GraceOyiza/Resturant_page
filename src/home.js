const slidecaption = () => (
`<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://unsplash.com/photos/VH0ZVmUJZZo" class="d-block w-100 homepage" alt="First image">
    <div class="carousel-caption d-none d-md-block font-weight">
      <h2>First slide label</h2>
      <p>Some representative placeholder content for the first slide.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://unsplash.com/photos/7YxWtp5WGXM" class="d-block w-100 homepage" alt="Second image">
    <div class="carousel-caption d-none d-md-block font-weight">
      <h2>Second slide label</h2>
      <p>Some representative placeholder content for the second slide.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://unsplash.com/photos/tKN1WXrzQ3s" class="d-block w-100 homepage" alt="Third image">
    <div class="carousel-caption d-none d-md-block font-weight">
      <h2>Third slide label</h2>
      <p>Some representative placeholder content for the third slide.</p>
    </div>
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>`
);

export default slidecaption;

