import React, { useState, useEffect } from 'react';
import InfoBox from "./InfoBox";

const infoTextMap = {
  corridor: "To jest korytarz!",
  room1: "To jest sala nr 1",
  room2: "Tu znajdziesz wystawę malarstwa.",
  room3: "Pokój z instalacjami multimedialnymi.",
  hall1: "Główne wejście do galerii.",
  elevator: "Winda na piętro.",
  // Dodaj inne ID wg potrzeb
};

const GalleryMap = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [hoveredLabel, setHoveredLabel] = useState(null);

  useEffect(() => {
    const handleClick = (e) => {
      const id = e.target.id;
      if (infoTextMap[id]) {
        setHoveredLabel(infoTextMap[id]);
        setTimeout(() => {
          setHoveredLabel(null);
        }, 3000); // ukryj po 3 sekundach
      }
    };

    const svg = document.getElementById("gallery-svg");
    if (svg) {
      svg.addEventListener("click", handleClick);
    }

    return () => {
      if (svg) {
        svg.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={`animated-element ${hoveredLabel ? 'visible' : 'hidden'}`}>
        {hoveredLabel}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="svg59"
    width="500mm"
    height="325mm"
    version="1.1"
    viewBox="0 0 833.33 541.67"
    onClick={(e) => {
    const id = e.target.id;
    if (infoTextMap[id]) {
      setInfoText(infoTextMap[id]);
      setInfoVisible(true);
      
    }
  }}
  >
    <defs id="defs10">
      <symbol id="sjjb-amenity.svg:toilets_men" viewBox="0 0 508.578 507.578">
        <path
          id="path2"
          d="M108.46 0Q91.654 0 79.44 11.84T67.227 41.233q0 16.806 12.213 29.031t29.02 12.225q16.805 0 29.031-12.225t12.227-29.031q-.001-17.55-12.227-29.393Q125.265.001 108.46 0M53.476 90.879q-22.144 0-37.807 15.664Q.004 122.208.005 145.119v126.78q0 18.344 16.807 18.344 16.035 0 16.035-18.344v-123.72h19.859v336.06q0 22.912 22.912 22.912t22.912-22.912v-194.77h19.859v194.77q0 22.912 22.912 22.912 23.68 0 23.682-22.912v-336.06h19.09v123.72q0 19.09 16.037 19.09 16.058 0 16.059-19.09v-126.03q0-22.143-14.893-38.564-14.895-16.421-38.576-16.422H53.48zm396.12 286.07q-30.482 0-47.145 16.834-16.661 16.834-16.66 48.178 0 23.507 9.47 38.576c9.47 15.069 13.822 17.063 22.519 21.053q13.045 5.985 33.625 5.984 16.963 0 27.94-4.908c10.978-4.908 13.449-8.123 18.386-14.553q7.404-9.644 10.85-24.023l-34.186-10.332q-2.583 11.969-8.309 18.254t-16.92 6.287q-11.538 0-17.91-7.793-6.373-7.793-6.373-28.803 0-16.964 5.338-24.887 7.061-10.676 20.322-10.676 5.856 0 10.592 2.41 4.735 2.411 8.008 6.89 1.98 2.67 3.789 8.439l34.44-7.664q-6.63-19.977-20.276-29.621-13.65-9.645-37.5-9.645zm-248.59 2.152 28.07 126.23h38.232l22.043-79.477 22.131 79.477h38.23l27.812-126.23H340.67l-13.346 70.523-19.547-70.523h-36.939l-19.461 70.523-13.348-70.523z"
        ></path>
      </symbol>
      <symbol id="sjjb-amenity.svg:toilets_women" viewBox="0 0 531.432 526.846">
        <path
          id="path3"
          d="M133.9 0q-17.432 0-30.113 12.67T91.105 43.568q0 17.434 12.682 30.104 12.68 12.67 30.113 12.668 18.206.001 30.889-12.668 12.68-12.67 12.682-30.104 0-18.23-12.682-30.898Q152.107.001 133.9 0M89.533 95.068q-19.826 0-35.662 14.266-11.896 11.075-15.838 24.564L1.572 255.108q-1.571 3.966-1.57 7.133Q0 280.47 18.207 280.47q12.694 0 16.66-14.266l33.27-110.93h18.205l-54.666 197.27H84.77v153.7q0 20.6 19.803 20.602 19.801 0 19.803-20.602v-154.47h19.826v155.27q0 19.802 19.8 19.803 19.803 0 19.804-19.803v-154.5h53.07l-55.44-197.27h19.005l33.27 110.93q3.965 14.265 16.635 14.266 18.23 0 18.23-18.23 0-3.965-1.573-7.133l-36.46-121.21q-3.966-12.693-18.206-24.564-17.433-14.265-38.033-14.266zm382.92 293.62q-30.482 0-47.145 16.834-16.661 16.833-16.66 48.176 0 23.507 9.47 38.576c9.47 15.069 13.822 17.065 22.519 21.055q13.045 5.985 33.625 5.984 16.963 0 27.94-4.908c10.978-4.908 13.449-8.123 18.386-14.553q7.404-9.644 10.85-24.023l-34.186-10.334q-2.583 11.97-8.309 18.256t-16.92 6.285q-11.538 0-17.91-7.793t-6.373-28.803q0-16.963 5.338-24.885 7.061-10.678 20.322-10.678 5.855 0 10.592 2.413 4.735 2.41 8.008 6.888 1.98 2.67 3.789 8.438l34.44-7.664q-6.63-19.977-20.276-29.621-13.65-9.644-37.5-9.643m-248.59 2.152 28.07 126.23h38.232l22.043-79.477 22.131 79.477h38.23l27.812-126.23h-36.854l-13.346 70.521-19.547-70.52h-36.939l-19.461 70.52-13.348-70.52z"
        ></path>
      </symbol>
      <symbol id="sjjb-amenity.svg:symbol95" viewBox="0 0 576.445 577.452">
        <path
          id="path4"
          d="M64.571.064C23.236.064 0 21.434 0 65.1v450.12c0 40.844 20.895 62.229 62.192 62.229h452.02c41.307 0 62.229-20.315 62.229-62.23V65.1c0-42.6-20.922-65.035-63.521-65.035-.004 0-448.5-.143-448.35 0z"
        ></path>
        <path
          id="path5"
          fill="#fff"
          d="M495.28 25.317q-30.481 0-47.143 16.834t-16.662 48.178q0 23.508 9.473 38.576 9.47 15.069 22.516 21.053 13.045 5.985 33.625 5.984 16.964 0 27.943-4.908c10.979-4.908 13.446-8.121 18.383-14.55q7.404-9.646 10.85-24.026l-34.184-10.332q-2.584 11.969-8.31 18.254t-16.92 6.287q-11.54 0-17.91-7.793-6.373-7.792-6.372-28.803 0-16.963 5.338-24.885 7.06-10.678 20.32-10.678 5.855 0 10.592 2.41 4.735 2.412 8.008 6.89 1.98 2.67 3.789 8.439l34.443-7.664q-6.63-19.977-20.28-29.621-13.647-9.645-37.5-9.645zm-248.59 2.154 28.07 126.23h38.23l22.045-79.477 22.129 79.477h38.232l27.812-126.23h-36.854l-13.348 70.521-19.547-70.52H316.52l-19.461 70.52-13.346-70.52zm-57.975 50.971c-4.43.094-8.873.935-13.16 2.643-27.716 7.866-38.154 44.485-18.227 64.736.59 67.315.839 134.63 1.826 201.95 32.025.004 142.78-3.878 163.92.775 21.28 42.334 72.508 146.46 78.223 155.41 22.666-7.501 58.238-24.464 80.777-32.312 1.164.966.894-31.458-9.617-30.58-9.593.594-27.915 14.39-53.152 17.34-24.026-47.042-46.925-95.01-70.725-142.32-41.406-.032-109.16.082-150.67-.111.055-1.574-6.374-16.907 1.771-35.115h110.29v-35.115c-37.53-.497-75.342 1.641-112.65-1.26-1.68-26.595-1.07-53.32-.406-79.953 9.25-12.574 36.665-18.124 35.463-40.928 3.769-24.357-19.743-45.662-43.664-45.158zm-67.125 170.47c-50.39 24.212-88.447 74.112-91.266 129.25-5.815 48.632 16.003 97.82 53.77 129.66 26.41 22.946 61.029 37.255 110.53 42.582 55.032 3.675 109.5-22.226 143.49-63.523 20.111-13.506.247-44.12-9.072-51.35-22.291 35.193-55.842 66.11-98.191 76.404-56.484 15.37-119.81-16.138-144.83-66.36-23.657-44.202-15.457-103.36 21.969-138.05 5.302-7.307 19.784-10.21 17.652-20.78-1.431-12.183 3.95-30.67-4.047-37.834z"
        ></path>
      </symbol>
      <symbol id="AigaSymbols.svg:TicketPurchase_Inv">
        <rect
          id="rect5"
          width="71"
          height="71"
          x="0.5"
          y="0.5"
          stroke="#fff"
          ry="6"
        ></rect>
        <g id="g8" fill="#fff">
          <circle id="circle5" cx="21" cy="15" r="4.75"></circle>
          <path
            id="path6"
            d="m12.75 36 2.5-9h1l-2.5 9h14.5l-2.5-9h1l1.5 4.5c.7 2 2.25 2 3.5.5l5-6a1.863 1.863 0 0 0-2.85-2.4l-3 3.65-.65-2.25C29.5 22.5 27 20.5 24 20.5h-6c-3 0-5.5 2-6.25 4.5l-3 11z"
          ></path>
          <circle id="circle6" cx="54" cy="15" r="4.75"></circle>
          <path
            id="path7"
            d="M60 37h3V24a3.5 3.5 0 0 0-3.5-3.5h-11A4.5 4.5 0 0 0 45 22l-9 11a2.15 2.15 0 0 0 3.25 2.75L48 25.5v38a2.75 2.75 0 0 0 5.5 0V42h1v21.5a2.75 2.75 0 0 0 5.5 0z"
          ></path>
          <path id="rect7" d="M35 14.5h4V24h-4z"></path>
          <path id="rect8" d="M6 37h60v6H6z"></path>
        </g>
      </symbol>
      <symbol id="AigaSymbols.svg:RightArrow">
        <path id="path8" d="M63 36 41 58H26l16-16H10V30h32L26 14h15z"></path>
      </symbol>
      <symbol id="sjjb-tourist.svg:symbol84" viewBox="0 0 576.445 577.452">
        <path
          id="path9"
          d="M64.571.064C23.236.064 0 21.434 0 65.1v450.12c0 40.844 20.894 62.229 62.192 62.229h452.02c41.307 0 62.229-20.316 62.229-62.23V65.1c0-42.6-20.922-65.035-63.522-65.035-.003 0-448.49-.143-448.35 0z"
        ></path>
        <path
          id="path10"
          fill="#fff"
          d="M256.02 121.67q0-16.291 10.56-26.701 10.56-10.408 27.153-10.409 17.8 0 29.567 11.012t11.767 24.89q0 10.259-4.676 20.516-4.677 10.258-14.783 16.443-10.108 6.185-20.667 6.185-14.482 0-26.701-12.37t-12.22-29.567zM213.782 481.6l-.604-19.611 34.092-4.525q7.543-2.112 10.41-6.185 2.865-4.074 2.865-18.253v-3.32q0-3.62.453-13.123.452-9.504.452-16.744.001-5.733-.905-22.024l.302-15.085-.302-14.18.604-49.178q0-9.352-1.81-19.31-3.319-4.524-12.068-7.843-8.75-3.32-30.472-4.828v-16.895q31.076-1.809 54.608-12.973 15.99-7.24 34.696-25.645h20.214q1.206 37.412 1.206 97.148l-2.112 123.09q0 12.672 1.206 22.93 9.352 3.318 30.472 6.637 8.146 1.207 12.973 3.017l-.3 16.594q-8.148.3-12.069.301-4.526.001-13.878-.604-30.773-1.508-82.365-1.508-14.784 0-28.662 1.055-13.878 1.057-19.007 1.056z"
        ></path>
      </symbol>
      <symbol id="AigaSymbols.svg:Elevator">
        <g
          id="g73"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
        >
          <path id="path72" d="M26.5 23.5v-17M20 14l6.5-7.5L33 14"></path>
          <path id="path73" d="M45.5 6.5v17M39 16l6.5 7.5L52 16"></path>
        </g>
        <rect
          id="rect73"
          width="38"
          height="38"
          x="17"
          y="28"
          stroke="none"
          ry="5"
        ></rect>
        <path id="rect74" fill="#fff" stroke="none" d="M22 33h28v28H22z"></path>
        <g id="person1" stroke="none">
          <circle id="circle74" cx="27.5" cy="38.75" r="1.75"></circle>
          <path
            id="path74"
            d="M24.5 41a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h.25v8.5a1.25 1.25 0 1 0 2.5 0V50h.5v8.5a1.25 1.25 0 1 0 2.5 0V50h.25a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z"
          ></path>
        </g>
        <use xlinkHref="#person1" id="use74" x="8.5"></use>
        <use xlinkHref="#person1" id="use75" x="17"></use>
      </symbol>
      <linearGradient
        id="linearGradient13"
        x1="682.26"
        x2="683.24"
        y1="325.47"
        y2="359.89"
        gradientTransform="translate(-16.384 -27.956)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop1" offset="0" stopColor="#4cff3b"></stop>
        <stop id="stop2" offset="1" stopColor="#4cb247"></stop>
      </linearGradient>
    </defs>
    <path
      id="corridor"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeWidth="1.667"
      d="M621.97 136.43h80.372v159.24H621.97z"
      onMouseEnter={() => setHoveredLabel('Korytarz')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <path
      id="hall1"
      fill="#fff"
      stroke="#000"
      strokeWidth="1.667"
      d="M224.107 171H621.74v140.482H224.107z"
      onMouseEnter={() => setHoveredLabel('Sala im. Witkiewicza')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <path
      id="hall2"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeWidth="1.667"
      d="M61.673 171.21h162.36v141.06H61.673z"
      paintOrder="normal"
      onMouseEnter={() => setHoveredLabel('Sala im. Beksińskiego')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <rect
      id="room7"
      width="84.129"
      height="101.962"
      x="61.659"
      y="310.798"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.667"
      paintOrder="normal"
      ry="0"
      onMouseEnter={() => setHoveredLabel('Sala nr 7')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></rect>
    <rect
      id="room8"
      width="78.262"
      height="101.681"
      x="145.902"
      y="311.059"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.664"
      paintOrder="normal"
      ry="0"
      onMouseEnter={() => setHoveredLabel('Sala nr 8')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></rect>
    <path
      id="room5"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.67"
      d="M61.773 72.019h84.332v99.229H61.773z"
      paintOrder="normal"
      onMouseEnter={() => setHoveredLabel('Sala nr 5')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <path
      id="room6"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.662"
      d="M146.243 72.211h78.176v98.803h-78.176z"
      paintOrder="normal"
      onMouseEnter={() => setHoveredLabel('Sala nr 6')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <path
      id="room3"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.664"
      d="M224.112 310.846H421.81v102.048H224.112z"
      paintOrder="normal"
      onMouseEnter={() => setHoveredLabel('Sala nr 3')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <path
      id="room4"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.672"
      d="M421.611 311.022h200.166v102.004H421.611z"
      paintOrder="normal"
      onMouseEnter={() => setHoveredLabel('Sala nr 4')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <path
      id="room1"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.667"
      d="M223.905 72.246h199.626v99.386H223.905z"
      paintOrder="normal"
      onMouseEnter={() => setHoveredLabel('Sala nr 1')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <rect
      id="room2"
      width="198.572"
      height="99.168"
      x="423.098"
      y="72.38"
      fill="#fff"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="square"
      strokeWidth="1.663"
      ry="0"
      onMouseEnter={() => setHoveredLabel('Sala nr 2')}
      onMouseLeave={() => setHoveredLabel(null)}>
    </rect>
    <g id="ticketandinfo"
    onMouseEnter={() => setHoveredLabel('Kasa biletowa i informacja')}
      onMouseLeave={() => setHoveredLabel(null)}>
      <path
        id="ticketandinforoom"
        fill="#fff"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="square"
        strokeWidth="1.663"
        d="M702.293 295.163h101.091v119.094H702.293z"
        paintOrder="normal"
      ></path>
      <use
        xlinkHref="#AigaSymbols.svg:TicketPurchase_Inv"
        id="ticketemblem"
        fill="#000"
        stroke="#000"
        transform="matrix(.69356 0 0 .70421 710.34 303.52)"
      ></use>
      <use
        xlinkHref="#sjjb-tourist.svg:symbol84"
        id="infoemblem"
        width="576.445"
        height="577.452"
        fill="#000"
        transform="matrix(.08956 0 0 .0854 747.13 359.44)"
      ></use>
    </g>
    <use
      xlinkHref="#AigaSymbols.svg:RightArrow"
      id="arrow"
      fill="#000"
      stroke="#000"
      transform="matrix(.25247 0 0 .18259 686.73 378.04)"
    ></use>
    <g id="toilet"
    onMouseEnter={() => setHoveredLabel('Toaleta')}
      onMouseLeave={() => setHoveredLabel(null)}>
      <path
        id="toiletroom"
        fill="#fff"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="square"
        strokeWidth="1.667"
        d="M702.58 136.91h101.06v158.74H702.58z"
        paintOrder="normal"
      ></path>
      <use
        xlinkHref="#sjjb-amenity.svg:symbol95"
        id="wcinvalid"
        width="576.445"
        height="577.452"
        fill="#000"
        transform="matrix(.1051 0 0 .09733 723.31 225.43)"
      ></use>
      <use
        xlinkHref="#sjjb-amenity.svg:toilets_men"
        id="wcmen"
        width="508.578"
        height="507.578"
        fill="#000"
        transform="matrix(.0744 0 0 .07127 712.34 158.21)"
      ></use>
      <use
        xlinkHref="#sjjb-amenity.svg:toilets_women"
        id="wcwomen"
        width="531.432"
        height="526.846"
        fill="#000"
        transform="matrix(.0774 0 0 .07207 755.63 158.05)"
      ></use>
    </g>
    <path
      id="path48"
      fill="#fff"
      stroke="#fdfffd"
      strokeLinecap="square"
      strokeWidth="3.333"
      d="M458.193 311.098h134.01"
      paintOrder="normal"
    ></path>
    <path
      id="path49"
      fill="#fff"
      stroke="#fdfffd"
      strokeLinecap="square"
      strokeWidth="3.333"
      d="M456.44 171.182h134.01"
      paintOrder="normal"
    ></path>
    <path
      id="path50"
      fill="#fff"
      stroke="#fdfffd"
      strokeLinecap="square"
      strokeWidth="3.333"
      d="M258.56 310.996h134.01"
      paintOrder="normal"
    ></path>
    <path
      id="path51"
      fill="#fff"
      stroke="#fdfffd"
      strokeLinecap="square"
      strokeWidth="3.333"
      d="M256.75 171.394h134.01"
      paintOrder="normal"
    ></path>
    <path
      id="path52"
      fill="#fff"
      stroke="#fdfffd"
      strokeLinecap="square"
      strokeWidth="3.333"
      d="M79.1 171.19h54.949"
      paintOrder="normal"
    ></path>
    <path
      id="path53"
      fill="#fff"
      stroke="#fdfffd"
      strokeLinecap="square"
      strokeWidth="3.333"
      d="M158.21 171.421h54.949"
      paintOrder="normal"
    ></path>
    <path
      id="path54"
      fill="#fff"
      stroke="#fdfffd"
      strokeLinecap="square"
      strokeWidth="3.333"
      d="M158.3 310.698h54.949"
      paintOrder="normal"
    ></path>
    <path
      id="path55"
      fill="#fff"
      stroke="#fdfffd"
      strokeLinecap="square"
      strokeWidth="3.333"
      d="M75.955 311.17h54.949"
      paintOrder="normal"
    ></path>
    <path
      id="path56"
      fill="#fff"
      stroke="#fff"
      strokeWidth="5.221"
      d="m702.05 238.08.811 42.36"
      paintOrder="normal"
    ></path>
    <path
      id="path57"
      fill="none"
      stroke="#fff"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeWidth="4"
      d="m223.978 206.77.26 70.784"
      paintOrder="stroke fill markers"
    ></path>
    <path
      id="entrytohall"
      fill="none"
      stroke="#fff"
      strokeDasharray="48, 48"
      strokeLinecap="square"
      strokeWidth="4.667"
      d="M622.093 202.987c-.255 50.156-.255 49.794-.255 49.794v0h-.255"
      paintOrder="stroke fill markers"
    ></path>
    <path
      id="entrytoticketandinfo"
      fill="#fff"
      stroke="#25c82f"
      strokeWidth="2.639"
      d="m702.7 363.92.388 40.206"
      paintOrder="normal"
    ></path>
    <path
      id="path58"
      fill="none"
      stroke="#fff"
      strokeLinecap="square"
      strokeWidth="4"
      d="M639.07 295.22h50.236"
      paintOrder="normal"
    ></path>
    <path
      id="waytogallery"
      fill="url(#linearGradient13)"
      stroke="#000"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeWidth="0"
      d="m666.21 295.58 11.738 21.009 11.74 21.008-24.064-.34-24.064-.336 12.326-20.67z"
      paintOrder="stroke fill markers"
      style={{ mixBlendMode: "darken" }}
      onMouseEnter={() => setHoveredLabel('Wejście do Galerii')}
      onMouseLeave={() => setHoveredLabel(null)}
    ></path>
    <g id="elevator" stroke="#000"
    onMouseEnter={() => setHoveredLabel('Winda')}
      onMouseLeave={() => setHoveredLabel(null)}>
      <path
        id="rect1"
        fill="#fff"
        strokeDasharray="none"
        strokeLinecap="square"
        strokeWidth="1.658"
        d="M621.799 72.311h80.8v65.024h-80.8z"
        paintOrder="markers fill stroke"
      ></path>
      <use
        xlinkHref="#AigaSymbols.svg:Elevator"
        id="use1-4"
        fill="#000"
        transform="matrix(.7528 0 0 .68238 634.478 82.003)"
      ></use>
    </g>
  </svg>
   <InfoBox text={infoText} visible={infoVisible} />
  </div>

      
    </div>
  );
};

export default GalleryMap;
