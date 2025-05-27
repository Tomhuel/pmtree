export type CollectionNode = {
    item?: Array<CollectionNode>
    name?: string
    info?: {
        _postman_id?: string
        name?: string
        schema?: string
        _exporter_id?: string
    },
    request?: {
        method?: string
    }
}

export type ArchNode = {
    label?: string
    nodes?: Array<ArchNode>
}