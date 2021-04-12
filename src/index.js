import 'bootstrap/dist/css/bootstrap.min.css';

const render = () => (
  import(`./assets/sass/style.scss`).then(() => {
    require('./AppRenderer');
  })
);

render();