// package: bilibili.polymer.app.search.v1
// file: bilibili/polymer/app/search/v1/search.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bilibili_app_archive_middleware_v1_preload_pb from "../../../../../bilibili/app/archive/middleware/v1/preload_pb";
import * as bilibili_pagination_pagination_pb from "../../../../../bilibili/pagination/pagination_pb";

export class Args extends jspb.Message { 
    getOnline(): number;
    setOnline(value: number): Args;
    getRname(): string;
    setRname(value: string): Args;
    getRoomId(): number;
    setRoomId(value: number): Args;
    getTname(): string;
    setTname(value: string): Args;
    getUpId(): number;
    setUpId(value: number): Args;
    getUpName(): string;
    setUpName(value: string): Args;
    getRid(): number;
    setRid(value: number): Args;
    getTid(): number;
    setTid(value: number): Args;
    getAid(): number;
    setAid(value: number): Args;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Args.AsObject;
    static toObject(includeInstance: boolean, msg: Args): Args.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Args, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Args;
    static deserializeBinaryFromReader(message: Args, reader: jspb.BinaryReader): Args;
}

export namespace Args {
    export type AsObject = {
        online: number,
        rname: string,
        roomId: number,
        tname: string,
        upId: number,
        upName: string,
        rid: number,
        tid: number,
        aid: number,
    }
}

export class Avatar extends jspb.Message { 
    getCover(): string;
    setCover(value: string): Avatar;
    getEvent(): string;
    setEvent(value: string): Avatar;
    getEventV2(): string;
    setEventV2(value: string): Avatar;
    getText(): string;
    setText(value: string): Avatar;
    getUpId(): number;
    setUpId(value: number): Avatar;
    getUri(): string;
    setUri(value: string): Avatar;
    getFaceNftNew(): number;
    setFaceNftNew(value: number): Avatar;

    hasNftFaceIcon(): boolean;
    clearNftFaceIcon(): void;
    getNftFaceIcon(): NftFaceIcon | undefined;
    setNftFaceIcon(value?: NftFaceIcon): Avatar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Avatar.AsObject;
    static toObject(includeInstance: boolean, msg: Avatar): Avatar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Avatar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Avatar;
    static deserializeBinaryFromReader(message: Avatar, reader: jspb.BinaryReader): Avatar;
}

export namespace Avatar {
    export type AsObject = {
        cover: string,
        event: string,
        eventV2: string,
        text: string,
        upId: number,
        uri: string,
        faceNftNew: number,
        nftFaceIcon?: NftFaceIcon.AsObject,
    }
}

export class AvItem extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AvItem;
    getCover(): string;
    setCover(value: string): AvItem;
    getUri(): string;
    setUri(value: string): AvItem;
    getCtimeLabel(): string;
    setCtimeLabel(value: string): AvItem;
    getDuration(): string;
    setDuration(value: string): AvItem;
    getPlay(): number;
    setPlay(value: number): AvItem;
    getDanmaku(): number;
    setDanmaku(value: number): AvItem;
    getCtime(): number;
    setCtime(value: number): AvItem;
    getGoto(): string;
    setGoto(value: string): AvItem;
    getParam(): string;
    setParam(value: string): AvItem;
    getPosition(): number;
    setPosition(value: number): AvItem;
    getCtimeLabelV2(): string;
    setCtimeLabelV2(value: string): AvItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvItem.AsObject;
    static toObject(includeInstance: boolean, msg: AvItem): AvItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvItem;
    static deserializeBinaryFromReader(message: AvItem, reader: jspb.BinaryReader): AvItem;
}

export namespace AvItem {
    export type AsObject = {
        title: string,
        cover: string,
        uri: string,
        ctimeLabel: string,
        duration: string,
        play: number,
        danmaku: number,
        ctime: number,
        pb_goto: string,
        param: string,
        position: number,
        ctimeLabelV2: string,
    }
}

export class Background extends jspb.Message { 
    getShow(): number;
    setShow(value: number): Background;
    getBgPicUrl(): string;
    setBgPicUrl(value: string): Background;
    getFgPicUrl(): string;
    setFgPicUrl(value: string): Background;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Background.AsObject;
    static toObject(includeInstance: boolean, msg: Background): Background.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Background, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Background;
    static deserializeBinaryFromReader(message: Background, reader: jspb.BinaryReader): Background;
}

export namespace Background {
    export type AsObject = {
        show: number,
        bgPicUrl: string,
        fgPicUrl: string,
    }
}

export class Badge extends jspb.Message { 
    getText(): string;
    setText(value: string): Badge;
    getBgCover(): string;
    setBgCover(value: string): Badge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Badge.AsObject;
    static toObject(includeInstance: boolean, msg: Badge): Badge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Badge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Badge;
    static deserializeBinaryFromReader(message: Badge, reader: jspb.BinaryReader): Badge;
}

export namespace Badge {
    export type AsObject = {
        text: string,
        bgCover: string,
    }
}

export class Badge2 extends jspb.Message { 
    getBgCover(): string;
    setBgCover(value: string): Badge2;
    getText(): string;
    setText(value: string): Badge2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Badge2.AsObject;
    static toObject(includeInstance: boolean, msg: Badge2): Badge2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Badge2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Badge2;
    static deserializeBinaryFromReader(message: Badge2, reader: jspb.BinaryReader): Badge2;
}

export namespace Badge2 {
    export type AsObject = {
        bgCover: string,
        text: string,
    }
}

export class BottomButton extends jspb.Message { 
    getDesc(): string;
    setDesc(value: string): BottomButton;
    getLink(): string;
    setLink(value: string): BottomButton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BottomButton.AsObject;
    static toObject(includeInstance: boolean, msg: BottomButton): BottomButton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BottomButton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BottomButton;
    static deserializeBinaryFromReader(message: BottomButton, reader: jspb.BinaryReader): BottomButton;
}

export namespace BottomButton {
    export type AsObject = {
        desc: string,
        link: string,
    }
}

export class BrandADAccount extends jspb.Message { 
    getParam(): string;
    setParam(value: string): BrandADAccount;
    getGoto(): string;
    setGoto(value: string): BrandADAccount;
    getMid(): number;
    setMid(value: number): BrandADAccount;
    getName(): string;
    setName(value: string): BrandADAccount;
    getFace(): string;
    setFace(value: string): BrandADAccount;
    getSign(): string;
    setSign(value: string): BrandADAccount;

    hasRelation(): boolean;
    clearRelation(): void;
    getRelation(): Relation | undefined;
    setRelation(value?: Relation): BrandADAccount;
    getRoomid(): number;
    setRoomid(value: number): BrandADAccount;
    getLiveStatus(): number;
    setLiveStatus(value: number): BrandADAccount;
    getLiveLink(): string;
    setLiveLink(value: string): BrandADAccount;

    hasOfficialVerify(): boolean;
    clearOfficialVerify(): void;
    getOfficialVerify(): OfficialVerify | undefined;
    setOfficialVerify(value?: OfficialVerify): BrandADAccount;

    hasVip(): boolean;
    clearVip(): void;
    getVip(): VipInfo | undefined;
    setVip(value?: VipInfo): BrandADAccount;
    getUri(): string;
    setUri(value: string): BrandADAccount;
    getFaceNftNew(): number;
    setFaceNftNew(value: number): BrandADAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BrandADAccount.AsObject;
    static toObject(includeInstance: boolean, msg: BrandADAccount): BrandADAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BrandADAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BrandADAccount;
    static deserializeBinaryFromReader(message: BrandADAccount, reader: jspb.BinaryReader): BrandADAccount;
}

export namespace BrandADAccount {
    export type AsObject = {
        param: string,
        pb_goto: string,
        mid: number,
        name: string,
        face: string,
        sign: string,
        relation?: Relation.AsObject,
        roomid: number,
        liveStatus: number,
        liveLink: string,
        officialVerify?: OfficialVerify.AsObject,
        vip?: VipInfo.AsObject,
        uri: string,
        faceNftNew: number,
    }
}

export class BrandADArc extends jspb.Message { 
    getParam(): string;
    setParam(value: string): BrandADArc;
    getGoto(): string;
    setGoto(value: string): BrandADArc;
    getAid(): number;
    setAid(value: number): BrandADArc;
    getPlay(): number;
    setPlay(value: number): BrandADArc;
    getReply(): number;
    setReply(value: number): BrandADArc;
    getDuration(): string;
    setDuration(value: string): BrandADArc;
    getAuthor(): string;
    setAuthor(value: string): BrandADArc;
    getTitle(): string;
    setTitle(value: string): BrandADArc;
    getUri(): string;
    setUri(value: string): BrandADArc;
    getCover(): string;
    setCover(value: string): BrandADArc;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BrandADArc.AsObject;
    static toObject(includeInstance: boolean, msg: BrandADArc): BrandADArc.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BrandADArc, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BrandADArc;
    static deserializeBinaryFromReader(message: BrandADArc, reader: jspb.BinaryReader): BrandADArc;
}

export namespace BrandADArc {
    export type AsObject = {
        param: string,
        pb_goto: string,
        aid: number,
        play: number,
        reply: number,
        duration: string,
        author: string,
        title: string,
        uri: string,
        cover: string,
    }
}

export class Button extends jspb.Message { 
    getText(): string;
    setText(value: string): Button;
    getParam(): string;
    setParam(value: string): Button;
    getUri(): string;
    setUri(value: string): Button;
    getEvent(): string;
    setEvent(value: string): Button;
    getSelected(): number;
    setSelected(value: number): Button;
    getType(): number;
    setType(value: number): Button;
    getEventV2(): string;
    setEventV2(value: string): Button;

    hasRelation(): boolean;
    clearRelation(): void;
    getRelation(): Relation | undefined;
    setRelation(value?: Relation): Button;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Button.AsObject;
    static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Button;
    static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
}

export namespace Button {
    export type AsObject = {
        text: string,
        param: string,
        uri: string,
        event: string,
        selected: number,
        type: number,
        eventV2: string,
        relation?: Relation.AsObject,
    }
}

export class ButtonMeta extends jspb.Message { 
    getIcon(): string;
    setIcon(value: string): ButtonMeta;
    getText(): string;
    setText(value: string): ButtonMeta;
    getButtonStatus(): string;
    setButtonStatus(value: string): ButtonMeta;
    getToast(): string;
    setToast(value: string): ButtonMeta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ButtonMeta.AsObject;
    static toObject(includeInstance: boolean, msg: ButtonMeta): ButtonMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ButtonMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ButtonMeta;
    static deserializeBinaryFromReader(message: ButtonMeta, reader: jspb.BinaryReader): ButtonMeta;
}

export namespace ButtonMeta {
    export type AsObject = {
        icon: string,
        text: string,
        buttonStatus: string,
        toast: string,
    }
}

export class CardBusinessBadge extends jspb.Message { 

    hasGotoIcon(): boolean;
    clearGotoIcon(): void;
    getGotoIcon(): GotoIcon | undefined;
    setGotoIcon(value?: GotoIcon): CardBusinessBadge;

    hasBadgeStyle(): boolean;
    clearBadgeStyle(): void;
    getBadgeStyle(): ReasonStyle | undefined;
    setBadgeStyle(value?: ReasonStyle): CardBusinessBadge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CardBusinessBadge.AsObject;
    static toObject(includeInstance: boolean, msg: CardBusinessBadge): CardBusinessBadge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CardBusinessBadge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CardBusinessBadge;
    static deserializeBinaryFromReader(message: CardBusinessBadge, reader: jspb.BinaryReader): CardBusinessBadge;
}

export namespace CardBusinessBadge {
    export type AsObject = {
        gotoIcon?: GotoIcon.AsObject,
        badgeStyle?: ReasonStyle.AsObject,
    }
}

export class ChannelLabel extends jspb.Message { 
    getText(): string;
    setText(value: string): ChannelLabel;
    getUri(): string;
    setUri(value: string): ChannelLabel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChannelLabel.AsObject;
    static toObject(includeInstance: boolean, msg: ChannelLabel): ChannelLabel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChannelLabel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChannelLabel;
    static deserializeBinaryFromReader(message: ChannelLabel, reader: jspb.BinaryReader): ChannelLabel;
}

export namespace ChannelLabel {
    export type AsObject = {
        text: string,
        uri: string,
    }
}

export class ChannelMixedItem extends jspb.Message { 
    getId(): number;
    setId(value: number): ChannelMixedItem;
    getCoverLeftIcon1(): number;
    setCoverLeftIcon1(value: number): ChannelMixedItem;
    getCoverLeftText1(): string;
    setCoverLeftText1(value: string): ChannelMixedItem;
    getCover(): string;
    setCover(value: string): ChannelMixedItem;
    getGoto(): string;
    setGoto(value: string): ChannelMixedItem;
    getParam(): string;
    setParam(value: string): ChannelMixedItem;
    getUri(): string;
    setUri(value: string): ChannelMixedItem;
    getTitle(): string;
    setTitle(value: string): ChannelMixedItem;

    hasBadge(): boolean;
    clearBadge(): void;
    getBadge(): Badge2 | undefined;
    setBadge(value?: Badge2): ChannelMixedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChannelMixedItem.AsObject;
    static toObject(includeInstance: boolean, msg: ChannelMixedItem): ChannelMixedItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChannelMixedItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChannelMixedItem;
    static deserializeBinaryFromReader(message: ChannelMixedItem, reader: jspb.BinaryReader): ChannelMixedItem;
}

export namespace ChannelMixedItem {
    export type AsObject = {
        id: number,
        coverLeftIcon1: number,
        coverLeftText1: string,
        cover: string,
        pb_goto: string,
        param: string,
        uri: string,
        title: string,
        badge?: Badge2.AsObject,
    }
}

export class CheckMore extends jspb.Message { 
    getContent(): string;
    setContent(value: string): CheckMore;
    getUri(): string;
    setUri(value: string): CheckMore;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckMore.AsObject;
    static toObject(includeInstance: boolean, msg: CheckMore): CheckMore.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckMore, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckMore;
    static deserializeBinaryFromReader(message: CheckMore, reader: jspb.BinaryReader): CheckMore;
}

export namespace CheckMore {
    export type AsObject = {
        content: string,
        uri: string,
    }
}

export class CloudGameParams extends jspb.Message { 
    getSourceFrom(): number;
    setSourceFrom(value: number): CloudGameParams;
    getScene(): string;
    setScene(value: string): CloudGameParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudGameParams.AsObject;
    static toObject(includeInstance: boolean, msg: CloudGameParams): CloudGameParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudGameParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudGameParams;
    static deserializeBinaryFromReader(message: CloudGameParams, reader: jspb.BinaryReader): CloudGameParams;
}

export namespace CloudGameParams {
    export type AsObject = {
        sourceFrom: number,
        scene: string,
    }
}

export class DetailsRelationItem extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): DetailsRelationItem;
    getCover(): string;
    setCover(value: string): DetailsRelationItem;
    getCoverLeftText(): string;
    setCoverLeftText(value: string): DetailsRelationItem;

    hasCoverBadgeStyle(): boolean;
    clearCoverBadgeStyle(): void;
    getCoverBadgeStyle(): ReasonStyle | undefined;
    setCoverBadgeStyle(value?: ReasonStyle): DetailsRelationItem;
    getModulePos(): string;
    setModulePos(value: string): DetailsRelationItem;
    getGoto(): string;
    setGoto(value: string): DetailsRelationItem;
    getParam(): string;
    setParam(value: string): DetailsRelationItem;
    getUri(): string;
    setUri(value: string): DetailsRelationItem;
    getPosition(): number;
    setPosition(value: number): DetailsRelationItem;
    getCoverLeftTextV2(): string;
    setCoverLeftTextV2(value: string): DetailsRelationItem;

    hasCoverBadgeStyleV2(): boolean;
    clearCoverBadgeStyleV2(): void;
    getCoverBadgeStyleV2(): ReasonStyle | undefined;
    setCoverBadgeStyleV2(value?: ReasonStyle): DetailsRelationItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetailsRelationItem.AsObject;
    static toObject(includeInstance: boolean, msg: DetailsRelationItem): DetailsRelationItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetailsRelationItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetailsRelationItem;
    static deserializeBinaryFromReader(message: DetailsRelationItem, reader: jspb.BinaryReader): DetailsRelationItem;
}

export namespace DetailsRelationItem {
    export type AsObject = {
        title: string,
        cover: string,
        coverLeftText: string,
        coverBadgeStyle?: ReasonStyle.AsObject,
        modulePos: string,
        pb_goto: string,
        param: string,
        uri: string,
        position: number,
        coverLeftTextV2: string,
        coverBadgeStyleV2?: ReasonStyle.AsObject,
    }
}

export class DislikeReason extends jspb.Message { 
    getId(): number;
    setId(value: number): DislikeReason;
    getName(): string;
    setName(value: string): DislikeReason;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DislikeReason.AsObject;
    static toObject(includeInstance: boolean, msg: DislikeReason): DislikeReason.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DislikeReason, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DislikeReason;
    static deserializeBinaryFromReader(message: DislikeReason, reader: jspb.BinaryReader): DislikeReason;
}

export namespace DislikeReason {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class DisplayOption extends jspb.Message { 
    getVideoTitleRow(): number;
    setVideoTitleRow(value: number): DisplayOption;
    getSearchPageVisualOpti(): number;
    setSearchPageVisualOpti(value: number): DisplayOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisplayOption.AsObject;
    static toObject(includeInstance: boolean, msg: DisplayOption): DisplayOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisplayOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisplayOption;
    static deserializeBinaryFromReader(message: DisplayOption, reader: jspb.BinaryReader): DisplayOption;
}

export namespace DisplayOption {
    export type AsObject = {
        videoTitleRow: number,
        searchPageVisualOpti: number,
    }
}

export class DyTopic extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): DyTopic;
    getUri(): string;
    setUri(value: string): DyTopic;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DyTopic.AsObject;
    static toObject(includeInstance: boolean, msg: DyTopic): DyTopic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DyTopic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DyTopic;
    static deserializeBinaryFromReader(message: DyTopic, reader: jspb.BinaryReader): DyTopic;
}

export namespace DyTopic {
    export type AsObject = {
        title: string,
        uri: string,
    }
}

export class EasterEgg extends jspb.Message { 
    getId(): number;
    setId(value: number): EasterEgg;
    getShowCount(): number;
    setShowCount(value: number): EasterEgg;
    getType(): number;
    setType(value: number): EasterEgg;
    getUrl(): string;
    setUrl(value: string): EasterEgg;
    getCloseCount(): number;
    setCloseCount(value: number): EasterEgg;
    getMaskTransparency(): number;
    setMaskTransparency(value: number): EasterEgg;
    getMaskColor(): string;
    setMaskColor(value: string): EasterEgg;
    getPicType(): number;
    setPicType(value: number): EasterEgg;
    getShowTime(): number;
    setShowTime(value: number): EasterEgg;
    getSourceUrl(): string;
    setSourceUrl(value: string): EasterEgg;
    getSourceMd5(): string;
    setSourceMd5(value: string): EasterEgg;
    getSourceSize(): number;
    setSourceSize(value: number): EasterEgg;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EasterEgg.AsObject;
    static toObject(includeInstance: boolean, msg: EasterEgg): EasterEgg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EasterEgg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EasterEgg;
    static deserializeBinaryFromReader(message: EasterEgg, reader: jspb.BinaryReader): EasterEgg;
}

export namespace EasterEgg {
    export type AsObject = {
        id: number,
        showCount: number,
        type: number,
        url: string,
        closeCount: number,
        maskTransparency: number,
        maskColor: string,
        picType: number,
        showTime: number,
        sourceUrl: string,
        sourceMd5: string,
        sourceSize: number,
    }
}

export class Episode extends jspb.Message { 
    getUri(): string;
    setUri(value: string): Episode;
    getParam(): string;
    setParam(value: string): Episode;
    getIndex(): string;
    setIndex(value: string): Episode;
    clearBadgesList(): void;
    getBadgesList(): Array<ReasonStyle>;
    setBadgesList(value: Array<ReasonStyle>): Episode;
    addBadges(value?: ReasonStyle, index?: number): ReasonStyle;
    getPosition(): number;
    setPosition(value: number): Episode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Episode.AsObject;
    static toObject(includeInstance: boolean, msg: Episode): Episode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Episode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Episode;
    static deserializeBinaryFromReader(message: Episode, reader: jspb.BinaryReader): Episode;
}

