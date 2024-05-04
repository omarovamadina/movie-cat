import React from 'react';
import './Iconset.scss';

/**
 * Array of JSX elements representing paths in an SVG.
 * @typedef {Array<JSX.Element>} SVGPathArray
 */

/**
 * A collection of icon paths to be used in SVG.
 * @type {SVGPathArray}
 */
const iconPaths = {
    bookmark: <>
        <path className='optional-fill f1 stroke s1 nss'
            d="M4 5.61651V21.2513C4 22.088 5.17005 22.507 5.85495 21.9155L10.9684 17.4973C11.3926 17.1302 12.0814 17.1302 12.5056 17.4973L17.619 21.9155C18.3039 22.507 19.474 22.088 19.474 21.2513V5.61651C19.474 3.61887 17.5995 2 15.288 2H8.18597C5.87441 2 4 3.61887 4 5.61651Z"
        />
    </>,
    search: <>
        <path className='optional-fill f1 stroke s1 nss'
            d="M9.51129 17.9199C6.57905 17.6145 4.21354 16.2913 2.79671 13.0052C2.02052 11.2167 1.86036 9.60268 2.10677 8.07592C2.36549 6.53462 3.05543 5.03694 4.10266 3.51018C4.53387 2.87039 4.97741 2.4778 5.43326 2.25969C5.90143 2.02704 6.43121 1.95434 7.08418 2.02704C10.768 2.44872 13.8111 4.74613 16.768 7.34889C17.6674 8.13408 18 8.99198 18 9.86441C18 10.7805 17.6181 11.8565 16.8542 13.0197C14.9446 15.8842 13.2813 18.2543 10.1643 17.9781L9.49897 17.9199H9.51129Z"
        />
        <path className='stroke s1 nss'
            d="M14 16L20 22"
        />
    </>,
    arrowStem: <>
        <path className='stroke s1 nss' 
            d="M3.72412 10.5517L12 2.27585M12 2.27585L20.2758 10.5517M12 2.27585L12 22.2758"
        />
    </>,
    arrowNoStem: <>
        <path className='stroke s1 nss' 
            d="M3.72412 16.2759L12 8L20.2758 16.2759"
        />
    </>,
    star: <>
        <path className='optional-fill f1 stroke s1 nss'
            d="M5.26 19.556C5.31012 19.01 5.43734 18.4751 5.53145 17.9357C5.68656 17.0454 5.86248 16.1587 6.00956 15.267C6.08239 14.8254 5.94051 14.4269 5.59765 14.1102C4.67595 13.2594 3.74763 12.4144 2.82215 11.5672C2.7148 11.469 2.60461 11.3739 2.49868 11.2749C2.03807 10.8439 1.87869 10.3366 2.09576 9.75238C2.31283 9.16817 2.77959 8.87629 3.41991 8.7901C4.79891 8.60484 6.17602 8.40892 7.55455 8.22144C8.11684 8.14503 8.50368 7.85848 8.75101 7.38534C9.37573 6.18938 9.99902 4.99253 10.6322 3.80057C11.0333 3.04532 11.9578 2.78587 12.7471 3.18882C13.0602 3.34875 13.255 3.60198 13.4078 3.89298C13.7946 4.63001 14.181 5.3666 14.5683 6.10319C14.7636 6.47504 14.9835 6.83712 15.1523 7.21874C15.4413 7.8727 15.9624 8.1708 16.6926 8.25743C18.0276 8.41603 19.3579 8.60662 20.6891 8.79232C21.2973 8.87718 21.712 9.20815 21.9088 9.75104C22.1069 10.297 21.9806 10.7964 21.546 11.2025C20.613 12.0741 19.6913 12.9591 18.719 13.7907C18.0815 14.3358 17.8933 14.9312 18.0673 15.7162C18.3322 16.9099 18.5213 18.1183 18.7412 19.3205C18.8462 19.8945 18.6377 20.3596 18.1501 20.7039C17.6677 21.0447 17.1338 21.0904 16.5895 20.8457C16.1776 20.6604 15.7784 20.4503 15.3736 20.2512C14.5082 19.8252 13.6404 19.404 12.7788 18.9713C12.2354 18.6985 11.718 18.7305 11.1827 19.0015C9.96923 19.6159 8.74912 20.2197 7.52476 20.815C6.59265 21.2686 5.53145 20.8288 5.29499 19.9087C5.26473 19.7914 5.26898 19.6737 5.26047 19.5551L5.26 19.556Z"
        />
    </>
};



/**
 * A collection of blob shape paths to be used in SVG.
 * @type {SVGPathArray}
 */
