import ZonesTable from './zones-table'
import PaginationClassic from '@/components/pagination-classic'
import { SelectedItemsProvider } from '@/app/selected-items-context'
import DeleteButton from '@/components/deleteButton'
import ZonesContent from '@/app/(dashboard)/settings/zones/zones-contend'

export const metadata = {
    title: 'Zonas',
}

export default function Zones() {
    return (
        <SelectedItemsProvider>
            <ZonesContent />
        </SelectedItemsProvider>
    )
}