export namespace Episode {
    export type AsObject = {
        uri: string,
        param: string,
        index: string,
        badgesList: Array<ReasonStyle.AsObject>,
        position: number,
    }
}

export class EpisodeNew extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): EpisodeNew;
    getUri(): string;
    setUri(value: string): EpisodeNew;
    getParam(): string;
    setParam(value: string): EpisodeNew;
    getIsNew(): number;
    setIsNew(value: number): EpisodeNew;
    clearBadgesList(): void;
    getBadgesList(): Array<ReasonStyle>;
    setBadgesList(value: Array<ReasonStyle>): EpisodeNew;
    addBadges(value?: ReasonStyle, index?: number): ReasonStyle;
    getType(): number;
    setType(value: number): EpisodeNew;
    getPosition(): number;
    setPosition(value: number): EpisodeNew;
    getCover(): string;
    setCover(value: string): EpisodeNew;
    getLabel(): string;
    setLabel(value: string): EpisodeNew;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpisodeNew.AsObject;
    static toObject(includeInstance: boolean, msg: EpisodeNew): EpisodeNew.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpisodeNew, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpisodeNew;
    static deserializeBinaryFromReader(message: EpisodeNew, reader: jspb.BinaryReader): EpisodeNew;
}

export namespace EpisodeNew {
    export type AsObject = {
        title: string,
        uri: string,
        param: string,
        isNew: number,
        badgesList: Array<ReasonStyle.AsObject>,
        type: number,
        position: number,
        cover: string,
        label: string,
    }
}

export class ExtraLink extends jspb.Message { 
    getText(): string;
    setText(value: string): ExtraLink;
    getUri(): string;
    setUri(value: string): ExtraLink;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtraLink.AsObject;
    static toObject(includeInstance: boolean, msg: ExtraLink): ExtraLink.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtraLink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtraLink;
    static deserializeBinaryFromReader(message: ExtraLink, reader: jspb.BinaryReader): ExtraLink;
}

export namespace ExtraLink {
    export type AsObject = {
        text: string,
        uri: string,
    }
}

export class FollowButton extends jspb.Message { 
    getIcon(): string;
    setIcon(value: string): FollowButton;

    getTextsMap(): jspb.Map<string, string>;
    clearTextsMap(): void;
    getStatusReport(): string;
    setStatusReport(value: string): FollowButton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowButton.AsObject;
    static toObject(includeInstance: boolean, msg: FollowButton): FollowButton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowButton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowButton;
    static deserializeBinaryFromReader(message: FollowButton, reader: jspb.BinaryReader): FollowButton;
}

export namespace FollowButton {
    export type AsObject = {
        icon: string,

        textsMap: Array<[string, string]>,
        statusReport: string,
    }
}

export class FullTextResult extends jspb.Message { 
    getType(): number;
    setType(value: number): FullTextResult;
    getShowText(): string;
    setShowText(value: string): FullTextResult;
    getJumpStartProgress(): number;
    setJumpStartProgress(value: number): FullTextResult;
    getJumpUri(): string;
    setJumpUri(value: string): FullTextResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextResult.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextResult): FullTextResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextResult;
    static deserializeBinaryFromReader(message: FullTextResult, reader: jspb.BinaryReader): FullTextResult;
}

export namespace FullTextResult {
    export type AsObject = {
        type: number,
        showText: string,
        jumpStartProgress: number,
        jumpUri: string,
    }
}

export class GotoIcon extends jspb.Message { 
    getIconUrl(): string;
    setIconUrl(value: string): GotoIcon;
    getIconNightUrl(): string;
    setIconNightUrl(value: string): GotoIcon;
    getIconWidth(): number;
    setIconWidth(value: number): GotoIcon;
    getIconHeight(): number;
    setIconHeight(value: number): GotoIcon;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GotoIcon.AsObject;
    static toObject(includeInstance: boolean, msg: GotoIcon): GotoIcon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GotoIcon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GotoIcon;
    static deserializeBinaryFromReader(message: GotoIcon, reader: jspb.BinaryReader): GotoIcon;
}

export namespace GotoIcon {
    export type AsObject = {
        iconUrl: string,
        iconNightUrl: string,
        iconWidth: number,
        iconHeight: number,
    }
}

export class InlineProgressBar extends jspb.Message { 
    getIconDrag(): string;
    setIconDrag(value: string): InlineProgressBar;
    getIconDragHash(): string;
    setIconDragHash(value: string): InlineProgressBar;
    getIconStop(): string;
    setIconStop(value: string): InlineProgressBar;
    getIconStopHash(): string;
    setIconStopHash(value: string): InlineProgressBar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InlineProgressBar.AsObject;
    static toObject(includeInstance: boolean, msg: InlineProgressBar): InlineProgressBar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InlineProgressBar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InlineProgressBar;
    static deserializeBinaryFromReader(message: InlineProgressBar, reader: jspb.BinaryReader): InlineProgressBar;
}

export namespace InlineProgressBar {
    export type AsObject = {
        iconDrag: string,
        iconDragHash: string,
        iconStop: string,
        iconStopHash: string,
    }
}

export class InlineThreePointPanel extends jspb.Message { 
    getPanelType(): number;
    setPanelType(value: number): InlineThreePointPanel;
    getShareId(): string;
    setShareId(value: string): InlineThreePointPanel;
    getShareOrigin(): string;
    setShareOrigin(value: string): InlineThreePointPanel;
    clearFunctionalButtonsList(): void;
    getFunctionalButtonsList(): Array<ShareButtonItem>;
    setFunctionalButtonsList(value: Array<ShareButtonItem>): InlineThreePointPanel;
    addFunctionalButtons(value?: ShareButtonItem, index?: number): ShareButtonItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InlineThreePointPanel.AsObject;
    static toObject(includeInstance: boolean, msg: InlineThreePointPanel): InlineThreePointPanel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InlineThreePointPanel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InlineThreePointPanel;
    static deserializeBinaryFromReader(message: InlineThreePointPanel, reader: jspb.BinaryReader): InlineThreePointPanel;
}

export namespace InlineThreePointPanel {
    export type AsObject = {
        panelType: number,
        shareId: string,
        shareOrigin: string,
        functionalButtonsList: Array<ShareButtonItem.AsObject>,
    }
}

export class Item extends jspb.Message { 
    getUri(): string;
    setUri(value: string): Item;
    getParam(): string;
    setParam(value: string): Item;
    getGoto(): string;
    setGoto(value: string): Item;
    getLinktype(): string;
    setLinktype(value: string): Item;
    getPosition(): number;
    setPosition(value: number): Item;
    getTrackid(): string;
    setTrackid(value: string): Item;

    hasSpecial(): boolean;
    clearSpecial(): void;
    getSpecial(): SearchSpecialCard | undefined;
    setSpecial(value?: SearchSpecialCard): Item;

    hasArticle(): boolean;
    clearArticle(): void;
    getArticle(): SearchArticleCard | undefined;
    setArticle(value?: SearchArticleCard): Item;

    hasBanner(): boolean;
    clearBanner(): void;
    getBanner(): SearchBannerCard | undefined;
    setBanner(value?: SearchBannerCard): Item;

    hasLive(): boolean;
    clearLive(): void;
    getLive(): SearchLiveCard | undefined;
    setLive(value?: SearchLiveCard): Item;

    hasGame(): boolean;
    clearGame(): void;
    getGame(): SearchGameCard | undefined;
    setGame(value?: SearchGameCard): Item;

    hasPurchase(): boolean;
    clearPurchase(): void;
    getPurchase(): SearchPurchaseCard | undefined;
    setPurchase(value?: SearchPurchaseCard): Item;

    hasRecommendWord(): boolean;
    clearRecommendWord(): void;
    getRecommendWord(): SearchRecommendWordCard | undefined;
    setRecommendWord(value?: SearchRecommendWordCard): Item;

    hasDynamic(): boolean;
    clearDynamic(): void;
    getDynamic(): SearchDynamicCard | undefined;
    setDynamic(value?: SearchDynamicCard): Item;

    hasSuggestKeyword(): boolean;
    clearSuggestKeyword(): void;
    getSuggestKeyword(): SearchNoResultSuggestWordCard | undefined;
    setSuggestKeyword(value?: SearchNoResultSuggestWordCard): Item;

    hasSpecialGuide(): boolean;
    clearSpecialGuide(): void;
    getSpecialGuide(): SearchSpecialGuideCard | undefined;
    setSpecialGuide(value?: SearchSpecialGuideCard): Item;

    hasComic(): boolean;
    clearComic(): void;
    getComic(): SearchComicCard | undefined;
    setComic(value?: SearchComicCard): Item;

    hasChannelNew(): boolean;
    clearChannelNew(): void;
    getChannelNew(): SearchNewChannelCard | undefined;
    setChannelNew(value?: SearchNewChannelCard): Item;

    hasOgvCard(): boolean;
    clearOgvCard(): void;
    getOgvCard(): SearchOgvCard | undefined;
    setOgvCard(value?: SearchOgvCard): Item;

    hasBangumiRelates(): boolean;
    clearBangumiRelates(): void;
    getBangumiRelates(): SearchOgvRelationCard | undefined;
    setBangumiRelates(value?: SearchOgvRelationCard): Item;

    hasFindMore(): boolean;
    clearFindMore(): void;
    getFindMore(): SearchOgvRecommendCard | undefined;
    setFindMore(value?: SearchOgvRecommendCard): Item;

    hasEsport(): boolean;
    clearEsport(): void;
    getEsport(): SearchSportCard | undefined;
    setEsport(value?: SearchSportCard): Item;

    hasAuthorNew(): boolean;
    clearAuthorNew(): void;
    getAuthorNew(): SearchAuthorNewCard | undefined;
    setAuthorNew(value?: SearchAuthorNewCard): Item;

    hasTips(): boolean;
    clearTips(): void;
    getTips(): SearchTipsCard | undefined;
    setTips(value?: SearchTipsCard): Item;

    hasCm(): boolean;
    clearCm(): void;
    getCm(): SearchAdCard | undefined;
    setCm(value?: SearchAdCard): Item;

    hasPediaCard(): boolean;
    clearPediaCard(): void;
    getPediaCard(): SearchPediaCard | undefined;
    setPediaCard(value?: SearchPediaCard): Item;

    hasUgcInline(): boolean;
    clearUgcInline(): void;
    getUgcInline(): SearchUgcInlineCard | undefined;
    setUgcInline(value?: SearchUgcInlineCard): Item;

    hasLiveInline(): boolean;
    clearLiveInline(): void;
    getLiveInline(): SearchLiveInlineCard | undefined;
    setLiveInline(value?: SearchLiveInlineCard): Item;

    hasTopGame(): boolean;
    clearTopGame(): void;
    getTopGame(): SearchTopGameCard | undefined;
    setTopGame(value?: SearchTopGameCard): Item;

    hasSports(): boolean;
    clearSports(): void;
    getSports(): SearchOlympicGameCard | undefined;
    setSports(value?: SearchOlympicGameCard): Item;

    hasPediaCardInline(): boolean;
    clearPediaCardInline(): void;
    getPediaCardInline(): SearchOlympicWikiCard | undefined;
    setPediaCardInline(value?: SearchOlympicWikiCard): Item;

    hasRecommendTips(): boolean;
    clearRecommendTips(): void;
    getRecommendTips(): SearchRecommendTipCard | undefined;
    setRecommendTips(value?: SearchRecommendTipCard): Item;

    hasCollectionCard(): boolean;
    clearCollectionCard(): void;
    getCollectionCard(): SearchCollectionCard | undefined;
    setCollectionCard(value?: SearchCollectionCard): Item;

    hasOgvChannel(): boolean;
    clearOgvChannel(): void;
    getOgvChannel(): SearchOgvChannelCard | undefined;
    setOgvChannel(value?: SearchOgvChannelCard): Item;

    hasOgvInline(): boolean;
    clearOgvInline(): void;
    getOgvInline(): SearchOgvInlineCard | undefined;
    setOgvInline(value?: SearchOgvInlineCard): Item;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): SearchUpperCard | undefined;
    setAuthor(value?: SearchUpperCard): Item;

    hasAv(): boolean;
    clearAv(): void;
    getAv(): SearchVideoCard | undefined;
    setAv(value?: SearchVideoCard): Item;

    hasBangumi(): boolean;
    clearBangumi(): void;
    getBangumi(): SearchBangumiCard | undefined;
    setBangumi(value?: SearchBangumiCard): Item;

    hasEsportsInline(): boolean;
    clearEsportsInline(): void;
    getEsportsInline(): SearchSportInlineCard | undefined;
    setEsportsInline(value?: SearchSportInlineCard): Item;

    getCardItemCase(): Item.CardItemCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
    export type AsObject = {
        uri: string,
        param: string,
        pb_goto: string,
        linktype: string,
        position: number,
        trackid: string,
        special?: SearchSpecialCard.AsObject,
        article?: SearchArticleCard.AsObject,
        banner?: SearchBannerCard.AsObject,
        live?: SearchLiveCard.AsObject,
        game?: SearchGameCard.AsObject,
        purchase?: SearchPurchaseCard.AsObject,
        recommendWord?: SearchRecommendWordCard.AsObject,
        dynamic?: SearchDynamicCard.AsObject,
        suggestKeyword?: SearchNoResultSuggestWordCard.AsObject,
        specialGuide?: SearchSpecialGuideCard.AsObject,
        comic?: SearchComicCard.AsObject,
        channelNew?: SearchNewChannelCard.AsObject,
        ogvCard?: SearchOgvCard.AsObject,
        bangumiRelates?: SearchOgvRelationCard.AsObject,
        findMore?: SearchOgvRecommendCard.AsObject,
        esport?: SearchSportCard.AsObject,
        authorNew?: SearchAuthorNewCard.AsObject,
        tips?: SearchTipsCard.AsObject,
        cm?: SearchAdCard.AsObject,
        pediaCard?: SearchPediaCard.AsObject,
        ugcInline?: SearchUgcInlineCard.AsObject,
        liveInline?: SearchLiveInlineCard.AsObject,
        topGame?: SearchTopGameCard.AsObject,
        sports?: SearchOlympicGameCard.AsObject,
        pediaCardInline?: SearchOlympicWikiCard.AsObject,
        recommendTips?: SearchRecommendTipCard.AsObject,
        collectionCard?: SearchCollectionCard.AsObject,
        ogvChannel?: SearchOgvChannelCard.AsObject,
        ogvInline?: SearchOgvInlineCard.AsObject,
        author?: SearchUpperCard.AsObject,
        av?: SearchVideoCard.AsObject,
        bangumi?: SearchBangumiCard.AsObject,
        esportsInline?: SearchSportInlineCard.AsObject,
    }

    export enum CardItemCase {
        CARD_ITEM_NOT_SET = 0,
        SPECIAL = 7,
        ARTICLE = 8,
        BANNER = 9,
        LIVE = 10,
        GAME = 11,
        PURCHASE = 12,
        RECOMMEND_WORD = 13,
        DYNAMIC = 14,
        SUGGEST_KEYWORD = 15,
        SPECIAL_GUIDE = 16,
        COMIC = 17,
        CHANNEL_NEW = 18,
        OGV_CARD = 19,
        BANGUMI_RELATES = 20,
        FIND_MORE = 21,
        ESPORT = 22,
        AUTHOR_NEW = 23,
        TIPS = 24,
        CM = 25,
        PEDIA_CARD = 26,
        UGC_INLINE = 27,
        LIVE_INLINE = 28,
        TOP_GAME = 29,
        SPORTS = 30,
        PEDIA_CARD_INLINE = 31,
        RECOMMEND_TIPS = 32,
        COLLECTION_CARD = 33,
        OGV_CHANNEL = 34,
        OGV_INLINE = 35,
        AUTHOR = 36,
        AV = 37,
        BANGUMI = 38,
        ESPORTS_INLINE = 39,
    }

}

export class LikeResource extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): LikeResource;
    getContentHash(): string;
    setContentHash(value: string): LikeResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LikeResource.AsObject;
    static toObject(includeInstance: boolean, msg: LikeResource): LikeResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LikeResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LikeResource;
    static deserializeBinaryFromReader(message: LikeResource, reader: jspb.BinaryReader): LikeResource;
}

export namespace LikeResource {
    export type AsObject = {
        url: string,
        contentHash: string,
    }
}

export class LiveBadgeResource extends jspb.Message { 
    getText(): string;
    setText(value: string): LiveBadgeResource;
    getAnimationUrl(): string;
    setAnimationUrl(value: string): LiveBadgeResource;
    getAnimationUrlHash(): string;
    setAnimationUrlHash(value: string): LiveBadgeResource;
    getBackgroundColorLight(): string;
    setBackgroundColorLight(value: string): LiveBadgeResource;
    getBackgroundColorNight(): string;
    setBackgroundColorNight(value: string): LiveBadgeResource;
    getAlphaLight(): number;
    setAlphaLight(value: number): LiveBadgeResource;
    getAlphaNight(): number;
    setAlphaNight(value: number): LiveBadgeResource;
    getFontColor(): string;
    setFontColor(value: string): LiveBadgeResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiveBadgeResource.AsObject;
    static toObject(includeInstance: boolean, msg: LiveBadgeResource): LiveBadgeResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiveBadgeResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiveBadgeResource;
    static deserializeBinaryFromReader(message: LiveBadgeResource, reader: jspb.BinaryReader): LiveBadgeResource;
}

export namespace LiveBadgeResource {
    export type AsObject = {
        text: string,
        animationUrl: string,
        animationUrlHash: string,
        backgroundColorLight: string,
        backgroundColorNight: string,
        alphaLight: number,
        alphaNight: number,
        fontColor: string,
    }
}

export class Mask extends jspb.Message { 

    hasAvatar(): boolean;
    clearAvatar(): void;
    getAvatar(): Avatar | undefined;
    setAvatar(value?: Avatar): Mask;

    hasButton(): boolean;
    clearButton(): void;
    getButton(): Button | undefined;
    setButton(value?: Button): Mask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mask.AsObject;
    static toObject(includeInstance: boolean, msg: Mask): Mask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mask;
    static deserializeBinaryFromReader(message: Mask, reader: jspb.BinaryReader): Mask;
}

export namespace Mask {
    export type AsObject = {
        avatar?: Avatar.AsObject,
        button?: Button.AsObject,
    }
}

export class MatchInfoObj extends jspb.Message { 
    getId(): number;
    setId(value: number): MatchInfoObj;
    getStatus(): number;
    setStatus(value: number): MatchInfoObj;
    getMatchStage(): string;
    setMatchStage(value: string): MatchInfoObj;

    hasTeam1(): boolean;
    clearTeam1(): void;
    getTeam1(): MatchTeam | undefined;
    setTeam1(value?: MatchTeam): MatchInfoObj;

    hasTeam2(): boolean;
    clearTeam2(): void;
    getTeam2(): MatchTeam | undefined;
    setTeam2(value?: MatchTeam): MatchInfoObj;

    hasMatchLabel(): boolean;
    clearMatchLabel(): void;
    getMatchLabel(): MatchItem | undefined;
    setMatchLabel(value?: MatchItem): MatchInfoObj;

    hasMatchTime(): boolean;
    clearMatchTime(): void;
    getMatchTime(): MatchItem | undefined;
    setMatchTime(value?: MatchItem): MatchInfoObj;

    hasMatchButton(): boolean;
    clearMatchButton(): void;
    getMatchButton(): MatchItem | undefined;
    setMatchButton(value?: MatchItem): MatchInfoObj;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatchInfoObj.AsObject;
    static toObject(includeInstance: boolean, msg: MatchInfoObj): MatchInfoObj.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatchInfoObj, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatchInfoObj;
    static deserializeBinaryFromReader(message: MatchInfoObj, reader: jspb.BinaryReader): MatchInfoObj;
}

