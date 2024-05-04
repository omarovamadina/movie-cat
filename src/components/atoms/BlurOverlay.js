import React from 'react';
import style from './BlurOverlay.module.scss';


/**
 * Returns the angle wrapped to be within the range of 0 to 359 degrees.
 *
 * @param {number} angle - The angle to be wrapped.
 * @return {number} The angle wrapped within the range of 0 to 359 degrees.
 */
function wrapAngle(angle) {
    return angle % 360;
}

const BlurOverlay = ({className , src, alt, blurAngle, noBlurOnHover}) => {
  return (
    <div 
      className={`${className} ${style.container} ${noBlurOnHover ? style.fadeout : ""}`}
      style={{"--blurAngle": `${wrapAngle(blurAngle)}`}}
    >
      {src && <img className={style.image} src={src} alt={alt}/>}
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`${style.blurOverlay} ${style[`blr${i * 5}`]}`} />
      ))}
      {/* <div className="content">Blurred Image Content</div> */}
    </div>
  );
};
BlurOverlay.defaultProps = {
  noBlurOnHover: true,
  blurAngle: 0,
  alt: "",
};

export default BlurOverlay;