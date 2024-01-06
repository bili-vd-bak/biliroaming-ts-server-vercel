// package: bilibili.pgc.gateway.player.v2
// file: bilibili/pgc/gateway/player/v2/playurl.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Animation extends jspb.Message { 

    getQnSvgaAnimationMapMap(): jspb.Map<string, string>;
    clearQnSvgaAnimationMapMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Animation.AsObject;
    static toObject(includeInstance: boolean, msg: Animation): Animation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Animation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Animation;
    static deserializeBinaryFromReader(message: Animation, reader: jspb.BinaryReader): Animation;
}

export namespace Animation {
    export type AsObject = {

        qnSvgaAnimationMapMap: Array<[string, string]>,
    }
}

export class AudioMaterialProto extends jspb.Message { 
    getAudioId(): string;
    setAudioId(value: string): AudioMaterialProto;
    getTitle(): string;
    setTitle(value: string): AudioMaterialProto;
    getEdition(): string;
    setEdition(value: string): AudioMaterialProto;
    getPersonId(): number;
    setPersonId(value: number): AudioMaterialProto;
    getPersonName(): string;
    setPersonName(value: string): AudioMaterialProto;
    getPersonAvatar(): string;
    setPersonAvatar(value: string): AudioMaterialProto;
    clearAudioList(): void;
    getAudioList(): Array<DashItem>;
    setAudioList(value: Array<DashItem>): AudioMaterialProto;
    addAudio(value?: DashItem, index?: number): DashItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioMaterialProto.AsObject;
    static toObject(includeInstance: boolean, msg: AudioMaterialProto): AudioMaterialProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioMaterialProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioMaterialProto;
    static deserializeBinaryFromReader(message: AudioMaterialProto, reader: jspb.BinaryReader): AudioMaterialProto;
}

export namespace AudioMaterialProto {
    export type AsObject = {
        audioId: string,
        title: string,
        edition: string,
        personId: number,
        personName: string,
        personAvatar: string,
        audioList: Array<DashItem.AsObject>,
    }
}

export class BadgeInfo extends jspb.Message { 
    getText(): string;
    setText(value: string): BadgeInfo;
    getBgColor(): string;
    setBgColor(value: string): BadgeInfo;
    getBgColorNight(): string;
    setBgColorNight(value: string): BadgeInfo;
    getTextColor(): string;
    setTextColor(value: string): BadgeInfo;

    hasBgGradientColor(): boolean;
    clearBgGradientColor(): void;
    getBgGradientColor(): GradientColor | undefined;
    setBgGradientColor(value?: GradientColor): BadgeInfo;
    getImg(): string;
    setImg(value: string): BadgeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BadgeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: BadgeInfo): BadgeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BadgeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BadgeInfo;
    static deserializeBinaryFromReader(message: BadgeInfo, reader: jspb.BinaryReader): BadgeInfo;
}

export namespace BadgeInfo {
    export type AsObject = {
        text: string,
        bgColor: string,
        bgColorNight: string,
        textColor: string,
        bgGradientColor?: GradientColor.AsObject,
        img: string,
    }
}

export class BottomDisplay extends jspb.Message { 

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): TextInfo | undefined;
    setTitle(value?: TextInfo): BottomDisplay;
    getIcon(): string;
    setIcon(value: string): BottomDisplay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BottomDisplay.AsObject;
    static toObject(includeInstance: boolean, msg: BottomDisplay): BottomDisplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BottomDisplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BottomDisplay;
    static deserializeBinaryFromReader(message: BottomDisplay, reader: jspb.BinaryReader): BottomDisplay;
}

export namespace BottomDisplay {
    export type AsObject = {
        title?: TextInfo.AsObject,
        icon: string,
    }
}

export class ButtonInfo extends jspb.Message { 
    getText(): string;
    setText(value: string): ButtonInfo;
    getTextColor(): string;
    setTextColor(value: string): ButtonInfo;
    getTextColorNight(): string;
    setTextColorNight(value: string): ButtonInfo;
    getBgColor(): string;
    setBgColor(value: string): ButtonInfo;
    getBgColorNight(): string;
    setBgColorNight(value: string): ButtonInfo;
    getLink(): string;
    setLink(value: string): ButtonInfo;
    getActionType(): string;
    setActionType(value: string): ButtonInfo;

    hasBadgeInfo(): boolean;
    clearBadgeInfo(): void;
    getBadgeInfo(): BadgeInfo | undefined;
    setBadgeInfo(value?: BadgeInfo): ButtonInfo;

    hasReport(): boolean;
    clearReport(): void;
    getReport(): Report | undefined;
    setReport(value?: Report): ButtonInfo;
    getLeftStrikethroughText(): string;
    setLeftStrikethroughText(value: string): ButtonInfo;

    hasSimpleTextInfo(): boolean;
    clearSimpleTextInfo(): void;
    getSimpleTextInfo(): TextInfo | undefined;
    setSimpleTextInfo(value?: TextInfo): ButtonInfo;
    getSimpleBgColor(): string;
    setSimpleBgColor(value: string): ButtonInfo;
    getSimpleBgColorNight(): string;
    setSimpleBgColorNight(value: string): ButtonInfo;

    hasBgGradientColor(): boolean;
    clearBgGradientColor(): void;
    getBgGradientColor(): GradientColor | undefined;
    setBgGradientColor(value?: GradientColor): ButtonInfo;

    getOrderReportParamsMap(): jspb.Map<string, string>;
    clearOrderReportParamsMap(): void;

    hasTaskParam(): boolean;
    clearTaskParam(): void;
    getTaskParam(): TaskParam | undefined;
    setTaskParam(value?: TaskParam): ButtonInfo;
    getPcLink(): string;
    setPcLink(value: string): ButtonInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ButtonInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ButtonInfo): ButtonInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ButtonInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ButtonInfo;
    static deserializeBinaryFromReader(message: ButtonInfo, reader: jspb.BinaryReader): ButtonInfo;
}

export namespace ButtonInfo {
    export type AsObject = {
        text: string,
        textColor: string,
        textColorNight: string,
        bgColor: string,
        bgColorNight: string,
        link: string,
        actionType: string,
        badgeInfo?: BadgeInfo.AsObject,
        report?: Report.AsObject,
        leftStrikethroughText: string,
        simpleTextInfo?: TextInfo.AsObject,
        simpleBgColor: string,
        simpleBgColorNight: string,
        bgGradientColor?: GradientColor.AsObject,

        orderReportParamsMap: Array<[string, string]>,
        taskParam?: TaskParam.AsObject,
        pcLink: string,
    }
}

export class CastTips extends jspb.Message { 
    getCode(): number;
    setCode(value: number): CastTips;
    getMessage(): string;
    setMessage(value: string): CastTips;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CastTips.AsObject;
    static toObject(includeInstance: boolean, msg: CastTips): CastTips.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CastTips, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CastTips;
    static deserializeBinaryFromReader(message: CastTips, reader: jspb.BinaryReader): CastTips;
}

export namespace CastTips {
    export type AsObject = {
        code: number,
        message: string,
    }
}

export class ClipInfo extends jspb.Message { 
    getMaterialNo(): number;
    setMaterialNo(value: number): ClipInfo;
    getStart(): number;
    setStart(value: number): ClipInfo;
    getEnd(): number;
    setEnd(value: number): ClipInfo;
    getClipType(): ClipType;
    setClipType(value: ClipType): ClipInfo;
    getToastText(): string;
    setToastText(value: string): ClipInfo;

    hasMultiView(): boolean;
    clearMultiView(): void;
    getMultiView(): MultiView | undefined;
    setMultiView(value?: MultiView): ClipInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClipInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ClipInfo): ClipInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClipInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClipInfo;
    static deserializeBinaryFromReader(message: ClipInfo, reader: jspb.BinaryReader): ClipInfo;
}

export namespace ClipInfo {
    export type AsObject = {
        materialNo: number,
        start: number,
        end: number,
        clipType: ClipType,
        toastText: string,
        multiView?: MultiView.AsObject,
    }
}

export class ContinuePlayInfo extends jspb.Message { 
    getContinuePlayEpId(): number;
    setContinuePlayEpId(value: number): ContinuePlayInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContinuePlayInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ContinuePlayInfo): ContinuePlayInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContinuePlayInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContinuePlayInfo;
    static deserializeBinaryFromReader(message: ContinuePlayInfo, reader: jspb.BinaryReader): ContinuePlayInfo;
}

export namespace ContinuePlayInfo {
    export type AsObject = {
        continuePlayEpId: number,
    }
}

export class Coupon extends jspb.Message { 
    getCouponToken(): string;
    setCouponToken(value: string): Coupon;
    getType(): number;
    setType(value: number): Coupon;
    getValue(): string;
    setValue(value: string): Coupon;
    getUseDesc(): string;
    setUseDesc(value: string): Coupon;
    getTitle(): string;
    setTitle(value: string): Coupon;
    getDesc(): string;
    setDesc(value: string): Coupon;
    getPayButtonText(): string;
    setPayButtonText(value: string): Coupon;
    getPayButtonTextLineThrough(): string;
    setPayButtonTextLineThrough(value: string): Coupon;
    getRealAmount(): string;
    setRealAmount(value: string): Coupon;

    hasExpireTime(): boolean;
    clearExpireTime(): void;
    getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
    getOtype(): number;
    setOtype(value: number): Coupon;
    getAmount(): string;
    setAmount(value: string): Coupon;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coupon.AsObject;
    static toObject(includeInstance: boolean, msg: Coupon): Coupon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coupon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coupon;
    static deserializeBinaryFromReader(message: Coupon, reader: jspb.BinaryReader): Coupon;
}

export namespace Coupon {
    export type AsObject = {
        couponToken: string,
        type: number,
        value: string,
        useDesc: string,
        title: string,
        desc: string,
        payButtonText: string,
        payButtonTextLineThrough: string,
        realAmount: string,
        expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        otype: number,
        amount: string,
    }
}

export class CouponInfo extends jspb.Message { 

    hasToast(): boolean;
    clearToast(): void;
    getToast(): CouponToast | undefined;
    setToast(value?: CouponToast): CouponInfo;

