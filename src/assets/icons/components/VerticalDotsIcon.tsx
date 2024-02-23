import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle cx={9} cy={9} r={8.5} stroke={'#fff'} />
    <g clipPath={'url(#a)'} fill={'#fff'}>
      <path
        d={
          'M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M3 3h12v12H3z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