export namespace MatchInfoObj {
    export type AsObject = {
        id: number,
        status: number,
        matchStage: string,
        team1?: MatchTeam.AsObject,
        team2?: MatchTeam.AsObject,
        matchLabel?: MatchItem.AsObject,
        matchTime?: MatchItem.AsObject,
        matchButton?: MatchItem.AsObject,
    }
}

export class MatchItem extends jspb.Message { 
    getState(): number;
    setState(value: number): MatchItem;
    getText(): string;
    setText(value: string): MatchItem;
    getTextColor(): string;
    setTextColor(value: string): MatchItem;
    getTextColorNight(): string;
    setTextColorNight(value: string): MatchItem;
    getUri(): string;
    setUri(value: string): MatchItem;
    getLiveLink(): string;
    setLiveLink(value: string): MatchItem;

    hasTexts(): boolean;
    clearTexts(): void;
    getTexts(): Texts | undefined;
    setTexts(value?: Texts): MatchItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatchItem.AsObject;
    static toObject(includeInstance: boolean, msg: MatchItem): MatchItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatchItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatchItem;
    static deserializeBinaryFromReader(message: MatchItem, reader: jspb.BinaryReader): MatchItem;
}

export namespace MatchItem {
    export type AsObject = {
        state: number,
        text: string,
        textColor: string,
        textColorNight: string,
        uri: string,
        liveLink: string,
        texts?: Texts.AsObject,
    }
}

export class MatchTeam extends jspb.Message { 
    getId(): number;
    setId(value: number): MatchTeam;
    getTitle(): string;
    setTitle(value: string): MatchTeam;
    getCover(): string;
    setCover(value: string): MatchTeam;
    getScore(): number;
    setScore(value: number): MatchTeam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatchTeam.AsObject;
    static toObject(includeInstance: boolean, msg: MatchTeam): MatchTeam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatchTeam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatchTeam;
    static deserializeBinaryFromReader(message: MatchTeam, reader: jspb.BinaryReader): MatchTeam;
}

export namespace MatchTeam {
    export type AsObject = {
        id: number,
        title: string,
        cover: string,
        score: number,
    }
}

export class Nav extends jspb.Message { 
    getName(): string;
    setName(value: string): Nav;
    getTotal(): number;
    setTotal(value: number): Nav;
    getPages(): number;
    setPages(value: number): Nav;
    getType(): number;
    setType(value: number): Nav;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nav.AsObject;
    static toObject(includeInstance: boolean, msg: Nav): Nav.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nav, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nav;
    static deserializeBinaryFromReader(message: Nav, reader: jspb.BinaryReader): Nav;
}

export namespace Nav {
    export type AsObject = {
        name: string,
        total: number,
        pages: number,
        type: number,
    }
}

export class Navigation extends jspb.Message { 
    getId(): number;
    setId(value: number): Navigation;
    clearChildrenList(): void;
    getChildrenList(): Array<Navigation>;
    setChildrenList(value: Array<Navigation>): Navigation;
    addChildren(value?: Navigation, index?: number): Navigation;
    clearInlineChildrenList(): void;
    getInlineChildrenList(): Array<Navigation>;
    setInlineChildrenList(value: Array<Navigation>): Navigation;
    addInlineChildren(value?: Navigation, index?: number): Navigation;
    getTitle(): string;
    setTitle(value: string): Navigation;
    getUri(): string;
    setUri(value: string): Navigation;

    hasButton(): boolean;
    clearButton(): void;
    getButton(): NavigationButton | undefined;
    setButton(value?: NavigationButton): Navigation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Navigation.AsObject;
    static toObject(includeInstance: boolean, msg: Navigation): Navigation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Navigation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Navigation;
    static deserializeBinaryFromReader(message: Navigation, reader: jspb.BinaryReader): Navigation;
}

export namespace Navigation {
    export type AsObject = {
        id: number,
        childrenList: Array<Navigation.AsObject>,
        inlineChildrenList: Array<Navigation.AsObject>,
        title: string,
        uri: string,
        button?: NavigationButton.AsObject,
    }
}

export class NavigationButton extends jspb.Message { 
    getType(): number;
    setType(value: number): NavigationButton;
    getText(): string;
    setText(value: string): NavigationButton;
    getUri(): string;
    setUri(value: string): NavigationButton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigationButton.AsObject;
    static toObject(includeInstance: boolean, msg: NavigationButton): NavigationButton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigationButton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigationButton;
    static deserializeBinaryFromReader(message: NavigationButton, reader: jspb.BinaryReader): NavigationButton;
}

export namespace NavigationButton {
    export type AsObject = {
        type: number,
        text: string,
        uri: string,
    }
}

export class NftFaceIcon extends jspb.Message { 
    getRegionType(): number;
    setRegionType(value: number): NftFaceIcon;
    getIcon(): string;
    setIcon(value: string): NftFaceIcon;
    getShowStatus(): number;
    setShowStatus(value: number): NftFaceIcon;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NftFaceIcon.AsObject;
    static toObject(includeInstance: boolean, msg: NftFaceIcon): NftFaceIcon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NftFaceIcon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NftFaceIcon;
    static deserializeBinaryFromReader(message: NftFaceIcon, reader: jspb.BinaryReader): NftFaceIcon;
}

export namespace NftFaceIcon {
    export type AsObject = {
        regionType: number,
        icon: string,
        showStatus: number,
    }
}

export class Notice extends jspb.Message { 
    getMid(): number;
    setMid(value: number): Notice;
    getNoticeId(): number;
    setNoticeId(value: number): Notice;
    getContent(): string;
    setContent(value: string): Notice;
    getUrl(): string;
    setUrl(value: string): Notice;
    getNoticeType(): number;
    setNoticeType(value: number): Notice;
    getIcon(): string;
    setIcon(value: string): Notice;
    getIconNight(): string;
    setIconNight(value: string): Notice;
    getTextColor(): string;
    setTextColor(value: string): Notice;
    getTextColorNight(): string;
    setTextColorNight(value: string): Notice;
    getBgColor(): string;
    setBgColor(value: string): Notice;
    getBgColorNight(): string;
    setBgColorNight(value: string): Notice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Notice.AsObject;
    static toObject(includeInstance: boolean, msg: Notice): Notice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Notice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Notice;
    static deserializeBinaryFromReader(message: Notice, reader: jspb.BinaryReader): Notice;
}

export namespace Notice {
    export type AsObject = {
        mid: number,
        noticeId: number,
        content: string,
        url: string,
        noticeType: number,
        icon: string,
        iconNight: string,
        textColor: string,
        textColorNight: string,
        bgColor: string,
        bgColorNight: string,
    }
}

export class OfficialVerify extends jspb.Message { 
    getType(): number;
    setType(value: number): OfficialVerify;
    getDesc(): string;
    setDesc(value: string): OfficialVerify;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OfficialVerify.AsObject;
    static toObject(includeInstance: boolean, msg: OfficialVerify): OfficialVerify.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OfficialVerify, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OfficialVerify;
    static deserializeBinaryFromReader(message: OfficialVerify, reader: jspb.BinaryReader): OfficialVerify;
}

export namespace OfficialVerify {
    export type AsObject = {
        type: number,
        desc: string,
    }
}

export class OgvCardUI extends jspb.Message { 
    getBackgroundImage(): string;
    setBackgroundImage(value: string): OgvCardUI;
    getGaussianBlurValue(): string;
    setGaussianBlurValue(value: string): OgvCardUI;
    getModuleColor(): string;
    setModuleColor(value: string): OgvCardUI;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OgvCardUI.AsObject;
    static toObject(includeInstance: boolean, msg: OgvCardUI): OgvCardUI.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OgvCardUI, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OgvCardUI;
    static deserializeBinaryFromReader(message: OgvCardUI, reader: jspb.BinaryReader): OgvCardUI;
}

export namespace OgvCardUI {
    export type AsObject = {
        backgroundImage: string,
        gaussianBlurValue: string,
        moduleColor: string,
    }
}

export class OgvClipInfo extends jspb.Message { 
    getPlayStartTime(): number;
    setPlayStartTime(value: number): OgvClipInfo;
    getPlayEndTime(): number;
    setPlayEndTime(value: number): OgvClipInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OgvClipInfo.AsObject;
    static toObject(includeInstance: boolean, msg: OgvClipInfo): OgvClipInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OgvClipInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OgvClipInfo;
    static deserializeBinaryFromReader(message: OgvClipInfo, reader: jspb.BinaryReader): OgvClipInfo;
}

export namespace OgvClipInfo {
    export type AsObject = {
        playStartTime: number,
        playEndTime: number,
    }
}

export class OgvRecommendWord extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): OgvRecommendWord;
    getGoto(): string;
    setGoto(value: string): OgvRecommendWord;
    getParam(): string;
    setParam(value: string): OgvRecommendWord;
    getUri(): string;
    setUri(value: string): OgvRecommendWord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OgvRecommendWord.AsObject;
    static toObject(includeInstance: boolean, msg: OgvRecommendWord): OgvRecommendWord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OgvRecommendWord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OgvRecommendWord;
    static deserializeBinaryFromReader(message: OgvRecommendWord, reader: jspb.BinaryReader): OgvRecommendWord;
}

export namespace OgvRecommendWord {
    export type AsObject = {
        title: string,
        pb_goto: string,
        param: string,
        uri: string,
    }
}

export class PediaCover extends jspb.Message { 
    getCoverType(): number;
    setCoverType(value: number): PediaCover;
    getCoverSunUrl(): string;
    setCoverSunUrl(value: string): PediaCover;
    getCoverNightUrl(): string;
    setCoverNightUrl(value: string): PediaCover;
    getCoverWidth(): number;
    setCoverWidth(value: number): PediaCover;
    getCoverHeight(): number;
    setCoverHeight(value: number): PediaCover;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PediaCover.AsObject;
    static toObject(includeInstance: boolean, msg: PediaCover): PediaCover.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PediaCover, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PediaCover;
    static deserializeBinaryFromReader(message: PediaCover, reader: jspb.BinaryReader): PediaCover;
}

export namespace PediaCover {
    export type AsObject = {
        coverType: number,
        coverSunUrl: string,
        coverNightUrl: string,
        coverWidth: number,
        coverHeight: number,
    }
}

export class PlayerArgs extends jspb.Message { 
    getIsLive(): number;
    setIsLive(value: number): PlayerArgs;
    getAid(): number;
    setAid(value: number): PlayerArgs;
    getCid(): number;
    setCid(value: number): PlayerArgs;
    getSubType(): number;
    setSubType(value: number): PlayerArgs;
    getRoomId(): number;
    setRoomId(value: number): PlayerArgs;
    getEpId(): number;
    setEpId(value: number): PlayerArgs;
    getIsPreview(): number;
    setIsPreview(value: number): PlayerArgs;
    getType(): string;
    setType(value: string): PlayerArgs;
    getDuration(): number;
    setDuration(value: number): PlayerArgs;
    getSeasonId(): number;
    setSeasonId(value: number): PlayerArgs;
    getReportRequiredPlayDuration(): number;
    setReportRequiredPlayDuration(value: number): PlayerArgs;
    getReportRequiredTime(): number;
    setReportRequiredTime(value: number): PlayerArgs;
    getManualPlay(): number;
    setManualPlay(value: number): PlayerArgs;
    getHidePlayButton(): boolean;
    setHidePlayButton(value: boolean): PlayerArgs;
    getContentMode(): number;
    setContentMode(value: number): PlayerArgs;
    getReportHistory(): number;
    setReportHistory(value: number): PlayerArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerArgs.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerArgs): PlayerArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerArgs;
    static deserializeBinaryFromReader(message: PlayerArgs, reader: jspb.BinaryReader): PlayerArgs;
}

export namespace PlayerArgs {
    export type AsObject = {
        isLive: number,
        aid: number,
        cid: number,
        subType: number,
        roomId: number,
        epId: number,
        isPreview: number,
        type: string,
        duration: number,
        seasonId: number,
        reportRequiredPlayDuration: number,
        reportRequiredTime: number,
        manualPlay: number,
        hidePlayButton: boolean,
        contentMode: number,
        reportHistory: number,
    }
}

export class PlayerWidget extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): PlayerWidget;
    getDesc(): string;
    setDesc(value: string): PlayerWidget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerWidget.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerWidget): PlayerWidget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerWidget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerWidget;
    static deserializeBinaryFromReader(message: PlayerWidget, reader: jspb.BinaryReader): PlayerWidget;
}

export namespace PlayerWidget {
    export type AsObject = {
        title: string,
        desc: string,
    }
}

export class RankInfo extends jspb.Message { 
    getSearchNightIconUrl(): string;
    setSearchNightIconUrl(value: string): RankInfo;
    getSearchDayIconUrl(): string;
    setSearchDayIconUrl(value: string): RankInfo;
    getSearchBkgNightColor(): string;
    setSearchBkgNightColor(value: string): RankInfo;
    getSearchBkgDayColor(): string;
    setSearchBkgDayColor(value: string): RankInfo;
    getSearchFontNightColor(): string;
    setSearchFontNightColor(value: string): RankInfo;
    getSearchFontDayColor(): string;
    setSearchFontDayColor(value: string): RankInfo;
    getRankContent(): string;
    setRankContent(value: string): RankInfo;
    getRankLink(): string;
    setRankLink(value: string): RankInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RankInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RankInfo): RankInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RankInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RankInfo;
    static deserializeBinaryFromReader(message: RankInfo, reader: jspb.BinaryReader): RankInfo;
}

export namespace RankInfo {
    export type AsObject = {
        searchNightIconUrl: string,
        searchDayIconUrl: string,
        searchBkgNightColor: string,
        searchBkgDayColor: string,
        searchFontNightColor: string,
        searchFontDayColor: string,
        rankContent: string,
        rankLink: string,
    }
}

export class RcmdReason extends jspb.Message { 
    getContent(): string;
    setContent(value: string): RcmdReason;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RcmdReason.AsObject;
    static toObject(includeInstance: boolean, msg: RcmdReason): RcmdReason.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RcmdReason, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RcmdReason;
    static deserializeBinaryFromReader(message: RcmdReason, reader: jspb.BinaryReader): RcmdReason;
}

export namespace RcmdReason {
    export type AsObject = {
        content: string,
    }
}

export class ReasonStyle extends jspb.Message { 
    getText(): string;
    setText(value: string): ReasonStyle;
    getTextColor(): string;
    setTextColor(value: string): ReasonStyle;
    getTextColorNight(): string;
    setTextColorNight(value: string): ReasonStyle;
    getBgColor(): string;
    setBgColor(value: string): ReasonStyle;
    getBgColorNight(): string;
    setBgColorNight(value: string): ReasonStyle;
    getBorderColor(): string;
    setBorderColor(value: string): ReasonStyle;
    getBorderColorNight(): string;
    setBorderColorNight(value: string): ReasonStyle;
    getBgStyle(): number;
    setBgStyle(value: number): ReasonStyle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReasonStyle.AsObject;
    static toObject(includeInstance: boolean, msg: ReasonStyle): ReasonStyle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReasonStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReasonStyle;
    static deserializeBinaryFromReader(message: ReasonStyle, reader: jspb.BinaryReader): ReasonStyle;
}

export namespace ReasonStyle {
    export type AsObject = {
        text: string,
        textColor: string,
        textColorNight: string,
        bgColor: string,
        bgColorNight: string,
        borderColor: string,
        borderColorNight: string,
        bgStyle: number,
    }
}

export class RecommendWord extends jspb.Message { 
    getParam(): string;
    setParam(value: string): RecommendWord;
    getType(): string;
    setType(value: string): RecommendWord;
    getTitle(): string;
    setTitle(value: string): RecommendWord;
    getFromSource(): string;
    setFromSource(value: string): RecommendWord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecommendWord.AsObject;
    static toObject(includeInstance: boolean, msg: RecommendWord): RecommendWord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecommendWord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecommendWord;
    static deserializeBinaryFromReader(message: RecommendWord, reader: jspb.BinaryReader): RecommendWord;
}

export namespace RecommendWord {
    export type AsObject = {
        param: string,
        type: string,
        title: string,
        fromSource: string,
    }
}

export class Relation extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): Relation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Relation.AsObject;
    static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Relation;
    static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
}

export namespace Relation {
    export type AsObject = {
        status: number,
    }
}

export class RightTopLiveBadge extends jspb.Message { 
    getLiveStatus(): number;
    setLiveStatus(value: number): RightTopLiveBadge;

    hasInLive(): boolean;
    clearInLive(): void;
    getInLive(): LiveBadgeResource | undefined;
    setInLive(value?: LiveBadgeResource): RightTopLiveBadge;
    getLiveStatsDesc(): string;
    setLiveStatsDesc(value: string): RightTopLiveBadge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RightTopLiveBadge.AsObject;
    static toObject(includeInstance: boolean, msg: RightTopLiveBadge): RightTopLiveBadge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RightTopLiveBadge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RightTopLiveBadge;
    static deserializeBinaryFromReader(message: RightTopLiveBadge, reader: jspb.BinaryReader): RightTopLiveBadge;
}

export namespace RightTopLiveBadge {
    export type AsObject = {
        liveStatus: number,
        inLive?: LiveBadgeResource.AsObject,
        liveStatsDesc: string,
    }
}

export class SearchAdCard extends jspb.Message { 
    getJsonStr(): string;
    setJsonStr(value: string): SearchAdCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchAdCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchAdCard): SearchAdCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchAdCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchAdCard;
    static deserializeBinaryFromReader(message: SearchAdCard, reader: jspb.BinaryReader): SearchAdCard;
}

export namespace SearchAdCard {
    export type AsObject = {
        jsonStr: string,
    }
}

export class SearchAllRequest extends jspb.Message { 
    getKeyword(): string;
    setKeyword(value: string): SearchAllRequest;
    getOrder(): number;
    setOrder(value: number): SearchAllRequest;
    getTidList(): string;
    setTidList(value: string): SearchAllRequest;
    getDurationList(): string;
    setDurationList(value: string): SearchAllRequest;
    getExtraWord(): string;
    setExtraWord(value: string): SearchAllRequest;
    getFromSource(): string;
    setFromSource(value: string): SearchAllRequest;
    getIsOrgQuery(): number;
    setIsOrgQuery(value: number): SearchAllRequest;
    getLocalTime(): number;
    setLocalTime(value: number): SearchAllRequest;
    getAdExtra(): string;
    setAdExtra(value: string): SearchAllRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): bilibili_pagination_pagination_pb.Pagination | undefined;
    setPagination(value?: bilibili_pagination_pagination_pb.Pagination): SearchAllRequest;

    hasPlayerArgs(): boolean;
    clearPlayerArgs(): void;
    getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
    setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): SearchAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchAllRequest): SearchAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchAllRequest;
    static deserializeBinaryFromReader(message: SearchAllRequest, reader: jspb.BinaryReader): SearchAllRequest;
}

export namespace SearchAllRequest {
    export type AsObject = {
        keyword: string,
        order: number,
        tidList: string,
        durationList: string,
        extraWord: string,
        fromSource: string,
        isOrgQuery: number,
        localTime: number,
        adExtra: string,
        pagination?: bilibili_pagination_pagination_pb.Pagination.AsObject,
        playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    }
}

export class SearchAllResponse extends jspb.Message { 
    getKeyword(): string;
    setKeyword(value: string): SearchAllResponse;
    getTrackid(): string;
    setTrackid(value: string): SearchAllResponse;
    clearNavList(): void;
    getNavList(): Array<Nav>;
    setNavList(value: Array<Nav>): SearchAllResponse;
    addNav(value?: Nav, index?: number): Nav;
    clearItemList(): void;
    getItemList(): Array<Item>;
    setItemList(value: Array<Item>): SearchAllResponse;
    addItem(value?: Item, index?: number): Item;

