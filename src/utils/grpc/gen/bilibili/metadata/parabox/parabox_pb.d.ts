// package: bilibili.metadata.parabox
// file: bilibili/metadata/parabox/parabox.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Exp extends jspb.Message { 
    getId(): number;
    setId(value: number): Exp;
    getBucket(): number;
    setBucket(value: number): Exp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Exp.AsObject;
    static toObject(includeInstance: boolean, msg: Exp): Exp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Exp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Exp;
    static deserializeBinaryFromReader(message: Exp, reader: jspb.BinaryReader): Exp;
}

export namespace Exp {
    export type AsObject = {
        id: number,
        bucket: number,
    }
}

export class Exps extends jspb.Message { 
    clearExpsList(): void;
    getExpsList(): Array<Exp>;
    setExpsList(value: Array<Exp>): Exps;
    addExps(value?: Exp, index?: number): Exp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Exps.AsObject;
    static toObject(includeInstance: boolean, msg: Exps): Exps.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Exps, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Exps;
    static deserializeBinaryFromReader(message: Exps, reader: jspb.BinaryReader): Exps;
}

export namespace Exps {
    export type AsObject = {
        expsList: Array<Exp.AsObject>,
    }
}