    hasPopWin(): boolean;
    clearPopWin(): void;
    getPopWin(): PopWin | undefined;
    setPopWin(value?: PopWin): CouponInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CouponInfo): CouponInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponInfo;
    static deserializeBinaryFromReader(message: CouponInfo, reader: jspb.BinaryReader): CouponInfo;
}

export namespace CouponInfo {
    export type AsObject = {
        toast?: CouponToast.AsObject,
        popWin?: PopWin.AsObject,
    }
}

export class CouponTextInfo extends jspb.Message { 
    getPositivePreview(): string;
    setPositivePreview(value: string): CouponTextInfo;
    getSection(): string;
    setSection(value: string): CouponTextInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponTextInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CouponTextInfo): CouponTextInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponTextInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponTextInfo;
    static deserializeBinaryFromReader(message: CouponTextInfo, reader: jspb.BinaryReader): CouponTextInfo;
}

export namespace CouponTextInfo {
    export type AsObject = {
        positivePreview: string,
        section: string,
    }
}

export class CouponToast extends jspb.Message { 

    hasTextInfo(): boolean;
    clearTextInfo(): void;
    getTextInfo(): CouponTextInfo | undefined;
    setTextInfo(value?: CouponTextInfo): CouponToast;

    hasButton(): boolean;
    clearButton(): void;
    getButton(): ButtonInfo | undefined;
    setButton(value?: ButtonInfo): CouponToast;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponToast.AsObject;
    static toObject(includeInstance: boolean, msg: CouponToast): CouponToast.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponToast, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponToast;
    static deserializeBinaryFromReader(message: CouponToast, reader: jspb.BinaryReader): CouponToast;
}

export namespace CouponToast {
    export type AsObject = {
        textInfo?: CouponTextInfo.AsObject,
        button?: ButtonInfo.AsObject,
    }
}

export class DashItem extends jspb.Message { 
    getId(): number;
    setId(value: number): DashItem;
    getBaseUrl(): string;
    setBaseUrl(value: string): DashItem;
    clearBackupUrlList(): void;
    getBackupUrlList(): Array<string>;
    setBackupUrlList(value: Array<string>): DashItem;
    addBackupUrl(value: string, index?: number): string;
    getBandwidth(): number;
    setBandwidth(value: number): DashItem;
    getCodecid(): number;
    setCodecid(value: number): DashItem;
    getMd5(): string;
    setMd5(value: string): DashItem;
    getSize(): number;
    setSize(value: number): DashItem;
    getFrameRate(): string;
    setFrameRate(value: string): DashItem;
    getWidevinePssh(): string;
    setWidevinePssh(value: string): DashItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DashItem.AsObject;
    static toObject(includeInstance: boolean, msg: DashItem): DashItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DashItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DashItem;
    static deserializeBinaryFromReader(message: DashItem, reader: jspb.BinaryReader): DashItem;
}

export namespace DashItem {
    export type AsObject = {
        id: number,
        baseUrl: string,
        backupUrlList: Array<string>,
        bandwidth: number,
        codecid: number,
        md5: string,
        size: number,
        frameRate: string,
        widevinePssh: string,
    }
}

export class DashVideo extends jspb.Message { 
    getBaseUrl(): string;
    setBaseUrl(value: string): DashVideo;
    clearBackupUrlList(): void;
    getBackupUrlList(): Array<string>;
    setBackupUrlList(value: Array<string>): DashVideo;
    addBackupUrl(value: string, index?: number): string;
    getBandwidth(): number;
    setBandwidth(value: number): DashVideo;
    getCodecid(): number;
    setCodecid(value: number): DashVideo;
    getMd5(): string;
    setMd5(value: string): DashVideo;
    getSize(): number;
    setSize(value: number): DashVideo;
    getAudioId(): number;
    setAudioId(value: number): DashVideo;
    getNoRexcode(): boolean;
    setNoRexcode(value: boolean): DashVideo;
    getFrameRate(): string;
    setFrameRate(value: string): DashVideo;
    getWidth(): number;
    setWidth(value: number): DashVideo;
    getHeight(): number;
    setHeight(value: number): DashVideo;
    getWidevinePssh(): string;
    setWidevinePssh(value: string): DashVideo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DashVideo.AsObject;
    static toObject(includeInstance: boolean, msg: DashVideo): DashVideo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DashVideo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DashVideo;
    static deserializeBinaryFromReader(message: DashVideo, reader: jspb.BinaryReader): DashVideo;
}

export namespace DashVideo {
    export type AsObject = {
        baseUrl: string,
        backupUrlList: Array<string>,
        bandwidth: number,
        codecid: number,
        md5: string,
        size: number,
        audioId: number,
        noRexcode: boolean,
        frameRate: string,
        width: number,
        height: number,
        widevinePssh: string,
    }
}

export class DataControl extends jspb.Message { 
    getNeedWatchProgress(): boolean;
    setNeedWatchProgress(value: boolean): DataControl;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataControl.AsObject;
    static toObject(includeInstance: boolean, msg: DataControl): DataControl.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataControl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataControl;
    static deserializeBinaryFromReader(message: DataControl, reader: jspb.BinaryReader): DataControl;
}

export namespace DataControl {
    export type AsObject = {
        needWatchProgress: boolean,
    }
}

export class Dialog extends jspb.Message { 
    getCode(): number;
    setCode(value: number): Dialog;
    getMsg(): string;
    setMsg(value: string): Dialog;
    getType(): string;
    setType(value: string): Dialog;
    getStyleType(): string;
    setStyleType(value: string): Dialog;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): DialogConfig | undefined;
    setConfig(value?: DialogConfig): Dialog;

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): TextInfo | undefined;
    setTitle(value?: TextInfo): Dialog;

    hasSubtitle(): boolean;
    clearSubtitle(): void;
    getSubtitle(): TextInfo | undefined;
    setSubtitle(value?: TextInfo): Dialog;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): ImageInfo | undefined;
    setImage(value?: ImageInfo): Dialog;
    clearButtonList(): void;
    getButtonList(): Array<ButtonInfo>;
    setButtonList(value: Array<ButtonInfo>): Dialog;
    addButton(value?: ButtonInfo, index?: number): ButtonInfo;

    hasBottomDesc(): boolean;
    clearBottomDesc(): void;
    getBottomDesc(): ButtonInfo | undefined;
    setBottomDesc(value?: ButtonInfo): Dialog;

    hasReport(): boolean;
    clearReport(): void;
    getReport(): Report | undefined;
    setReport(value?: Report): Dialog;
    getCountDownSec(): number;
    setCountDownSec(value: number): Dialog;

    hasRightBottomDesc(): boolean;
    clearRightBottomDesc(): void;
    getRightBottomDesc(): TextInfo | undefined;
    setRightBottomDesc(value?: TextInfo): Dialog;
    clearBottomDisplayList(): void;
    getBottomDisplayList(): Array<BottomDisplay>;
    setBottomDisplayList(value: Array<BottomDisplay>): Dialog;
    addBottomDisplay(value?: BottomDisplay, index?: number): BottomDisplay;
    clearPlayListList(): void;
    getPlayListList(): Array<PlayList>;
    setPlayListList(value: Array<PlayList>): Dialog;
    addPlayList(value?: PlayList, index?: number): PlayList;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dialog.AsObject;
    static toObject(includeInstance: boolean, msg: Dialog): Dialog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dialog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dialog;
    static deserializeBinaryFromReader(message: Dialog, reader: jspb.BinaryReader): Dialog;
}

export namespace Dialog {
    export type AsObject = {
        code: number,
        msg: string,
        type: string,
        styleType: string,
        config?: DialogConfig.AsObject,
        title?: TextInfo.AsObject,
        subtitle?: TextInfo.AsObject,
        image?: ImageInfo.AsObject,
        buttonList: Array<ButtonInfo.AsObject>,
        bottomDesc?: ButtonInfo.AsObject,
        report?: Report.AsObject,
        countDownSec: number,
        rightBottomDesc?: TextInfo.AsObject,
        bottomDisplayList: Array<BottomDisplay.AsObject>,
        playListList: Array<PlayList.AsObject>,
    }
}

export class DialogConfig extends jspb.Message { 
    getIsShowCover(): boolean;
    setIsShowCover(value: boolean): DialogConfig;
    getIsOrientationEnable(): boolean;
    setIsOrientationEnable(value: boolean): DialogConfig;
    getIsNestedScrollEnable(): boolean;
    setIsNestedScrollEnable(value: boolean): DialogConfig;
    getIsForceHalfscreenEnable(): boolean;
    setIsForceHalfscreenEnable(value: boolean): DialogConfig;
    getIsBackgroundTranslucentEnable(): boolean;
    setIsBackgroundTranslucentEnable(value: boolean): DialogConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DialogConfig.AsObject;
    static toObject(includeInstance: boolean, msg: DialogConfig): DialogConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DialogConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DialogConfig;
    static deserializeBinaryFromReader(message: DialogConfig, reader: jspb.BinaryReader): DialogConfig;
}

export namespace DialogConfig {
    export type AsObject = {
        isShowCover: boolean,
        isOrientationEnable: boolean,
        isNestedScrollEnable: boolean,
        isForceHalfscreenEnable: boolean,
        isBackgroundTranslucentEnable: boolean,
    }
}

export class Dimension extends jspb.Message { 
    getWidth(): number;
    setWidth(value: number): Dimension;
    getHeight(): number;
    setHeight(value: number): Dimension;
    getRotate(): number;
    setRotate(value: number): Dimension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dimension.AsObject;
    static toObject(includeInstance: boolean, msg: Dimension): Dimension.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dimension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dimension;
    static deserializeBinaryFromReader(message: Dimension, reader: jspb.BinaryReader): Dimension;
}

export namespace Dimension {
    export type AsObject = {
        width: number,
        height: number,
        rotate: number,
    }
}