    hasEasterEgg(): boolean;
    clearEasterEgg(): void;
    getEasterEgg(): EasterEgg | undefined;
    setEasterEgg(value?: EasterEgg): SearchAllResponse;
    getExpStr(): string;
    setExpStr(value: string): SearchAllResponse;
    clearExtraWordListList(): void;
    getExtraWordListList(): Array<string>;
    setExtraWordListList(value: Array<string>): SearchAllResponse;
    addExtraWordList(value: string, index?: number): string;
    getOrgExtraWord(): string;
    setOrgExtraWord(value: string): SearchAllResponse;
    getSelectBarType(): number;
    setSelectBarType(value: number): SearchAllResponse;
    getNewSearchExpNum(): number;
    setNewSearchExpNum(value: number): SearchAllResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): bilibili_pagination_pagination_pb.PaginationReply | undefined;
    setPagination(value?: bilibili_pagination_pagination_pb.PaginationReply): SearchAllResponse;

    hasAppDisplayOption(): boolean;
    clearAppDisplayOption(): void;
    getAppDisplayOption(): DisplayOption | undefined;
    setAppDisplayOption(value?: DisplayOption): SearchAllResponse;

    getAnnotationMap(): jspb.Map<string, string>;
    clearAnnotationMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SearchAllResponse): SearchAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchAllResponse;
    static deserializeBinaryFromReader(message: SearchAllResponse, reader: jspb.BinaryReader): SearchAllResponse;
}

export namespace SearchAllResponse {
    export type AsObject = {
        keyword: string,
        trackid: string,
        navList: Array<Nav.AsObject>,
        itemList: Array<Item.AsObject>,
        easterEgg?: EasterEgg.AsObject,
        expStr: string,
        extraWordListList: Array<string>,
        orgExtraWord: string,
        selectBarType: number,
        newSearchExpNum: number,
        pagination?: bilibili_pagination_pagination_pb.PaginationReply.AsObject,
        appDisplayOption?: DisplayOption.AsObject,

        annotationMap: Array<[string, string]>,
    }
}

export class SearchArticleCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchArticleCard;
    getCover(): string;
    setCover(value: string): SearchArticleCard;
    getPlay(): number;
    setPlay(value: number): SearchArticleCard;
    getLike(): number;
    setLike(value: number): SearchArticleCard;
    getReply(): number;
    setReply(value: number): SearchArticleCard;
    clearImageUrlsList(): void;
    getImageUrlsList(): Array<string>;
    setImageUrlsList(value: Array<string>): SearchArticleCard;
    addImageUrls(value: string, index?: number): string;
    getAuthor(): string;
    setAuthor(value: string): SearchArticleCard;
    getTemplateId(): number;
    setTemplateId(value: number): SearchArticleCard;
    getId(): number;
    setId(value: number): SearchArticleCard;
    getMid(): number;
    setMid(value: number): SearchArticleCard;
    getName(): string;
    setName(value: string): SearchArticleCard;
    getDesc(): string;
    setDesc(value: string): SearchArticleCard;
    getView(): number;
    setView(value: number): SearchArticleCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchArticleCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchArticleCard): SearchArticleCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchArticleCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchArticleCard;
    static deserializeBinaryFromReader(message: SearchArticleCard, reader: jspb.BinaryReader): SearchArticleCard;
}

export namespace SearchArticleCard {
    export type AsObject = {
        title: string,
        cover: string,
        play: number,
        like: number,
        reply: number,
        imageUrlsList: Array<string>,
        author: string,
        templateId: number,
        id: number,
        mid: number,
        name: string,
        desc: string,
        view: number,
    }
}

export class SearchAuthorNewCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchAuthorNewCard;
    getCover(): string;
    setCover(value: string): SearchAuthorNewCard;
    getLiveFace(): number;
    setLiveFace(value: number): SearchAuthorNewCard;
    getLiveUri(): string;
    setLiveUri(value: string): SearchAuthorNewCard;
    getLiveLink(): string;
    setLiveLink(value: string): SearchAuthorNewCard;
    getFans(): number;
    setFans(value: number): SearchAuthorNewCard;
    getLevel(): number;
    setLevel(value: number): SearchAuthorNewCard;
    getSign(): string;
    setSign(value: string): SearchAuthorNewCard;
    getIsUp(): boolean;
    setIsUp(value: boolean): SearchAuthorNewCard;
    getArchives(): number;
    setArchives(value: number): SearchAuthorNewCard;
    getMid(): number;
    setMid(value: number): SearchAuthorNewCard;
    getRoomid(): number;
    setRoomid(value: number): SearchAuthorNewCard;

    hasRelation(): boolean;
    clearRelation(): void;
    getRelation(): Relation | undefined;
    setRelation(value?: Relation): SearchAuthorNewCard;

    hasOfficialVerify(): boolean;
    clearOfficialVerify(): void;
    getOfficialVerify(): OfficialVerify | undefined;
    setOfficialVerify(value?: OfficialVerify): SearchAuthorNewCard;
    getFaceNftNew(): number;
    setFaceNftNew(value: number): SearchAuthorNewCard;

    hasNftFaceIcon(): boolean;
    clearNftFaceIcon(): void;
    getNftFaceIcon(): NftFaceIcon | undefined;
    setNftFaceIcon(value?: NftFaceIcon): SearchAuthorNewCard;
    getIsSeniorMember(): number;
    setIsSeniorMember(value: number): SearchAuthorNewCard;

    hasBackground(): boolean;
    clearBackground(): void;
    getBackground(): Background | undefined;
    setBackground(value?: Background): SearchAuthorNewCard;
    getAvStyle(): number;
    setAvStyle(value: number): SearchAuthorNewCard;

    hasSpace(): boolean;
    clearSpace(): void;
    getSpace(): Space | undefined;
    setSpace(value?: Space): SearchAuthorNewCard;
    clearAvItemsList(): void;
    getAvItemsList(): Array<AvItem>;
    setAvItemsList(value: Array<AvItem>): SearchAuthorNewCard;
    addAvItems(value?: AvItem, index?: number): AvItem;

    hasNotice(): boolean;
    clearNotice(): void;
    getNotice(): Notice | undefined;
    setNotice(value?: Notice): SearchAuthorNewCard;

    hasSharePlane(): boolean;
    clearSharePlane(): void;
    getSharePlane(): SharePlane | undefined;
    setSharePlane(value?: SharePlane): SearchAuthorNewCard;
    getInlineType(): string;
    setInlineType(value: string): SearchAuthorNewCard;

    hasInlineLive(): boolean;
    clearInlineLive(): void;
    getInlineLive(): SearchInlineData | undefined;
    setInlineLive(value?: SearchInlineData): SearchAuthorNewCard;
    getIsInlineLive(): number;
    setIsInlineLive(value: number): SearchAuthorNewCard;
    clearThreePointList(): void;
    getThreePointList(): Array<ThreePoint>;
    setThreePointList(value: Array<ThreePoint>): SearchAuthorNewCard;
    addThreePoint(value?: ThreePoint, index?: number): ThreePoint;
    getLiveStatus(): number;
    setLiveStatus(value: number): SearchAuthorNewCard;

    hasVip(): boolean;
    clearVip(): void;
    getVip(): VipInfo | undefined;
    setVip(value?: VipInfo): SearchAuthorNewCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchAuthorNewCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchAuthorNewCard): SearchAuthorNewCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchAuthorNewCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchAuthorNewCard;
    static deserializeBinaryFromReader(message: SearchAuthorNewCard, reader: jspb.BinaryReader): SearchAuthorNewCard;
}

export namespace SearchAuthorNewCard {
    export type AsObject = {
        title: string,
        cover: string,
        liveFace: number,
        liveUri: string,
        liveLink: string,
        fans: number,
        level: number,
        sign: string,
        isUp: boolean,
        archives: number,
        mid: number,
        roomid: number,
        relation?: Relation.AsObject,
        officialVerify?: OfficialVerify.AsObject,
        faceNftNew: number,
        nftFaceIcon?: NftFaceIcon.AsObject,
        isSeniorMember: number,
        background?: Background.AsObject,
        avStyle: number,
        space?: Space.AsObject,
        avItemsList: Array<AvItem.AsObject>,
        notice?: Notice.AsObject,
        sharePlane?: SharePlane.AsObject,
        inlineType: string,
        inlineLive?: SearchInlineData.AsObject,
        isInlineLive: number,
        threePointList: Array<ThreePoint.AsObject>,
        liveStatus: number,
        vip?: VipInfo.AsObject,
    }
}

export class SearchBangumiCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchBangumiCard;
    getCover(): string;
    setCover(value: string): SearchBangumiCard;
    getMediaType(): number;
    setMediaType(value: number): SearchBangumiCard;
    getPlayState(): number;
    setPlayState(value: number): SearchBangumiCard;
    getArea(): string;
    setArea(value: string): SearchBangumiCard;
    getStyle(): string;
    setStyle(value: string): SearchBangumiCard;
    getStyles(): string;
    setStyles(value: string): SearchBangumiCard;
    getCv(): string;
    setCv(value: string): SearchBangumiCard;
    getRating(): number;
    setRating(value: number): SearchBangumiCard;
    getVote(): number;
    setVote(value: number): SearchBangumiCard;
    getTarget(): string;
    setTarget(value: string): SearchBangumiCard;
    getStaff(): string;
    setStaff(value: string): SearchBangumiCard;
    getPrompt(): string;
    setPrompt(value: string): SearchBangumiCard;
    getPtime(): number;
    setPtime(value: number): SearchBangumiCard;
    getSeasonTypeName(): string;
    setSeasonTypeName(value: string): SearchBangumiCard;
    clearEpisodesList(): void;
    getEpisodesList(): Array<Episode>;
    setEpisodesList(value: Array<Episode>): SearchBangumiCard;
    addEpisodes(value?: Episode, index?: number): Episode;
    getIsSelection(): number;
    setIsSelection(value: number): SearchBangumiCard;
    getIsAtten(): number;
    setIsAtten(value: number): SearchBangumiCard;
    getLabel(): string;
    setLabel(value: string): SearchBangumiCard;
    getSeasonId(): number;
    setSeasonId(value: number): SearchBangumiCard;
    getOutName(): string;
    setOutName(value: string): SearchBangumiCard;
    getOutIcon(): string;
    setOutIcon(value: string): SearchBangumiCard;
    getOutUrl(): string;
    setOutUrl(value: string): SearchBangumiCard;
    clearBadgesList(): void;
    getBadgesList(): Array<ReasonStyle>;
    setBadgesList(value: Array<ReasonStyle>): SearchBangumiCard;
    addBadges(value?: ReasonStyle, index?: number): ReasonStyle;
    getIsOut(): number;
    setIsOut(value: number): SearchBangumiCard;
    clearEpisodesNewList(): void;
    getEpisodesNewList(): Array<EpisodeNew>;
    setEpisodesNewList(value: Array<EpisodeNew>): SearchBangumiCard;
    addEpisodesNew(value?: EpisodeNew, index?: number): EpisodeNew;

    hasWatchButton(): boolean;
    clearWatchButton(): void;
    getWatchButton(): WatchButton | undefined;
    setWatchButton(value?: WatchButton): SearchBangumiCard;
    getSelectionStyle(): string;
    setSelectionStyle(value: string): SearchBangumiCard;

    hasCheckMore(): boolean;
    clearCheckMore(): void;
    getCheckMore(): CheckMore | undefined;
    setCheckMore(value?: CheckMore): SearchBangumiCard;

    hasFollowButton(): boolean;
    clearFollowButton(): void;
    getFollowButton(): FollowButton | undefined;
    setFollowButton(value?: FollowButton): SearchBangumiCard;

    hasStyleLabel(): boolean;
    clearStyleLabel(): void;
    getStyleLabel(): ReasonStyle | undefined;
    setStyleLabel(value?: ReasonStyle): SearchBangumiCard;
    clearBadgesV2List(): void;
    getBadgesV2List(): Array<ReasonStyle>;
    setBadgesV2List(value: Array<ReasonStyle>): SearchBangumiCard;
    addBadgesV2(value?: ReasonStyle, index?: number): ReasonStyle;
    getStylesV2(): string;
    setStylesV2(value: string): SearchBangumiCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchBangumiCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchBangumiCard): SearchBangumiCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchBangumiCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchBangumiCard;
    static deserializeBinaryFromReader(message: SearchBangumiCard, reader: jspb.BinaryReader): SearchBangumiCard;
}

export namespace SearchBangumiCard {
    export type AsObject = {
        title: string,
        cover: string,
        mediaType: number,
        playState: number,
        area: string,
        style: string,
        styles: string,
        cv: string,
        rating: number,
        vote: number,
        target: string,
        staff: string,
        prompt: string,
        ptime: number,
        seasonTypeName: string,
        episodesList: Array<Episode.AsObject>,
        isSelection: number,
        isAtten: number,
        label: string,
        seasonId: number,
        outName: string,
        outIcon: string,
        outUrl: string,
        badgesList: Array<ReasonStyle.AsObject>,
        isOut: number,
        episodesNewList: Array<EpisodeNew.AsObject>,
        watchButton?: WatchButton.AsObject,
        selectionStyle: string,
        checkMore?: CheckMore.AsObject,
        followButton?: FollowButton.AsObject,
        styleLabel?: ReasonStyle.AsObject,
        badgesV2List: Array<ReasonStyle.AsObject>,
        stylesV2: string,
    }
}

export class SearchBannerCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchBannerCard;
    getCover(): string;
    setCover(value: string): SearchBannerCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchBannerCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchBannerCard): SearchBannerCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchBannerCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchBannerCard;
    static deserializeBinaryFromReader(message: SearchBannerCard, reader: jspb.BinaryReader): SearchBannerCard;
}

export namespace SearchBannerCard {
    export type AsObject = {
        title: string,
        cover: string,
    }
}

export class SearchByTypeRequest extends jspb.Message { 
    getType(): number;
    setType(value: number): SearchByTypeRequest;
    getKeyword(): string;
    setKeyword(value: string): SearchByTypeRequest;
    getCategorySort(): SearchByTypeRequest.CategorySort;
    setCategorySort(value: SearchByTypeRequest.CategorySort): SearchByTypeRequest;
    getCategoryId(): number;
    setCategoryId(value: number): SearchByTypeRequest;
    getUserType(): SearchByTypeRequest.UserType;
    setUserType(value: SearchByTypeRequest.UserType): SearchByTypeRequest;
    getUserSort(): SearchByTypeRequest.UserSort;
    setUserSort(value: SearchByTypeRequest.UserSort): SearchByTypeRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): bilibili_pagination_pagination_pb.Pagination | undefined;
    setPagination(value?: bilibili_pagination_pagination_pb.Pagination): SearchByTypeRequest;

    hasPlayerArgs(): boolean;
    clearPlayerArgs(): void;
    getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
    setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): SearchByTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchByTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchByTypeRequest): SearchByTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchByTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchByTypeRequest;
    static deserializeBinaryFromReader(message: SearchByTypeRequest, reader: jspb.BinaryReader): SearchByTypeRequest;
}

export namespace SearchByTypeRequest {
    export type AsObject = {
        type: number,
        keyword: string,
        categorySort: SearchByTypeRequest.CategorySort,
        categoryId: number,
        userType: SearchByTypeRequest.UserType,
        userSort: SearchByTypeRequest.UserSort,
        pagination?: bilibili_pagination_pagination_pb.Pagination.AsObject,
        playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    }

    export enum CategorySort {
    CATEGORY_SORT_DEFAULT = 0,
    CATEGORY_SORT_PUBLISH_TIME = 1,
    CATEGORY_SORT_CLICK_COUNT = 2,
    CATEGORY_SORT_COMMENT_COUNT = 3,
    CATEGORY_SORT_LIKE_COUNT = 4,
    }

    export enum UserType {
    ALL = 0,
    UP = 1,
    NORMAL_USER = 2,
    AUTHENTICATED_USER = 3,
    }

    export enum UserSort {
    USER_SORT_DEFAULT = 0,
    USER_SORT_FANS_DESCEND = 1,
    USER_SORT_FANS_ASCEND = 2,
    USER_SORT_LEVEL_DESCEND = 3,
    USER_SORT_LEVEL_ASCEND = 4,
    }

}

export class SearchByTypeResponse extends jspb.Message { 
    getTrackid(): string;
    setTrackid(value: string): SearchByTypeResponse;
    getPages(): number;
    setPages(value: number): SearchByTypeResponse;
    getExpStr(): string;
    setExpStr(value: string): SearchByTypeResponse;
    getKeyword(): string;
    setKeyword(value: string): SearchByTypeResponse;
    getResultIsRecommend(): number;
    setResultIsRecommend(value: number): SearchByTypeResponse;
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): SearchByTypeResponse;
    addItems(value?: Item, index?: number): Item;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): bilibili_pagination_pagination_pb.PaginationReply | undefined;
    setPagination(value?: bilibili_pagination_pagination_pb.PaginationReply): SearchByTypeResponse;

    getAnnotationMap(): jspb.Map<string, string>;
    clearAnnotationMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchByTypeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SearchByTypeResponse): SearchByTypeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchByTypeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchByTypeResponse;
    static deserializeBinaryFromReader(message: SearchByTypeResponse, reader: jspb.BinaryReader): SearchByTypeResponse;
}

export namespace SearchByTypeResponse {
    export type AsObject = {
        trackid: string,
        pages: number,
        expStr: string,
        keyword: string,
        resultIsRecommend: number,
        itemsList: Array<Item.AsObject>,
        pagination?: bilibili_pagination_pagination_pb.PaginationReply.AsObject,

        annotationMap: Array<[string, string]>,
    }
}

export class SearchCollectionCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchCollectionCard;
    getCover(): string;
    setCover(value: string): SearchCollectionCard;
    getAuthor(): string;
    setAuthor(value: string): SearchCollectionCard;
    clearAvItemsList(): void;
    getAvItemsList(): Array<AvItem>;
    setAvItemsList(value: Array<AvItem>): SearchCollectionCard;
    addAvItems(value?: AvItem, index?: number): AvItem;

    hasBottomButton(): boolean;
    clearBottomButton(): void;
    getBottomButton(): BottomButton | undefined;
    setBottomButton(value?: BottomButton): SearchCollectionCard;
    getCollectionIcon(): string;
    setCollectionIcon(value: string): SearchCollectionCard;
    getShowCardDesc1(): string;
    setShowCardDesc1(value: string): SearchCollectionCard;
    getShowCardDesc2(): string;
    setShowCardDesc2(value: string): SearchCollectionCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchCollectionCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchCollectionCard): SearchCollectionCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchCollectionCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchCollectionCard;
    static deserializeBinaryFromReader(message: SearchCollectionCard, reader: jspb.BinaryReader): SearchCollectionCard;
}

export namespace SearchCollectionCard {
    export type AsObject = {
        title: string,
        cover: string,
        author: string,
        avItemsList: Array<AvItem.AsObject>,
        bottomButton?: BottomButton.AsObject,
        collectionIcon: string,
        showCardDesc1: string,
        showCardDesc2: string,
    }
}

export class SearchComicCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchComicCard;
    getCover(): string;
    setCover(value: string): SearchComicCard;
    getName(): string;
    setName(value: string): SearchComicCard;
    getStyle(): string;
    setStyle(value: string): SearchComicCard;
    getComicUrl(): string;
    setComicUrl(value: string): SearchComicCard;
    getBadge(): string;
    setBadge(value: string): SearchComicCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchComicCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchComicCard): SearchComicCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchComicCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchComicCard;
    static deserializeBinaryFromReader(message: SearchComicCard, reader: jspb.BinaryReader): SearchComicCard;
}

export namespace SearchComicCard {
    export type AsObject = {
        title: string,
        cover: string,
        name: string,
        style: string,
        comicUrl: string,
        badge: string,
    }
}

export class SearchComicInfo extends jspb.Message { 
    getUri(): string;
    setUri(value: string): SearchComicInfo;
    getParam(): string;
    setParam(value: string): SearchComicInfo;

    hasComic(): boolean;
    clearComic(): void;
    getComic(): SearchComicCard | undefined;
    setComic(value?: SearchComicCard): SearchComicInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchComicInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SearchComicInfo): SearchComicInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchComicInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchComicInfo;
    static deserializeBinaryFromReader(message: SearchComicInfo, reader: jspb.BinaryReader): SearchComicInfo;
}

