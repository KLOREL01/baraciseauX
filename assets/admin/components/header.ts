// import du css
import './header.scss';

class Header {
  public constructor() {
    this.header();
  }

  public header() {

    document.getElementById('btn-aside-left').addEventListener('click', (e) => {
      document.body.classList.toggle('w-aside-minimize');
    });
  }
}

new Header();