export class DolbyItem extends jspb.Message { 
    getType(): DolbyItem.Type;
    setType(value: DolbyItem.Type): DolbyItem;

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): DashItem | undefined;
    setAudio(value?: DashItem): DolbyItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DolbyItem.AsObject;
    static toObject(includeInstance: boolean, msg: DolbyItem): DolbyItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DolbyItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DolbyItem;
    static deserializeBinaryFromReader(message: DolbyItem, reader: jspb.BinaryReader): DolbyItem;
}

export namespace DolbyItem {
    export type AsObject = {
        type: DolbyItem.Type,
        audio?: DashItem.AsObject,
    }

    export enum Type {
    NONE = 0,
    COMMON = 1,
    ATMOS = 2,
    }

}

export class EndPage extends jspb.Message { 

    hasDialog(): boolean;
    clearDialog(): void;
    getDialog(): Dialog | undefined;
    setDialog(value?: Dialog): EndPage;
    getHide(): boolean;
    setHide(value: boolean): EndPage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndPage.AsObject;
    static toObject(includeInstance: boolean, msg: EndPage): EndPage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndPage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndPage;
    static deserializeBinaryFromReader(message: EndPage, reader: jspb.BinaryReader): EndPage;
}

export namespace EndPage {
    export type AsObject = {
        dialog?: Dialog.AsObject,
        hide: boolean,
    }
}

export class EpInlineVideo extends jspb.Message { 
    getMaterialNo(): number;
    setMaterialNo(value: number): EpInlineVideo;
    getAid(): number;
    setAid(value: number): EpInlineVideo;
    getCid(): number;
    setCid(value: number): EpInlineVideo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpInlineVideo.AsObject;
    static toObject(includeInstance: boolean, msg: EpInlineVideo): EpInlineVideo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpInlineVideo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpInlineVideo;
    static deserializeBinaryFromReader(message: EpInlineVideo, reader: jspb.BinaryReader): EpInlineVideo;
}

export namespace EpInlineVideo {
    export type AsObject = {
        materialNo: number,
        aid: number,
        cid: number,
    }
}

export class EpisodeAdvertisementInfo extends jspb.Message { 
    getAid(): number;
    setAid(value: number): EpisodeAdvertisementInfo;
    getTitle(): string;
    setTitle(value: string): EpisodeAdvertisementInfo;
    getLink(): string;
    setLink(value: string): EpisodeAdvertisementInfo;
    getFollowVideoBntFlag(): number;
    setFollowVideoBntFlag(value: number): EpisodeAdvertisementInfo;
    getNextVideoTitle(): string;
    setNextVideoTitle(value: string): EpisodeAdvertisementInfo;
    getNextVideoLink(): string;
    setNextVideoLink(value: string): EpisodeAdvertisementInfo;
    getCid(): number;
    setCid(value: number): EpisodeAdvertisementInfo;
    getSeasonId(): number;
    setSeasonId(value: number): EpisodeAdvertisementInfo;
    getFollow(): number;
    setFollow(value: number): EpisodeAdvertisementInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpisodeAdvertisementInfo.AsObject;
    static toObject(includeInstance: boolean, msg: EpisodeAdvertisementInfo): EpisodeAdvertisementInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpisodeAdvertisementInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpisodeAdvertisementInfo;
    static deserializeBinaryFromReader(message: EpisodeAdvertisementInfo, reader: jspb.BinaryReader): EpisodeAdvertisementInfo;
}

export namespace EpisodeAdvertisementInfo {
    export type AsObject = {
        aid: number,
        title: string,
        link: string,
        followVideoBntFlag: number,
        nextVideoTitle: string,
        nextVideoLink: string,
        cid: number,
        seasonId: number,
        follow: number,
    }
}

export class EpisodeInfo extends jspb.Message { 
    getEpId(): number;
    setEpId(value: number): EpisodeInfo;
    getCid(): number;
    setCid(value: number): EpisodeInfo;
    getAid(): number;
    setAid(value: number): EpisodeInfo;
    getEpStatus(): number;
    setEpStatus(value: number): EpisodeInfo;

    hasSeasonInfo(): boolean;
    clearSeasonInfo(): void;
    getSeasonInfo(): SeasonInfo | undefined;
    setSeasonInfo(value?: SeasonInfo): EpisodeInfo;
    getCover(): string;
    setCover(value: string): EpisodeInfo;
    getTitle(): string;
    setTitle(value: string): EpisodeInfo;

    hasInteraction(): boolean;
    clearInteraction(): void;
    getInteraction(): Interaction | undefined;
    setInteraction(value?: Interaction): EpisodeInfo;
    getLongTitle(): string;
    setLongTitle(value: string): EpisodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpisodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: EpisodeInfo): EpisodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpisodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpisodeInfo;
    static deserializeBinaryFromReader(message: EpisodeInfo, reader: jspb.BinaryReader): EpisodeInfo;
}

export namespace EpisodeInfo {
    export type AsObject = {
        epId: number,
        cid: number,
        aid: number,
        epStatus: number,
        seasonInfo?: SeasonInfo.AsObject,
        cover: string,
        title: string,
        interaction?: Interaction.AsObject,
        longTitle: string,
    }
}

export class EpPreVideo extends jspb.Message { 
    getAid(): number;
    setAid(value: number): EpPreVideo;
    getCid(): number;
    setCid(value: number): EpPreVideo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpPreVideo.AsObject;
    static toObject(includeInstance: boolean, msg: EpPreVideo): EpPreVideo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpPreVideo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpPreVideo;
    static deserializeBinaryFromReader(message: EpPreVideo, reader: jspb.BinaryReader): EpPreVideo;
}

export namespace EpPreVideo {
    export type AsObject = {
        aid: number,
        cid: number,
    }
}

export class EpPublicityVideo extends jspb.Message { 
    getType(): EpPublicityVideo.Type;
    setType(value: EpPublicityVideo.Type): EpPublicityVideo;

    hasEpPreVideo(): boolean;
    clearEpPreVideo(): void;
    getEpPreVideo(): EpPreVideo | undefined;
    setEpPreVideo(value?: EpPreVideo): EpPublicityVideo;

    hasEpInlineVideo(): boolean;
    clearEpInlineVideo(): void;
    getEpInlineVideo(): EpInlineVideo | undefined;
    setEpInlineVideo(value?: EpInlineVideo): EpPublicityVideo;

    getDataCase(): EpPublicityVideo.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpPublicityVideo.AsObject;
    static toObject(includeInstance: boolean, msg: EpPublicityVideo): EpPublicityVideo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpPublicityVideo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpPublicityVideo;
    static deserializeBinaryFromReader(message: EpPublicityVideo, reader: jspb.BinaryReader): EpPublicityVideo;
}

export namespace EpPublicityVideo {
    export type AsObject = {
        type: EpPublicityVideo.Type,
        epPreVideo?: EpPreVideo.AsObject,
        epInlineVideo?: EpInlineVideo.AsObject,
    }

    export enum Type {
    DATA_NOT_SET = 0,
    EP_PRE_VIDEO = 2,
    EP_INLINE = 3,
    }


    export enum DataCase {
        DATA_NOT_SET = 0,
        EP_PRE_VIDEO = 2,
        EP_INLINE_VIDEO = 3,
    }

}

export class Event extends jspb.Message { 

    hasShake(): boolean;
    clearShake(): void;
    getShake(): Shake | undefined;
    setShake(value?: Shake): Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        shake?: Shake.AsObject,
    }
}

export class FreyaConfig extends jspb.Message { 
    getDesc(): string;
    setDesc(value: string): FreyaConfig;
    getType(): number;
    setType(value: number): FreyaConfig;
    getIssuedCnt(): number;
    setIssuedCnt(value: number): FreyaConfig;
    getIsAlwaysShow(): boolean;
    setIsAlwaysShow(value: boolean): FreyaConfig;
    getScreenNumber(): number;
    setScreenNumber(value: number): FreyaConfig;
    getFullScreenNumber(): number;
    setFullScreenNumber(value: number): FreyaConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FreyaConfig.AsObject;
    static toObject(includeInstance: boolean, msg: FreyaConfig): FreyaConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FreyaConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FreyaConfig;
    static deserializeBinaryFromReader(message: FreyaConfig, reader: jspb.BinaryReader): FreyaConfig;
}

export namespace FreyaConfig {
    export type AsObject = {
        desc: string,
        type: number,
        issuedCnt: number,
        isAlwaysShow: boolean,
        screenNumber: number,
        fullScreenNumber: number,
    }
}

export class GradientColor extends jspb.Message { 
    getStartColor(): string;
    setStartColor(value: string): GradientColor;
    getEndColor(): string;
    setEndColor(value: string): GradientColor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GradientColor.AsObject;
    static toObject(includeInstance: boolean, msg: GradientColor): GradientColor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GradientColor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GradientColor;
    static deserializeBinaryFromReader(message: GradientColor, reader: jspb.BinaryReader): GradientColor;
}

export namespace GradientColor {
    export type AsObject = {
        startColor: string,
        endColor: string,
    }
}

export class HighDefinitionTrialInfo extends jspb.Message { 
    getTrialAble(): boolean;
    setTrialAble(value: boolean): HighDefinitionTrialInfo;
    getRemainingTimes(): number;
    setRemainingTimes(value: number): HighDefinitionTrialInfo;
    getStart(): number;
    setStart(value: number): HighDefinitionTrialInfo;
    getTimeLength(): number;
    setTimeLength(value: number): HighDefinitionTrialInfo;

    hasStartToast(): boolean;
    clearStartToast(): void;
    getStartToast(): Toast | undefined;
    setStartToast(value?: Toast): HighDefinitionTrialInfo;

    hasEndToast(): boolean;
    clearEndToast(): void;
    getEndToast(): Toast | undefined;
    setEndToast(value?: Toast): HighDefinitionTrialInfo;

    hasReport(): boolean;
    clearReport(): void;
    getReport(): Report | undefined;
    setReport(value?: Report): HighDefinitionTrialInfo;

    hasQualityOpenTipBtn(): boolean;
    clearQualityOpenTipBtn(): void;
    getQualityOpenTipBtn(): ButtonInfo | undefined;
    setQualityOpenTipBtn(value?: ButtonInfo): HighDefinitionTrialInfo;