export namespace SearchComicInfo {
    export type AsObject = {
        uri: string,
        param: string,
        comic?: SearchComicCard.AsObject,
    }
}

export class SearchComicRequest extends jspb.Message { 
    getIdList(): string;
    setIdList(value: string): SearchComicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchComicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchComicRequest): SearchComicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchComicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchComicRequest;
    static deserializeBinaryFromReader(message: SearchComicRequest, reader: jspb.BinaryReader): SearchComicRequest;
}

export namespace SearchComicRequest {
    export type AsObject = {
        idList: string,
    }
}

export class SearchComicResponse extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<SearchComicInfo>;
    setItemsList(value: Array<SearchComicInfo>): SearchComicResponse;
    addItems(value?: SearchComicInfo, index?: number): SearchComicInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchComicResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SearchComicResponse): SearchComicResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchComicResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchComicResponse;
    static deserializeBinaryFromReader(message: SearchComicResponse, reader: jspb.BinaryReader): SearchComicResponse;
}

export namespace SearchComicResponse {
    export type AsObject = {
        itemsList: Array<SearchComicInfo.AsObject>,
    }
}

export class SearchDynamicCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchDynamicCard;
    getCover(): string;
    setCover(value: string): SearchDynamicCard;
    getCoverCount(): number;
    setCoverCount(value: number): SearchDynamicCard;
    clearCoversList(): void;
    getCoversList(): Array<string>;
    setCoversList(value: Array<string>): SearchDynamicCard;
    addCovers(value: string, index?: number): string;

    hasUpper(): boolean;
    clearUpper(): void;
    getUpper(): Upper | undefined;
    setUpper(value?: Upper): SearchDynamicCard;

    hasStat(): boolean;
    clearStat(): void;
    getStat(): Stat | undefined;
    setStat(value?: Stat): SearchDynamicCard;
    clearDyTopicList(): void;
    getDyTopicList(): Array<DyTopic>;
    setDyTopicList(value: Array<DyTopic>): SearchDynamicCard;
    addDyTopic(value?: DyTopic, index?: number): DyTopic;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchDynamicCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchDynamicCard): SearchDynamicCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchDynamicCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchDynamicCard;
    static deserializeBinaryFromReader(message: SearchDynamicCard, reader: jspb.BinaryReader): SearchDynamicCard;
}

export namespace SearchDynamicCard {
    export type AsObject = {
        title: string,
        cover: string,
        coverCount: number,
        coversList: Array<string>,
        upper?: Upper.AsObject,
        stat?: Stat.AsObject,
        dyTopicList: Array<DyTopic.AsObject>,
    }
}

export class SearchGameCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchGameCard;
    getCover(): string;
    setCover(value: string): SearchGameCard;
    getReserve(): string;
    setReserve(value: string): SearchGameCard;
    getRating(): number;
    setRating(value: number): SearchGameCard;
    getTags(): string;
    setTags(value: string): SearchGameCard;
    getNoticeName(): string;
    setNoticeName(value: string): SearchGameCard;
    getNoticeContent(): string;
    setNoticeContent(value: string): SearchGameCard;
    getGiftContent(): string;
    setGiftContent(value: string): SearchGameCard;
    getGiftUrl(): string;
    setGiftUrl(value: string): SearchGameCard;
    getReserveStatus(): number;
    setReserveStatus(value: number): SearchGameCard;

    hasRankInfo(): boolean;
    clearRankInfo(): void;
    getRankInfo(): RankInfo | undefined;
    setRankInfo(value?: RankInfo): SearchGameCard;
    getSpecialBgColor(): string;
    setSpecialBgColor(value: string): SearchGameCard;

    hasCloudGameParams(): boolean;
    clearCloudGameParams(): void;
    getCloudGameParams(): CloudGameParams | undefined;
    setCloudGameParams(value?: CloudGameParams): SearchGameCard;
    getShowCloudGameEntry(): boolean;
    setShowCloudGameEntry(value: boolean): SearchGameCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchGameCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchGameCard): SearchGameCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchGameCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchGameCard;
    static deserializeBinaryFromReader(message: SearchGameCard, reader: jspb.BinaryReader): SearchGameCard;
}

export namespace SearchGameCard {
    export type AsObject = {
        title: string,
        cover: string,
        reserve: string,
        rating: number,
        tags: string,
        noticeName: string,
        noticeContent: string,
        giftContent: string,
        giftUrl: string,
        reserveStatus: number,
        rankInfo?: RankInfo.AsObject,
        specialBgColor: string,
        cloudGameParams?: CloudGameParams.AsObject,
        showCloudGameEntry: boolean,
    }
}

export class SearchInlineData extends jspb.Message { 
    getUri(): string;
    setUri(value: string): SearchInlineData;
    getTitle(): string;
    setTitle(value: string): SearchInlineData;

    hasPlayerArgs(): boolean;
    clearPlayerArgs(): void;
    getPlayerArgs(): PlayerArgs | undefined;
    setPlayerArgs(value?: PlayerArgs): SearchInlineData;
    getCanPlay(): number;
    setCanPlay(value: number): SearchInlineData;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): Args | undefined;
    setArgs(value?: Args): SearchInlineData;
    getCardGoto(): string;
    setCardGoto(value: string): SearchInlineData;
    getCardType(): string;
    setCardType(value: string): SearchInlineData;
    getCover(): string;
    setCover(value: string): SearchInlineData;
    getCoverLeftIcon1(): number;
    setCoverLeftIcon1(value: number): SearchInlineData;
    getCoverLeftIcon2(): number;
    setCoverLeftIcon2(value: number): SearchInlineData;
    getCoverLeftText1(): string;
    setCoverLeftText1(value: string): SearchInlineData;
    getCoverLeftText2(): string;
    setCoverLeftText2(value: string): SearchInlineData;

    hasUpArgs(): boolean;
    clearUpArgs(): void;
    getUpArgs(): UpArgs | undefined;
    setUpArgs(value?: UpArgs): SearchInlineData;
    getExtraUri(): string;
    setExtraUri(value: string): SearchInlineData;
    getIsFav(): boolean;
    setIsFav(value: boolean): SearchInlineData;
    getIsCoin(): boolean;
    setIsCoin(value: boolean): SearchInlineData;
    getGoto(): string;
    setGoto(value: string): SearchInlineData;

    hasShare(): boolean;
    clearShare(): void;
    getShare(): Share | undefined;
    setShare(value?: Share): SearchInlineData;

    hasThreePoint(): boolean;
    clearThreePoint(): void;
    getThreePoint(): ThreePoint2 | undefined;
    setThreePoint(value?: ThreePoint2): SearchInlineData;
    clearThreePointV2List(): void;
    getThreePointV2List(): Array<ThreePointV2>;
    setThreePointV2List(value: Array<ThreePointV2>): SearchInlineData;
    addThreePointV2(value?: ThreePointV2, index?: number): ThreePointV2;

    hasSharePlane(): boolean;
    clearSharePlane(): void;
    getSharePlane(): SharePlane | undefined;
    setSharePlane(value?: SharePlane): SearchInlineData;

    hasThreePointMeta(): boolean;
    clearThreePointMeta(): void;
    getThreePointMeta(): InlineThreePointPanel | undefined;
    setThreePointMeta(value?: InlineThreePointPanel): SearchInlineData;

    hasAvatar(): boolean;
    clearAvatar(): void;
    getAvatar(): Avatar | undefined;
    setAvatar(value?: Avatar): SearchInlineData;
    getCoverRightText(): string;
    setCoverRightText(value: string): SearchInlineData;
    getDesc(): string;
    setDesc(value: string): SearchInlineData;

    hasInlineProgressBar(): boolean;
    clearInlineProgressBar(): void;
    getInlineProgressBar(): InlineProgressBar | undefined;
    setInlineProgressBar(value?: InlineProgressBar): SearchInlineData;

    hasLikeButton(): boolean;
    clearLikeButton(): void;
    getLikeButton(): SearchLikeButtonItem | undefined;
    setLikeButton(value?: SearchLikeButtonItem): SearchInlineData;
    getOfficialIcon(): number;
    setOfficialIcon(value: number): SearchInlineData;
    getOfficialIconV2(): number;
    setOfficialIconV2(value: number): SearchInlineData;
    getParam(): string;
    setParam(value: string): SearchInlineData;

    hasTrafficConfig(): boolean;
    clearTrafficConfig(): void;
    getTrafficConfig(): TrafficConfig | undefined;
    setTrafficConfig(value?: TrafficConfig): SearchInlineData;
    getIsAtten(): boolean;
    setIsAtten(value: boolean): SearchInlineData;

    hasGotoIcon(): boolean;
    clearGotoIcon(): void;
    getGotoIcon(): GotoIcon | undefined;
    setGotoIcon(value?: GotoIcon): SearchInlineData;
    getDisableDanmaku(): boolean;
    setDisableDanmaku(value: boolean): SearchInlineData;
    getHideDanmakuSwitch(): boolean;
    setHideDanmakuSwitch(value: boolean): SearchInlineData;

    hasBadgeStyle(): boolean;
    clearBadgeStyle(): void;
    getBadgeStyle(): ReasonStyle | undefined;
    setBadgeStyle(value?: ReasonStyle): SearchInlineData;

    hasPlayerWidget(): boolean;
    clearPlayerWidget(): void;
    getPlayerWidget(): PlayerWidget | undefined;
    setPlayerWidget(value?: PlayerWidget): SearchInlineData;

    hasCoverBadgeStyle(): boolean;
    clearCoverBadgeStyle(): void;
    getCoverBadgeStyle(): ReasonStyle | undefined;
    setCoverBadgeStyle(value?: ReasonStyle): SearchInlineData;

    hasRightTopLiveBadge(): boolean;
    clearRightTopLiveBadge(): void;
    getRightTopLiveBadge(): RightTopLiveBadge | undefined;
    setRightTopLiveBadge(value?: RightTopLiveBadge): SearchInlineData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchInlineData.AsObject;
    static toObject(includeInstance: boolean, msg: SearchInlineData): SearchInlineData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchInlineData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchInlineData;
    static deserializeBinaryFromReader(message: SearchInlineData, reader: jspb.BinaryReader): SearchInlineData;
}

export namespace SearchInlineData {
    export type AsObject = {
        uri: string,
        title: string,
        playerArgs?: PlayerArgs.AsObject,
        canPlay: number,
        args?: Args.AsObject,
        cardGoto: string,
        cardType: string,
        cover: string,
        coverLeftIcon1: number,
        coverLeftIcon2: number,
        coverLeftText1: string,
        coverLeftText2: string,
        upArgs?: UpArgs.AsObject,
        extraUri: string,
        isFav: boolean,
        isCoin: boolean,
        pb_goto: string,
        share?: Share.AsObject,
        threePoint?: ThreePoint2.AsObject,
        threePointV2List: Array<ThreePointV2.AsObject>,
        sharePlane?: SharePlane.AsObject,
        threePointMeta?: InlineThreePointPanel.AsObject,
        avatar?: Avatar.AsObject,
        coverRightText: string,
        desc: string,
        inlineProgressBar?: InlineProgressBar.AsObject,
        likeButton?: SearchLikeButtonItem.AsObject,
        officialIcon: number,
        officialIconV2: number,
        param: string,
        trafficConfig?: TrafficConfig.AsObject,
        isAtten: boolean,
        gotoIcon?: GotoIcon.AsObject,
        disableDanmaku: boolean,
        hideDanmakuSwitch: boolean,
        badgeStyle?: ReasonStyle.AsObject,
        playerWidget?: PlayerWidget.AsObject,
        coverBadgeStyle?: ReasonStyle.AsObject,
        rightTopLiveBadge?: RightTopLiveBadge.AsObject,
    }
}

export class SearchLikeButtonItem extends jspb.Message { 
    getAid(): number;
    setAid(value: number): SearchLikeButtonItem;
    getCount(): number;
    setCount(value: number): SearchLikeButtonItem;
    getSelected(): number;
    setSelected(value: number): SearchLikeButtonItem;
    getShowCount(): boolean;
    setShowCount(value: boolean): SearchLikeButtonItem;

    hasLikeResource(): boolean;
    clearLikeResource(): void;
    getLikeResource(): LikeResource | undefined;
    setLikeResource(value?: LikeResource): SearchLikeButtonItem;

    hasLikeNightResource(): boolean;
    clearLikeNightResource(): void;
    getLikeNightResource(): LikeResource | undefined;
    setLikeNightResource(value?: LikeResource): SearchLikeButtonItem;

    hasDislikeResource(): boolean;
    clearDislikeResource(): void;
    getDislikeResource(): LikeResource | undefined;
    setDislikeResource(value?: LikeResource): SearchLikeButtonItem;

    hasDislikeNightResource(): boolean;
    clearDislikeNightResource(): void;
    getDislikeNightResource(): LikeResource | undefined;
    setDislikeNightResource(value?: LikeResource): SearchLikeButtonItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchLikeButtonItem.AsObject;
    static toObject(includeInstance: boolean, msg: SearchLikeButtonItem): SearchLikeButtonItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchLikeButtonItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchLikeButtonItem;
    static deserializeBinaryFromReader(message: SearchLikeButtonItem, reader: jspb.BinaryReader): SearchLikeButtonItem;
}

export namespace SearchLikeButtonItem {
    export type AsObject = {
        aid: number,
        count: number,
        selected: number,
        showCount: boolean,
        likeResource?: LikeResource.AsObject,
        likeNightResource?: LikeResource.AsObject,
        dislikeResource?: LikeResource.AsObject,
        dislikeNightResource?: LikeResource.AsObject,
    }
}

export class SearchLiveCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchLiveCard;
    getCover(): string;
    setCover(value: string): SearchLiveCard;

    hasRcmdReason(): boolean;
    clearRcmdReason(): void;
    getRcmdReason(): RcmdReason | undefined;
    setRcmdReason(value?: RcmdReason): SearchLiveCard;
    getName(): string;
    setName(value: string): SearchLiveCard;
    getOnline(): number;
    setOnline(value: number): SearchLiveCard;
    getBadge(): string;
    setBadge(value: string): SearchLiveCard;
    getLiveLink(): string;
    setLiveLink(value: string): SearchLiveCard;
    getCardLeftText(): string;
    setCardLeftText(value: string): SearchLiveCard;
    getCardLeftIcon(): number;
    setCardLeftIcon(value: number): SearchLiveCard;
    getShowCardDesc2(): string;
    setShowCardDesc2(value: string): SearchLiveCard;

    hasRightTopLiveBadge(): boolean;
    clearRightTopLiveBadge(): void;
    getRightTopLiveBadge(): RightTopLiveBadge | undefined;
    setRightTopLiveBadge(value?: RightTopLiveBadge): SearchLiveCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchLiveCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchLiveCard): SearchLiveCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchLiveCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchLiveCard;
    static deserializeBinaryFromReader(message: SearchLiveCard, reader: jspb.BinaryReader): SearchLiveCard;
}

export namespace SearchLiveCard {
    export type AsObject = {
        title: string,
        cover: string,
        rcmdReason?: RcmdReason.AsObject,
        name: string,
        online: number,
        badge: string,
        liveLink: string,
        cardLeftText: string,
        cardLeftIcon: number,
        showCardDesc2: string,
        rightTopLiveBadge?: RightTopLiveBadge.AsObject,
    }
}

export class SearchLiveInlineCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchLiveInlineCard;
    getCover(): string;
    setCover(value: string): SearchLiveInlineCard;
    getMid(): number;
    setMid(value: number): SearchLiveInlineCard;

    hasRcmdReasonStyle(): boolean;
    clearRcmdReasonStyle(): void;
    getRcmdReasonStyle(): ReasonStyle | undefined;
    setRcmdReasonStyle(value?: ReasonStyle): SearchLiveInlineCard;
    getRoomid(): number;
    setRoomid(value: number): SearchLiveInlineCard;
    getLiveLink(): string;
    setLiveLink(value: string): SearchLiveInlineCard;

    hasLiveRoomInline(): boolean;
    clearLiveRoomInline(): void;
    getLiveRoomInline(): SearchInlineData | undefined;
    setLiveRoomInline(value?: SearchInlineData): SearchLiveInlineCard;
    getInlineType(): string;
    setInlineType(value: string): SearchLiveInlineCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchLiveInlineCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchLiveInlineCard): SearchLiveInlineCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchLiveInlineCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchLiveInlineCard;
    static deserializeBinaryFromReader(message: SearchLiveInlineCard, reader: jspb.BinaryReader): SearchLiveInlineCard;
}

export namespace SearchLiveInlineCard {
    export type AsObject = {
        title: string,
        cover: string,
        mid: number,
        rcmdReasonStyle?: ReasonStyle.AsObject,
        roomid: number,
        liveLink: string,
        liveRoomInline?: SearchInlineData.AsObject,
        inlineType: string,
    }
}

export class SearchNewChannelCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchNewChannelCard;
    getCover(): string;
    setCover(value: string): SearchNewChannelCard;
    getId(): number;
    setId(value: number): SearchNewChannelCard;
    getTypeIcon(): string;
    setTypeIcon(value: string): SearchNewChannelCard;

    hasChannelLabel1(): boolean;
    clearChannelLabel1(): void;
    getChannelLabel1(): ChannelLabel | undefined;
    setChannelLabel1(value?: ChannelLabel): SearchNewChannelCard;

    hasChannelLabel2(): boolean;
    clearChannelLabel2(): void;
    getChannelLabel2(): ChannelLabel | undefined;
    setChannelLabel2(value?: ChannelLabel): SearchNewChannelCard;

    hasChannelButton(): boolean;
    clearChannelButton(): void;
    getChannelButton(): ChannelLabel | undefined;
    setChannelButton(value?: ChannelLabel): SearchNewChannelCard;
    getDesignType(): string;
    setDesignType(value: string): SearchNewChannelCard;
    clearItemsList(): void;
    getItemsList(): Array<ChannelMixedItem>;
    setItemsList(value: Array<ChannelMixedItem>): SearchNewChannelCard;
    addItems(value?: ChannelMixedItem, index?: number): ChannelMixedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchNewChannelCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchNewChannelCard): SearchNewChannelCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchNewChannelCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchNewChannelCard;
    static deserializeBinaryFromReader(message: SearchNewChannelCard, reader: jspb.BinaryReader): SearchNewChannelCard;
}

export namespace SearchNewChannelCard {
    export type AsObject = {
        title: string,
        cover: string,
        id: number,
        typeIcon: string,
        channelLabel1?: ChannelLabel.AsObject,
        channelLabel2?: ChannelLabel.AsObject,
        channelButton?: ChannelLabel.AsObject,
        designType: string,
        itemsList: Array<ChannelMixedItem.AsObject>,
    }
}

export class SearchNoResultSuggestWordCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchNoResultSuggestWordCard;
    getCover(): string;
    setCover(value: string): SearchNoResultSuggestWordCard;
    getSugKeyWordType(): number;
    setSugKeyWordType(value: number): SearchNoResultSuggestWordCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchNoResultSuggestWordCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchNoResultSuggestWordCard): SearchNoResultSuggestWordCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchNoResultSuggestWordCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchNoResultSuggestWordCard;
    static deserializeBinaryFromReader(message: SearchNoResultSuggestWordCard, reader: jspb.BinaryReader): SearchNoResultSuggestWordCard;
}

export namespace SearchNoResultSuggestWordCard {
    export type AsObject = {
        title: string,
        cover: string,
        sugKeyWordType: number,
    }
}

export class SearchOgvCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchOgvCard;
    getSubTitle1(): string;
    setSubTitle1(value: string): SearchOgvCard;
    getSubTitle2(): string;
    setSubTitle2(value: string): SearchOgvCard;
    getCover(): string;
    setCover(value: string): SearchOgvCard;
    getBgCover(): string;
    setBgCover(value: string): SearchOgvCard;
    getSpecialBgColor(): string;
    setSpecialBgColor(value: string): SearchOgvCard;
    getCoverUri(): string;
    setCoverUri(value: string): SearchOgvCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchOgvCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchOgvCard): SearchOgvCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchOgvCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchOgvCard;
    static deserializeBinaryFromReader(message: SearchOgvCard, reader: jspb.BinaryReader): SearchOgvCard;
}

