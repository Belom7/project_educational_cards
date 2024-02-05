import { ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { useUpdatePackMutation } from '@/features'
import { PackForm } from '@/features'

type EditPackModalProps = {
  packId?: string
  trigger: ReactNode
  values?: {
    cover?: null | string
    isPrivate?: boolean
    name: string
  }
}

export const EditPackModal = ({ packId, trigger, values }: EditPackModalProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [updatePack, { error }] = useUpdatePackMutation()

  console.log(error)
  const closeModal = () => {
    setOpen(false)
  }
  const editPackCallback = (data: any) => {
    updatePack({ body: data, id: packId ? packId : '' })
    closeModal()
  }

  return (
    <Modal open={open} setOpen={setOpen} title={'Edit Deck'} trigger={trigger}>
      <PackForm
        buttonTitle={'Edit Deck'}
        // error={error}
        // onClose={closeModal}
        onSubmit={editPackCallback}
        values={values}
      />
    </Modal>
  )
}
