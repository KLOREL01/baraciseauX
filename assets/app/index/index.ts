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
      this._parallaxMove1.style.bottom = 300 + this._scrollTop * .3 + 'px';
    } else if (this._width <= 768) {
      this._scrollTop = this._window.scrollY;
      this._parallaxMove1.style.bottom = 300 + this._scrollTop * .3 + 'px';
      this._parallaxMoveBack1.style.top = 800 - this._scrollTop * .6 + 'px';
      this._parallaxMoveBack2.style.top = 2000 - this._scrollTop * .4 + 'px';
      this._parallaxMove2.style.bottom = 400 + this._scrollTop * .3 + 'px';
    } else {
      this._scrollTop = this._window.scrollY;
      this._parallaxMove1.style.bottom = +this._scrollTop * .3 + 'px';
      this._parallaxMoveBack1.style.top = 100 - this._scrollTop * .4 + 'px';
      this._parallaxMoveBack2.style.top = 780 - this._scrollTop * .4 + 'px';
      this._parallaxMove2.style.bottom = -900 + this._scrollTop * .3 + 'px';
    }
  }

}

new Index();