import * as grpc from "@grpc/grpc-js";
// import { FawkesReq } from "./gen/bilibili/metadata/fawkes/fawkes_pb";
import { Metadata } from "./gen/bilibili/metadata/metadata_pb";
// import { Device } from "./gen/bilibili/metadata/device/device_pb";
// import { Network } from "./gen/bilibili/metadata/network/network_pb";
// import { Restriction } from "./gen/bilibili/metadata/restriction/restriction_pb";
// import { Locale } from "./gen/bilibili/metadata/locale/locale_pb";
// import { Exps } from "./gen/bilibili/metadata/parabox/parabox_pb";

function genFawkes() {
  //此处固定，无需动态生成
  return Buffer.from("CglhbmRyb2lkNjQSBHByb2QaCGRlZGY4NjY5", "base64");
}

function genMetadata(accesskey: string) {
  const metadata = new Metadata();
  metadata
    .setAccessKey(accesskey)
    .setMobiApp("android")
    .setDevice("")
    .setBuild(7320200)
    .setChannel("xiaomi_cn_tv.danmaku.bili_zm20200902")
    .setBuvid("")
    .setPlatform("android");
  return Buffer.from(metadata.serializeBinary());
}

function genDevice() {
  //此处固定，无需动态生成
  return Buffer.from(
    "CAEQiOW\u002BAxoAIgdhbmRyb2lkKgdhbmRyb2lkOiR4aWFvbWlfY25fdHYuZGFubWFrdS5iaWxpX3ptMjAyMDA5MDJCCk0yMDEySzExQUNKFUJ1aWxkL1JLUTEuMjAwODI2LjAwMlICMTE=",
    "base64"
  );
}

function genNetwork() {
  //此处固定，无需动态生成
  return Buffer.from("CAEaBTQ2MDA3", "base64");
}

function genRestriction() {
  //此处固定，无需动态生成
  return Buffer.from("", "base64");
}

function genLocale(area: "default" | "th" = "default") {
  //此处固定，无需动态生成
  //应当为th区设置特定locale头
  // if (area === 'th') return
  return Buffer.from("CggKAnpoGgJDTg==", "base64"); //该值为zh-CN'
}

function genExps() {
  //此处固定，无需动态生成
  return Buffer.from("", "base64");
}

export default function genHeaders(
  accesskey: string,
  area: "default" | "th" = "default"
) {
  return {
    fawkes: genFawkes(),
    metadata: genMetadata(accesskey),
    device: genDevice(),
    network: genNetwork(),
    restriction: genRestriction(),
    locale: genLocale(area),
    exps: genExps(),
  };
}
