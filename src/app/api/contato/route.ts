import { NextResponse } from "next/server"

export async function GET() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:SALVIO PARTNER LTDA
TITLE:José Henrique Salvio
ROLE:Your Business Partner
TEL;TYPE=CELL:+55 31 99851-8916
TEL;TYPE=WORK,VOICE:+55 28 3344-1022
EMAIL:josehenrique@salviopartner.com
URL;type=WORK:www.salviopartner.com
NOTE:Instagram: @salviopartner\nYour Business PARTNER
END:VCARD`

    const headers = new Headers({
        'Content-Type': 'text/vcard',
        'Content-Disposition': 'attachment; filename="contact.vcf"',
    })

    return new NextResponse(vCardData, { headers })
}