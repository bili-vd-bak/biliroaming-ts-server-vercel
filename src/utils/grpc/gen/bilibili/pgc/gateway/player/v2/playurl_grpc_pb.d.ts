// package: bilibili.pgc.gateway.player.v2
// file: bilibili/pgc/gateway/player/v2/playurl.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bilibili_pgc_gateway_player_v2_playurl_pb from "../../../../../bilibili/pgc/gateway/player/v2/playurl_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IPlayURLService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    playView: IPlayURLService_IPlayView;
    playViewComic: IPlayURLService_IPlayViewComic;
}

interface IPlayURLService_IPlayView extends grpc.MethodDefinition<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply> {
    path: "/bilibili.pgc.gateway.player.v2.PlayURL/PlayView";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq>;
    requestDeserialize: grpc.deserialize<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq>;
    responseSerialize: grpc.serialize<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply>;
    responseDeserialize: grpc.deserialize<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply>;
}
interface IPlayURLService_IPlayViewComic extends grpc.MethodDefinition<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply> {
    path: "/bilibili.pgc.gateway.player.v2.PlayURL/PlayViewComic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq>;
    requestDeserialize: grpc.deserialize<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq>;
    responseSerialize: grpc.serialize<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply>;
    responseDeserialize: grpc.deserialize<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply>;
}

export const PlayURLService: IPlayURLService;

export interface IPlayURLServer extends grpc.UntypedServiceImplementation {
    playView: grpc.handleUnaryCall<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply>;
    playViewComic: grpc.handleUnaryCall<bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply>;
}

export interface IPlayURLClient {
    playView(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    playView(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    playView(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    playViewComic(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    playViewComic(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    playViewComic(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
}

export class PlayURLClient extends grpc.Client implements IPlayURLClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public playView(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    public playView(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    public playView(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    public playViewComic(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    public playViewComic(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
    public playViewComic(request: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_pgc_gateway_player_v2_playurl_pb.PlayViewReply) => void): grpc.ClientUnaryCall;
}
