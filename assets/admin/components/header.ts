// import du css
import './header.scss';

class Header {
  public constructor() {

    this.header();
    this.headerMobile();
  }

  public header() {

    document.getElementById('btn-aside-left').addEventListener('click', (e) => {
      document.body.classList.toggle('w-aside-minimize');

      if (document.body.className === 'w-aside-minimize') {
        const submenu: HTMLCollectionOf<Element> = document.getElementsByClassName('w-submenu-open');

        for (let i = 0; i < submenu.length; i++) {
          submenu[i].classList.remove('w-submenu-open');
        }
      }
    });

    const itemToggle: HTMLCollectionOf<Element> = document.getElementsByClassName('w-item-toggle');

    for (let i = 0; i < itemToggle.length; i++) {
      itemToggle[i].addEventListener('click', (e) => {
        e.preventDefault();
        itemToggle[i].parentElement.classList.toggle('w-submenu-open');
      });
    }
  }

  public headerMobile() {

    document.getElementsByClassName('w-header-toggle-left')[0].addEventListener('click', (e) => {
      e.preventDefault();
      const child: HTMLDivElement = document.createElement('div');
      child.classList.add('w-aside-overlay');
      child.addEventListener('click', (e) => {
        document.getElementsByClassName('w-aside-overlay')[0].remove();
        document.getElementsByClassName('w-aside-fixed')[0].classList.toggle('w-aside-on');
      });
      document.getElementsByClassName('w-aside-fixed')[0].classList.toggle('w-aside-on');
      document.getElementsByClassName('w-header')[0].appendChild(child);
    });
  }
}

new Header();