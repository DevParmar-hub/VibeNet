import React from 'react'

const Vibe_Logo = (props) => (
    <><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <title>VibeNet Logo (Circular Network with Compact V)</title>

        {/* Four outer nodes */}
        <circle cx="6" cy="6" r="1.5" fill="white" />
        <circle cx="18" cy="6" r="1.5" fill="white" />
        <circle cx="6" cy="18" r="1.5" fill="white" />
        <circle cx="18" cy="18" r="1.5" fill="white" />

        {/* Outer curved connections */}
        <path d="M6 6 Q 12 0, 18 6" /> {/* Top left to top right, curved */}
        <path d="M6 18 Q 12 24, 18 18" /> {/* Bottom left to bottom right, curved */}
        <path d="M6 6 Q 0 12, 6 18" /> {/* Top left to bottom left, curved */}
        <path d="M18 6 Q 24 12, 18 18" /> {/* Top right to bottom right, curved */}

        {/* The more compact 'V' shape in the middle */}
        <path d="M9.5 9.5 L12 14.5 L14.5 9.5" stroke="white" strokeWidth="2.5" />

    </svg></>
)

export default Vibe_Logo