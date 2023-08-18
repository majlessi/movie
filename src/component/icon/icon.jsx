import React from "react";
export const ChevronDown = ({fill, size, height, width, ...props}) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const Lock = ({fill, size, height, width, ...props}) => {
    const color = fill;

    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g transform="translate(3.5 2)">
                <path
                    d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(3.85 0.75)"
                />
                <path
                    d="M.5,0V2.221"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(7.91 12.156)"
                />
                <path
                    d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(0.75 6.824)"
                />
            </g>
        </svg>
    );
};

export const Activity = ({fill, size, height, width, ...props}) => {
    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            >
                <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
                <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
                <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
            </g>
        </svg>
    );
};

export const Flash = ({
                          fill = "currentColor",
                          size,
                          height,
                          width,
                          ...props
                      }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const Server = ({
                           fill = "currentColor",
                           size,
                           height,
                           width,
                           ...props
                       }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const TagUser = ({
                            fill = "currentColor",
                            size,
                            height,
                            width,
                            ...props
                        }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};


export const Scale = ({
                          fill = "currentColor",
                          size,
                          height,
                          width,
                          ...props
                      }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M18 10V6h-4M6 14v4h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const IMDB = ({
                          fill = "currentColor",
                          size,
                          height,
                          width,
                          ...props
                      }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="12" fill="#FFB800"/>
            <path d="M17.4128 11.9888H20.8976V28H17.4128V11.9888ZM23.7131 11.9888H29.4584L32.3545 22.1371H32.4487L35.3448 11.9888H41.0665V28H37.6053V15.45H37.3227L34.3324 26.0457H30.4708L27.4805 15.45H27.1979V28H23.7131V11.9888Z" fill="black"/>
            <path d="M17.3081 31.4148H22.933C24.4736 31.4148 25.6945 31.6764 26.5957 32.1996C27.5114 32.7229 28.1727 33.515 28.5796 34.576C28.9866 35.637 29.1901 37.0106 29.1901 38.6966C29.1901 40.368 28.9939 41.7561 28.6014 42.8607C28.2235 43.9508 27.5695 44.7865 26.6393 45.3679C25.7236 45.9493 24.4882 46.24 22.933 46.24H17.3081V31.4148ZM22.6932 43.3622C23.5652 43.3622 24.2338 43.1805 24.6989 42.8171C25.164 42.4392 25.4765 41.916 25.6364 41.2474C25.8108 40.5788 25.898 39.7285 25.898 38.6966C25.898 37.621 25.8035 36.7707 25.6146 36.1458C25.4402 35.5062 25.1204 35.0339 24.6553 34.7286C24.1902 34.4234 23.5362 34.2708 22.6932 34.2708H20.5348V43.3622H22.6932ZM31.2962 38.2169L37.0955 38.1951C38.8396 38.1951 40.155 38.4785 41.0416 39.0454C41.9427 39.6122 42.3933 40.6369 42.3933 42.1194C42.3933 43.5148 41.9791 44.554 41.1506 45.2371C40.3367 45.9057 39.0867 46.24 37.4007 46.24H31.2962V38.2169ZM36.9429 43.7982C37.7132 43.7982 38.2728 43.6456 38.6216 43.3403C38.9704 43.0351 39.1448 42.5337 39.1448 41.836C39.1448 41.1384 38.9486 40.6442 38.5562 40.3535C38.1783 40.0483 37.6332 39.8957 36.9211 39.8957H34.5011V43.7982H36.9429ZM31.2962 31.4148H37.2699C40.4384 31.4148 42.0227 32.7229 42.0227 35.3391C42.0227 36.4728 41.652 37.3812 40.9108 38.0643C40.1695 38.7474 39.014 39.089 37.4443 39.089H31.2962V31.4148ZM36.8556 37.5847C38.2074 37.5847 38.8832 36.9379 38.8832 35.6443C38.8832 34.4234 38.1856 33.813 36.7902 33.813H34.5011V37.5847H36.8556Z" fill="black"/>
        </svg>

    );
};
export const DC = ({
                         fill = "currentColor",
                         size,
                         height,
                         width,
                         ...props
                     }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="12" fill="#00BC78"/>
            <path d="M16.0831 38V35.2687H18.2493V24.2492H16.0831V21.5178H22.8643C27.291 21.5178 29.6456 23.7782 29.6456 28.2049V31.3129C29.6456 35.7396 27.291 38 22.8643 38H16.0831ZM21.3574 35.1745H22.9114C25.4073 35.1745 26.5375 33.8088 26.5375 31.4071V28.1107C26.5375 25.709 25.4073 24.3433 22.9114 24.3433H21.3574V35.1745ZM38.4992 38.3296C34.4022 38.3296 31.8593 35.975 31.8593 31.7368V27.7811C31.8593 23.5428 34.4022 21.1882 38.4992 21.1882C42.5491 21.1882 44.8566 23.5428 44.8566 27.4043V27.5456H41.7957V27.3101C41.7957 25.3794 40.7126 23.9666 38.4992 23.9666C36.2859 23.9666 34.9673 25.4265 34.9673 27.734V31.7839C34.9673 34.0914 36.2859 35.5512 38.4992 35.5512C40.7126 35.5512 41.7957 34.1385 41.7957 32.2077V31.7839H44.8566V32.1135C44.8566 35.975 42.5491 38.3296 38.4992 38.3296Z" fill="white"/>
        </svg>



    );
};
export const SearchIcon = ({
                               size = 24,
                               strokeWidth = 1.5,
                               width,
                               height,
                               ...props
                           }) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
    </svg>
);
export const MailIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
            fill="currentColor"
        />
    </svg>
);

