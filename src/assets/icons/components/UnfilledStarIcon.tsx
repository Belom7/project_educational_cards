import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={13}
    ref={ref}
    width={14}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M10.7 13h-.3L7 11l-3.4 2a.7.7 0 0 1-1-.7l.7-3.7L.6 5.8a.7.7 0 0 1-.2-.7.7.7 0 0 1 .5-.4L4.7 4 6.4.7a.7.7 0 0 1 1.2 0l1.7 3.4 3.8.6a.7.7 0 0 1 .5.4.7.7 0 0 1-.1.7l-2.8 2.7.7 3.7a.7.7 0 0 1-.3.7l-.4.1ZM7 9.7l.3.1 2.5 1.3-.5-2.8a.7.7 0 0 1 .2-.6l2-2-2.8-.3a.7.7 0 0 1-.4-.4L7 2.5 5.7 5a.7.7 0 0 1-.5.4l-2.8.4 2 2a.7.7 0 0 1 .2.5l-.4 2.8 2.5-1.3H7Z'
      }
      fill={'#E6AC39'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
