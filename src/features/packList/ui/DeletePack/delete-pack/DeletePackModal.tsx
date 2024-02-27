import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { DeletePack, useDeletePackMutation } from '@/features'

export type DeletePackModalProps = {
  deckId?: string
  packName?: string
  trigger: ReactNode
}

export const DeletePackModal = ({
  deckId,
  packName,
  trigger,
}: DeletePackModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [deletePack, { error }] = useDeletePackMutation()

  console.log(error)
  const closeModal = () => {
    setIsOpen(false)
  }
  const deletePackCallback = () => {
    deletePack({ id: deckId ? deckId : '' })
    closeModal()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Delete Pack'} trigger={trigger}>
      <DeletePack
        buttonTitle={'Delete Pack'}
        closeModal={closeModal}
        deletePackCallback={deletePackCallback}
        packName={packName}
      />
    </Modal>
  )
}