    hasNoLongerTrialBtn(): boolean;
    clearNoLongerTrialBtn(): void;
    getNoLongerTrialBtn(): ButtonInfo | undefined;
    setNoLongerTrialBtn(value?: ButtonInfo): HighDefinitionTrialInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HighDefinitionTrialInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HighDefinitionTrialInfo): HighDefinitionTrialInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HighDefinitionTrialInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HighDefinitionTrialInfo;
    static deserializeBinaryFromReader(message: HighDefinitionTrialInfo, reader: jspb.BinaryReader): HighDefinitionTrialInfo;
}

export namespace HighDefinitionTrialInfo {
    export type AsObject = {
        trialAble: boolean,
        remainingTimes: number,
        start: number,
        timeLength: number,
        startToast?: Toast.AsObject,
        endToast?: Toast.AsObject,
        report?: Report.AsObject,
        qualityOpenTipBtn?: ButtonInfo.AsObject,
        noLongerTrialBtn?: ButtonInfo.AsObject,
    }
}

export class HistoryNode extends jspb.Message { 
    getNodeId(): number;
    setNodeId(value: number): HistoryNode;
    getTitle(): string;
    setTitle(value: string): HistoryNode;
    getCid(): number;
    setCid(value: number): HistoryNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HistoryNode.AsObject;
    static toObject(includeInstance: boolean, msg: HistoryNode): HistoryNode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HistoryNode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HistoryNode;
    static deserializeBinaryFromReader(message: HistoryNode, reader: jspb.BinaryReader): HistoryNode;
}

export namespace HistoryNode {
    export type AsObject = {
        nodeId: number,
        title: string,
        cid: number,
    }
}

export class ImageInfo extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): ImageInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ImageInfo): ImageInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageInfo;
    static deserializeBinaryFromReader(message: ImageInfo, reader: jspb.BinaryReader): ImageInfo;
}

export namespace ImageInfo {
    export type AsObject = {
        url: string,
    }
}

export class Interaction extends jspb.Message { 

    hasHistoryNode(): boolean;
    clearHistoryNode(): void;
    getHistoryNode(): HistoryNode | undefined;
    setHistoryNode(value?: HistoryNode): Interaction;
    getGraphVersion(): number;
    setGraphVersion(value: number): Interaction;
    getMsg(): string;
    setMsg(value: string): Interaction;
    getIsInteraction(): boolean;
    setIsInteraction(value: boolean): Interaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Interaction.AsObject;
    static toObject(includeInstance: boolean, msg: Interaction): Interaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Interaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Interaction;
    static deserializeBinaryFromReader(message: Interaction, reader: jspb.BinaryReader): Interaction;
}

export namespace Interaction {
    export type AsObject = {
        historyNode?: HistoryNode.AsObject,
        graphVersion: number,
        msg: string,
        isInteraction: boolean,
    }
}

export class MultiView extends jspb.Message { 
    getButtonMaterial(): string;
    setButtonMaterial(value: string): MultiView;
    getEpId(): number;
    setEpId(value: number): MultiView;
    getCid(): number;
    setCid(value: number): MultiView;
    getAvid(): number;
    setAvid(value: number): MultiView;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiView.AsObject;
    static toObject(includeInstance: boolean, msg: MultiView): MultiView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiView;
    static deserializeBinaryFromReader(message: MultiView, reader: jspb.BinaryReader): MultiView;
}

export namespace MultiView {
    export type AsObject = {
        buttonMaterial: string,
        epId: number,
        cid: number,
        avid: number,
    }
}

export class PayTip extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): PayTip;
    getUrl(): string;
    setUrl(value: string): PayTip;
    getIcon(): string;
    setIcon(value: string): PayTip;
    getType(): number;
    setType(value: number): PayTip;
    getShowType(): number;
    setShowType(value: number): PayTip;
    getImg(): string;
    setImg(value: string): PayTip;
    getBgDayColor(): string;
    setBgDayColor(value: string): PayTip;
    getBgNightColor(): string;
    setBgNightColor(value: string): PayTip;
    getBgLineColor(): string;
    setBgLineColor(value: string): PayTip;
    getBgNightLineColor(): string;
    setBgNightLineColor(value: string): PayTip;
    getTextColor(): string;
    setTextColor(value: string): PayTip;
    getTextNightColor(): string;
    setTextNightColor(value: string): PayTip;
    getViewStartTime(): number;
    setViewStartTime(value: number): PayTip;
    clearButtonList(): void;
    getButtonList(): Array<ButtonInfo>;
    setButtonList(value: Array<ButtonInfo>): PayTip;
    addButton(value?: ButtonInfo, index?: number): ButtonInfo;
    getUrlOpenType(): number;
    setUrlOpenType(value: number): PayTip;

    hasReport(): boolean;
    clearReport(): void;
    getReport(): Report | undefined;
    setReport(value?: Report): PayTip;
    getAngleStyle(): number;
    setAngleStyle(value: number): PayTip;
    getReportType(): number;
    setReportType(value: number): PayTip;

    getOrderReportParamsMap(): jspb.Map<string, string>;
    clearOrderReportParamsMap(): void;
    getGiantScreenImg(): string;
    setGiantScreenImg(value: string): PayTip;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayTip.AsObject;
    static toObject(includeInstance: boolean, msg: PayTip): PayTip.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayTip, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayTip;
    static deserializeBinaryFromReader(message: PayTip, reader: jspb.BinaryReader): PayTip;
}

export namespace PayTip {
    export type AsObject = {
        title: string,
        url: string,
        icon: string,
        type: number,
        showType: number,
        img: string,
        bgDayColor: string,
        bgNightColor: string,
        bgLineColor: string,
        bgNightLineColor: string,
        textColor: string,
        textNightColor: string,
        viewStartTime: number,
        buttonList: Array<ButtonInfo.AsObject>,
        urlOpenType: number,
        report?: Report.AsObject,
        angleStyle: number,
        reportType: number,

        orderReportParamsMap: Array<[string, string]>,
        giantScreenImg: string,
    }
}

export class PlayAbilityConf extends jspb.Message { 
    getBackgroundPlayDisable(): boolean;
    setBackgroundPlayDisable(value: boolean): PlayAbilityConf;
    getFlipDisable(): boolean;
    setFlipDisable(value: boolean): PlayAbilityConf;
    getCastDisable(): boolean;
    setCastDisable(value: boolean): PlayAbilityConf;
    getFeedbackDisable(): boolean;
    setFeedbackDisable(value: boolean): PlayAbilityConf;
    getSubtitleDisable(): boolean;
    setSubtitleDisable(value: boolean): PlayAbilityConf;
    getPlaybackRateDisable(): boolean;
    setPlaybackRateDisable(value: boolean): PlayAbilityConf;
    getTimeUpDisable(): boolean;
    setTimeUpDisable(value: boolean): PlayAbilityConf;
    getPlaybackModeDisable(): boolean;
    setPlaybackModeDisable(value: boolean): PlayAbilityConf;
    getScaleModeDisable(): boolean;
    setScaleModeDisable(value: boolean): PlayAbilityConf;
    getLikeDisable(): boolean;
    setLikeDisable(value: boolean): PlayAbilityConf;
    getDislikeDisable(): boolean;
    setDislikeDisable(value: boolean): PlayAbilityConf;
    getCoinDisable(): boolean;
    setCoinDisable(value: boolean): PlayAbilityConf;
    getElecDisable(): boolean;
    setElecDisable(value: boolean): PlayAbilityConf;
    getShareDisable(): boolean;
    setShareDisable(value: boolean): PlayAbilityConf;
    getScreenShotDisable(): boolean;
    setScreenShotDisable(value: boolean): PlayAbilityConf;
    getLockScreenDisable(): boolean;
    setLockScreenDisable(value: boolean): PlayAbilityConf;
    getRecommendDisable(): boolean;
    setRecommendDisable(value: boolean): PlayAbilityConf;
    getPlaybackSpeedDisable(): boolean;
    setPlaybackSpeedDisable(value: boolean): PlayAbilityConf;
    getDefinitionDisable(): boolean;
    setDefinitionDisable(value: boolean): PlayAbilityConf;
    getSelectionsDisable(): boolean;
    setSelectionsDisable(value: boolean): PlayAbilityConf;
    getNextDisable(): boolean;
    setNextDisable(value: boolean): PlayAbilityConf;
    getEditDmDisable(): boolean;
    setEditDmDisable(value: boolean): PlayAbilityConf;
    getSmallWindowDisable(): boolean;
    setSmallWindowDisable(value: boolean): PlayAbilityConf;
    getShakeDisable(): boolean;
    setShakeDisable(value: boolean): PlayAbilityConf;
    getOuterDmDisable(): boolean;
    setOuterDmDisable(value: boolean): PlayAbilityConf;
    getInnerDmDisable(): boolean;
    setInnerDmDisable(value: boolean): PlayAbilityConf;
    getFreyaEnterDisable(): boolean;
    setFreyaEnterDisable(value: boolean): PlayAbilityConf;
    getDolbyDisable(): boolean;
    setDolbyDisable(value: boolean): PlayAbilityConf;
    getFreyaFullDisable(): boolean;
    setFreyaFullDisable(value: boolean): PlayAbilityConf;
    getSkipOpedSwitchDisable(): boolean;
    setSkipOpedSwitchDisable(value: boolean): PlayAbilityConf;
    getRecordScreenDisable(): boolean;
    setRecordScreenDisable(value: boolean): PlayAbilityConf;
    getColorOptimizeDisable(): boolean;
    setColorOptimizeDisable(value: boolean): PlayAbilityConf;
    getDubbingDisable(): boolean;
    setDubbingDisable(value: boolean): PlayAbilityConf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayAbilityConf.AsObject;
    static toObject(includeInstance: boolean, msg: PlayAbilityConf): PlayAbilityConf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayAbilityConf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayAbilityConf;
    static deserializeBinaryFromReader(message: PlayAbilityConf, reader: jspb.BinaryReader): PlayAbilityConf;
}

