import { ReactNode, forwardRef } from 'react'

import { LogOutOutline } from '@/components/assets/icons/componentsFromIcon/LogOutOutline'
import { PersonOutline } from '@/components/assets/icons/componentsFromIcon/PersonOutline'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

type DropDownMenuPropsType = {
  children: ReactNode
}
export const DropDownMenu = forwardRef<HTMLDivElement, DropDownMenuPropsType>(({ children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.Item className={s.DropdownMenuItem}>
            My Profile <div className={s.RightSlot}>{<PersonOutline />}</div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div className={s.RightSlot}>{<LogOutOutline />}</div> Sign Out
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
})

// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
//
// import s from './DropDownMenu.module.scss'
//
// export const DropDownMenu = () => {
//   return (
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger asChild>
//         <button aria-label={'Customise options'} className={s.IconButton}>
//           M
//         </button>
//       </DropdownMenu.Trigger>
//
//       <DropdownMenu.Portal>
//         <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
//           <DropdownMenu.Item className={s.DropdownMenuItem}>
//             New Tab <div className={s.RightSlot}>⌘+T</div>
//           </DropdownMenu.Item>
//           <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
//         </DropdownMenu.Content>
//       </DropdownMenu.Portal>
//     </DropdownMenu.Root>
//   )
// }
