// package: bilibili.metadata.device
// file: bilibili/metadata/device/device.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Device extends jspb.Message { 
    getAppId(): number;
    setAppId(value: number): Device;
    getBuild(): number;
    setBuild(value: number): Device;
    getBuvid(): string;
    setBuvid(value: string): Device;
    getMobiApp(): string;
    setMobiApp(value: string): Device;
    getPlatform(): string;
    setPlatform(value: string): Device;
    getDevice(): string;
    setDevice(value: string): Device;
    getChannel(): string;
    setChannel(value: string): Device;
    getBrand(): string;
    setBrand(value: string): Device;
    getModel(): string;
    setModel(value: string): Device;
    getOsver(): string;
    setOsver(value: string): Device;
    getFpLocal(): string;
    setFpLocal(value: string): Device;
    getFpRemote(): string;
    setFpRemote(value: string): Device;
    getVersionName(): string;
    setVersionName(value: string): Device;
    getFp(): string;
    setFp(value: string): Device;
    getFts(): number;
    setFts(value: number): Device;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Device.AsObject;
    static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Device;
    static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
    export type AsObject = {
        appId: number,
        build: number,
        buvid: string,
        mobiApp: string,
        platform: string,
        device: string,
        channel: string,
        brand: string,
        model: string,
        osver: string,
        fpLocal: string,
        fpRemote: string,
        versionName: string,
        fp: string,
        fts: number,
    }
}