export namespace PlayAbilityConf {
    export type AsObject = {
        backgroundPlayDisable: boolean,
        flipDisable: boolean,
        castDisable: boolean,
        feedbackDisable: boolean,
        subtitleDisable: boolean,
        playbackRateDisable: boolean,
        timeUpDisable: boolean,
        playbackModeDisable: boolean,
        scaleModeDisable: boolean,
        likeDisable: boolean,
        dislikeDisable: boolean,
        coinDisable: boolean,
        elecDisable: boolean,
        shareDisable: boolean,
        screenShotDisable: boolean,
        lockScreenDisable: boolean,
        recommendDisable: boolean,
        playbackSpeedDisable: boolean,
        definitionDisable: boolean,
        selectionsDisable: boolean,
        nextDisable: boolean,
        editDmDisable: boolean,
        smallWindowDisable: boolean,
        shakeDisable: boolean,
        outerDmDisable: boolean,
        innerDmDisable: boolean,
        freyaEnterDisable: boolean,
        dolbyDisable: boolean,
        freyaFullDisable: boolean,
        skipOpedSwitchDisable: boolean,
        recordScreenDisable: boolean,
        colorOptimizeDisable: boolean,
        dubbingDisable: boolean,
    }
}

export class PlayAbilityExtConf extends jspb.Message { 
    getAllowCloseSubtitle(): boolean;
    setAllowCloseSubtitle(value: boolean): PlayAbilityExtConf;

    hasFreyaConfig(): boolean;
    clearFreyaConfig(): void;
    getFreyaConfig(): FreyaConfig | undefined;
    setFreyaConfig(value?: FreyaConfig): PlayAbilityExtConf;

    hasCastTips(): boolean;
    clearCastTips(): void;
    getCastTips(): CastTips | undefined;
    setCastTips(value?: CastTips): PlayAbilityExtConf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayAbilityExtConf.AsObject;
    static toObject(includeInstance: boolean, msg: PlayAbilityExtConf): PlayAbilityExtConf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayAbilityExtConf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayAbilityExtConf;
    static deserializeBinaryFromReader(message: PlayAbilityExtConf, reader: jspb.BinaryReader): PlayAbilityExtConf;
}

export namespace PlayAbilityExtConf {
    export type AsObject = {
        allowCloseSubtitle: boolean,
        freyaConfig?: FreyaConfig.AsObject,
        castTips?: CastTips.AsObject,
    }
}

export class PlayDubbingInfo extends jspb.Message { 

    hasBackgroundAudio(): boolean;
    clearBackgroundAudio(): void;
    getBackgroundAudio(): AudioMaterialProto | undefined;
    setBackgroundAudio(value?: AudioMaterialProto): PlayDubbingInfo;
    clearRoleAudioListList(): void;
    getRoleAudioListList(): Array<RoleAudioProto>;
    setRoleAudioListList(value: Array<RoleAudioProto>): PlayDubbingInfo;
    addRoleAudioList(value?: RoleAudioProto, index?: number): RoleAudioProto;
    getGuideText(): string;
    setGuideText(value: string): PlayDubbingInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayDubbingInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PlayDubbingInfo): PlayDubbingInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayDubbingInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayDubbingInfo;
    static deserializeBinaryFromReader(message: PlayDubbingInfo, reader: jspb.BinaryReader): PlayDubbingInfo;
}

export namespace PlayDubbingInfo {
    export type AsObject = {
        backgroundAudio?: AudioMaterialProto.AsObject,
        roleAudioListList: Array<RoleAudioProto.AsObject>,
        guideText: string,
    }
}

export class PlayExtInfo extends jspb.Message { 

    hasPlayDubbingInfo(): boolean;
    clearPlayDubbingInfo(): void;
    getPlayDubbingInfo(): PlayDubbingInfo | undefined;
    setPlayDubbingInfo(value?: PlayDubbingInfo): PlayExtInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayExtInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PlayExtInfo): PlayExtInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayExtInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayExtInfo;
    static deserializeBinaryFromReader(message: PlayExtInfo, reader: jspb.BinaryReader): PlayExtInfo;
}

export namespace PlayExtInfo {
    export type AsObject = {
        playDubbingInfo?: PlayDubbingInfo.AsObject,
    }
}

export class PlayList extends jspb.Message { 
    getSeasonId(): number;
    setSeasonId(value: number): PlayList;
    getTitle(): string;
    setTitle(value: string): PlayList;
    getCover(): string;
    setCover(value: string): PlayList;
    getLink(): string;
    setLink(value: string): PlayList;

    hasBadgeInfo(): boolean;
    clearBadgeInfo(): void;
    getBadgeInfo(): BadgeInfo | undefined;
    setBadgeInfo(value?: BadgeInfo): PlayList;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayList.AsObject;
    static toObject(includeInstance: boolean, msg: PlayList): PlayList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayList;
    static deserializeBinaryFromReader(message: PlayList, reader: jspb.BinaryReader): PlayList;
}

export namespace PlayList {
    export type AsObject = {
        seasonId: number,
        title: string,
        cover: string,
        link: string,
        badgeInfo?: BadgeInfo.AsObject,
    }
}

export class PlayViewBusinessInfo extends jspb.Message { 
    getIsPreview(): boolean;
    setIsPreview(value: boolean): PlayViewBusinessInfo;
    getBp(): boolean;
    setBp(value: boolean): PlayViewBusinessInfo;
    getMarlinToken(): string;
    setMarlinToken(value: string): PlayViewBusinessInfo;
    getPlaybackSpeedColor(): string;
    setPlaybackSpeedColor(value: string): PlayViewBusinessInfo;

    hasContinuePlayInfo(): boolean;
    clearContinuePlayInfo(): void;
    getContinuePlayInfo(): ContinuePlayInfo | undefined;
    setContinuePlayInfo(value?: ContinuePlayInfo): PlayViewBusinessInfo;
    clearClipInfoList(): void;
    getClipInfoList(): Array<ClipInfo>;
    setClipInfoList(value: Array<ClipInfo>): PlayViewBusinessInfo;
    addClipInfo(value?: ClipInfo, index?: number): ClipInfo;
    getInlineType(): InlineType;
    setInlineType(value: InlineType): PlayViewBusinessInfo;
    getEpWholeDuration(): number;
    setEpWholeDuration(value: number): PlayViewBusinessInfo;

    hasDimension(): boolean;
    clearDimension(): void;
    getDimension(): Dimension | undefined;
    setDimension(value?: Dimension): PlayViewBusinessInfo;

    getQualityExtMapMap(): jspb.Map<number, QualityExtInfo>;
    clearQualityExtMapMap(): void;

    getExpMapMap(): jspb.Map<string, number>;
    clearExpMapMap(): void;
    getDrmTechType(): DrmTechType;
    setDrmTechType(value: DrmTechType): PlayViewBusinessInfo;
    getLimitActionType(): number;
    setLimitActionType(value: number): PlayViewBusinessInfo;
    getIsDrm(): boolean;
    setIsDrm(value: boolean): PlayViewBusinessInfo;

    hasRecordInfo(): boolean;
    clearRecordInfo(): void;
    getRecordInfo(): RecordInfo | undefined;
    setRecordInfo(value?: RecordInfo): PlayViewBusinessInfo;
    getVipStatus(): number;
    setVipStatus(value: number): PlayViewBusinessInfo;
    getIsLivePre(): boolean;
    setIsLivePre(value: boolean): PlayViewBusinessInfo;

    hasEpisodeInfo(): boolean;
    clearEpisodeInfo(): void;
    getEpisodeInfo(): EpisodeInfo | undefined;
    setEpisodeInfo(value?: EpisodeInfo): PlayViewBusinessInfo;

    hasEpisodeAdvertisementInfo(): boolean;
    clearEpisodeAdvertisementInfo(): void;
    getEpisodeAdvertisementInfo(): EpisodeAdvertisementInfo | undefined;
    setEpisodeAdvertisementInfo(value?: EpisodeAdvertisementInfo): PlayViewBusinessInfo;

    hasUserStatus(): boolean;
    clearUserStatus(): void;
    getUserStatus(): UserStatus | undefined;
    setUserStatus(value?: UserStatus): PlayViewBusinessInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayViewBusinessInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PlayViewBusinessInfo): PlayViewBusinessInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayViewBusinessInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayViewBusinessInfo;
    static deserializeBinaryFromReader(message: PlayViewBusinessInfo, reader: jspb.BinaryReader): PlayViewBusinessInfo;
}

export namespace PlayViewBusinessInfo {
    export type AsObject = {
        isPreview: boolean,
        bp: boolean,
        marlinToken: string,
        playbackSpeedColor: string,
        continuePlayInfo?: ContinuePlayInfo.AsObject,
        clipInfoList: Array<ClipInfo.AsObject>,
        inlineType: InlineType,
        epWholeDuration: number,
        dimension?: Dimension.AsObject,

        qualityExtMapMap: Array<[number, QualityExtInfo.AsObject]>,

        expMapMap: Array<[string, number]>,
        drmTechType: DrmTechType,
        limitActionType: number,
        isDrm: boolean,
        recordInfo?: RecordInfo.AsObject,
        vipStatus: number,
        isLivePre: boolean,
        episodeInfo?: EpisodeInfo.AsObject,
        episodeAdvertisementInfo?: EpisodeAdvertisementInfo.AsObject,
        userStatus?: UserStatus.AsObject,
    }
}

export class PlayViewReply extends jspb.Message { 

    hasVideoInfo(): boolean;
    clearVideoInfo(): void;
    getVideoInfo(): VideoInfo | undefined;
    setVideoInfo(value?: VideoInfo): PlayViewReply;

    hasPlayConf(): boolean;
    clearPlayConf(): void;
    getPlayConf(): PlayAbilityConf | undefined;
    setPlayConf(value?: PlayAbilityConf): PlayViewReply;

