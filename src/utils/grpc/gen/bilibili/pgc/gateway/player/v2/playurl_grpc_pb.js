// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var bilibili_pgc_gateway_player_v2_playurl_pb = require('../../../../../bilibili/pgc/gateway/player/v2/playurl_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_bilibili_pgc_gateway_player_v2_PlayViewReply(arg) {
  if (!(arg instanceof bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply)) {
    throw new Error('Expected argument of type bilibili.pgc.gateway.player.v2.PlayViewReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bilibili_pgc_gateway_player_v2_PlayViewReply(buffer_arg) {
  return bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bilibili_pgc_gateway_player_v2_PlayViewReq(arg) {
  if (!(arg instanceof bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq)) {
    throw new Error('Expected argument of type bilibili.pgc.gateway.player.v2.PlayViewReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bilibili_pgc_gateway_player_v2_PlayViewReq(buffer_arg) {
  return bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq.deserializeBinary(new Uint8Array(buffer_arg));
}


// 视频url
var PlayURLService = exports.PlayURLService = {
  // 播放页信息
playView: {
    path: '/bilibili.pgc.gateway.player.v2.PlayURL/PlayView',
    requestStream: false,
    responseStream: false,
    requestType: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq,
    responseType: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply,
    requestSerialize: serialize_bilibili_pgc_gateway_player_v2_PlayViewReq,
    requestDeserialize: deserialize_bilibili_pgc_gateway_player_v2_PlayViewReq,
    responseSerialize: serialize_bilibili_pgc_gateway_player_v2_PlayViewReply,
    responseDeserialize: deserialize_bilibili_pgc_gateway_player_v2_PlayViewReply,
  },
  //
playViewComic: {
    path: '/bilibili.pgc.gateway.player.v2.PlayURL/PlayViewComic',
    requestStream: false,
    responseStream: false,
    requestType: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq,
    responseType: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply,
    requestSerialize: serialize_bilibili_pgc_gateway_player_v2_PlayViewReq,
    requestDeserialize: deserialize_bilibili_pgc_gateway_player_v2_PlayViewReq,
    responseSerialize: serialize_bilibili_pgc_gateway_player_v2_PlayViewReply,
    responseDeserialize: deserialize_bilibili_pgc_gateway_player_v2_PlayViewReply,
  },
};

exports.PlayURLClient = grpc.makeGenericClientConstructor(PlayURLService);
