import React, { useState } from 'react';
import style from './Accordion.module.scss';
import {BlobIcon, ArrowDown} from 'components/atoms/Iconset';

const Accordion = ({ items, allCollapsible, defaultIndex  }) => {

    const [activeIndex, setActiveIndex] = useState(allCollapsible ? null : defaultIndex);

    const handeClick = (index) => {
        if (allCollapsible) {
        setActiveIndex(index === activeIndex ? null : index);
        } 
        else {setActiveIndex(index);}
    }

  return (
    <div className={style.container}>
      {items.map((item, index) => (
        <div className={`${style.item} ${activeIndex === index ? style.active : ''}`} key={item.title}>
            <div className={style.header} onClick={() => handeClick(index)}>
                <div className={`${style.icon} ${style._allowCascade}`}><BlobIcon index={index}/></div>
                <p className={style.title}>{item.title}</p>
                {allCollapsible && <div className={`${style.arrow} ${style._allowCascade}`}><ArrowDown stem={false}/></div>}
            </div>
            <div className={style.content}>
                {item.content}
            </div>
        </div>
      ))}
    </div>
  )
}
Accordion.defaultProps = {
  defaultIndex: 0,
  allCollapsible: true,
}

export default Accordion

