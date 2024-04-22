import Image from 'next/image'
import Panel from '../Panel/Panel'
import { IconForPanels } from '../../util/IconForPanels'

const BoardIcon = () => {
    return (
        <Panel>
            <img src="/icons/Icon-Good.svg" width="100%" height="100%" />
        </Panel>
    )
}

export default BoardIcon