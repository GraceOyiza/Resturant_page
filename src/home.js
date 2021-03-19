const slidecaption = () => (
`<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"" class="d-block w-100 homepage" alt="...">
    <div class="carousel-caption d-none d-md-block font-weight">
      <h2>First slide label</h2>
      <p>Some representative placeholder content for the first slide.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1592406118211-b340891b0af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="d-block w-100 homepage" alt="...">
    <div class="carousel-caption d-none d-md-block font-weight">
      <h2>Second slide label</h2>
      <p>Some representative placeholder content for the second slide.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1592406118211-b340891b0af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="d-block w-100 homepage" alt="...">
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