    hasBusiness(): boolean;
    clearBusiness(): void;
    getBusiness(): PlayViewBusinessInfo | undefined;
    setBusiness(value?: PlayViewBusinessInfo): PlayViewReply;

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): Event | undefined;
    setEvent(value?: Event): PlayViewReply;

    hasViewInfo(): boolean;
    clearViewInfo(): void;
    getViewInfo(): ViewInfo | undefined;
    setViewInfo(value?: ViewInfo): PlayViewReply;

    hasPlayExtConf(): boolean;
    clearPlayExtConf(): void;
    getPlayExtConf(): PlayAbilityExtConf | undefined;
    setPlayExtConf(value?: PlayAbilityExtConf): PlayViewReply;

    hasPlayExtInfo(): boolean;
    clearPlayExtInfo(): void;
    getPlayExtInfo(): PlayExtInfo | undefined;
    setPlayExtInfo(value?: PlayExtInfo): PlayViewReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayViewReply.AsObject;
    static toObject(includeInstance: boolean, msg: PlayViewReply): PlayViewReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayViewReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayViewReply;
    static deserializeBinaryFromReader(message: PlayViewReply, reader: jspb.BinaryReader): PlayViewReply;
}

export namespace PlayViewReply {
    export type AsObject = {
        videoInfo?: VideoInfo.AsObject,
        playConf?: PlayAbilityConf.AsObject,
        business?: PlayViewBusinessInfo.AsObject,
        event?: Event.AsObject,
        viewInfo?: ViewInfo.AsObject,
        playExtConf?: PlayAbilityExtConf.AsObject,
        playExtInfo?: PlayExtInfo.AsObject,
    }
}

export class PlayViewReq extends jspb.Message { 
    getEpid(): number;
    setEpid(value: number): PlayViewReq;
    getCid(): number;
    setCid(value: number): PlayViewReq;
    getQn(): number;
    setQn(value: number): PlayViewReq;
    getFnver(): number;
    setFnver(value: number): PlayViewReq;
    getFnval(): number;
    setFnval(value: number): PlayViewReq;
    getDownload(): number;
    setDownload(value: number): PlayViewReq;
    getForceHost(): number;
    setForceHost(value: number): PlayViewReq;
    getFourk(): boolean;
    setFourk(value: boolean): PlayViewReq;
    getSpmid(): string;
    setSpmid(value: string): PlayViewReq;
    getFromSpmid(): string;
    setFromSpmid(value: string): PlayViewReq;
    getTeenagersMode(): number;
    setTeenagersMode(value: number): PlayViewReq;
    getPreferCodecType(): CodeType;
    setPreferCodecType(value: CodeType): PlayViewReq;
    getIsPreview(): boolean;
    setIsPreview(value: boolean): PlayViewReq;
    getRoomId(): number;
    setRoomId(value: number): PlayViewReq;
    getIsNeedViewInfo(): boolean;
    setIsNeedViewInfo(value: boolean): PlayViewReq;

    hasSceneControl(): boolean;
    clearSceneControl(): void;
    getSceneControl(): SceneControl | undefined;
    setSceneControl(value?: SceneControl): PlayViewReq;
    getInlineScene(): InlineScene;
    setInlineScene(value: InlineScene): PlayViewReq;
    getMaterialNo(): number;
    setMaterialNo(value: number): PlayViewReq;
    getSecurityLevel(): number;
    setSecurityLevel(value: number): PlayViewReq;
    getSeasonId(): number;
    setSeasonId(value: number): PlayViewReq;

    hasDataControl(): boolean;
    clearDataControl(): void;
    getDataControl(): DataControl | undefined;
    setDataControl(value?: DataControl): PlayViewReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayViewReq.AsObject;
    static toObject(includeInstance: boolean, msg: PlayViewReq): PlayViewReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayViewReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayViewReq;
    static deserializeBinaryFromReader(message: PlayViewReq, reader: jspb.BinaryReader): PlayViewReq;
}

export namespace PlayViewReq {
    export type AsObject = {
        epid: number,
        cid: number,
        qn: number,
        fnver: number,
        fnval: number,
        download: number,
        forceHost: number,
        fourk: boolean,
        spmid: string,
        fromSpmid: string,
        teenagersMode: number,
        preferCodecType: CodeType,
        isPreview: boolean,
        roomId: number,
        isNeedViewInfo: boolean,
        sceneControl?: SceneControl.AsObject,
        inlineScene: InlineScene,
        materialNo: number,
        securityLevel: number,
        seasonId: number,
        dataControl?: DataControl.AsObject,
    }
}

export class PopWin extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): PopWin;
    clearCouponList(): void;
    getCouponList(): Array<Coupon>;
    setCouponList(value: Array<Coupon>): PopWin;
    addCoupon(value?: Coupon, index?: number): Coupon;
    clearButtonList(): void;
    getButtonList(): Array<ButtonInfo>;
    setButtonList(value: Array<ButtonInfo>): PopWin;
    addButton(value?: ButtonInfo, index?: number): ButtonInfo;
    getBottomText(): string;
    setBottomText(value: string): PopWin;

    hasPopTitle(): boolean;
    clearPopTitle(): void;
    getPopTitle(): TextInfo | undefined;
    setPopTitle(value?: TextInfo): PopWin;

    hasSubtitle(): boolean;
    clearSubtitle(): void;
    getSubtitle(): TextInfo | undefined;
    setSubtitle(value?: TextInfo): PopWin;

    hasBottomDesc(): boolean;
    clearBottomDesc(): void;
    getBottomDesc(): ButtonInfo | undefined;
    setBottomDesc(value?: ButtonInfo): PopWin;
    getCover(): string;
    setCover(value: string): PopWin;
    getPopType(): string;
    setPopType(value: string): PopWin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PopWin.AsObject;
    static toObject(includeInstance: boolean, msg: PopWin): PopWin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PopWin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PopWin;
    static deserializeBinaryFromReader(message: PopWin, reader: jspb.BinaryReader): PopWin;
}

export namespace PopWin {
    export type AsObject = {
        title: string,
        couponList: Array<Coupon.AsObject>,
        buttonList: Array<ButtonInfo.AsObject>,
        bottomText: string,
        popTitle?: TextInfo.AsObject,
        subtitle?: TextInfo.AsObject,
        bottomDesc?: ButtonInfo.AsObject,
        cover: string,
        popType: string,
    }
}

export class PromptBar extends jspb.Message { 

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): TextInfo | undefined;
    setTitle(value?: TextInfo): PromptBar;

    hasSubTitle(): boolean;
    clearSubTitle(): void;
    getSubTitle(): TextInfo | undefined;
    setSubTitle(value?: TextInfo): PromptBar;
    getSubTitleIcon(): string;
    setSubTitleIcon(value: string): PromptBar;
    getBgImage(): string;
    setBgImage(value: string): PromptBar;

    hasBgGradientColor(): boolean;
    clearBgGradientColor(): void;
    getBgGradientColor(): GradientColor | undefined;
    setBgGradientColor(value?: GradientColor): PromptBar;
    clearButtonList(): void;
    getButtonList(): Array<ButtonInfo>;
    setButtonList(value: Array<ButtonInfo>): PromptBar;
    addButton(value?: ButtonInfo, index?: number): ButtonInfo;

    hasReport(): boolean;
    clearReport(): void;
    getReport(): Report | undefined;
    setReport(value?: Report): PromptBar;
    getFullScreenIpIcon(): string;
    setFullScreenIpIcon(value: string): PromptBar;

    hasFullScreenBgGradientColor(): boolean;
    clearFullScreenBgGradientColor(): void;
    getFullScreenBgGradientColor(): GradientColor | undefined;
    setFullScreenBgGradientColor(value?: GradientColor): PromptBar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PromptBar.AsObject;
    static toObject(includeInstance: boolean, msg: PromptBar): PromptBar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PromptBar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PromptBar;
    static deserializeBinaryFromReader(message: PromptBar, reader: jspb.BinaryReader): PromptBar;
}

export namespace PromptBar {
    export type AsObject = {
        title?: TextInfo.AsObject,
        subTitle?: TextInfo.AsObject,
        subTitleIcon: string,
        bgImage: string,
        bgGradientColor?: GradientColor.AsObject,
        buttonList: Array<ButtonInfo.AsObject>,
        report?: Report.AsObject,
        fullScreenIpIcon: string,
        fullScreenBgGradientColor?: GradientColor.AsObject,
    }
}

export class QualityExtInfo extends jspb.Message { 
    getTrialSupport(): boolean;
    setTrialSupport(value: boolean): QualityExtInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QualityExtInfo.AsObject;
    static toObject(includeInstance: boolean, msg: QualityExtInfo): QualityExtInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QualityExtInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QualityExtInfo;
    static deserializeBinaryFromReader(message: QualityExtInfo, reader: jspb.BinaryReader): QualityExtInfo;
}

export namespace QualityExtInfo {
    export type AsObject = {
        trialSupport: boolean,
    }
}

export class RecordInfo extends jspb.Message { 
    getRecord(): string;
    setRecord(value: string): RecordInfo;
    getRecordIcon(): string;
    setRecordIcon(value: string): RecordInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RecordInfo): RecordInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordInfo;
    static deserializeBinaryFromReader(message: RecordInfo, reader: jspb.BinaryReader): RecordInfo;
}

export namespace RecordInfo {
    export type AsObject = {
        record: string,
        recordIcon: string,
    }
}

export class Report extends jspb.Message { 
    getShowEventId(): string;
    setShowEventId(value: string): Report;
    getClickEventId(): string;
    setClickEventId(value: string): Report;
    getExtends(): string;
    setExtends(value: string): Report;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Report.AsObject;
    static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Report;
    static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
    export type AsObject = {
        showEventId: string,
        clickEventId: string,
        pb_extends: string,
    }
}

export class ResponseUrl extends jspb.Message { 
    getOrder(): number;
    setOrder(value: number): ResponseUrl;
    getLength(): number;
    setLength(value: number): ResponseUrl;
    getSize(): number;
    setSize(value: number): ResponseUrl;
    getUrl(): string;
    setUrl(value: string): ResponseUrl;
    clearBackupUrlList(): void;
    getBackupUrlList(): Array<string>;
    setBackupUrlList(value: Array<string>): ResponseUrl;
    addBackupUrl(value: string, index?: number): string;
    getMd5(): string;
    setMd5(value: string): ResponseUrl;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseUrl.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseUrl): ResponseUrl.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseUrl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseUrl;
    static deserializeBinaryFromReader(message: ResponseUrl, reader: jspb.BinaryReader): ResponseUrl;
}

