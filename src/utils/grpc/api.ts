import * as grpc from "@grpc/grpc-js";
import * as env from "../../_config";
import { PlayURLClient } from "./gen/bilibili/pgc/gateway/player/v2/playurl_grpc_pb";
import PlayUrlMessages from "./gen/bilibili/pgc/gateway/player/v2/playurl_pb";
import genHeaders from "./gen-metadata";

const logf = env.logger.child({ action: "调用组件(grpc)" });

const metadata = new grpc.Metadata();
async function fillMetadata(accesskey = "") {
  const h = genHeaders(accesskey);

  metadata.add(
    "user-agent",
    "Dalvik/2.1.0 (Linux; U; Android 11; M2012K11AC Build/RKQ1.200826.002) 7.32.0 os/android model/M2012K11AC mobi_app/android build/7320200 channel/xiaomi_cn_tv.danmaku.bili_zm20200902 innerVer/7320200 osVer/11 network/2 grpc-java-cronet/1.36.1"
    // "Dalvik/2.1.0 (Linux; U; Android 12; NOH-AN01 Build/HUAWEINOH-AN01) 7.49.0 os/android model/NOH-AN01 mobi_app/android build/7490200 channel/master innerVer/7490200 osVer/12 network/2 grpc-java-cronet/1.36.1"
  );

  // metadata.add("x-bili-gaia-vtoken", "");
  // metadata.add("x-bili-aurora-eid", ""); //算/未登录空
  // metadata.add("x-bili-mid", "0"); //动
  // metadata.add("x-bili-aurora-zone", "");
  // metadata.add("x-bili-trace-id", ""); //算

  accesskey ? metadata.add("authorization", `identify_v1 ${accesskey}`) : null;
  // metadata.add("buvid", "");
  metadata.add("bili-http-engine", "cronet");
  metadata.add("te", "trailers");
  metadata.add("x-bili-fawkes-req-bin", h.fawkes);
  metadata.add("x-bili-metadata-bin", h.metadata);
  metadata.add("x-bili-device-bin", h.device);
  metadata.add("x-bili-network-bin", h.network);
  metadata.add("x-bili-restriction-bin", h.restriction);
  metadata.add("x-bili-locale-bin", h.locale);
  metadata.add("x-bili-exps-bin", h.exps);
  // metadata.add("grpc-encoding", "gzip");
  // metadata.add("grpc-accept-encoding", "identity,gzip");
  // metadata.add("grpc-timeout", "17996161u");
}

const client = {
  pgc: {
    playurl: new PlayURLClient(
      env.api.grpc.main.playurl,
      grpc.credentials.createSsl()
    ),
  },
};

const req = {
  player: {
    pgc: ({
      ep_id,
      cid,
      qn = 127,
      fnval = 4048,
      download = 0,
      PreferCodecType = 0,
      isPreview = false,
    }: {
      ep_id: number;
      cid: number;
      qn: number;
      fnval: number;
      download?: 0 | 1 | 2;
      PreferCodecType?: 0 | 1 | 2;
      isPreview?: boolean;
    }) => {
      const req = new PlayUrlMessages.PlayViewReq();
      req
        .setCid(cid)
        .setEpid(ep_id)
        .setQn(qn)
        .setFnver(0)
        .setFnval(fnval)
        .setDownload(download) //不知道为什么只能填0(与proto定义不符)
        .setForceHost(2)
        .setFourk(true)
        .setSpmid("main.ugc-video-detail.0.0")
        .setFromSpmid("main.my-history.0.0")
        .setTeenagersMode(0)
        .setPreferCodecType(PreferCodecType)
        .setIsPreview(isPreview)
        .setRoomId(0);
      return req;
    },
  },
};

const res = {
  player: {
    pgc: async (
      accesskey: string,
      {
        ep_id,
        cid,
        qn = 127,
        fnval = 4048,
        download = 0,
        PreferCodecType = 0,
        isPreview = false,
      }: {
        ep_id: number;
        cid: number;
        qn: number;
        fnval: number;
        download?: 0 | 1 | 2;
        PreferCodecType?: 0 | 1 | 2;
        isPreview?: boolean;
      }
    ): Promise<
      PlayUrlMessages.PlayViewReply.AsObject | { code: number; error: string }
    > => {
      await fillMetadata(accesskey);
      return new Promise((resolve, reject) =>
        client.pgc.playurl.playView(
          req.player.pgc({
            ep_id,
            cid,
            qn,
            fnval,
            download,
            PreferCodecType,
            isPreview,
          }),
          metadata,
          (err, res) => {
            if (err) {
              logf
                .child({
                  module: "bilibili.pgc.gateway.player.v2.PlayURL",
                })
                .error(err);
              resolve({ code: 500, error: err.message || "" });
            } else resolve(res.toObject());
          }
        )
      );
    },
  },
};

export default res;
