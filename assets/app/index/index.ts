// import des dépendances

// import du css
import './index.scss';

class Index {
  private _window: any = window;

  private _parallaxMove1: any = document.getElementById('parallax-one');
  private _parallaxMoveBack1: any = document.getElementById('parallax-move-back-one');

  private _parallaxMove2: any = document.getElementById('parallax-two');
  private _parallaxMoveBack2: any = document.getElementById('parallax-move-back-two');

  private _width: number = window.innerWidth;
  private _scrollTop: any;

  public constructor() {
    this._window.requestAnimationFrame = (f) => {setTimeout(f, 1000/60)};

    document.addEventListener('scroll', () => { // on scroll la page
      this._window.requestAnimationFrame(this._parallaxMove());
    }, false);

  }

  private _parallaxMove(): void {
    if (this._width <= 576) {

      this._scrollTop = this._window.scrollY;
      this._parallaxMove1.style.bottom = -120 + this._scrollTop * .1 + 'px';
      this._parallaxMoveBack1.style.top = 470 - this._scrollTop * .5 + 'px';
      this._parallaxMoveBack2.style.top = 1000 - this._scrollTop * .3 + 'px';
      this._parallaxMove2.style.bottom = -800 + this._scrollTop * .15 + 'px';

    } else if (this._width <= 768) {

      this._scrollTop = this._window.scrollY;
      this._parallaxMove1.style.bottom = 300 + this._scrollTop * .3 + 'px';
      this._parallaxMoveBack1.style.top = 800 - this._scrollTop * .6 + 'px';
      this._parallaxMoveBack2.style.top = 2000 - this._scrollTop * .4 + 'px';
      this._parallaxMove2.style.bottom = 400 + this._scrollTop * .3 + 'px';

    } else {

      this._scrollTop = this._window.scrollY;
      this._parallaxMove1.style.transform = 'translate3d(0, '+ (450 - (this._scrollTop * .3)) +'px ,0)';
      this._parallaxMoveBack1.style.transform = 'translate3d(0, '+ (100 - (this._scrollTop * .4)) + 'px ,0)';

      if (this._scrollTop >= 2500) {
        let scroll = this._scrollTop - 2000;
        this._parallaxMoveBack2.style.transform = 'translate3d(0, '+ -(scroll * .4) + 'px ,0)';
      }

      if (this._scrollTop >= 3500) {
        let scroll = this._scrollTop - 4200;
        this._parallaxMove2.style.transform = 'translate3d(0, ' + -(scroll * .3) + 'px ,0)';
      }

    }
  }

}

new Index();