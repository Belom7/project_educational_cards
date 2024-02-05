import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { DeletePack, useDeletePackMutation } from '@/features'

export type EditPackModalProps = {
  id: string
  packName: string
  trigger: ReactNode
}

export const DeletePackModal = ({ id, packName, trigger }: EditPackModalProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [deletePack, { error }] = useDeletePackMutation()

  console.log(error)
  const closeModal = () => {
    setOpen(false)
  }
  const deletePackCallback = () => {
    deletePack({ id })
    closeModal()
  }

  return (
    <Modal open={open} setOpen={setOpen} title={'Delete Pack'} trigger={trigger}>
      <DeletePack
        buttonTitle={'Delete Pack'}
        closeModal={closeModal}
        deletePackCallback={deletePackCallback}
        packName={packName}
      />
    </Modal>
  )
}
