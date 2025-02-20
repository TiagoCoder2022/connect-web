import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { IconButton } from '@/components/icon-button'
import { Copy, Link } from 'lucide-react'
import React from 'react'

function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/123435/ul1212412342"
      />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}

export default InviteLinkInput
