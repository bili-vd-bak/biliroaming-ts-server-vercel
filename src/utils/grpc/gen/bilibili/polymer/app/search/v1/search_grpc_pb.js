// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var bilibili_polymer_app_search_v1_search_pb = require('../../../../../bilibili/polymer/app/search/v1/search_pb.js');
var bilibili_app_archive_middleware_v1_preload_pb = require('../../../../../bilibili/app/archive/middleware/v1/preload_pb.js');
var bilibili_pagination_pagination_pb = require('../../../../../bilibili/pagination/pagination_pb.js');

function serialize_bilibili_polymer_app_search_v1_SearchAllRequest(arg) {
  if (!(arg instanceof bilibili_polymer_app_search_v1_search_pb.SearchAllRequest)) {
    throw new Error('Expected argument of type bilibili.polymer.app.search.v1.SearchAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bilibili_polymer_app_search_v1_SearchAllRequest(buffer_arg) {
  return bilibili_polymer_app_search_v1_search_pb.SearchAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bilibili_polymer_app_search_v1_SearchAllResponse(arg) {
  if (!(arg instanceof bilibili_polymer_app_search_v1_search_pb.SearchAllResponse)) {
    throw new Error('Expected argument of type bilibili.polymer.app.search.v1.SearchAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bilibili_polymer_app_search_v1_SearchAllResponse(buffer_arg) {
  return bilibili_polymer_app_search_v1_search_pb.SearchAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bilibili_polymer_app_search_v1_SearchByTypeRequest(arg) {
  if (!(arg instanceof bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest)) {
    throw new Error('Expected argument of type bilibili.polymer.app.search.v1.SearchByTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bilibili_polymer_app_search_v1_SearchByTypeRequest(buffer_arg) {
  return bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bilibili_polymer_app_search_v1_SearchByTypeResponse(arg) {
  if (!(arg instanceof bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse)) {
    throw new Error('Expected argument of type bilibili.polymer.app.search.v1.SearchByTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bilibili_polymer_app_search_v1_SearchByTypeResponse(buffer_arg) {
  return bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bilibili_polymer_app_search_v1_SearchComicRequest(arg) {
  if (!(arg instanceof bilibili_polymer_app_search_v1_search_pb.SearchComicRequest)) {
    throw new Error('Expected argument of type bilibili.polymer.app.search.v1.SearchComicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bilibili_polymer_app_search_v1_SearchComicRequest(buffer_arg) {
  return bilibili_polymer_app_search_v1_search_pb.SearchComicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bilibili_polymer_app_search_v1_SearchComicResponse(arg) {
  if (!(arg instanceof bilibili_polymer_app_search_v1_search_pb.SearchComicResponse)) {
    throw new Error('Expected argument of type bilibili.polymer.app.search.v1.SearchComicResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bilibili_polymer_app_search_v1_SearchComicResponse(buffer_arg) {
  return bilibili_polymer_app_search_v1_search_pb.SearchComicResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
var SearchService = exports.SearchService = {
  // 搜索所有类型结果
searchAll: {
    path: '/bilibili.polymer.app.search.v1.Search/SearchAll',
    requestStream: false,
    responseStream: false,
    requestType: bilibili_polymer_app_search_v1_search_pb.SearchAllRequest,
    responseType: bilibili_polymer_app_search_v1_search_pb.SearchAllResponse,
    requestSerialize: serialize_bilibili_polymer_app_search_v1_SearchAllRequest,
    requestDeserialize: deserialize_bilibili_polymer_app_search_v1_SearchAllRequest,
    responseSerialize: serialize_bilibili_polymer_app_search_v1_SearchAllResponse,
    responseDeserialize: deserialize_bilibili_polymer_app_search_v1_SearchAllResponse,
  },
  // 搜索指定类型结果
searchByType: {
    path: '/bilibili.polymer.app.search.v1.Search/SearchByType',
    requestStream: false,
    responseStream: false,
    requestType: bilibili_polymer_app_search_v1_search_pb.SearchByTypeRequest,
    responseType: bilibili_polymer_app_search_v1_search_pb.SearchByTypeResponse,
    requestSerialize: serialize_bilibili_polymer_app_search_v1_SearchByTypeRequest,
    requestDeserialize: deserialize_bilibili_polymer_app_search_v1_SearchByTypeRequest,
    responseSerialize: serialize_bilibili_polymer_app_search_v1_SearchByTypeResponse,
    responseDeserialize: deserialize_bilibili_polymer_app_search_v1_SearchByTypeResponse,
  },
  //
searchComic: {
    path: '/bilibili.polymer.app.search.v1.Search/SearchComic',
    requestStream: false,
    responseStream: false,
    requestType: bilibili_polymer_app_search_v1_search_pb.SearchComicRequest,
    responseType: bilibili_polymer_app_search_v1_search_pb.SearchComicResponse,
    requestSerialize: serialize_bilibili_polymer_app_search_v1_SearchComicRequest,
    requestDeserialize: deserialize_bilibili_polymer_app_search_v1_SearchComicRequest,
    responseSerialize: serialize_bilibili_polymer_app_search_v1_SearchComicResponse,
    responseDeserialize: deserialize_bilibili_polymer_app_search_v1_SearchComicResponse,
  },
};

exports.SearchClient = grpc.makeGenericClientConstructor(SearchService);
