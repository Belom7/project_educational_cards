import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={12}
    ref={ref}
    width={12}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm7.4 6 4.3-4.3A1 1 0 1 0 10.3.3L6 4.6 1.7.3A1 1 0 0 0 .3 1.7L4.6 6 .3 10.3a1 1 0 0 0 .3 1.6 1 1 0 0 0 1.1-.2L6 7.4l4.3 4.3a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4L7.4 6Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