export const PhoneIcon = ({
                              size = 24,
                              strokeWidth = 1.5,
                              width,
                              height,
                              ...props
                          }) => (
    <svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="COCO/Twocolors/Mobile">
            <path id="Vector" d="M12 17L12 17.0226" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path id="Vector_2" d="M13.25 7H10.75" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <g id="Vector_3">
                <path d="M9.08393 20.6215C6.72938 19.9998 4.92802 18.1003 4.43096 15.7151L4.33598 15.2593C3.88801 13.1095 3.88801 10.8905 4.33598 8.74072L4.43096 8.28494C4.92801 5.89968 6.72938 4.0002 9.08394 3.3785C10.9953 2.87383 13.0047 2.87383 14.9161 3.3785C17.2706 4.00019 19.072 5.89968 19.569 8.28494L19.664 8.74072C20.112 10.8905 20.112 13.1095 19.664 15.2593L19.569 15.7151C19.072 18.1003 17.2706 19.9998 14.9161 20.6215C13.0047 21.1262 10.9953 21.1262 9.08393 20.6215Z" fill="white" fill-opacity="0.13"/>
                <path d="M19.3003 14.087H4.69969M14.9161 20.6215C13.0047 21.1262 10.9953 21.1262 9.08393 20.6215C6.72938 19.9998 4.92802 18.1003 4.43096 15.7151L4.33598 15.2593C3.88801 13.1095 3.88801 10.8905 4.33598 8.74072L4.43096 8.28494C4.92801 5.89968 6.72938 4.0002 9.08394 3.3785C10.9953 2.87383 13.0047 2.87383 14.9161 3.3785C17.2706 4.00019 19.072 5.89968 19.569 8.28494L19.664 8.74072C20.112 10.8905 20.112 13.1095 19.664 15.2593L19.569 15.7151C19.072 18.1003 17.2706 19.9998 14.9161 20.6215Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </g>
        </g>
    </svg>

);
export const HomeIcon = ({
                              size = 24,
                              strokeWidth = 1.5,
                             stroke = 'white',
                              width,
                              height,
                              ...props
                          }) => (
    <svg width={width} height={width} viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.07861 16.1355H14.8936" stroke={stroke}  strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.3999 13.713C2.3999 8.082 3.0139 8.475 6.3189 5.41C7.7649 4.246 10.0149 2 11.9579 2C13.8999 2 16.1949 4.235 17.6539 5.41C20.9589 8.475 21.5719 8.082 21.5719 13.713C21.5719 22 19.6129 22 11.9859 22C4.3589 22 2.3999 22 2.3999 13.713Z" stroke={stroke}  strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


);

export const CardIcon = ({
                             size = 24,
                             strokeWidth = 1.5,
                             stroke = 'white',
                             width,
                             height,
                             ...props
                         }) => (
    <svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1352_2942)">
            <path d="M17.35 6.5V15.46C17.35 16.26 17.03 17.02 16.47 17.58C15.91 18.14 15.14 18.46 14.35 18.46H9.65997C8.85997 18.46 8.09998 18.14 7.53998 17.58C6.97998 17.02 6.65997 16.25 6.65997 15.46V6.5C6.65997 6.11 6.73001 5.72001 6.89001 5.35001C7.04001 4.99001 7.25998 4.65 7.53998 4.38C7.81998 4.1 8.15001 3.88001 8.51001 3.73001C8.87001 3.58001 9.26997 3.5 9.65997 3.5H14.35C15.15 3.5 15.91 3.82 16.47 4.38C17.03 4.94 17.35 5.7 17.35 6.5Z" stroke={stroke} strokeWidth={strokeWidth} strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M10.88 18.6L11.99 19.04L15.24 20.28C15.61 20.42 16 20.49 16.39 20.48C16.78 20.48 17.17 20.38 17.53 20.22C17.89 20.06 18.21 19.83 18.49 19.54C18.76 19.25 18.97 18.92 19.11 18.55L20.79 14.18C21.08 13.44 21.06 12.62 20.75 11.89C20.43 11.16 19.84 10.59 19.11 10.3L17.38 9.64001" stroke={stroke} strokeWidth={strokeWidth} strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M13.12 18.62L12.01 19.06L8.75002 20.3C8.38002 20.44 7.98999 20.51 7.59999 20.5C7.20999 20.5 6.82004 20.4 6.46004 20.24C6.10004 20.08 5.78002 19.85 5.50002 19.56C5.23002 19.27 5.02002 18.94 4.88002 18.57L3.20003 14.2C2.92003 13.46 2.94003 12.63 3.26003 11.91C3.58003 11.18 4.18 10.62 4.92 10.33L6.62001 9.67999" stroke={stroke} strokeWidth={strokeWidth} strokeMiterlimit="10" strokeLinecap="round"/>
        </g>
        <defs>
            <clipPath id="clip0_1352_2942">
                <rect width={width} height={width} fill="white"/>
            </clipPath>
        </defs>
    </svg>


);