import { isRequest, isRoot, isFolder } from "../validations/nodeValidations";
import { ArchNode, CollectionNode } from '../types/index';
import InvalidNodeError from "../exceptions/InvalidNodeError";

export default function buildTree(obj: CollectionNode, root = true): ArchNode {

    const result: ArchNode = {};

    if (root && isRoot(obj)) {
        result.label = obj.info?.name ?? 'Collection root';
        result.nodes = [];
        obj.item?.forEach((child: CollectionNode) => {
            result.nodes!.push(buildTree(child, false));
        });
    } else if (isRequest(obj)) {
        const method = obj.request?.method ?? '???';
        result.label = `${getStringByMethod(method)} ${method} ${obj.name}`;
    } else if (isFolder(obj)) {
        result.label = obj.name;
        result.nodes = [];
        obj.item?.forEach((child: CollectionNode) => {
            result.nodes!.push(buildTree(child, false));
        });
    } else {
        throw new InvalidNodeError();
    }

    return result;
}


function getStringByMethod(method: string) {
    switch (method) {
        case 'GET':
            return '🟢';
        case 'POST':
            return '🟡';
        case 'PUT':
            return '🔵';
        case 'DELETE':
            return '🔴';
        case 'PATCH':
            return '🟣';
        case 'OPTIONS':
            return '⚪️';
        default:
            return '🟤';
    }
}