export namespace ResponseUrl {
    export type AsObject = {
        order: number,
        length: number,
        size: number,
        url: string,
        backupUrlList: Array<string>,
        md5: string,
    }
}

export class Rights extends jspb.Message { 
    getCanWatch(): number;
    setCanWatch(value: number): Rights;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rights.AsObject;
    static toObject(includeInstance: boolean, msg: Rights): Rights.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rights, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rights;
    static deserializeBinaryFromReader(message: Rights, reader: jspb.BinaryReader): Rights;
}

export namespace Rights {
    export type AsObject = {
        canWatch: number,
    }
}

export class RoleAudioProto extends jspb.Message { 
    getRoleId(): number;
    setRoleId(value: number): RoleAudioProto;
    getRoleName(): string;
    setRoleName(value: string): RoleAudioProto;
    getRoleAvatar(): string;
    setRoleAvatar(value: string): RoleAudioProto;
    clearAudioMaterialListList(): void;
    getAudioMaterialListList(): Array<AudioMaterialProto>;
    setAudioMaterialListList(value: Array<AudioMaterialProto>): RoleAudioProto;
    addAudioMaterialList(value?: AudioMaterialProto, index?: number): AudioMaterialProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoleAudioProto.AsObject;
    static toObject(includeInstance: boolean, msg: RoleAudioProto): RoleAudioProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoleAudioProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoleAudioProto;
    static deserializeBinaryFromReader(message: RoleAudioProto, reader: jspb.BinaryReader): RoleAudioProto;
}

export namespace RoleAudioProto {
    export type AsObject = {
        roleId: number,
        roleName: string,
        roleAvatar: string,
        audioMaterialListList: Array<AudioMaterialProto.AsObject>,
    }
}

export class SceneControl extends jspb.Message { 
    getFavPlaylist(): boolean;
    setFavPlaylist(value: boolean): SceneControl;
    getSmallWindow(): boolean;
    setSmallWindow(value: boolean): SceneControl;
    getPip(): boolean;
    setPip(value: boolean): SceneControl;
    getWasHeInline(): boolean;
    setWasHeInline(value: boolean): SceneControl;
    getIsNeedTrial(): boolean;
    setIsNeedTrial(value: boolean): SceneControl;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneControl.AsObject;
    static toObject(includeInstance: boolean, msg: SceneControl): SceneControl.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneControl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneControl;
    static deserializeBinaryFromReader(message: SceneControl, reader: jspb.BinaryReader): SceneControl;
}

export namespace SceneControl {
    export type AsObject = {
        favPlaylist: boolean,
        smallWindow: boolean,
        pip: boolean,
        wasHeInline: boolean,
        isNeedTrial: boolean,
    }
}

export class Scheme extends jspb.Message { 
    getActionType(): Scheme.ActionType;
    setActionType(value: Scheme.ActionType): Scheme;
    getToast(): string;
    setToast(value: string): Scheme;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scheme.AsObject;
    static toObject(includeInstance: boolean, msg: Scheme): Scheme.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scheme, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scheme;
    static deserializeBinaryFromReader(message: Scheme, reader: jspb.BinaryReader): Scheme;
}

export namespace Scheme {
    export type AsObject = {
        actionType: Scheme.ActionType,
        toast: string,
    }

    export enum ActionType {
    UNKNOWN = 0,
    SHOW_TOAST = 1,
    }

}

export class SeasonInfo extends jspb.Message { 
    getSeasonId(): number;
    setSeasonId(value: number): SeasonInfo;
    getSeasonType(): number;
    setSeasonType(value: number): SeasonInfo;
    getSeasonStatus(): number;
    setSeasonStatus(value: number): SeasonInfo;
    getCover(): string;
    setCover(value: string): SeasonInfo;
    getTitle(): string;
    setTitle(value: string): SeasonInfo;

    hasRights(): boolean;
    clearRights(): void;
    getRights(): Rights | undefined;
    setRights(value?: Rights): SeasonInfo;
    getMode(): number;
    setMode(value: number): SeasonInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeasonInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SeasonInfo): SeasonInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SeasonInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeasonInfo;
    static deserializeBinaryFromReader(message: SeasonInfo, reader: jspb.BinaryReader): SeasonInfo;
}

export namespace SeasonInfo {
    export type AsObject = {
        seasonId: number,
        seasonType: number,
        seasonStatus: number,
        cover: string,
        title: string,
        rights?: Rights.AsObject,
        mode: number,
    }
}

export class SegmentVideo extends jspb.Message { 
    clearSegmentList(): void;
    getSegmentList(): Array<ResponseUrl>;
    setSegmentList(value: Array<ResponseUrl>): SegmentVideo;
    addSegment(value?: ResponseUrl, index?: number): ResponseUrl;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SegmentVideo.AsObject;
    static toObject(includeInstance: boolean, msg: SegmentVideo): SegmentVideo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SegmentVideo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SegmentVideo;
    static deserializeBinaryFromReader(message: SegmentVideo, reader: jspb.BinaryReader): SegmentVideo;
}

export namespace SegmentVideo {
    export type AsObject = {
        segmentList: Array<ResponseUrl.AsObject>,
    }
}

export class Shake extends jspb.Message { 
    getFile(): string;
    setFile(value: string): Shake;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Shake.AsObject;
    static toObject(includeInstance: boolean, msg: Shake): Shake.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Shake, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Shake;
    static deserializeBinaryFromReader(message: Shake, reader: jspb.BinaryReader): Shake;
}

export namespace Shake {
    export type AsObject = {
        file: string,
    }
}

export class Stream extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): StreamInfo | undefined;
    setInfo(value?: StreamInfo): Stream;

    hasDashVideo(): boolean;
    clearDashVideo(): void;
    getDashVideo(): DashVideo | undefined;
    setDashVideo(value?: DashVideo): Stream;

    hasSegmentVideo(): boolean;
    clearSegmentVideo(): void;
    getSegmentVideo(): SegmentVideo | undefined;
    setSegmentVideo(value?: SegmentVideo): Stream;

    getContentCase(): Stream.ContentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stream.AsObject;
    static toObject(includeInstance: boolean, msg: Stream): Stream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stream;
    static deserializeBinaryFromReader(message: Stream, reader: jspb.BinaryReader): Stream;
}

export namespace Stream {
    export type AsObject = {
        info?: StreamInfo.AsObject,
        dashVideo?: DashVideo.AsObject,
        segmentVideo?: SegmentVideo.AsObject,
    }

    export enum ContentCase {
        CONTENT_NOT_SET = 0,
        DASH_VIDEO = 2,
        SEGMENT_VIDEO = 3,
    }

}

export class StreamInfo extends jspb.Message { 
    getQuality(): number;
    setQuality(value: number): StreamInfo;
    getFormat(): string;
    setFormat(value: string): StreamInfo;
    getDescription(): string;
    setDescription(value: string): StreamInfo;
    getErrCode(): number;
    setErrCode(value: number): StreamInfo;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): StreamLimit | undefined;
    setLimit(value?: StreamLimit): StreamInfo;
    getNeedVip(): boolean;
    setNeedVip(value: boolean): StreamInfo;
    getNeedLogin(): boolean;
    setNeedLogin(value: boolean): StreamInfo;
    getIntact(): boolean;
    setIntact(value: boolean): StreamInfo;
    getAttribute(): number;
    setAttribute(value: number): StreamInfo;
    getNewDescription(): string;
    setNewDescription(value: string): StreamInfo;
    getDisplayDesc(): string;
    setDisplayDesc(value: string): StreamInfo;
    getSuperscript(): string;
    setSuperscript(value: string): StreamInfo;

    hasScheme(): boolean;
    clearScheme(): void;
    getScheme(): Scheme | undefined;
    setScheme(value?: Scheme): StreamInfo;
    getSupportDrm(): boolean;
    setSupportDrm(value: boolean): StreamInfo;
    getSubtitle(): string;
    setSubtitle(value: string): StreamInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamInfo.AsObject;
    static toObject(includeInstance: boolean, msg: StreamInfo): StreamInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamInfo;
    static deserializeBinaryFromReader(message: StreamInfo, reader: jspb.BinaryReader): StreamInfo;
}

export namespace StreamInfo {
    export type AsObject = {
        quality: number,
        format: string,
        description: string,
        errCode: number,
        limit?: StreamLimit.AsObject,
        needVip: boolean,
        needLogin: boolean,
        intact: boolean,
        attribute: number,
        newDescription: string,
        displayDesc: string,
        superscript: string,
        scheme?: Scheme.AsObject,
        supportDrm: boolean,
        subtitle: string,
    }
}

export class StreamLimit extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): StreamLimit;
    getUri(): string;
    setUri(value: string): StreamLimit;
    getMsg(): string;
    setMsg(value: string): StreamLimit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamLimit.AsObject;
    static toObject(includeInstance: boolean, msg: StreamLimit): StreamLimit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamLimit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamLimit;
    static deserializeBinaryFromReader(message: StreamLimit, reader: jspb.BinaryReader): StreamLimit;
}

export namespace StreamLimit {
    export type AsObject = {
        title: string,
        uri: string,
        msg: string,
    }
}

export class TaskParam extends jspb.Message { 
    getTaskType(): string;
    setTaskType(value: string): TaskParam;
    getActivityId(): number;
    setActivityId(value: number): TaskParam;
    getTipsId(): number;
    setTipsId(value: number): TaskParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskParam.AsObject;
    static toObject(includeInstance: boolean, msg: TaskParam): TaskParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskParam;
    static deserializeBinaryFromReader(message: TaskParam, reader: jspb.BinaryReader): TaskParam;
}

export namespace TaskParam {
    export type AsObject = {
        taskType: string,
        activityId: number,
        tipsId: number,
    }
}

export class TextInfo extends jspb.Message { 
    getText(): string;
    setText(value: string): TextInfo;
    getTextColor(): string;
    setTextColor(value: string): TextInfo;
    getTextColorNight(): string;
    setTextColorNight(value: string): TextInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TextInfo): TextInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextInfo;
    static deserializeBinaryFromReader(message: TextInfo, reader: jspb.BinaryReader): TextInfo;
}