export namespace SearchOgvCard {
    export type AsObject = {
        title: string,
        subTitle1: string,
        subTitle2: string,
        cover: string,
        bgCover: string,
        specialBgColor: string,
        coverUri: string,
    }
}

export class SearchOgvChannelCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchOgvChannelCard;
    getCover(): string;
    setCover(value: string): SearchOgvChannelCard;
    getMediaId(): number;
    setMediaId(value: number): SearchOgvChannelCard;
    getStyles(): string;
    setStyles(value: string): SearchOgvChannelCard;
    getArea(): string;
    setArea(value: string): SearchOgvChannelCard;
    getStaff(): string;
    setStaff(value: string): SearchOgvChannelCard;
    getBadge(): string;
    setBadge(value: string): SearchOgvChannelCard;

    hasWatchButton(): boolean;
    clearWatchButton(): void;
    getWatchButton(): WatchButton | undefined;
    setWatchButton(value?: WatchButton): SearchOgvChannelCard;
    getRating(): number;
    setRating(value: number): SearchOgvChannelCard;
    getDesc(): string;
    setDesc(value: string): SearchOgvChannelCard;
    clearBadgesV2List(): void;
    getBadgesV2List(): Array<ReasonStyle>;
    setBadgesV2List(value: Array<ReasonStyle>): SearchOgvChannelCard;
    addBadgesV2(value?: ReasonStyle, index?: number): ReasonStyle;
    getStylesV2(): string;
    setStylesV2(value: string): SearchOgvChannelCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchOgvChannelCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchOgvChannelCard): SearchOgvChannelCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchOgvChannelCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchOgvChannelCard;
    static deserializeBinaryFromReader(message: SearchOgvChannelCard, reader: jspb.BinaryReader): SearchOgvChannelCard;
}

export namespace SearchOgvChannelCard {
    export type AsObject = {
        title: string,
        cover: string,
        mediaId: number,
        styles: string,
        area: string,
        staff: string,
        badge: string,
        watchButton?: WatchButton.AsObject,
        rating: number,
        desc: string,
        badgesV2List: Array<ReasonStyle.AsObject>,
        stylesV2: string,
    }
}

export class SearchOgvInlineCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchOgvInlineCard;
    getCover(): string;
    setCover(value: string): SearchOgvInlineCard;
    getAuthor(): string;
    setAuthor(value: string): SearchOgvInlineCard;
    getDanmaku(): number;
    setDanmaku(value: number): SearchOgvInlineCard;
    getDesc(): string;
    setDesc(value: string): SearchOgvInlineCard;
    getFace(): string;
    setFace(value: string): SearchOgvInlineCard;
    getInlineType(): string;
    setInlineType(value: string): SearchOgvInlineCard;
    getMid(): number;
    setMid(value: number): SearchOgvInlineCard;
    getPlay(): number;
    setPlay(value: number): SearchOgvInlineCard;

    hasOgvInline(): boolean;
    clearOgvInline(): void;
    getOgvInline(): SearchInlineData | undefined;
    setOgvInline(value?: SearchInlineData): SearchOgvInlineCard;

    hasOgvClipInfo(): boolean;
    clearOgvClipInfo(): void;
    getOgvClipInfo(): OgvClipInfo | undefined;
    setOgvClipInfo(value?: OgvClipInfo): SearchOgvInlineCard;

    hasWatchButton(): boolean;
    clearWatchButton(): void;
    getWatchButton(): WatchButton | undefined;
    setWatchButton(value?: WatchButton): SearchOgvInlineCard;
    getScore(): string;
    setScore(value: string): SearchOgvInlineCard;
    getOgvInlineExp(): number;
    setOgvInlineExp(value: number): SearchOgvInlineCard;
    clearBadgesV2List(): void;
    getBadgesV2List(): Array<ReasonStyle>;
    setBadgesV2List(value: Array<ReasonStyle>): SearchOgvInlineCard;
    addBadgesV2(value?: ReasonStyle, index?: number): ReasonStyle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchOgvInlineCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchOgvInlineCard): SearchOgvInlineCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchOgvInlineCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchOgvInlineCard;
    static deserializeBinaryFromReader(message: SearchOgvInlineCard, reader: jspb.BinaryReader): SearchOgvInlineCard;
}

export namespace SearchOgvInlineCard {
    export type AsObject = {
        title: string,
        cover: string,
        author: string,
        danmaku: number,
        desc: string,
        face: string,
        inlineType: string,
        mid: number,
        play: number,
        ogvInline?: SearchInlineData.AsObject,
        ogvClipInfo?: OgvClipInfo.AsObject,
        watchButton?: WatchButton.AsObject,
        score: string,
        ogvInlineExp: number,
        badgesV2List: Array<ReasonStyle.AsObject>,
    }
}

export class SearchOgvRecommendCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchOgvRecommendCard;
    getCover(): string;
    setCover(value: string): SearchOgvRecommendCard;
    clearItemsList(): void;
    getItemsList(): Array<OgvRecommendWord>;
    setItemsList(value: Array<OgvRecommendWord>): SearchOgvRecommendCard;
    addItems(value?: OgvRecommendWord, index?: number): OgvRecommendWord;
    getSpecialBgColor(): string;
    setSpecialBgColor(value: string): SearchOgvRecommendCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchOgvRecommendCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchOgvRecommendCard): SearchOgvRecommendCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchOgvRecommendCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchOgvRecommendCard;
    static deserializeBinaryFromReader(message: SearchOgvRecommendCard, reader: jspb.BinaryReader): SearchOgvRecommendCard;
}

export namespace SearchOgvRecommendCard {
    export type AsObject = {
        title: string,
        cover: string,
        itemsList: Array<OgvRecommendWord.AsObject>,
        specialBgColor: string,
    }
}

export class SearchOgvRelationCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchOgvRelationCard;
    getCover(): string;
    setCover(value: string): SearchOgvRelationCard;
    getSpecialBgColor(): string;
    setSpecialBgColor(value: string): SearchOgvRelationCard;
    getMoreText(): string;
    setMoreText(value: string): SearchOgvRelationCard;
    getMoreUrl(): string;
    setMoreUrl(value: string): SearchOgvRelationCard;
    clearItemsList(): void;
    getItemsList(): Array<DetailsRelationItem>;
    setItemsList(value: Array<DetailsRelationItem>): SearchOgvRelationCard;
    addItems(value?: DetailsRelationItem, index?: number): DetailsRelationItem;
    getIsNewStyle(): number;
    setIsNewStyle(value: number): SearchOgvRelationCard;

    hasOgvCardUi(): boolean;
    clearOgvCardUi(): void;
    getOgvCardUi(): OgvCardUI | undefined;
    setOgvCardUi(value?: OgvCardUI): SearchOgvRelationCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchOgvRelationCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchOgvRelationCard): SearchOgvRelationCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchOgvRelationCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchOgvRelationCard;
    static deserializeBinaryFromReader(message: SearchOgvRelationCard, reader: jspb.BinaryReader): SearchOgvRelationCard;
}

export namespace SearchOgvRelationCard {
    export type AsObject = {
        title: string,
        cover: string,
        specialBgColor: string,
        moreText: string,
        moreUrl: string,
        itemsList: Array<DetailsRelationItem.AsObject>,
        isNewStyle: number,
        ogvCardUi?: OgvCardUI.AsObject,
    }
}

export class SearchOlympicGameCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchOlympicGameCard;
    getCover(): string;
    setCover(value: string): SearchOlympicGameCard;

    hasSportsMatchItem(): boolean;
    clearSportsMatchItem(): void;
    getSportsMatchItem(): SportsMatchItem | undefined;
    setSportsMatchItem(value?: SportsMatchItem): SearchOlympicGameCard;

    hasMatchTop(): boolean;
    clearMatchTop(): void;
    getMatchTop(): MatchItem | undefined;
    setMatchTop(value?: MatchItem): SearchOlympicGameCard;
    getBgCover(): string;
    setBgCover(value: string): SearchOlympicGameCard;
    clearExtraLinkList(): void;
    getExtraLinkList(): Array<ExtraLink>;
    setExtraLinkList(value: Array<ExtraLink>): SearchOlympicGameCard;
    addExtraLink(value?: ExtraLink, index?: number): ExtraLink;
    getInlineType(): string;
    setInlineType(value: string): SearchOlympicGameCard;

    hasUgcInline(): boolean;
    clearUgcInline(): void;
    getUgcInline(): SearchInlineData | undefined;
    setUgcInline(value?: SearchInlineData): SearchOlympicGameCard;

    hasLiveRoomInline(): boolean;
    clearLiveRoomInline(): void;
    getLiveRoomInline(): SearchInlineData | undefined;
    setLiveRoomInline(value?: SearchInlineData): SearchOlympicGameCard;

    hasMatchBottom(): boolean;
    clearMatchBottom(): void;
    getMatchBottom(): MatchItem | undefined;
    setMatchBottom(value?: MatchItem): SearchOlympicGameCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchOlympicGameCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchOlympicGameCard): SearchOlympicGameCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchOlympicGameCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchOlympicGameCard;
    static deserializeBinaryFromReader(message: SearchOlympicGameCard, reader: jspb.BinaryReader): SearchOlympicGameCard;
}

export namespace SearchOlympicGameCard {
    export type AsObject = {
        title: string,
        cover: string,
        sportsMatchItem?: SportsMatchItem.AsObject,
        matchTop?: MatchItem.AsObject,
        bgCover: string,
        extraLinkList: Array<ExtraLink.AsObject>,
        inlineType: string,
        ugcInline?: SearchInlineData.AsObject,
        liveRoomInline?: SearchInlineData.AsObject,
        matchBottom?: MatchItem.AsObject,
    }
}

export class SearchOlympicWikiCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchOlympicWikiCard;
    getCover(): string;
    setCover(value: string): SearchOlympicWikiCard;

    hasCardBusinessBadge(): boolean;
    clearCardBusinessBadge(): void;
    getCardBusinessBadge(): CardBusinessBadge | undefined;
    setCardBusinessBadge(value?: CardBusinessBadge): SearchOlympicWikiCard;

    hasReadMore(): boolean;
    clearReadMore(): void;
    getReadMore(): NavigationButton | undefined;
    setReadMore(value?: NavigationButton): SearchOlympicWikiCard;
    getInlineType(): string;
    setInlineType(value: string): SearchOlympicWikiCard;

    hasUgcInline(): boolean;
    clearUgcInline(): void;
    getUgcInline(): SearchInlineData | undefined;
    setUgcInline(value?: SearchInlineData): SearchOlympicWikiCard;

    hasLiveRoomInline(): boolean;
    clearLiveRoomInline(): void;
    getLiveRoomInline(): SearchInlineData | undefined;
    setLiveRoomInline(value?: SearchInlineData): SearchOlympicWikiCard;

    hasPediaCover(): boolean;
    clearPediaCover(): void;
    getPediaCover(): PediaCover | undefined;
    setPediaCover(value?: PediaCover): SearchOlympicWikiCard;
    clearNavigationList(): void;
    getNavigationList(): Array<Navigation>;
    setNavigationList(value: Array<Navigation>): SearchOlympicWikiCard;
    addNavigation(value?: Navigation, index?: number): Navigation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchOlympicWikiCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchOlympicWikiCard): SearchOlympicWikiCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchOlympicWikiCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchOlympicWikiCard;
    static deserializeBinaryFromReader(message: SearchOlympicWikiCard, reader: jspb.BinaryReader): SearchOlympicWikiCard;
}

export namespace SearchOlympicWikiCard {
    export type AsObject = {
        title: string,
        cover: string,
        cardBusinessBadge?: CardBusinessBadge.AsObject,
        readMore?: NavigationButton.AsObject,
        inlineType: string,
        ugcInline?: SearchInlineData.AsObject,
        liveRoomInline?: SearchInlineData.AsObject,
        pediaCover?: PediaCover.AsObject,
        navigationList: Array<Navigation.AsObject>,
    }
}

export class SearchPediaCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchPediaCard;
    getCover(): string;
    setCover(value: string): SearchPediaCard;
    clearNavigationList(): void;
    getNavigationList(): Array<Navigation>;
    setNavigationList(value: Array<Navigation>): SearchPediaCard;
    addNavigation(value?: Navigation, index?: number): Navigation;

    hasReadMore(): boolean;
    clearReadMore(): void;
    getReadMore(): NavigationButton | undefined;
    setReadMore(value?: NavigationButton): SearchPediaCard;
    getNavigationModuleCount(): number;
    setNavigationModuleCount(value: number): SearchPediaCard;

    hasPediaCover(): boolean;
    clearPediaCover(): void;
    getPediaCover(): PediaCover | undefined;
    setPediaCover(value?: PediaCover): SearchPediaCard;

    hasCardBusinessBadge(): boolean;
    clearCardBusinessBadge(): void;
    getCardBusinessBadge(): CardBusinessBadge | undefined;
    setCardBusinessBadge(value?: CardBusinessBadge): SearchPediaCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchPediaCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchPediaCard): SearchPediaCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchPediaCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchPediaCard;
    static deserializeBinaryFromReader(message: SearchPediaCard, reader: jspb.BinaryReader): SearchPediaCard;
}

export namespace SearchPediaCard {
    export type AsObject = {
        title: string,
        cover: string,
        navigationList: Array<Navigation.AsObject>,
        readMore?: NavigationButton.AsObject,
        navigationModuleCount: number,
        pediaCover?: PediaCover.AsObject,
        cardBusinessBadge?: CardBusinessBadge.AsObject,
    }
}

export class SearchPurchaseCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchPurchaseCard;
    getCover(): string;
    setCover(value: string): SearchPurchaseCard;
    getBadge(): string;
    setBadge(value: string): SearchPurchaseCard;
    getVenue(): string;
    setVenue(value: string): SearchPurchaseCard;
    getPrice(): number;
    setPrice(value: number): SearchPurchaseCard;
    getPriceComplete(): string;
    setPriceComplete(value: string): SearchPurchaseCard;
    getPriceType(): number;
    setPriceType(value: number): SearchPurchaseCard;
    getRequiredNumber(): number;
    setRequiredNumber(value: number): SearchPurchaseCard;
    getCity(): string;
    setCity(value: string): SearchPurchaseCard;
    getShowTime(): string;
    setShowTime(value: string): SearchPurchaseCard;
    getId(): number;
    setId(value: number): SearchPurchaseCard;
    getShopName(): string;
    setShopName(value: string): SearchPurchaseCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchPurchaseCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchPurchaseCard): SearchPurchaseCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchPurchaseCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchPurchaseCard;
    static deserializeBinaryFromReader(message: SearchPurchaseCard, reader: jspb.BinaryReader): SearchPurchaseCard;
}

export namespace SearchPurchaseCard {
    export type AsObject = {
        title: string,
        cover: string,
        badge: string,
        venue: string,
        price: number,
        priceComplete: string,
        priceType: number,
        requiredNumber: number,
        city: string,
        showTime: string,
        id: number,
        shopName: string,
    }
}

export class SearchRecommendTipCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchRecommendTipCard;
    getCover(): string;
    setCover(value: string): SearchRecommendTipCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchRecommendTipCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchRecommendTipCard): SearchRecommendTipCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchRecommendTipCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchRecommendTipCard;
    static deserializeBinaryFromReader(message: SearchRecommendTipCard, reader: jspb.BinaryReader): SearchRecommendTipCard;
}

export namespace SearchRecommendTipCard {
    export type AsObject = {
        title: string,
        cover: string,
    }
}

export class SearchRecommendWordCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchRecommendWordCard;
    getCover(): string;
    setCover(value: string): SearchRecommendWordCard;
    clearListList(): void;
    getListList(): Array<RecommendWord>;
    setListList(value: Array<RecommendWord>): SearchRecommendWordCard;
    addList(value?: RecommendWord, index?: number): RecommendWord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchRecommendWordCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchRecommendWordCard): SearchRecommendWordCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchRecommendWordCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchRecommendWordCard;
    static deserializeBinaryFromReader(message: SearchRecommendWordCard, reader: jspb.BinaryReader): SearchRecommendWordCard;
}

export namespace SearchRecommendWordCard {
    export type AsObject = {
        title: string,
        cover: string,
        listList: Array<RecommendWord.AsObject>,
    }
}

export class SearchSpecialCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchSpecialCard;
    getCover(): string;
    setCover(value: string): SearchSpecialCard;
    clearNewRecTagsList(): void;
    getNewRecTagsList(): Array<ReasonStyle>;
    setNewRecTagsList(value: Array<ReasonStyle>): SearchSpecialCard;
    addNewRecTags(value?: ReasonStyle, index?: number): ReasonStyle;

    hasCardBusinessBadge(): boolean;
    clearCardBusinessBadge(): void;
    getCardBusinessBadge(): CardBusinessBadge | undefined;
    setCardBusinessBadge(value?: CardBusinessBadge): SearchSpecialCard;
    getBadge(): string;
    setBadge(value: string): SearchSpecialCard;
    getDesc(): string;
    setDesc(value: string): SearchSpecialCard;
    clearNewRecTagsV2List(): void;
    getNewRecTagsV2List(): Array<ReasonStyle>;
    setNewRecTagsV2List(value: Array<ReasonStyle>): SearchSpecialCard;
    addNewRecTagsV2(value?: ReasonStyle, index?: number): ReasonStyle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchSpecialCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchSpecialCard): SearchSpecialCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchSpecialCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchSpecialCard;
    static deserializeBinaryFromReader(message: SearchSpecialCard, reader: jspb.BinaryReader): SearchSpecialCard;
}

export namespace SearchSpecialCard {
    export type AsObject = {
        title: string,
        cover: string,
        newRecTagsList: Array<ReasonStyle.AsObject>,
        cardBusinessBadge?: CardBusinessBadge.AsObject,
        badge: string,
        desc: string,
        newRecTagsV2List: Array<ReasonStyle.AsObject>,
    }
}

export class SearchSpecialGuideCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchSpecialGuideCard;
    getCover(): string;
    setCover(value: string): SearchSpecialGuideCard;
    getPhone(): string;
    setPhone(value: string): SearchSpecialGuideCard;
    getDesc(): string;
    setDesc(value: string): SearchSpecialGuideCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchSpecialGuideCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchSpecialGuideCard): SearchSpecialGuideCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchSpecialGuideCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchSpecialGuideCard;
    static deserializeBinaryFromReader(message: SearchSpecialGuideCard, reader: jspb.BinaryReader): SearchSpecialGuideCard;
}

export namespace SearchSpecialGuideCard {
    export type AsObject = {
        title: string,
        cover: string,
        phone: string,
        desc: string,
    }
}

export class SearchSportCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchSportCard;
    getCover(): string;
    setCover(value: string): SearchSportCard;
    getBgCover(): string;
    setBgCover(value: string): SearchSportCard;

    hasMatchTop(): boolean;
    clearMatchTop(): void;
    getMatchTop(): MatchItem | undefined;
    setMatchTop(value?: MatchItem): SearchSportCard;

    hasMatchBottom(): boolean;
    clearMatchBottom(): void;
    getMatchBottom(): MatchItem | undefined;
    setMatchBottom(value?: MatchItem): SearchSportCard;
    clearExtraLinkList(): void;
    getExtraLinkList(): Array<ExtraLink>;
    setExtraLinkList(value: Array<ExtraLink>): SearchSportCard;
    addExtraLink(value?: ExtraLink, index?: number): ExtraLink;
    clearItemsList(): void;
    getItemsList(): Array<MatchInfoObj>;
    setItemsList(value: Array<MatchInfoObj>): SearchSportCard;
    addItems(value?: MatchInfoObj, index?: number): MatchInfoObj;
    getId(): number;
    setId(value: number): SearchSportCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchSportCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchSportCard): SearchSportCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchSportCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchSportCard;
    static deserializeBinaryFromReader(message: SearchSportCard, reader: jspb.BinaryReader): SearchSportCard;
}

