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
          'M17.6 21a1 1 0 0 1-.5-.1L12 18.2 6.9 21a1 1 0 0 1-1.5-1l1-5.7-4-4a1 1 0 0 1-.3-1 1 1 0 0 1 .8-.7l5.7-.8L11 2.6a1 1 0 0 1 1.8 0l2.5 5 5.7 1a1 1 0 0 1 .8.6 1 1 0 0 1-.2 1l-4.1 4 1 5.6a1 1 0 0 1-.4 1 1 1 0 0 1-.6.2Z'
        }
        fill={'#d99000'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h24v24H0z'} fill={'#d99000'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
