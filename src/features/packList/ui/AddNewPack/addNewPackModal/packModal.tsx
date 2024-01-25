import { ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { useCreatePackMutation } from '@/features'
import { PackForm } from '@/features/packList/ui/AddNewPack/addNewPackModal/PackForm'

export type AddDeckModalProps = {
  trigger: ReactNode
}

export const AddPackModal = ({ trigger }: AddDeckModalProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [createPack, { error }] = useCreatePackMutation()

  console.log(error)
  const closeModal = () => {
    setOpen(false)
  }
  const createPackCallback = (data: any) => {
    createPack(data)
    closeModal()
  }

  return (
    <Modal open={open} setOpen={setOpen} title={'Add New Deck'} trigger={trigger}>
      <PackForm
        // buttonTitle={buttonTitle}
        // error={error}
        // onClose={closeModal}
        onSubmit={createPackCallback}
        // values={values}
      />
    </Modal>
  )
}
