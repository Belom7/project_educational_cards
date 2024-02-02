import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={12}
    ref={ref}
    width={13}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M10.5 0h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 1.3h8a.7.7 0 0 1 .7.7v5.6L9 5.8a1.8 1.8 0 0 0-2.3 0l-4.9 4V2a.7.7 0 0 1 .7-.7Zm8 9.4H2.9l4.6-4a.5.5 0 0 1 .7 0l3 2.6v.7a.7.7 0 0 1-.7.7Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
