import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import style from './index.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div className={`${style.light} ${style._allowCascade}`}>
        <App />
      </div>
    </div>
  </React.StrictMode>
);

let remove = null;

const updatePixelRatio = () => {
  if (remove != null) {
    remove();
  }

  let mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
  let media = matchMedia(mqString);
  media.addListener(updatePixelRatio);
  remove = function () {
    media.removeListener(updatePixelRatio);
  };

  // Set the --zoom CSS variable at root
  document.documentElement.style.setProperty(`--zoom`, window.devicePixelRatio);
};

updatePixelRatio();