export namespace SearchSportCard {
    export type AsObject = {
        title: string,
        cover: string,
        bgCover: string,
        matchTop?: MatchItem.AsObject,
        matchBottom?: MatchItem.AsObject,
        extraLinkList: Array<ExtraLink.AsObject>,
        itemsList: Array<MatchInfoObj.AsObject>,
        id: number,
    }
}

export class SearchSportInlineCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchSportInlineCard;
    getCover(): string;
    setCover(value: string): SearchSportInlineCard;
    getBgCover(): string;
    setBgCover(value: string): SearchSportInlineCard;

    hasMatchTop(): boolean;
    clearMatchTop(): void;
    getMatchTop(): MatchItem | undefined;
    setMatchTop(value?: MatchItem): SearchSportInlineCard;

    hasMatchBottom(): boolean;
    clearMatchBottom(): void;
    getMatchBottom(): MatchItem | undefined;
    setMatchBottom(value?: MatchItem): SearchSportInlineCard;
    clearExtraLinkList(): void;
    getExtraLinkList(): Array<ExtraLink>;
    setExtraLinkList(value: Array<ExtraLink>): SearchSportInlineCard;
    addExtraLink(value?: ExtraLink, index?: number): ExtraLink;
    clearItemsList(): void;
    getItemsList(): Array<MatchInfoObj>;
    setItemsList(value: Array<MatchInfoObj>): SearchSportInlineCard;
    addItems(value?: MatchInfoObj, index?: number): MatchInfoObj;
    getId(): number;
    setId(value: number): SearchSportInlineCard;

    hasEsportsInline(): boolean;
    clearEsportsInline(): void;
    getEsportsInline(): SearchInlineData | undefined;
    setEsportsInline(value?: SearchInlineData): SearchSportInlineCard;
    getInlineType(): string;
    setInlineType(value: string): SearchSportInlineCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchSportInlineCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchSportInlineCard): SearchSportInlineCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchSportInlineCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchSportInlineCard;
    static deserializeBinaryFromReader(message: SearchSportInlineCard, reader: jspb.BinaryReader): SearchSportInlineCard;
}

export namespace SearchSportInlineCard {
    export type AsObject = {
        title: string,
        cover: string,
        bgCover: string,
        matchTop?: MatchItem.AsObject,
        matchBottom?: MatchItem.AsObject,
        extraLinkList: Array<ExtraLink.AsObject>,
        itemsList: Array<MatchInfoObj.AsObject>,
        id: number,
        esportsInline?: SearchInlineData.AsObject,
        inlineType: string,
    }
}

export class SearchTipsCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchTipsCard;
    getCover(): string;
    setCover(value: string): SearchTipsCard;
    getSubTitle(): string;
    setSubTitle(value: string): SearchTipsCard;
    getCoverNight(): string;
    setCoverNight(value: string): SearchTipsCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchTipsCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchTipsCard): SearchTipsCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchTipsCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchTipsCard;
    static deserializeBinaryFromReader(message: SearchTipsCard, reader: jspb.BinaryReader): SearchTipsCard;
}

export namespace SearchTipsCard {
    export type AsObject = {
        title: string,
        cover: string,
        subTitle: string,
        coverNight: string,
    }
}

export class SearchTopGameCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchTopGameCard;
    getCover(): string;
    setCover(value: string): SearchTopGameCard;
    getArray(): number;
    setArray(value: number): SearchTopGameCard;
    getBackgroundImage(): string;
    setBackgroundImage(value: string): SearchTopGameCard;
    getButtonType(): number;
    setButtonType(value: number): SearchTopGameCard;
    getGameIcon(): string;
    setGameIcon(value: string): SearchTopGameCard;
    getGameBaseId(): number;
    setGameBaseId(value: number): SearchTopGameCard;
    getGameStatus(): number;
    setGameStatus(value: number): SearchTopGameCard;
    getInlineType(): string;
    setInlineType(value: string): SearchTopGameCard;

    hasTopGameUi(): boolean;
    clearTopGameUi(): void;
    getTopGameUi(): TopGameUI | undefined;
    setTopGameUi(value?: TopGameUI): SearchTopGameCard;
    getNoticeContent(): string;
    setNoticeContent(value: string): SearchTopGameCard;
    getNoticeName(): string;
    setNoticeName(value: string): SearchTopGameCard;
    getRating(): number;
    setRating(value: number): SearchTopGameCard;
    getScore(): string;
    setScore(value: string): SearchTopGameCard;
    clearTabInfoList(): void;
    getTabInfoList(): Array<TabInfo>;
    setTabInfoList(value: Array<TabInfo>): SearchTopGameCard;
    addTabInfo(value?: TabInfo, index?: number): TabInfo;
    getTags(): string;
    setTags(value: string): SearchTopGameCard;

    hasUgcInline(): boolean;
    clearUgcInline(): void;
    getUgcInline(): SearchInlineData | undefined;
    setUgcInline(value?: SearchInlineData): SearchTopGameCard;
    getVideoCoverImage(): string;
    setVideoCoverImage(value: string): SearchTopGameCard;

    hasInlineLive(): boolean;
    clearInlineLive(): void;
    getInlineLive(): SearchInlineData | undefined;
    setInlineLive(value?: SearchInlineData): SearchTopGameCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchTopGameCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchTopGameCard): SearchTopGameCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchTopGameCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchTopGameCard;
    static deserializeBinaryFromReader(message: SearchTopGameCard, reader: jspb.BinaryReader): SearchTopGameCard;
}

export namespace SearchTopGameCard {
    export type AsObject = {
        title: string,
        cover: string,
        array: number,
        backgroundImage: string,
        buttonType: number,
        gameIcon: string,
        gameBaseId: number,
        gameStatus: number,
        inlineType: string,
        topGameUi?: TopGameUI.AsObject,
        noticeContent: string,
        noticeName: string,
        rating: number,
        score: string,
        tabInfoList: Array<TabInfo.AsObject>,
        tags: string,
        ugcInline?: SearchInlineData.AsObject,
        videoCoverImage: string,
        inlineLive?: SearchInlineData.AsObject,
    }
}

export class SearchUgcInlineCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchUgcInlineCard;
    getCover(): string;
    setCover(value: string): SearchUgcInlineCard;
    getAuthor(): string;
    setAuthor(value: string): SearchUgcInlineCard;
    getDanmaku(): number;
    setDanmaku(value: number): SearchUgcInlineCard;
    getDesc(): string;
    setDesc(value: string): SearchUgcInlineCard;
    getInlineType(): string;
    setInlineType(value: string): SearchUgcInlineCard;
    getMid(): number;
    setMid(value: number): SearchUgcInlineCard;
    getPlay(): number;
    setPlay(value: number): SearchUgcInlineCard;

    hasUgcInline(): boolean;
    clearUgcInline(): void;
    getUgcInline(): SearchInlineData | undefined;
    setUgcInline(value?: SearchInlineData): SearchUgcInlineCard;

    hasFullText(): boolean;
    clearFullText(): void;
    getFullText(): FullTextResult | undefined;
    setFullText(value?: FullTextResult): SearchUgcInlineCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchUgcInlineCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchUgcInlineCard): SearchUgcInlineCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchUgcInlineCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchUgcInlineCard;
    static deserializeBinaryFromReader(message: SearchUgcInlineCard, reader: jspb.BinaryReader): SearchUgcInlineCard;
}

export namespace SearchUgcInlineCard {
    export type AsObject = {
        title: string,
        cover: string,
        author: string,
        danmaku: number,
        desc: string,
        inlineType: string,
        mid: number,
        play: number,
        ugcInline?: SearchInlineData.AsObject,
        fullText?: FullTextResult.AsObject,
    }
}

export class SearchUpperCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchUpperCard;
    getCover(): string;
    setCover(value: string): SearchUpperCard;
    getSign(): string;
    setSign(value: string): SearchUpperCard;
    getFans(): number;
    setFans(value: number): SearchUpperCard;
    getArchives(): number;
    setArchives(value: number): SearchUpperCard;
    getLiveStatus(): number;
    setLiveStatus(value: number): SearchUpperCard;
    getRoomid(): number;
    setRoomid(value: number): SearchUpperCard;

    hasOfficialVerify(): boolean;
    clearOfficialVerify(): void;
    getOfficialVerify(): OfficialVerify | undefined;
    setOfficialVerify(value?: OfficialVerify): SearchUpperCard;
    getFaceNftNew(): number;
    setFaceNftNew(value: number): SearchUpperCard;

    hasNftFaceIcon(): boolean;
    clearNftFaceIcon(): void;
    getNftFaceIcon(): NftFaceIcon | undefined;
    setNftFaceIcon(value?: NftFaceIcon): SearchUpperCard;
    clearAvItemsList(): void;
    getAvItemsList(): Array<AvItem>;
    setAvItemsList(value: Array<AvItem>): SearchUpperCard;
    addAvItems(value?: AvItem, index?: number): AvItem;
    getIsUp(): boolean;
    setIsUp(value: boolean): SearchUpperCard;
    getAttentions(): number;
    setAttentions(value: number): SearchUpperCard;
    getLevel(): number;
    setLevel(value: number): SearchUpperCard;
    getIsSeniorMember(): number;
    setIsSeniorMember(value: number): SearchUpperCard;

    hasVip(): boolean;
    clearVip(): void;
    getVip(): VipInfo | undefined;
    setVip(value?: VipInfo): SearchUpperCard;

    hasRelation(): boolean;
    clearRelation(): void;
    getRelation(): Relation | undefined;
    setRelation(value?: Relation): SearchUpperCard;
    getLiveLink(): string;
    setLiveLink(value: string): SearchUpperCard;

    hasNotice(): boolean;
    clearNotice(): void;
    getNotice(): Notice | undefined;
    setNotice(value?: Notice): SearchUpperCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchUpperCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchUpperCard): SearchUpperCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchUpperCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchUpperCard;
    static deserializeBinaryFromReader(message: SearchUpperCard, reader: jspb.BinaryReader): SearchUpperCard;
}

export namespace SearchUpperCard {
    export type AsObject = {
        title: string,
        cover: string,
        sign: string,
        fans: number,
        archives: number,
        liveStatus: number,
        roomid: number,
        officialVerify?: OfficialVerify.AsObject,
        faceNftNew: number,
        nftFaceIcon?: NftFaceIcon.AsObject,
        avItemsList: Array<AvItem.AsObject>,
        isUp: boolean,
        attentions: number,
        level: number,
        isSeniorMember: number,
        vip?: VipInfo.AsObject,
        relation?: Relation.AsObject,
        liveLink: string,
        notice?: Notice.AsObject,
    }
}

export class SearchVideoCard extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SearchVideoCard;
    getCover(): string;
    setCover(value: string): SearchVideoCard;

    hasRcmdReason(): boolean;
    clearRcmdReason(): void;
    getRcmdReason(): RcmdReason | undefined;
    setRcmdReason(value?: RcmdReason): SearchVideoCard;
    clearNewRecTagsList(): void;
    getNewRecTagsList(): Array<ReasonStyle>;
    setNewRecTagsList(value: Array<ReasonStyle>): SearchVideoCard;
    addNewRecTags(value?: ReasonStyle, index?: number): ReasonStyle;
    clearThreePointList(): void;
    getThreePointList(): Array<ThreePoint>;
    setThreePointList(value: Array<ThreePoint>): SearchVideoCard;
    addThreePoint(value?: ThreePoint, index?: number): ThreePoint;

    hasShare(): boolean;
    clearShare(): void;
    getShare(): Share | undefined;
    setShare(value?: Share): SearchVideoCard;

    hasCardBusinessBadge(): boolean;
    clearCardBusinessBadge(): void;
    getCardBusinessBadge(): CardBusinessBadge | undefined;
    setCardBusinessBadge(value?: CardBusinessBadge): SearchVideoCard;
    getPlay(): number;
    setPlay(value: number): SearchVideoCard;
    getDanmaku(): number;
    setDanmaku(value: number): SearchVideoCard;
    getAuthor(): string;
    setAuthor(value: string): SearchVideoCard;
    getDesc(): string;
    setDesc(value: string): SearchVideoCard;
    getDuration(): string;
    setDuration(value: string): SearchVideoCard;
    clearBadgesList(): void;
    getBadgesList(): Array<ReasonStyle>;
    setBadgesList(value: Array<ReasonStyle>): SearchVideoCard;
    addBadges(value?: ReasonStyle, index?: number): ReasonStyle;
    getMid(): number;
    setMid(value: number): SearchVideoCard;
    getShowCardDesc1(): string;
    setShowCardDesc1(value: string): SearchVideoCard;
    getShowCardDesc2(): string;
    setShowCardDesc2(value: string): SearchVideoCard;

    hasFullText(): boolean;
    clearFullText(): void;
    getFullText(): FullTextResult | undefined;
    setFullText(value?: FullTextResult): SearchVideoCard;
    clearNewRecTagsV2List(): void;
    getNewRecTagsV2List(): Array<ReasonStyle>;
    setNewRecTagsV2List(value: Array<ReasonStyle>): SearchVideoCard;
    addNewRecTagsV2(value?: ReasonStyle, index?: number): ReasonStyle;
    clearBadgesV2List(): void;
    getBadgesV2List(): Array<ReasonStyle>;
    setBadgesV2List(value: Array<ReasonStyle>): SearchVideoCard;
    addBadgesV2(value?: ReasonStyle, index?: number): ReasonStyle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchVideoCard.AsObject;
    static toObject(includeInstance: boolean, msg: SearchVideoCard): SearchVideoCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchVideoCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchVideoCard;
    static deserializeBinaryFromReader(message: SearchVideoCard, reader: jspb.BinaryReader): SearchVideoCard;
}

export namespace SearchVideoCard {
    export type AsObject = {
        title: string,
        cover: string,
        rcmdReason?: RcmdReason.AsObject,
        newRecTagsList: Array<ReasonStyle.AsObject>,
        threePointList: Array<ThreePoint.AsObject>,
        share?: Share.AsObject,
        cardBusinessBadge?: CardBusinessBadge.AsObject,
        play: number,
        danmaku: number,
        author: string,
        desc: string,
        duration: string,
        badgesList: Array<ReasonStyle.AsObject>,
        mid: number,
        showCardDesc1: string,
        showCardDesc2: string,
        fullText?: FullTextResult.AsObject,
        newRecTagsV2List: Array<ReasonStyle.AsObject>,
        badgesV2List: Array<ReasonStyle.AsObject>,
    }
}

export class Share extends jspb.Message { 
    getType(): string;
    setType(value: string): Share;

    hasVideo(): boolean;
    clearVideo(): void;
    getVideo(): Video | undefined;
    setVideo(value?: Video): Share;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Share.AsObject;
    static toObject(includeInstance: boolean, msg: Share): Share.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Share, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Share;
    static deserializeBinaryFromReader(message: Share, reader: jspb.BinaryReader): Share;
}

export namespace Share {
    export type AsObject = {
        type: string,
        video?: Video.AsObject,
    }
}

export class ShareButtonItem extends jspb.Message { 
    getType(): number;
    setType(value: number): ShareButtonItem;
    clearButtonMetasList(): void;
    getButtonMetasList(): Array<ButtonMeta>;
    setButtonMetasList(value: Array<ButtonMeta>): ShareButtonItem;
    addButtonMetas(value?: ButtonMeta, index?: number): ButtonMeta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShareButtonItem.AsObject;
    static toObject(includeInstance: boolean, msg: ShareButtonItem): ShareButtonItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShareButtonItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShareButtonItem;
    static deserializeBinaryFromReader(message: ShareButtonItem, reader: jspb.BinaryReader): ShareButtonItem;
}

export namespace ShareButtonItem {
    export type AsObject = {
        type: number,
        buttonMetasList: Array<ButtonMeta.AsObject>,
    }
}

export class SharePlane extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SharePlane;
    getShareSubtitle(): string;
    setShareSubtitle(value: string): SharePlane;
    getDesc(): string;
    setDesc(value: string): SharePlane;
    getCover(): string;
    setCover(value: string): SharePlane;
    getAid(): number;
    setAid(value: number): SharePlane;
    getBvid(): string;
    setBvid(value: string): SharePlane;

    hasShareTo(): boolean;
    clearShareTo(): void;
    getShareTo(): ShareTo | undefined;
    setShareTo(value?: ShareTo): SharePlane;
    getAuthor(): string;
    setAuthor(value: string): SharePlane;
    getAuthorId(): number;
    setAuthorId(value: number): SharePlane;
    getShortLink(): string;
    setShortLink(value: string): SharePlane;
    getPlayNumber(): string;
    setPlayNumber(value: string): SharePlane;
    getRoomId(): number;
    setRoomId(value: number): SharePlane;
    getEpId(): number;
    setEpId(value: number): SharePlane;
    getAreaName(): string;
    setAreaName(value: string): SharePlane;
    getAuthorFace(): string;
    setAuthorFace(value: string): SharePlane;
    getSeasonId(): number;
    setSeasonId(value: number): SharePlane;
    getShareFrom(): string;
    setShareFrom(value: string): SharePlane;
    getSeasonTitle(): string;
    setSeasonTitle(value: string): SharePlane;
    getFrom(): string;
    setFrom(value: string): SharePlane;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SharePlane.AsObject;
    static toObject(includeInstance: boolean, msg: SharePlane): SharePlane.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SharePlane, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SharePlane;
    static deserializeBinaryFromReader(message: SharePlane, reader: jspb.BinaryReader): SharePlane;
}

export namespace SharePlane {
    export type AsObject = {
        title: string,
        shareSubtitle: string,
        desc: string,
        cover: string,
        aid: number,
        bvid: string,
        shareTo?: ShareTo.AsObject,
        author: string,
        authorId: number,
        shortLink: string,
        playNumber: string,
        roomId: number,
        epId: number,
        areaName: string,
        authorFace: string,
        seasonId: number,
        shareFrom: string,
        seasonTitle: string,
        from: string,
    }
}

export class ShareTo extends jspb.Message { 
    getDynamic(): boolean;
    setDynamic(value: boolean): ShareTo;
    getIm(): boolean;
    setIm(value: boolean): ShareTo;
    getCopy(): boolean;
    setCopy(value: boolean): ShareTo;
    getMore(): boolean;
    setMore(value: boolean): ShareTo;
    getWechat(): boolean;
    setWechat(value: boolean): ShareTo;
    getWeibo(): boolean;
    setWeibo(value: boolean): ShareTo;
    getWechatMonment(): boolean;
    setWechatMonment(value: boolean): ShareTo;
    getQq(): boolean;
    setQq(value: boolean): ShareTo;
    getQzone(): boolean;
    setQzone(value: boolean): ShareTo;
    getFacebook(): boolean;
    setFacebook(value: boolean): ShareTo;
    getLine(): boolean;
    setLine(value: boolean): ShareTo;
    getMessenger(): boolean;
    setMessenger(value: boolean): ShareTo;
    getWhatsApp(): boolean;
    setWhatsApp(value: boolean): ShareTo;
    getTwitter(): boolean;
    setTwitter(value: boolean): ShareTo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShareTo.AsObject;
    static toObject(includeInstance: boolean, msg: ShareTo): ShareTo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShareTo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShareTo;
    static deserializeBinaryFromReader(message: ShareTo, reader: jspb.BinaryReader): ShareTo;
}

export namespace ShareTo {
    export type AsObject = {
        dynamic: boolean,
        im: boolean,
        copy: boolean,
        more: boolean,
        wechat: boolean,
        weibo: boolean,
        wechatMonment: boolean,
        qq: boolean,
        qzone: boolean,
        facebook: boolean,
        line: boolean,
        messenger: boolean,
        whatsApp: boolean,
        twitter: boolean,
    }
}

export class Space extends jspb.Message { 
    getShow(): number;
    setShow(value: number): Space;
    getTextColor(): string;
    setTextColor(value: string): Space;
    getTextColorNight(): string;
    setTextColorNight(value: string): Space;
    getText(): string;
    setText(value: string): Space;
    getSpaceUrl(): string;
    setSpaceUrl(value: string): Space;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Space.AsObject;
    static toObject(includeInstance: boolean, msg: Space): Space.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Space, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Space;
    static deserializeBinaryFromReader(message: Space, reader: jspb.BinaryReader): Space;
}