const blobIcons = [
    <path className='optional-fill stroke s1 nss' d="M10.8504 2.00998C13.0491 2.06406 15.0638 2.65897 17.0892 3.56756C21.7087 5.64434 21.687 9.27871 19.5804 13.4431C18.5731 15.4333 17.1921 17.2559 15.8382 19.0515C14.1702 21.2635 12.1014 22.4046 9.07951 21.8692C2.42372 20.6902 2.39123 20.7983 3.78845 14.0542C4.19462 12.0964 4.25961 10.1278 4.29752 8.14297C4.37876 3.55134 6.26338 1.81528 10.8504 2.01539V2.00998Z"/>,
    <path className='optional-fill stroke s1 nss' d="M15.4201 2.91206C20.4506 2.9238 22.9129 6.07535 21.6906 10.7234C21.5437 11.2868 21.4202 11.862 21.3145 12.4371C20.1391 18.6757 13.8157 22.4434 7.64514 20.7239C4.17198 19.7555 3.13179 16.9972 2.19151 14.0628C1.37464 11.5216 3.34923 10.3713 4.75378 8.94519C5.78221 7.90055 6.82239 6.86764 7.92134 5.89928C10.1016 3.97432 12.517 2.58341 15.4201 2.90619V2.91206Z"/>,
    <path className='optional-fill stroke s1 nss' d="M21.9978 12.3071C22.1143 18.2759 17.4847 21.6921 12.4782 19.7265C10.0886 18.7852 7.69898 17.7443 5.49233 16.4432C1.32298 13.9848 0.812899 7.84445 4.36128 4.53342C5.34817 3.6143 6.60675 3.58108 7.75443 3.89668C10.3769 4.61647 13.0493 4.6663 15.705 4.61093C18.5881 4.55557 20.5009 5.36948 20.9222 8.54209C21.1108 9.97613 21.7151 11.3548 21.9978 12.3071Z"/>,
    <path className='optional-fill stroke s1 nss' d="M15.2013 2C17.9746 2.15261 20.0008 2.67825 20.929 5.09733C21.9364 7.71989 22.1062 10.4046 20.0461 12.4846C17.6633 14.8924 15.2013 17.1701 13.4808 20.1544C12.762 21.4092 11.4206 22.3079 9.90949 21.9009C7.69654 21.3075 5.13834 21.0531 4.27241 18.3006C4.07432 17.6788 3.94414 17.0288 3.8366 16.3845C3.36119 13.6037 1.08032 10.5346 3.30459 8.07597C6.49668 4.53778 10.8943 2.67825 15.2013 2Z"/>,
    <path className='optional-fill stroke s1 nss' d="M11.4291 21.9999C10.1593 21.7606 8.33851 21.617 6.65544 21.0667C2.44477 19.691 1.07915 16.2158 3.19946 12.3817C4.7867 9.51057 6.42784 6.65741 8.84163 4.34259C12.2257 1.09466 15.8434 1.22026 18.964 4.74334C22.5098 8.7569 22.6596 11.0239 19.7247 15.6715C18.982 16.8498 18.377 18.1179 17.5804 19.2544C16.1609 21.2761 14.5317 22.0118 11.4291 21.9999Z"/>,
    <path className='optional-fill stroke s1 nss' d="M20.5432 16.2928C21.0514 19.8831 19.3236 20.8346 17.5196 21.5197C12.2665 23.5243 4.39003 18.9507 3.44994 13.4255C2.78933 9.55605 6.13684 5.05856 10.9961 3.35853C12.3936 2.87008 13.8228 2.48948 15.2583 2.1279C17.526 1.56334 19.7492 2.92083 19.7937 5.15372C19.8826 9.26425 19.8318 13.3748 20.5369 16.2928H20.5432Z"/>,
    <path className='optional-fill stroke s1 nss' d="M12.1459 20.4708C8.24664 20.2767 4.93052 18.9768 3.00446 15.2475C1.0784 11.5183 2.09149 8.31251 4.60656 5.24792C5.73157 3.87151 6.99794 3.37742 8.69428 3.54211C13.1766 3.97739 16.8344 6.31847 20.286 8.85366C22.6597 10.6007 22.4064 12.9947 20.5157 15.3769C18.3305 18.1298 16.1865 20.7649 12.1459 20.465V20.4708Z"/>,
];

/**
 * Wraps a Path inside an SVG with an optional rotation.
 * @param {JSX.Element} icon - The SVG icon element to be wrapped.
 * @param {number} [rotation=0] - The rotation angle in degrees. Defaults to 0.
 * @returns {JSX.Element} The SVG icon wrapped with rotation if specified.
 */
const pathSVGWrapper = (icon, rotation = 0) => { 
    return <svg 
        className={`_icon24` }
        width="24px" 
        height="24px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" 
        fill="transparent" 
        stroke="transparent"
        strokeWidth="0"
    >
        <g className='pathContainer' transform={`rotate(${rotation} 12 12)`}>
            {icon}
        </g>
    </svg>
};

export const BlobIcon = ({index}) => {
    const wrappedIndex = index % blobIcons.length; // Modulo Wraps the index number so that it can't exceed the highest index in the array.
    return pathSVGWrapper(blobIcons[wrappedIndex]);
}

export const BookmarkIcon = () => {
    return pathSVGWrapper(iconPaths.bookmark);
};

export const SearchIcon = () => {
    return pathSVGWrapper(iconPaths.search);
};

export const StarIcon = () => {
    return pathSVGWrapper(iconPaths.star);
};

const arrow = (stem = true) => (stem ? iconPaths.arrowStem : iconPaths.arrowNoStem)

export const ArrowUp = ({stem}) => pathSVGWrapper(arrow(stem), 0);
export const ArrowDown = ({stem}) => pathSVGWrapper(arrow(stem), 180);
export const ArrowLeft = ({stem}) => pathSVGWrapper(arrow(stem), 270);
export const ArrowRight = ({stem}) => pathSVGWrapper(arrow(stem), 90);
export const ArrowTopLeft = ({stem}) => pathSVGWrapper(arrow(stem), 315);
export const ArrowTopRight = ({stem}) => pathSVGWrapper(arrow(stem), 45);
export const ArrowBottomLeft = ({stem}) => pathSVGWrapper(arrow(stem), 225);
export const ArrowBottomRight = ({stem}) => pathSVGWrapper(arrow(stem), 135);

const Iconset = {
    BookmarkIcon,
    SearchIcon,
    BlobIcon,
    StarIcon,
    Arrow: {
        Up: ArrowUp,
        Down: ArrowDown,
        Left: ArrowLeft,
        Right: ArrowRight,
        TopLeft: ArrowTopLeft,
        TopRight: ArrowTopRight,
        BottomLeft: ArrowBottomLeft,
        BottomRight: ArrowBottomRight
    }
}

export default Iconset;