import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={14}
    ref={ref}
    viewBox={'0 0 14 16'}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M15 6H3.14l3.63-4.36A1 1 0 0 0 5.23.36l-5 6-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 0 7a1 1 0 0 0 .07.36c0 .05 0 .08.07.13l.09.15 5 6a1 1 0 0 0 1.54-1.28L3.14 8H15a1 1 0 1 0 0-2Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
