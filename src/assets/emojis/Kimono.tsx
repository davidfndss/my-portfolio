import React from "react"

const Kimono: React.FC = () => {
   return (
     <div className="inline-block w-[25px] shaking-img pb-2">
       <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="72" height="72" fill="url(#pattern0_17_598)"/>
          <defs>
          <pattern id="pattern0_17_598" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_17_598" transform="scale(0.0138889)"/>
          </pattern>
          <image id="image0_17_598" width="72" height="72" xlinkHref="data:image/png;base64,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"/>
          </defs>
          </svg>
     </div>
   )
}

export { Kimono }