import React, { Component } from 'react';
import '../../styles/carousel.css';

class Carousel extends Component {
  render () {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
          <li data-target="#myCarousel" data-slide-to="5"></li>
          <li data-target="#myCarousel" data-slide-to="6"></li>
          <li data-target="#myCarousel" data-slide-to="7"></li>
          <li data-target="#myCarousel" data-slide-to="8"></li>
          <li data-target="#myCarousel" data-slide-to="9"></li>
          <li data-target="#myCarousel" data-slide-to="10"></li>
          <li data-target="#myCarousel" data-slide-to="11"></li>
          <li data-target="#myCarousel" data-slide-to="12"></li>
          <li data-target="#myCarousel" data-slide-to="13"></li>
          <li data-target="#myCarousel" data-slide-to="14"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src="https://s-media-cache-ak0.pinimg.com/564x/77/1f/62/771f62e920a5fc38092b9d054ba4304e.jpg"/>
          </div>

          <div className="item">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/f6/1b/e3/f61be3fbc227dd4150eae536b43b4e19.jpg" />
          </div>

          <div className="item">
            <img src="https://i.pinimg.com/736x/8d/6e/01/8d6e0162e7fe61f995e5219c3c7f4596--black-panther-marvel-marvel-dc.jpg" alt="No Image" />
          </div>

        <div className="item">
          <img src="https://s-media-cache-ak0.pinimg.com/564x/d2/29/f5/d229f55a1753a19773bc51ca52505f7e.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="http://orig04.deviantart.net/852e/f/2015/006/e/d/darth_vaderth_by_chunli_thiennguyen_by_thiennh2-d8culs8.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="https://i2.wp.com/www.fiz-x.com/wp-content/uploads/2014/11/rocket_racoon__and_groot__by_espeng-d82nxdj.jpg?resize=728%2C900" alt="No Image" />
        </div>

        <div className="item">
          <img src="https://s-media-cache-ak0.pinimg.com/564x/71/f3/2f/71f32fa0a6d47add7ad63dda70a2a3c4.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="http://static2.businessinsider.com/image/56ba2276dd089589148b460f-1190-625/18-gorgeous-pieces-of-game-of-thrones-fan-art.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="https://wallpaperscraft.com/image/thor_fan_art_battle_hammer_cloak_22307_3840x2160.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="http://www.cruzine.com/wp-content/uploads/2014/06/001-cool-concept-art-stef-tastan.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="https://pbs.twimg.com/media/CT4TuG5W4AACKAj.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="http://2.media.dorkly.cvcdn.com/33/32/3b446c2fde952cc602387070f7b086ee.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="http://68.media.tumblr.com/b2f76cbc081569d219fdc9e74583df32/tumblr_o9fgeoUQkq1twfwavo1_500.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="https://fanart.tv/fanart/movies/348/movieposter/alien-54c163894188d.jpg" alt="No Image" />
        </div>

        <div className="item">
          <img src="https://img00.deviantart.net/9269/i/2017/121/a/4/winter_is_here_by_andrewkwan-dabfiwk.jpg" alt="No Image" />
        </div>
      </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
    }
  }

export default Carousel;
