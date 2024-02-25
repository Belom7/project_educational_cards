import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { DeletePack, useDeletePackMutation } from '@/features'

export type EditPackModalProps = {
  deckId?: string
  packName?: string
  trigger: ReactNode
}

export const DeletePackModal = ({ deckId, packName, trigger }: EditPackModalProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [deletePack, { error }] = useDeletePackMutation()

  console.log(error)
  const closeModal = () => {
    setOpen(false)
  }
  const deletePackCallback = () => {
    deletePack({ id: deckId ? deckId : '' })
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
