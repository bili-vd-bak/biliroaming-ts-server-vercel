// package: bilibili.metadata.restriction
// file: bilibili/metadata/restriction/restriction.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Restriction extends jspb.Message { 
    getTeenagersMode(): boolean;
    setTeenagersMode(value: boolean): Restriction;
    getLessonsMode(): boolean;
    setLessonsMode(value: boolean): Restriction;
    getMode(): ModeType;
    setMode(value: ModeType): Restriction;
    getReview(): boolean;
    setReview(value: boolean): Restriction;
    getDisableRcmd(): boolean;
    setDisableRcmd(value: boolean): Restriction;
    getBasicMode(): boolean;
    setBasicMode(value: boolean): Restriction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Restriction.AsObject;
    static toObject(includeInstance: boolean, msg: Restriction): Restriction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Restriction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Restriction;
    static deserializeBinaryFromReader(message: Restriction, reader: jspb.BinaryReader): Restriction;
}

export namespace Restriction {
    export type AsObject = {
        teenagersMode: boolean,
        lessonsMode: boolean,
        mode: ModeType,
        review: boolean,
        disableRcmd: boolean,
        basicMode: boolean,
    }
}

export enum ModeType {
    NORMAL = 0,
    TEENAGERS = 1,
    LESSONS = 2,
    BASIC = 3,
}