export namespace Space {
    export type AsObject = {
        show: number,
        textColor: string,
        textColorNight: string,
        text: string,
        spaceUrl: string,
    }
}

export class SportsMatchItem extends jspb.Message { 
    getMatchId(): number;
    setMatchId(value: number): SportsMatchItem;
    getSeasonId(): number;
    setSeasonId(value: number): SportsMatchItem;
    getMatchName(): string;
    setMatchName(value: string): SportsMatchItem;
    getImg(): string;
    setImg(value: string): SportsMatchItem;
    getBeginTimeDesc(): string;
    setBeginTimeDesc(value: string): SportsMatchItem;
    getMatchStatusDesc(): string;
    setMatchStatusDesc(value: string): SportsMatchItem;
    getSubContent(): string;
    setSubContent(value: string): SportsMatchItem;
    getSubExtraIcon(): string;
    setSubExtraIcon(value: string): SportsMatchItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SportsMatchItem.AsObject;
    static toObject(includeInstance: boolean, msg: SportsMatchItem): SportsMatchItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SportsMatchItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SportsMatchItem;
    static deserializeBinaryFromReader(message: SportsMatchItem, reader: jspb.BinaryReader): SportsMatchItem;
}

export namespace SportsMatchItem {
    export type AsObject = {
        matchId: number,
        seasonId: number,
        matchName: string,
        img: string,
        beginTimeDesc: string,
        matchStatusDesc: string,
        subContent: string,
        subExtraIcon: string,
    }
}

export class Stat extends jspb.Message { 
    getPlay(): number;
    setPlay(value: number): Stat;
    getLike(): number;
    setLike(value: number): Stat;
    getReply(): number;
    setReply(value: number): Stat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stat.AsObject;
    static toObject(includeInstance: boolean, msg: Stat): Stat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stat;
    static deserializeBinaryFromReader(message: Stat, reader: jspb.BinaryReader): Stat;
}

export namespace Stat {
    export type AsObject = {
        play: number,
        like: number,
        reply: number,
    }
}

export class TabInfo extends jspb.Message { 
    getTabName(): string;
    setTabName(value: string): TabInfo;
    getTabUrl(): string;
    setTabUrl(value: string): TabInfo;
    getSort(): number;
    setSort(value: number): TabInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TabInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TabInfo): TabInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TabInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TabInfo;
    static deserializeBinaryFromReader(message: TabInfo, reader: jspb.BinaryReader): TabInfo;
}

export namespace TabInfo {
    export type AsObject = {
        tabName: string,
        tabUrl: string,
        sort: number,
    }
}

export class TextButton extends jspb.Message { 
    getText(): string;
    setText(value: string): TextButton;
    getUri(): string;
    setUri(value: string): TextButton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextButton.AsObject;
    static toObject(includeInstance: boolean, msg: TextButton): TextButton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextButton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextButton;
    static deserializeBinaryFromReader(message: TextButton, reader: jspb.BinaryReader): TextButton;
}

export namespace TextButton {
    export type AsObject = {
        text: string,
        uri: string,
    }
}

export class TextLabel extends jspb.Message { 
    getText(): string;
    setText(value: string): TextLabel;
    getUri(): string;
    setUri(value: string): TextLabel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextLabel.AsObject;
    static toObject(includeInstance: boolean, msg: TextLabel): TextLabel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextLabel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextLabel;
    static deserializeBinaryFromReader(message: TextLabel, reader: jspb.BinaryReader): TextLabel;
}

export namespace TextLabel {
    export type AsObject = {
        text: string,
        uri: string,
    }
}

export class Texts extends jspb.Message { 
    getBookingText(): string;
    setBookingText(value: string): Texts;
    getUnbookingText(): string;
    setUnbookingText(value: string): Texts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Texts.AsObject;
    static toObject(includeInstance: boolean, msg: Texts): Texts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Texts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Texts;
    static deserializeBinaryFromReader(message: Texts, reader: jspb.BinaryReader): Texts;
}

export namespace Texts {
    export type AsObject = {
        bookingText: string,
        unbookingText: string,
    }
}

export class ThreePoint extends jspb.Message { 
    getType(): string;
    setType(value: string): ThreePoint;
    getIcon(): string;
    setIcon(value: string): ThreePoint;
    getTitle(): string;
    setTitle(value: string): ThreePoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThreePoint.AsObject;
    static toObject(includeInstance: boolean, msg: ThreePoint): ThreePoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThreePoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThreePoint;
    static deserializeBinaryFromReader(message: ThreePoint, reader: jspb.BinaryReader): ThreePoint;
}

export namespace ThreePoint {
    export type AsObject = {
        type: string,
        icon: string,
        title: string,
    }
}

export class ThreePoint2 extends jspb.Message { 
    clearDislikeReasonsList(): void;
    getDislikeReasonsList(): Array<DislikeReason>;
    setDislikeReasonsList(value: Array<DislikeReason>): ThreePoint2;
    addDislikeReasons(value?: DislikeReason, index?: number): DislikeReason;
    clearFeedbacksList(): void;
    getFeedbacksList(): Array<DislikeReason>;
    setFeedbacksList(value: Array<DislikeReason>): ThreePoint2;
    addFeedbacks(value?: DislikeReason, index?: number): DislikeReason;
    getWatchLater(): number;
    setWatchLater(value: number): ThreePoint2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThreePoint2.AsObject;
    static toObject(includeInstance: boolean, msg: ThreePoint2): ThreePoint2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThreePoint2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThreePoint2;
    static deserializeBinaryFromReader(message: ThreePoint2, reader: jspb.BinaryReader): ThreePoint2;
}

export namespace ThreePoint2 {
    export type AsObject = {
        dislikeReasonsList: Array<DislikeReason.AsObject>,
        feedbacksList: Array<DislikeReason.AsObject>,
        watchLater: number,
    }
}

export class ThreePointV2 extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): ThreePointV2;
    getSubtitle(): string;
    setSubtitle(value: string): ThreePointV2;
    clearReasonsList(): void;
    getReasonsList(): Array<DislikeReason>;
    setReasonsList(value: Array<DislikeReason>): ThreePointV2;
    addReasons(value?: DislikeReason, index?: number): DislikeReason;
    getType(): string;
    setType(value: string): ThreePointV2;
    getId(): number;
    setId(value: number): ThreePointV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThreePointV2.AsObject;
    static toObject(includeInstance: boolean, msg: ThreePointV2): ThreePointV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThreePointV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThreePointV2;
    static deserializeBinaryFromReader(message: ThreePointV2, reader: jspb.BinaryReader): ThreePointV2;
}

export namespace ThreePointV2 {
    export type AsObject = {
        title: string,
        subtitle: string,
        reasonsList: Array<DislikeReason.AsObject>,
        type: string,
        id: number,
    }
}

export class ThreePointV3 extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): ThreePointV3;
    getSelectedTitle(): string;
    setSelectedTitle(value: string): ThreePointV3;
    getSubtitle(): string;
    setSubtitle(value: string): ThreePointV3;
    clearReasonsList(): void;
    getReasonsList(): Array<DislikeReason>;
    setReasonsList(value: Array<DislikeReason>): ThreePointV3;
    addReasons(value?: DislikeReason, index?: number): DislikeReason;
    getType(): string;
    setType(value: string): ThreePointV3;
    getId(): number;
    setId(value: number): ThreePointV3;
    getSelected(): number;
    setSelected(value: number): ThreePointV3;
    getIcon(): string;
    setIcon(value: string): ThreePointV3;
    getSelectedIcon(): string;
    setSelectedIcon(value: string): ThreePointV3;
    getUrl(): string;
    setUrl(value: string): ThreePointV3;
    getDefaultId(): number;
    setDefaultId(value: number): ThreePointV3;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThreePointV3.AsObject;
    static toObject(includeInstance: boolean, msg: ThreePointV3): ThreePointV3.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThreePointV3, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThreePointV3;
    static deserializeBinaryFromReader(message: ThreePointV3, reader: jspb.BinaryReader): ThreePointV3;
}

export namespace ThreePointV3 {
    export type AsObject = {
        title: string,
        selectedTitle: string,
        subtitle: string,
        reasonsList: Array<DislikeReason.AsObject>,
        type: string,
        id: number,
        selected: number,
        icon: string,
        selectedIcon: string,
        url: string,
        defaultId: number,
    }
}

export class ThreePointV4 extends jspb.Message { 

    hasSharePlane(): boolean;
    clearSharePlane(): void;
    getSharePlane(): SharePlane | undefined;
    setSharePlane(value?: SharePlane): ThreePointV4;

    hasWatchLater(): boolean;
    clearWatchLater(): void;
    getWatchLater(): WatchLater | undefined;
    setWatchLater(value?: WatchLater): ThreePointV4;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThreePointV4.AsObject;
    static toObject(includeInstance: boolean, msg: ThreePointV4): ThreePointV4.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThreePointV4, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThreePointV4;
    static deserializeBinaryFromReader(message: ThreePointV4, reader: jspb.BinaryReader): ThreePointV4;
}

export namespace ThreePointV4 {
    export type AsObject = {
        sharePlane?: SharePlane.AsObject,
        watchLater?: WatchLater.AsObject,
    }
}

export class TopGameUI extends jspb.Message { 
    getBackgroundImage(): string;
    setBackgroundImage(value: string): TopGameUI;
    getCoverDefaultColor(): string;
    setCoverDefaultColor(value: string): TopGameUI;
    getGaussianBlurValue(): string;
    setGaussianBlurValue(value: string): TopGameUI;
    getMaskColorValue(): string;
    setMaskColorValue(value: string): TopGameUI;
    getMaskOpacity(): string;
    setMaskOpacity(value: string): TopGameUI;
    getModuleColor(): string;
    setModuleColor(value: string): TopGameUI;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopGameUI.AsObject;
    static toObject(includeInstance: boolean, msg: TopGameUI): TopGameUI.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopGameUI, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopGameUI;
    static deserializeBinaryFromReader(message: TopGameUI, reader: jspb.BinaryReader): TopGameUI;
}

export namespace TopGameUI {
    export type AsObject = {
        backgroundImage: string,
        coverDefaultColor: string,
        gaussianBlurValue: string,
        maskColorValue: string,
        maskOpacity: string,
        moduleColor: string,
    }
}

export class TrafficConfig extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): TrafficConfig;
    clearOptionsList(): void;
    getOptionsList(): Array<TrafficConfigOption>;
    setOptionsList(value: Array<TrafficConfigOption>): TrafficConfig;
    addOptions(value?: TrafficConfigOption, index?: number): TrafficConfigOption;
    getDefaultOptionId(): number;
    setDefaultOptionId(value: number): TrafficConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficConfig): TrafficConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficConfig;
    static deserializeBinaryFromReader(message: TrafficConfig, reader: jspb.BinaryReader): TrafficConfig;
}

export namespace TrafficConfig {
    export type AsObject = {
        title: string,
        optionsList: Array<TrafficConfigOption.AsObject>,
        defaultOptionId: number,
    }
}

export class TrafficConfigOption extends jspb.Message { 
    getId(): number;
    setId(value: number): TrafficConfigOption;
    getText(): string;
    setText(value: string): TrafficConfigOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficConfigOption.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficConfigOption): TrafficConfigOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficConfigOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficConfigOption;
    static deserializeBinaryFromReader(message: TrafficConfigOption, reader: jspb.BinaryReader): TrafficConfigOption;
}

export namespace TrafficConfigOption {
    export type AsObject = {
        id: number,
        text: string,
    }
}

export class UpArgs extends jspb.Message { 
    getUpId(): number;
    setUpId(value: number): UpArgs;
    getUpName(): string;
    setUpName(value: string): UpArgs;
    getUpFace(): string;
    setUpFace(value: string): UpArgs;
    getSelected(): number;
    setSelected(value: number): UpArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpArgs.AsObject;
    static toObject(includeInstance: boolean, msg: UpArgs): UpArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpArgs;
    static deserializeBinaryFromReader(message: UpArgs, reader: jspb.BinaryReader): UpArgs;
}

export namespace UpArgs {
    export type AsObject = {
        upId: number,
        upName: string,
        upFace: string,
        selected: number,
    }
}

export class Upper extends jspb.Message { 
    getMid(): number;
    setMid(value: number): Upper;
    getTitle(): string;
    setTitle(value: string): Upper;
    getCover(): string;
    setCover(value: string): Upper;
    getPtimeText(): string;
    setPtimeText(value: string): Upper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Upper.AsObject;
    static toObject(includeInstance: boolean, msg: Upper): Upper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Upper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Upper;
    static deserializeBinaryFromReader(message: Upper, reader: jspb.BinaryReader): Upper;
}

export namespace Upper {
    export type AsObject = {
        mid: number,
        title: string,
        cover: string,
        ptimeText: string,
    }
}

export class Video extends jspb.Message { 
    getBvid(): string;
    setBvid(value: string): Video;
    getCid(): number;
    setCid(value: number): Video;
    getShareSubtitle(): string;
    setShareSubtitle(value: string): Video;
    getIsHotLabel(): boolean;
    setIsHotLabel(value: boolean): Video;
    getPage(): number;
    setPage(value: number): Video;
    getPageCount(): number;
    setPageCount(value: number): Video;
    getShortLink(): string;
    setShortLink(value: string): Video;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Video.AsObject;
    static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Video;
    static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
}

export namespace Video {
    export type AsObject = {
        bvid: string,
        cid: number,
        shareSubtitle: string,
        isHotLabel: boolean,
        page: number,
        pageCount: number,
        shortLink: string,
    }
}

export class VipInfo extends jspb.Message { 
    getType(): number;
    setType(value: number): VipInfo;
    getStatus(): number;
    setStatus(value: number): VipInfo;
    getDueDate(): number;
    setDueDate(value: number): VipInfo;
    getVipPayType(): number;
    setVipPayType(value: number): VipInfo;
    getThemeType(): number;
    setThemeType(value: number): VipInfo;

    hasLabel(): boolean;
    clearLabel(): void;
    getLabel(): VipLabel | undefined;
    setLabel(value?: VipLabel): VipInfo;
    getAvatarSubscript(): number;
    setAvatarSubscript(value: number): VipInfo;
    getNicknameColor(): string;
    setNicknameColor(value: string): VipInfo;
    getRole(): number;
    setRole(value: number): VipInfo;
    getAvatarSubscriptUrl(): string;
    setAvatarSubscriptUrl(value: string): VipInfo;
    getTvVipStatus(): number;
    setTvVipStatus(value: number): VipInfo;
    getTvVipPayType(): number;
    setTvVipPayType(value: number): VipInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipInfo.AsObject;
    static toObject(includeInstance: boolean, msg: VipInfo): VipInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipInfo;
    static deserializeBinaryFromReader(message: VipInfo, reader: jspb.BinaryReader): VipInfo;
}

export namespace VipInfo {
    export type AsObject = {
        type: number,
        status: number,
        dueDate: number,
        vipPayType: number,
        themeType: number,
        label?: VipLabel.AsObject,
        avatarSubscript: number,
        nicknameColor: string,
        role: number,
        avatarSubscriptUrl: string,
        tvVipStatus: number,
        tvVipPayType: number,
    }
}

export class VipLabel extends jspb.Message { 
    getPath(): string;
    setPath(value: string): VipLabel;
    getText(): string;
    setText(value: string): VipLabel;
    getLabelTheme(): string;
    setLabelTheme(value: string): VipLabel;
    getTextColor(): string;
    setTextColor(value: string): VipLabel;
    getBgStyle(): number;
    setBgStyle(value: number): VipLabel;
    getBgColor(): string;
    setBgColor(value: string): VipLabel;
    getBorderColor(): string;
    setBorderColor(value: string): VipLabel;
    getUseImgLabel(): boolean;
    setUseImgLabel(value: boolean): VipLabel;
    getImgLabelUriHans(): string;
    setImgLabelUriHans(value: string): VipLabel;
    getImgLabelUriHant(): string;
    setImgLabelUriHant(value: string): VipLabel;
    getImgLabelUriHansStatic(): string;
    setImgLabelUriHansStatic(value: string): VipLabel;
    getImgLabelUriHantStatic(): string;
    setImgLabelUriHantStatic(value: string): VipLabel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipLabel.AsObject;
    static toObject(includeInstance: boolean, msg: VipLabel): VipLabel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipLabel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipLabel;
    static deserializeBinaryFromReader(message: VipLabel, reader: jspb.BinaryReader): VipLabel;
}

export namespace VipLabel {
    export type AsObject = {
        path: string,
        text: string,
        labelTheme: string,
        textColor: string,
        bgStyle: number,
        bgColor: string,
        borderColor: string,
        useImgLabel: boolean,
        imgLabelUriHans: string,
        imgLabelUriHant: string,
        imgLabelUriHansStatic: string,
        imgLabelUriHantStatic: string,
    }
}

export class WatchButton extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): WatchButton;
    getLink(): string;
    setLink(value: string): WatchButton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WatchButton.AsObject;
    static toObject(includeInstance: boolean, msg: WatchButton): WatchButton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WatchButton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WatchButton;
    static deserializeBinaryFromReader(message: WatchButton, reader: jspb.BinaryReader): WatchButton;
}

export namespace WatchButton {
    export type AsObject = {
        title: string,
        link: string,
    }
}

export class WatchedShow extends jspb.Message { 
    getSwitch(): boolean;
    setSwitch(value: boolean): WatchedShow;
    getNum(): number;
    setNum(value: number): WatchedShow;
    getTextSmall(): string;
    setTextSmall(value: string): WatchedShow;
    getTextLarge(): string;
    setTextLarge(value: string): WatchedShow;
    getIcon(): string;
    setIcon(value: string): WatchedShow;
    getIconLocation(): string;
    setIconLocation(value: string): WatchedShow;
    getIconWeb(): string;
    setIconWeb(value: string): WatchedShow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WatchedShow.AsObject;
    static toObject(includeInstance: boolean, msg: WatchedShow): WatchedShow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WatchedShow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WatchedShow;
    static deserializeBinaryFromReader(message: WatchedShow, reader: jspb.BinaryReader): WatchedShow;
}

export namespace WatchedShow {
    export type AsObject = {
        pb_switch: boolean,
        num: number,
        textSmall: string,
        textLarge: string,
        icon: string,
        iconLocation: string,
        iconWeb: string,
    }
}

export class WatchLater extends jspb.Message { 
    getAid(): number;
    setAid(value: number): WatchLater;
    getBvid(): string;
    setBvid(value: string): WatchLater;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WatchLater.AsObject;
    static toObject(includeInstance: boolean, msg: WatchLater): WatchLater.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WatchLater, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WatchLater;
    static deserializeBinaryFromReader(message: WatchLater, reader: jspb.BinaryReader): WatchLater;
}

export namespace WatchLater {
    export type AsObject = {
        aid: number,
        bvid: string,
    }
}

export enum CategorySort {
    CATEGORY_SORT_DEFAULT = 0,
    CATEGORY_SORT_PUBLISH_TIME = 1,
    CATEGORY_SORT_CLICK_COUNT = 2,
    CATEGORY_SORT_COMMENT_COUNT = 3,
    CATEGORY_SORT_LIKE_COUNT = 4,
}

export enum Sort {
    SORT_DEFAULT = 0,
    SORT_VIEW_COUNT = 1,
    SORT_PUBLISH_TIME = 2,
    SORT_DANMAKU_COUNT = 3,
}

export enum UserSort {
    USER_SORT_DEFAULT = 0,
    USER_SORT_FANS_DESCEND = 1,
    USER_SORT_FANS_ASCEND = 2,
    USER_SORT_LEVEL_DESCEND = 3,
    USER_SORT_LEVEL_ASCEND = 4,
}

export enum UserType {
    ALL = 0,
    UP = 1,
    NORMAL_USER = 2,
    AUTHENTICATED_USER = 3,
}
