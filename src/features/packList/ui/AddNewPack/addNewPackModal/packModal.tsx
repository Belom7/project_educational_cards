import { ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { PackForm } from '@/features/packList/ui/AddNewPack/addNewPackModal/PackForm'

export type AddDeckModalProps = {
  trigger: ReactNode
}

export const AddPackModal = ({ trigger }: AddDeckModalProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const createDeckCallback = (data: any) => {
    console.log(data)
  }

  return (
    <Modal open={open} setOpen={setOpen} title={'Add New Deck'} trigger={trigger}>
      <PackForm
        // buttonTitle={buttonTitle}
        // error={error}
        // onClose={closeModal}
        onSubmit={createDeckCallback}
        // values={values}
      />
    </Modal>
  )
}
