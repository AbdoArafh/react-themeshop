// icon:js-badge | Devicons https://vorillaz.github.io/devicons/#/main | Theodore Vorillas

import { forwardRef } from 'react'

export default forwardRef(function JsBadgeIcon(props, ref) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
      ref={ref}
    >
      <path
        fill="currentColor"
        d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z"
      />
    </svg>
  );
})
