import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} height={4} ref={ref} width={8} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M7.8 3.3a.5.5 0 0 1-.8.3L4.3 1.4 1.6 3.6a.5.5 0 0 1-.7-.1.5.5 0 0 1 0-.7L4 .3a.5.5 0 0 1 .7 0l3 2.5a.5.5 0 0 1 .2.5Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
