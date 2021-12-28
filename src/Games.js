import React from 'react'
import Blocks from './content/blocks'
import CardItem from './CardItem'
import Sand from './content/sand'
import OfflineSpyfall from './content/off-spyfall'
import OfflineWolf from './content/off-wolf'
import Renard from './content/renard'
import Spyfall from './content/spyfall'
import { Box } from '@dracula/dracula-ui'

function Games () {
  return (
    <Box className='col-container' mt='sm'>
      <CardItem content={Sand} />
      <CardItem content={Spyfall} />
      <CardItem content={Renard} />
      <CardItem content={Blocks} />
      <CardItem content={OfflineSpyfall} />
      <CardItem content={OfflineWolf} />
    </Box>
  )
}

export default Games
