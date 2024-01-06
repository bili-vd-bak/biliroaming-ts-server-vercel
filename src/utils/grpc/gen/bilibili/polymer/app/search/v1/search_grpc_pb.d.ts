// package: bilibili.polymer.app.search.v1
// file: bilibili/polymer/app/search/v1/search.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bilibili_polymer_app_search_v1_search_pb from "../../../../../bilibili/polymer/app/search/v1/search_pb";
import * as bilibili_app_archive_middleware_v1_preload_pb from "../../../../../bilibili/app/archive/middleware/v1/preload_pb";
import * as bilibili_pagination_pagination_pb from "../../../../../bilibili/pagination/pagination_pb";

interface ISearchService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    searchAll: ISearchService_ISearchAll;
    searchByType: ISearchService_ISearchByType;
    searchComic: ISearchService_ISearchComic;
}

interface ISearchService_ISearchAll extends grpc.MethodDefinition<bilibili_polymer_app_search_v1_search_pb.SearchAllRequest, bilibili_polymer_app_search_v1_search_pb.SearchAllResponse> {
    path: "/bilibili.polymer.app.search.v1.Search/SearchAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bilibili_polymer_app_search_v1_search_pb.SearchAllRequest>;
    requestDeserialize: grpc.deserialize<bilibili_polymer_app_search_v1_search_pb.SearchAllRequest>;
    responseSerialize: grpc.serialize<bilibili_polymer_app_search_v1_search_pb.SearchAllResponse>;
    responseDeserialize: grpc.deserialize<bilibili_polymer_app_search_v1_search_pb.SearchAllResponse>;
}
interface ISearchService_ISearchByType extends grpc.MethodDefinition<bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest, bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse> {
    path: "/bilibili.polymer.app.search.v1.Search/SearchByType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest>;
    requestDeserialize: grpc.deserialize<bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest>;
    responseSerialize: grpc.serialize<bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse>;
    responseDeserialize: grpc.deserialize<bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse>;
}
interface ISearchService_ISearchComic extends grpc.MethodDefinition<bilibili_polymer_app_search_v1_search_pb.SearchComicRequest, bilibili_polymer_app_search_v1_search_pb.SearchComicResponse> {
    path: "/bilibili.polymer.app.search.v1.Search/SearchComic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bilibili_polymer_app_search_v1_search_pb.SearchComicRequest>;
    requestDeserialize: grpc.deserialize<bilibili_polymer_app_search_v1_search_pb.SearchComicRequest>;
    responseSerialize: grpc.serialize<bilibili_polymer_app_search_v1_search_pb.SearchComicResponse>;
    responseDeserialize: grpc.deserialize<bilibili_polymer_app_search_v1_search_pb.SearchComicResponse>;
}

export const SearchService: ISearchService;

export interface ISearchServer extends grpc.UntypedServiceImplementation {
    searchAll: grpc.handleUnaryCall<bilibili_polymer_app_search_v1_search_pb.SearchAllRequest, bilibili_polymer_app_search_v1_search_pb.SearchAllResponse>;
    searchByType: grpc.handleUnaryCall<bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest, bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse>;
    searchComic: grpc.handleUnaryCall<bilibili_polymer_app_search_v1_search_pb.SearchComicRequest, bilibili_polymer_app_search_v1_search_pb.SearchComicResponse>;
}

export interface ISearchClient {
    searchAll(request: bilibili_polymer_app_search_v1_search_pb.SearchAllRequest, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchAllResponse) => void): grpc.ClientUnaryCall;
    searchAll(request: bilibili_polymer_app_search_v1_search_pb.SearchAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchAllResponse) => void): grpc.ClientUnaryCall;
    searchAll(request: bilibili_polymer_app_search_v1_search_pb.SearchAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchAllResponse) => void): grpc.ClientUnaryCall;
    searchByType(request: bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse) => void): grpc.ClientUnaryCall;
    searchByType(request: bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse) => void): grpc.ClientUnaryCall;
    searchByType(request: bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse) => void): grpc.ClientUnaryCall;
    searchComic(request: bilibili_polymer_app_search_v1_search_pb.SearchComicRequest, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchComicResponse) => void): grpc.ClientUnaryCall;
    searchComic(request: bilibili_polymer_app_search_v1_search_pb.SearchComicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchComicResponse) => void): grpc.ClientUnaryCall;
    searchComic(request: bilibili_polymer_app_search_v1_search_pb.SearchComicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchComicResponse) => void): grpc.ClientUnaryCall;
}

export class SearchClient extends grpc.Client implements ISearchClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public searchAll(request: bilibili_polymer_app_search_v1_search_pb.SearchAllRequest, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchAllResponse) => void): grpc.ClientUnaryCall;
    public searchAll(request: bilibili_polymer_app_search_v1_search_pb.SearchAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchAllResponse) => void): grpc.ClientUnaryCall;
    public searchAll(request: bilibili_polymer_app_search_v1_search_pb.SearchAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchAllResponse) => void): grpc.ClientUnaryCall;
    public searchByType(request: bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse) => void): grpc.ClientUnaryCall;
    public searchByType(request: bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse) => void): grpc.ClientUnaryCall;
    public searchByType(request: bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse) => void): grpc.ClientUnaryCall;
    public searchComic(request: bilibili_polymer_app_search_v1_search_pb.SearchComicRequest, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchComicResponse) => void): grpc.ClientUnaryCall;
    public searchComic(request: bilibili_polymer_app_search_v1_search_pb.SearchComicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchComicResponse) => void): grpc.ClientUnaryCall;
    public searchComic(request: bilibili_polymer_app_search_v1_search_pb.SearchComicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bilibili_polymer_app_search_v1_search_pb.SearchComicResponse) => void): grpc.ClientUnaryCall;
}
