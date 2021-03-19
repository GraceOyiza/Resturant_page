const contact= () => (
    `<div class="container contact-form">
    <form method="post">
        <h3>Drop Us a Message</h3>
       <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                </div>
                <div class="form-group">
                    <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                </div>
                <div class="form-group">
                    <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                </div>
                <div class="form-group">
                    <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <textarea name="txtMsg" class="form-control" placeholder="Your Message *"></textarea>
                </div>
            </div>
        </div>
    </form>
  </div>`);
  
  const contactpage = () => {
    const contactpage = document.createElement('div');
    // contactpage.insertAdjacentHTML('beforeend', contact());
    contactpage.innerHTML = contact();
    console.log(contactpage)
    return contactpage;
  };
  
  export default contactpage;