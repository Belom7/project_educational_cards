import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M5.5 9.5a1 1 0 0 1 1.7-.8l5.3 4.5L18 8.8a1 1 0 0 1 1.4.2 1 1 0 0 1-.2 1.5l-6 4.8a1 1 0 0 1-1.2 0l-6-5a1 1 0 0 1-.4-.8Z'
        }
        fill={'#ffffff'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
