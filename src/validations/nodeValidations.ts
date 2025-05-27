import { CollectionNode } from "../types";

function isRoot(obj: CollectionNode) {
    return !!obj.info && !!obj.item && !obj.request;
}

function isFolder(obj: CollectionNode) {
    return !isRoot(obj) && !!obj.item && !obj.request;
}

function isRequest(obj: CollectionNode) {
    return !!obj.request && !obj.item && !obj.info;
}

export { isRoot, isFolder, isRequest };