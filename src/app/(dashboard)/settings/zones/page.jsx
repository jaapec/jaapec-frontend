import { SelectedItemsProvider } from '@/app/selected-items-context'
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
