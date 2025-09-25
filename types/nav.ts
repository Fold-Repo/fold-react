export type NavItem = {
    label?: string
    href?: string
    isDivider?: boolean
}

export type NavGroup = {
    id: string
    label: string
    href?: string
    items?: NavItem[]
}