export namespace TextInfo {
    export type AsObject = {
        text: string,
        textColor: string,
        textColorNight: string,
    }
}

export class Toast extends jspb.Message { 
    getText(): string;
    setText(value: string): Toast;

    hasButton(): boolean;
    clearButton(): void;
    getButton(): ButtonInfo | undefined;
    setButton(value?: ButtonInfo): Toast;
    getShowStyleType(): number;
    setShowStyleType(value: number): Toast;
    getIcon(): string;
    setIcon(value: string): Toast;

    hasToastText(): boolean;
    clearToastText(): void;
    getToastText(): TextInfo | undefined;
    setToastText(value?: TextInfo): Toast;

    hasReport(): boolean;
    clearReport(): void;
    getReport(): Report | undefined;
    setReport(value?: Report): Toast;

    getOrderReportParamsMap(): jspb.Map<string, string>;
    clearOrderReportParamsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Toast.AsObject;
    static toObject(includeInstance: boolean, msg: Toast): Toast.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Toast, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Toast;
    static deserializeBinaryFromReader(message: Toast, reader: jspb.BinaryReader): Toast;
}

export namespace Toast {
    export type AsObject = {
        text: string,
        button?: ButtonInfo.AsObject,
        showStyleType: number,
        icon: string,
        toastText?: TextInfo.AsObject,
        report?: Report.AsObject,

        orderReportParamsMap: Array<[string, string]>,
    }
}

export class UserStatus extends jspb.Message { 
    getPayCheck(): boolean;
    setPayCheck(value: boolean): UserStatus;
    getSponsor(): boolean;
    setSponsor(value: boolean): UserStatus;

    hasWatchProgress(): boolean;
    clearWatchProgress(): void;
    getWatchProgress(): WatchProgress | undefined;
    setWatchProgress(value?: WatchProgress): UserStatus;

    hasAidWatchProgress(): boolean;
    clearAidWatchProgress(): void;
    getAidWatchProgress(): WatchProgress | undefined;
    setAidWatchProgress(value?: WatchProgress): UserStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserStatus.AsObject;
    static toObject(includeInstance: boolean, msg: UserStatus): UserStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserStatus;
    static deserializeBinaryFromReader(message: UserStatus, reader: jspb.BinaryReader): UserStatus;
}

export namespace UserStatus {
    export type AsObject = {
        payCheck: boolean,
        sponsor: boolean,
        watchProgress?: WatchProgress.AsObject,
        aidWatchProgress?: WatchProgress.AsObject,
    }
}

export class VideoInfo extends jspb.Message { 
    getQuality(): number;
    setQuality(value: number): VideoInfo;
    getFormat(): string;
    setFormat(value: string): VideoInfo;
    getTimelength(): number;
    setTimelength(value: number): VideoInfo;
    getVideoCodecid(): number;
    setVideoCodecid(value: number): VideoInfo;
    clearStreamListList(): void;
    getStreamListList(): Array<Stream>;
    setStreamListList(value: Array<Stream>): VideoInfo;
    addStreamList(value?: Stream, index?: number): Stream;
    clearDashAudioList(): void;
    getDashAudioList(): Array<DashItem>;
    setDashAudioList(value: Array<DashItem>): VideoInfo;
    addDashAudio(value?: DashItem, index?: number): DashItem;

    hasDolby(): boolean;
    clearDolby(): void;
    getDolby(): DolbyItem | undefined;
    setDolby(value?: DolbyItem): VideoInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoInfo.AsObject;
    static toObject(includeInstance: boolean, msg: VideoInfo): VideoInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoInfo;
    static deserializeBinaryFromReader(message: VideoInfo, reader: jspb.BinaryReader): VideoInfo;
}

export namespace VideoInfo {
    export type AsObject = {
        quality: number,
        format: string,
        timelength: number,
        videoCodecid: number,
        streamListList: Array<Stream.AsObject>,
        dashAudioList: Array<DashItem.AsObject>,
        dolby?: DolbyItem.AsObject,
    }
}

export class ViewInfo extends jspb.Message { 

    hasDialog(): boolean;
    clearDialog(): void;
    getDialog(): Dialog | undefined;
    setDialog(value?: Dialog): ViewInfo;

    hasToast(): boolean;
    clearToast(): void;
    getToast(): Toast | undefined;
    setToast(value?: Toast): ViewInfo;

    hasCouponInfo(): boolean;
    clearCouponInfo(): void;
    getCouponInfo(): CouponInfo | undefined;
    setCouponInfo(value?: CouponInfo): ViewInfo;
    clearDemandNoPayEpidsList(): void;
    getDemandNoPayEpidsList(): Array<number>;
    setDemandNoPayEpidsList(value: Array<number>): ViewInfo;
    addDemandNoPayEpids(value: number, index?: number): number;

    hasEndPage(): boolean;
    clearEndPage(): void;
    getEndPage(): EndPage | undefined;
    setEndPage(value?: EndPage): ViewInfo;

    getExpConfigMap(): jspb.Map<string, boolean>;
    clearExpConfigMap(): void;

    hasPopWin(): boolean;
    clearPopWin(): void;
    getPopWin(): PopWin | undefined;
    setPopWin(value?: PopWin): ViewInfo;

    hasTryWatchPromptBar(): boolean;
    clearTryWatchPromptBar(): void;
    getTryWatchPromptBar(): PromptBar | undefined;
    setTryWatchPromptBar(value?: PromptBar): ViewInfo;

    hasPayTip(): boolean;
    clearPayTip(): void;
    getPayTip(): PayTip | undefined;
    setPayTip(value?: PayTip): ViewInfo;

    hasHighDefinitionTrialInfo(): boolean;
    clearHighDefinitionTrialInfo(): void;
    getHighDefinitionTrialInfo(): HighDefinitionTrialInfo | undefined;
    setHighDefinitionTrialInfo(value?: HighDefinitionTrialInfo): ViewInfo;

    getExtDialogMap(): jspb.Map<string, Dialog>;
    clearExtDialogMap(): void;

    hasAnimation(): boolean;
    clearAnimation(): void;
    getAnimation(): Animation | undefined;
    setAnimation(value?: Animation): ViewInfo;

    getExtToastMap(): jspb.Map<string, Toast>;
    clearExtToastMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ViewInfo): ViewInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewInfo;
    static deserializeBinaryFromReader(message: ViewInfo, reader: jspb.BinaryReader): ViewInfo;
}

export namespace ViewInfo {
    export type AsObject = {
        dialog?: Dialog.AsObject,
        toast?: Toast.AsObject,
        couponInfo?: CouponInfo.AsObject,
        demandNoPayEpidsList: Array<number>,
        endPage?: EndPage.AsObject,

        expConfigMap: Array<[string, boolean]>,
        popWin?: PopWin.AsObject,
        tryWatchPromptBar?: PromptBar.AsObject,
        payTip?: PayTip.AsObject,
        highDefinitionTrialInfo?: HighDefinitionTrialInfo.AsObject,

        extDialogMap: Array<[string, Dialog.AsObject]>,
        animation?: Animation.AsObject,

        extToastMap: Array<[string, Toast.AsObject]>,
    }
}

export class WatchProgress extends jspb.Message { 
    getLastEpId(): number;
    setLastEpId(value: number): WatchProgress;
    getLastEpIndex(): string;
    setLastEpIndex(value: string): WatchProgress;
    getProgress(): number;
    setProgress(value: number): WatchProgress;
    getLastPlayCid(): number;
    setLastPlayCid(value: number): WatchProgress;

    hasToast(): boolean;
    clearToast(): void;
    getToast(): Toast | undefined;
    setToast(value?: Toast): WatchProgress;

    hasToastWithoutTime(): boolean;
    clearToastWithoutTime(): void;
    getToastWithoutTime(): Toast | undefined;
    setToastWithoutTime(value?: Toast): WatchProgress;
    getLastPlayAid(): number;
    setLastPlayAid(value: number): WatchProgress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WatchProgress.AsObject;
    static toObject(includeInstance: boolean, msg: WatchProgress): WatchProgress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WatchProgress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WatchProgress;
    static deserializeBinaryFromReader(message: WatchProgress, reader: jspb.BinaryReader): WatchProgress;
}

export namespace WatchProgress {
    export type AsObject = {
        lastEpId: number,
        lastEpIndex: string,
        progress: number,
        lastPlayCid: number,
        toast?: Toast.AsObject,
        toastWithoutTime?: Toast.AsObject,
        lastPlayAid: number,
    }
}

export enum ClipType {
    NT_UNKNOWN = 0,
    CLIP_TYPE_OP = 1,
    CLIP_TYPE_ED = 2,
    CLIP_TYPE_HE = 3,
    CLIP_TYPE_MULTI_VIEW = 4,
    CLIP_TYPE_AD = 5,
}

export enum CodeType {
    NOCODE = 0,
    CODE264 = 1,
    CODE265 = 2,
}

export enum DrmTechType {
    NON = 0,
    FAIR_PLAY = 1,
    WIDE_VINE = 2,
    BILI_DRM = 3,
}

export enum EpPublicityVideoType {
    PRE = 0,
    INLINE = 1,
}

export enum InlineScene {
    UNKNOWN = 0,
    RELATED_EP = 1,
    HE = 2,
    SKIP = 3,
}

export enum InlineType {
    TYPE_UNKNOWN = 0,
    TYPE_WHOLE = 1,
    TYPE_HE_CLIP = 2,
    TYPE_PREVIEW = 3,
}

export enum LimitActionType {
    LAT_UNKNOWN = 0,
    SHOW_LIMIT_DIALOG = 1,
    SKIP_CURRENT_EP = 2,
}

export enum PlayErr {
    NOERR = 0,
    WITHMULTIDEVICELOGINERR = 1,
}

export enum SecurityLevel {
    LEVEL_UNKNOWN = 0,
    LEVEL_L1 = 1,
    LEVEL_L2 = 2,
    LEVEL_L3 = 3,
}
