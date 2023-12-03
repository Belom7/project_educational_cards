import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={44}
    ref={ref}
    width={44}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g filter={'url(#a)'}>
      <rect fill={'#4C4C4C'} height={24} rx={4} width={24} x={10} y={8} />
      <g clipPath={'url(#b)'} fill={'#fff'}>
        <path
          d={
            'M26.7 25.3h-9.4a.7.7 0 1 0 0 1.4h9.4a.7.7 0 1 0 0-1.4ZM17.3 24l2.9-.3c.3 0 .6-.1.8-.3l6-6a1.3 1.3 0 0 0 0-1.8l-2-1.9a1.3 1.3 0 0 0-1.8 0l-6 6c-.2.2-.3.5-.3.8l-.3 2.8a.7.7 0 0 0 .6.7Zm6.9-9.3 1.8 1.8-1.3 1.3-1.8-1.8 1.3-1.3Zm-6 6 3.8-3.8 1.8 1.8-3.7 3.7-2 .2.1-2Z'
          }
        />
      </g>
    </g>
    <defs>
      <clipPath id={'b'}>
        <path d={'M14 12h16v16H14z'} fill={'#fff'} />
      </clipPath>
      <filter
        colorInterpolationFilters={'sRGB'}
        filterUnits={'userSpaceOnUse'}
        height={44}
        id={'a'}
        width={44}
        x={0}
        y={0}
      >
        <feFlood floodOpacity={0} result={'BackgroundImageFix'} />
        <feColorMatrix
          in={'SourceAlpha'}
          result={'hardAlpha'}
          values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values={'0 0 0 0 0.429167 0 0 0 0 0.429167 0 0 0 0 0.429167 0 0 0 0.25 0'} />
        <feBlend in2={'BackgroundImageFix'} result={'effect1_dropShadow_5918_2450'} />
        <feBlend in={'SourceGraphic'} in2={'effect1_dropShadow_5918_2450'} result={'shape'} />
      </filter>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
