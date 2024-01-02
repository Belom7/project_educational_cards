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
        'M10.7 13a.67.67 0 0 1-.3-.07L7 11.15l-3.4 1.78a.67.67 0 0 1-.97-.71l.67-3.75L.55 5.8a.67.67 0 0 1-.16-.67.67.67 0 0 1 .54-.45l3.8-.55L6.4.7a.67.67 0 0 1 1.2 0l1.7 3.41 3.8.55a.67.67 0 0 1 .53.46.67.67 0 0 1-.16.66l-2.75 2.67.67 3.75a.67.67 0 0 1-.27.67.67.67 0 0 1-.41.12Z'
      }
      fill={'#E6AC39'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
