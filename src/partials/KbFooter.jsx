function KbFooter() {

  return(
  <footer className="closing-layout">
    
    <div className="information-about">
      {/* Opening Hours */}
      <div className="closing-header">
        <h1>OPENING HOURS</h1>
      </div>

      <div className="closing-info">

        <div>
          {/* Monday-Thursday */}
          Monday-Thursday
        </div>

        <div>
          {/* 5.00pm - 8.30pm */}
          5.00pm - 8.30pm
        </div>

        <div>
          {/* Friday */}
          Friday
        </div>

        <div>
          {/* 6.00pm - 7.00pm */}
          6.00pm - 7.00pm
        </div>

        <div>
          {/* Saturday & Sunday */}
          Saturday & Sunday
        </div>

        <div>
          {/* 9.00am-11.00am */}
          9.00am-11.00am
        </div>
        
      </div>
      
    </div>


    <div className="information-about">
      {/* Address */}
      <div className="closing-header">
        <h1>ADDRESS</h1>
      </div>

      <div className="closing-info">

        <div>
          {/* 263 Horton Highway */}
          263 Horton Highway<br></br>
          Mineola, NY 11501
        </div>

        <div>
          {/* brittany@killerbodyfitness.com */}
          brittany@killerbodyfitness.com
        </div>

        <div>
          {/* Tel:516-216-5402 */}
          Tel:516-216-5402
        </div>
        
      </div>
      
    </div>


    <div className="information-about">
      {/* Find Us */}
      <div className="closing-header">
        <h1>FIND US</h1>
      </div>

      <div className="closing-info">

        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.683086203333!2d-73.64867642524425!3d40.74699843547424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26391020cb0d1%3A0x954461b010de24ce!2sKiller%20Body%20Fitness%20%26%20Training!5e0!3m2!1sen!2sus!4v1708437450675!5m2!1sen!2sus" 
            width="300" height="150" style={{border:0}} allowFullScreen loading="lazy" title="Location Map"></iframe>
        </div>
      </div>
      
    </div>

  </footer>

  );
}
export default KbFooter