import React from "react";
import {StarIcon} from "components/atoms/Iconset";
import style from "./Star.module.scss";

export const Star = ({ratio}) => {
    const workingRatio = ratio || 0; // defaults to 0 when ratio is undefined.
    const fillPercentage = workingRatio * 100;
    return (
        <div className={`${style.singleStar}`} style={{ '--fillPercentage': fillPercentage }}>

            <div className={`${style.cropper}`}>
                <div className={`${style.starFill} ${style._allowCascade}`}>
                    <StarIcon/>
                </div>
            </div>

            <div className={`${style.starStroke} ${style._allowCascade}`}>
                <StarIcon/>
            </div>
        </div>
    )
}

export const Rating = ({rating, base}) => {
    const numStars = 5; // number of stars
    const rescaledRating = rating / (base / numStars); // The rating passed to the component might be base 5, 10 (the default), which this canlculation handles.

    /* @@note
        The goal achieved with the Math functions below is to:
        Provide a value with a fraction for the star that is supposed to be partially filled,
        and either 0 or 1 for either the empty or full stars respectively.
    */
    const stars = Array.from({ length: numStars }, (_, index) =>
        <Star key={index} ratio={Math.min(1, Math.max(0, rescaledRating - index))}/>
    );

    /* @@note 
        The here is an alternative way of doing the same thing as above but I find that the one used above is more readable.

        const stars = [...Array(numStars)].map((_, index) =>
            <Star key={index} ratio={Math.min(1, Math.max(0, rating - index))}/>
        );
    */

    return (
        <div className={style.container}>{stars}</div>
    )
}
// setting default values for the props.
Rating.defaultProps = {
    base: 10,
    rating: 0,
};

export default Rating;