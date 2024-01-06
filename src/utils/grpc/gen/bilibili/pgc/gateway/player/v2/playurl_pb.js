// source: bilibili/pgc/gateway/player/v2/playurl.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Animation', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.BadgeInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.BottomDisplay', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.ButtonInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.CastTips', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.ClipInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.ClipType', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.CodeType', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Coupon', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.CouponInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.CouponTextInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.CouponToast', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.DashItem', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.DashVideo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.DataControl', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Dialog', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.DialogConfig', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Dimension', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.DolbyItem', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.DolbyItem.Type', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.DrmTechType', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EndPage', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EpInlineVideo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EpPreVideo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.DataCase', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.Type', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EpPublicityVideoType', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.EpisodeInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Event', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.FreyaConfig', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.GradientColor', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.HistoryNode', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.ImageInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.InlineScene', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.InlineType', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Interaction', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.LimitActionType', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.MultiView', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PayTip', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayErr', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayExtInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayList', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayViewReply', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PlayViewReq', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PopWin', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.PromptBar', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.QualityExtInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.RecordInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Report', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.ResponseUrl', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Rights', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.RoleAudioProto', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.SceneControl', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Scheme', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Scheme.ActionType', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.SeasonInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.SecurityLevel', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.SegmentVideo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Shake', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Stream', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Stream.ContentCase', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.StreamInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.StreamLimit', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.TaskParam', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.TextInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.Toast', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.UserStatus', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.VideoInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.ViewInfo', null, global);
goog.exportSymbol('proto.bilibili.pgc.gateway.player.v2.WatchProgress', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Animation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Animation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Animation.displayName = 'proto.bilibili.pgc.gateway.player.v2.Animation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.displayName = 'proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.BadgeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.BadgeInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.BadgeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.BottomDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.BottomDisplay.displayName = 'proto.bilibili.pgc.gateway.player.v2.BottomDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.ButtonInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.ButtonInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.ButtonInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.CastTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.CastTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.CastTips.displayName = 'proto.bilibili.pgc.gateway.player.v2.CastTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.ClipInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.ClipInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.ClipInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Coupon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Coupon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Coupon.displayName = 'proto.bilibili.pgc.gateway.player.v2.Coupon';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.CouponInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.CouponInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.CouponInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.CouponTextInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.CouponTextInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.CouponToast, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.CouponToast.displayName = 'proto.bilibili.pgc.gateway.player.v2.CouponToast';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.DashItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.DashItem.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.DashItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.DashItem.displayName = 'proto.bilibili.pgc.gateway.player.v2.DashItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.DashVideo.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.DashVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.DashVideo.displayName = 'proto.bilibili.pgc.gateway.player.v2.DashVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.DataControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.DataControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.DataControl.displayName = 'proto.bilibili.pgc.gateway.player.v2.DataControl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Dialog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.Dialog.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Dialog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Dialog.displayName = 'proto.bilibili.pgc.gateway.player.v2.Dialog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.DialogConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.DialogConfig.displayName = 'proto.bilibili.pgc.gateway.player.v2.DialogConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Dimension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Dimension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Dimension.displayName = 'proto.bilibili.pgc.gateway.player.v2.Dimension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.DolbyItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.DolbyItem.displayName = 'proto.bilibili.pgc.gateway.player.v2.DolbyItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.EndPage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.EndPage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.EndPage.displayName = 'proto.bilibili.pgc.gateway.player.v2.EndPage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.EpInlineVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.displayName = 'proto.bilibili.pgc.gateway.player.v2.EpInlineVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.EpisodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.EpisodeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.EpPreVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.EpPreVideo.displayName = 'proto.bilibili.pgc.gateway.player.v2.EpPreVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.oneofGroups_);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.displayName = 'proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Event.displayName = 'proto.bilibili.pgc.gateway.player.v2.Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.FreyaConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.FreyaConfig.displayName = 'proto.bilibili.pgc.gateway.player.v2.FreyaConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.GradientColor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.GradientColor.displayName = 'proto.bilibili.pgc.gateway.player.v2.GradientColor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.HistoryNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.HistoryNode.displayName = 'proto.bilibili.pgc.gateway.player.v2.HistoryNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.ImageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.ImageInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.ImageInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Interaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Interaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Interaction.displayName = 'proto.bilibili.pgc.gateway.player.v2.Interaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.MultiView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.MultiView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.MultiView.displayName = 'proto.bilibili.pgc.gateway.player.v2.MultiView';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PayTip = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.PayTip.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PayTip, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PayTip.displayName = 'proto.bilibili.pgc.gateway.player.v2.PayTip';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.displayName = 'proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.displayName = 'proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PlayExtInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.PlayExtInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PlayList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PlayList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PlayList.displayName = 'proto.bilibili.pgc.gateway.player.v2.PlayList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PlayViewReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PlayViewReply.displayName = 'proto.bilibili.pgc.gateway.player.v2.PlayViewReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PlayViewReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PlayViewReq.displayName = 'proto.bilibili.pgc.gateway.player.v2.PlayViewReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PopWin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.PopWin.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PopWin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PopWin.displayName = 'proto.bilibili.pgc.gateway.player.v2.PopWin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.PromptBar.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.PromptBar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.PromptBar.displayName = 'proto.bilibili.pgc.gateway.player.v2.PromptBar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.QualityExtInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.QualityExtInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.RecordInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.RecordInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.RecordInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Report = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Report, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Report.displayName = 'proto.bilibili.pgc.gateway.player.v2.Report';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.ResponseUrl.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.ResponseUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.ResponseUrl.displayName = 'proto.bilibili.pgc.gateway.player.v2.ResponseUrl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Rights = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Rights, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Rights.displayName = 'proto.bilibili.pgc.gateway.player.v2.Rights';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.RoleAudioProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.displayName = 'proto.bilibili.pgc.gateway.player.v2.RoleAudioProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.SceneControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.SceneControl.displayName = 'proto.bilibili.pgc.gateway.player.v2.SceneControl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Scheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Scheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Scheme.displayName = 'proto.bilibili.pgc.gateway.player.v2.Scheme';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.SeasonInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.SeasonInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.SeasonInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.SegmentVideo.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.SegmentVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.SegmentVideo.displayName = 'proto.bilibili.pgc.gateway.player.v2.SegmentVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Shake = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Shake, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Shake.displayName = 'proto.bilibili.pgc.gateway.player.v2.Shake';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Stream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bilibili.pgc.gateway.player.v2.Stream.oneofGroups_);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Stream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Stream.displayName = 'proto.bilibili.pgc.gateway.player.v2.Stream';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.StreamInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.StreamInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.StreamInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.StreamLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.StreamLimit.displayName = 'proto.bilibili.pgc.gateway.player.v2.StreamLimit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.TaskParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.TaskParam.displayName = 'proto.bilibili.pgc.gateway.player.v2.TaskParam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.TextInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.TextInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.TextInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.Toast = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.Toast, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.Toast.displayName = 'proto.bilibili.pgc.gateway.player.v2.Toast';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.UserStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.UserStatus.displayName = 'proto.bilibili.pgc.gateway.player.v2.UserStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.VideoInfo.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.VideoInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.VideoInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.VideoInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.pgc.gateway.player.v2.ViewInfo.repeatedFields_, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.ViewInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.ViewInfo.displayName = 'proto.bilibili.pgc.gateway.player.v2.ViewInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.pgc.gateway.player.v2.WatchProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.pgc.gateway.player.v2.WatchProgress.displayName = 'proto.bilibili.pgc.gateway.player.v2.WatchProgress';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Animation.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Animation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Animation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Animation.toObject = function(includeInstance, msg) {
  var f, obj = {
    qnSvgaAnimationMapMap: (f = msg.getQnSvgaAnimationMapMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Animation}
 */
proto.bilibili.pgc.gateway.player.v2.Animation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Animation;
  return proto.bilibili.pgc.gateway.player.v2.Animation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Animation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Animation}
 */
proto.bilibili.pgc.gateway.player.v2.Animation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getQnSvgaAnimationMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Animation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Animation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Animation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Animation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQnSvgaAnimationMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> qn_svga_animation_map = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.bilibili.pgc.gateway.player.v2.Animation.prototype.getQnSvgaAnimationMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Animation} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Animation.prototype.clearQnSvgaAnimationMapMap = function() {
  this.getQnSvgaAnimationMapMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    edition: jspb.Message.getFieldWithDefault(msg, 3, ""),
    personId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    personName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    personAvatar: jspb.Message.getFieldWithDefault(msg, 6, ""),
    audioList: jspb.Message.toObjectList(msg.getAudioList(),
    proto.bilibili.pgc.gateway.player.v2.DashItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto;
  return proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAudioId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEdition(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPersonId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonAvatar(value);
      break;
    case 7:
      var value = new proto.bilibili.pgc.gateway.player.v2.DashItem;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.DashItem.deserializeBinaryFromReader);
      msg.addAudio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEdition();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPersonId();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPersonName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPersonAvatar();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAudioList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.bilibili.pgc.gateway.player.v2.DashItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string audio_id = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.getAudioId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.setAudioId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string edition = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.getEdition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.setEdition = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 person_id = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.getPersonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.setPersonId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string person_name = 5;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.getPersonName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.setPersonName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string person_avatar = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.getPersonAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.setPersonAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated DashItem audio = 7;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.DashItem>}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.getAudioList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.DashItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.DashItem, 7));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.DashItem>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} returns this
*/
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.setAudioList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.DashItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem}
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.addAudio = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.bilibili.pgc.gateway.player.v2.DashItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.prototype.clearAudioList = function() {
  return this.setAudioList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.BadgeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bgColor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bgColorNight: jspb.Message.getFieldWithDefault(msg, 3, ""),
    textColor: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bgGradientColor: (f = msg.getBgGradientColor()) && proto.bilibili.pgc.gateway.player.v2.GradientColor.toObject(includeInstance, f),
    img: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.BadgeInfo;
  return proto.bilibili.pgc.gateway.player.v2.BadgeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgColor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgColorNight(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextColor(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.GradientColor;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.GradientColor.deserializeBinaryFromReader);
      msg.setBgGradientColor(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.BadgeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBgColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBgColorNight();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTextColor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBgGradientColor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.GradientColor.serializeBinaryToWriter
    );
  }
  f = message.getImg();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string bg_color = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.getBgColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.setBgColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bg_color_night = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.getBgColorNight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.setBgColorNight = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string text_color = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.getTextColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.setTextColor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional GradientColor bg_gradient_color = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.GradientColor}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.getBgGradientColor = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.GradientColor} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.GradientColor, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.GradientColor|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.setBgGradientColor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.clearBgGradientColor = function() {
  return this.setBgGradientColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.hasBgGradientColor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string img = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.getImg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.BadgeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.BadgeInfo.prototype.setImg = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.BottomDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: (f = msg.getTitle()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    icon: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay}
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.BottomDisplay;
  return proto.bilibili.pgc.gateway.player.v2.BottomDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay}
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.BottomDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional TextInfo title = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.prototype.getTitle = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay} returns this
*/
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.prototype.setTitle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay} returns this
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.prototype.clearTitle = function() {
  return this.setTitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string icon = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay} returns this
 */
proto.bilibili.pgc.gateway.player.v2.BottomDisplay.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    textColor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    textColorNight: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bgColor: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bgColorNight: jspb.Message.getFieldWithDefault(msg, 5, ""),
    link: jspb.Message.getFieldWithDefault(msg, 6, ""),
    actionType: jspb.Message.getFieldWithDefault(msg, 7, ""),
    badgeInfo: (f = msg.getBadgeInfo()) && proto.bilibili.pgc.gateway.player.v2.BadgeInfo.toObject(includeInstance, f),
    report: (f = msg.getReport()) && proto.bilibili.pgc.gateway.player.v2.Report.toObject(includeInstance, f),
    leftStrikethroughText: jspb.Message.getFieldWithDefault(msg, 10, ""),
    simpleTextInfo: (f = msg.getSimpleTextInfo()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    simpleBgColor: jspb.Message.getFieldWithDefault(msg, 12, ""),
    simpleBgColorNight: jspb.Message.getFieldWithDefault(msg, 13, ""),
    bgGradientColor: (f = msg.getBgGradientColor()) && proto.bilibili.pgc.gateway.player.v2.GradientColor.toObject(includeInstance, f),
    orderReportParamsMap: (f = msg.getOrderReportParamsMap()) ? f.toObject(includeInstance, undefined) : [],
    taskParam: (f = msg.getTaskParam()) && proto.bilibili.pgc.gateway.player.v2.TaskParam.toObject(includeInstance, f),
    pcLink: jspb.Message.getFieldWithDefault(msg, 17, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
  return proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextColor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextColorNight(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgColor(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgColorNight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionType(value);
      break;
    case 8:
      var value = new proto.bilibili.pgc.gateway.player.v2.BadgeInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.BadgeInfo.deserializeBinaryFromReader);
      msg.setBadgeInfo(value);
      break;
    case 9:
      var value = new proto.bilibili.pgc.gateway.player.v2.Report;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeftStrikethroughText(value);
      break;
    case 11:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setSimpleTextInfo(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSimpleBgColor(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSimpleBgColorNight(value);
      break;
    case 14:
      var value = new proto.bilibili.pgc.gateway.player.v2.GradientColor;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.GradientColor.deserializeBinaryFromReader);
      msg.setBgGradientColor(value);
      break;
    case 15:
      var value = msg.getOrderReportParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 16:
      var value = new proto.bilibili.pgc.gateway.player.v2.TaskParam;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TaskParam.deserializeBinaryFromReader);
      msg.setTaskParam(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPcLink(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTextColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTextColorNight();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBgColor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBgColorNight();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getActionType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBadgeInfo();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.pgc.gateway.player.v2.BadgeInfo.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.pgc.gateway.player.v2.Report.serializeBinaryToWriter
    );
  }
  f = message.getLeftStrikethroughText();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSimpleTextInfo();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getSimpleBgColor();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSimpleBgColorNight();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getBgGradientColor();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bilibili.pgc.gateway.player.v2.GradientColor.serializeBinaryToWriter
    );
  }
  f = message.getOrderReportParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTaskParam();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bilibili.pgc.gateway.player.v2.TaskParam.serializeBinaryToWriter
    );
  }
  f = message.getPcLink();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text_color = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getTextColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setTextColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text_color_night = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getTextColorNight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setTextColorNight = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string bg_color = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getBgColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setBgColor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string bg_color_night = 5;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getBgColorNight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setBgColorNight = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string link = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string action_type = 7;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getActionType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setActionType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional BadgeInfo badge_info = 8;
 * @return {?proto.bilibili.pgc.gateway.player.v2.BadgeInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getBadgeInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.BadgeInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.BadgeInfo, 8));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.BadgeInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setBadgeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.clearBadgeInfo = function() {
  return this.setBadgeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.hasBadgeInfo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Report report = 9;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Report}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getReport = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Report} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Report, 9));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Report|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.hasReport = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string left_strikethrough_text = 10;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getLeftStrikethroughText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setLeftStrikethroughText = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional TextInfo simple_text_info = 11;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getSimpleTextInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 11));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setSimpleTextInfo = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.clearSimpleTextInfo = function() {
  return this.setSimpleTextInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.hasSimpleTextInfo = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string simple_bg_color = 12;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getSimpleBgColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setSimpleBgColor = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string simple_bg_color_night = 13;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getSimpleBgColorNight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setSimpleBgColorNight = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional GradientColor bg_gradient_color = 14;
 * @return {?proto.bilibili.pgc.gateway.player.v2.GradientColor}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getBgGradientColor = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.GradientColor} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.GradientColor, 14));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.GradientColor|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setBgGradientColor = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.clearBgGradientColor = function() {
  return this.setBgGradientColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.hasBgGradientColor = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * map<string, string> order_report_params = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getOrderReportParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.clearOrderReportParamsMap = function() {
  this.getOrderReportParamsMap().clear();
  return this;};


/**
 * optional TaskParam task_param = 16;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TaskParam}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getTaskParam = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TaskParam} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TaskParam, 16));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TaskParam|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setTaskParam = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.clearTaskParam = function() {
  return this.setTaskParam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.hasTaskParam = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string pc_link = 17;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.getPcLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ButtonInfo.prototype.setPcLink = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.CastTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.CastTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CastTips}
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.CastTips;
  return proto.bilibili.pgc.gateway.player.v2.CastTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.CastTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CastTips}
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.CastTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.CastTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.CastTips} returns this
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.CastTips} returns this
 */
proto.bilibili.pgc.gateway.player.v2.CastTips.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.ClipInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    materialNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    start: jspb.Message.getFieldWithDefault(msg, 2, 0),
    end: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clipType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    toastText: jspb.Message.getFieldWithDefault(msg, 5, ""),
    multiView: (f = msg.getMultiView()) && proto.bilibili.pgc.gateway.player.v2.MultiView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.ClipInfo;
  return proto.bilibili.pgc.gateway.player.v2.ClipInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaterialNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    case 4:
      var value = /** @type {!proto.bilibili.pgc.gateway.player.v2.ClipType} */ (reader.readEnum());
      msg.setClipType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToastText(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.MultiView;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.MultiView.deserializeBinaryFromReader);
      msg.setMultiView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.ClipInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaterialNo();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getClipType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getToastText();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMultiView();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.MultiView.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 material_no = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.getMaterialNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.setMaterialNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 start = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 end = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ClipType clip_type = 4;
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipType}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.getClipType = function() {
  return /** @type {!proto.bilibili.pgc.gateway.player.v2.ClipType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.ClipType} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.setClipType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string toast_text = 5;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.getToastText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.setToastText = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional MultiView multi_view = 6;
 * @return {?proto.bilibili.pgc.gateway.player.v2.MultiView}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.getMultiView = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.MultiView} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.MultiView, 6));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.MultiView|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.setMultiView = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.clearMultiView = function() {
  return this.setMultiView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ClipInfo.prototype.hasMultiView = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    continuePlayEpId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo;
  return proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContinuePlayEpId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContinuePlayEpId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 continue_play_ep_id = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.prototype.getContinuePlayEpId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.prototype.setContinuePlayEpId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Coupon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Coupon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.toObject = function(includeInstance, msg) {
  var f, obj = {
    couponToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useDesc: jspb.Message.getFieldWithDefault(msg, 4, ""),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    desc: jspb.Message.getFieldWithDefault(msg, 6, ""),
    payButtonText: jspb.Message.getFieldWithDefault(msg, 7, ""),
    payButtonTextLineThrough: jspb.Message.getFieldWithDefault(msg, 8, ""),
    realAmount: jspb.Message.getFieldWithDefault(msg, 9, ""),
    expireTime: (f = msg.getExpireTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    otype: jspb.Message.getFieldWithDefault(msg, 11, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Coupon;
  return proto.bilibili.pgc.gateway.player.v2.Coupon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Coupon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCouponToken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseDesc(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayButtonText(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayButtonTextLineThrough(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealAmount(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpireTime(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOtype(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Coupon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Coupon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCouponToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUseDesc();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPayButtonText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPayButtonTextLineThrough();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRealAmount();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getExpireTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOtype();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string coupon_token = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getCouponToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setCouponToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 type = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string use_desc = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getUseDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setUseDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string desc = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string pay_button_text = 7;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getPayButtonText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setPayButtonText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string pay_button_text_line_through = 8;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getPayButtonTextLineThrough = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setPayButtonTextLineThrough = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string real_amount = 9;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getRealAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setRealAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp expire_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getExpireTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setExpireTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.clearExpireTime = function() {
  return this.setExpireTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.hasExpireTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 otype = 11;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getOtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setOtype = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string amount = 12;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Coupon.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.CouponInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    toast: (f = msg.getToast()) && proto.bilibili.pgc.gateway.player.v2.CouponToast.toObject(includeInstance, f),
    popWin: (f = msg.getPopWin()) && proto.bilibili.pgc.gateway.player.v2.PopWin.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponInfo}
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.CouponInfo;
  return proto.bilibili.pgc.gateway.player.v2.CouponInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponInfo}
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.CouponToast;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.CouponToast.deserializeBinaryFromReader);
      msg.setToast(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.PopWin;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PopWin.deserializeBinaryFromReader);
      msg.setPopWin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.CouponInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToast();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.CouponToast.serializeBinaryToWriter
    );
  }
  f = message.getPopWin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.PopWin.serializeBinaryToWriter
    );
  }
};


/**
 * optional CouponToast toast = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.CouponToast}
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.getToast = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.CouponToast} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.CouponToast, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.CouponToast|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.setToast = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.clearToast = function() {
  return this.setToast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.hasToast = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PopWin pop_win = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PopWin}
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.getPopWin = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PopWin} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PopWin, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PopWin|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.setPopWin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.clearPopWin = function() {
  return this.setPopWin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.CouponInfo.prototype.hasPopWin = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponTextInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    positivePreview: jspb.Message.getFieldWithDefault(msg, 1, ""),
    section: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponTextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.CouponTextInfo;
  return proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponTextInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponTextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositivePreview(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponTextInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositivePreview();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string positive_preview = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.prototype.getPositivePreview = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponTextInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.prototype.setPositivePreview = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string section = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.prototype.getSection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponTextInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.prototype.setSection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.CouponToast.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponToast} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.toObject = function(includeInstance, msg) {
  var f, obj = {
    textInfo: (f = msg.getTextInfo()) && proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.toObject(includeInstance, f),
    button: (f = msg.getButton()) && proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponToast}
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.CouponToast;
  return proto.bilibili.pgc.gateway.player.v2.CouponToast.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponToast} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponToast}
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.CouponTextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.deserializeBinaryFromReader);
      msg.setTextInfo(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.setButton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.CouponToast.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.CouponToast} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.CouponTextInfo.serializeBinaryToWriter
    );
  }
  f = message.getButton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CouponTextInfo text_info = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.CouponTextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.getTextInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.CouponTextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.CouponTextInfo, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.CouponTextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponToast} returns this
*/
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.setTextInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponToast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.clearTextInfo = function() {
  return this.setTextInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.hasTextInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ButtonInfo button = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.getButton = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ButtonInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponToast} returns this
*/
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.setButton = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.CouponToast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.clearButton = function() {
  return this.setButton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.CouponToast.prototype.hasButton = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.DashItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.DashItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    baseUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    backupUrlList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    bandwidth: jspb.Message.getFieldWithDefault(msg, 4, 0),
    codecid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    md5: jspb.Message.getFieldWithDefault(msg, 6, ""),
    size: jspb.Message.getFieldWithDefault(msg, 7, 0),
    frameRate: jspb.Message.getFieldWithDefault(msg, 8, ""),
    widevinePssh: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.DashItem;
  return proto.bilibili.pgc.gateway.player.v2.DashItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DashItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addBackupUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBandwidth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCodecid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameRate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWidevinePssh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.DashItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DashItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBaseUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBackupUrlList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getBandwidth();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getCodecid();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getFrameRate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getWidevinePssh();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string base_url = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getBaseUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setBaseUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string backup_url = 3;
 * @return {!Array<string>}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getBackupUrlList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setBackupUrlList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.addBackupUrl = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.clearBackupUrlList = function() {
  return this.setBackupUrlList([]);
};


/**
 * optional uint32 bandwidth = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getBandwidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setBandwidth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 codecid = 5;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getCodecid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setCodecid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string md5 = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 size = 7;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string frame_rate = 8;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getFrameRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setFrameRate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string widevine_pssh = 9;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.getWidevinePssh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashItem.prototype.setWidevinePssh = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.DashVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.DashVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    backupUrlList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    bandwidth: jspb.Message.getFieldWithDefault(msg, 3, 0),
    codecid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    md5: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    audioId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    noRexcode: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    frameRate: jspb.Message.getFieldWithDefault(msg, 9, ""),
    width: jspb.Message.getFieldWithDefault(msg, 10, 0),
    height: jspb.Message.getFieldWithDefault(msg, 11, 0),
    widevinePssh: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.DashVideo;
  return proto.bilibili.pgc.gateway.player.v2.DashVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DashVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addBackupUrl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBandwidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCodecid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAudioId(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoRexcode(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameRate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setWidevinePssh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.DashVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DashVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBackupUrlList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getBandwidth();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCodecid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getAudioId();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getNoRexcode();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getFrameRate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getWidevinePssh();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string base_url = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getBaseUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setBaseUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string backup_url = 2;
 * @return {!Array<string>}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getBackupUrlList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setBackupUrlList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.addBackupUrl = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.clearBackupUrlList = function() {
  return this.setBackupUrlList([]);
};


/**
 * optional uint32 bandwidth = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getBandwidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setBandwidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 codecid = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getCodecid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setCodecid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string md5 = 5;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 size = 6;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 audio_id = 7;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getAudioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setAudioId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool no_rexcode = 8;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getNoRexcode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setNoRexcode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string frame_rate = 9;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getFrameRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setFrameRate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 width = 10;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 height = 11;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string widevine_pssh = 12;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.getWidevinePssh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DashVideo.prototype.setWidevinePssh = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.DataControl.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.DataControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.DataControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DataControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    needWatchProgress: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DataControl}
 */
proto.bilibili.pgc.gateway.player.v2.DataControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.DataControl;
  return proto.bilibili.pgc.gateway.player.v2.DataControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DataControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DataControl}
 */
proto.bilibili.pgc.gateway.player.v2.DataControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedWatchProgress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.DataControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.DataControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DataControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DataControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedWatchProgress();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool need_watch_progress = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.DataControl.prototype.getNeedWatchProgress = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DataControl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DataControl.prototype.setNeedWatchProgress = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.repeatedFields_ = [9,14,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Dialog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Dialog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    styleType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    config: (f = msg.getConfig()) && proto.bilibili.pgc.gateway.player.v2.DialogConfig.toObject(includeInstance, f),
    title: (f = msg.getTitle()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    subtitle: (f = msg.getSubtitle()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    image: (f = msg.getImage()) && proto.bilibili.pgc.gateway.player.v2.ImageInfo.toObject(includeInstance, f),
    buttonList: jspb.Message.toObjectList(msg.getButtonList(),
    proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject, includeInstance),
    bottomDesc: (f = msg.getBottomDesc()) && proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject(includeInstance, f),
    report: (f = msg.getReport()) && proto.bilibili.pgc.gateway.player.v2.Report.toObject(includeInstance, f),
    countDownSec: jspb.Message.getFieldWithDefault(msg, 12, 0),
    rightBottomDesc: (f = msg.getRightBottomDesc()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    bottomDisplayList: jspb.Message.toObjectList(msg.getBottomDisplayList(),
    proto.bilibili.pgc.gateway.player.v2.BottomDisplay.toObject, includeInstance),
    playListList: jspb.Message.toObjectList(msg.getPlayListList(),
    proto.bilibili.pgc.gateway.player.v2.PlayList.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Dialog;
  return proto.bilibili.pgc.gateway.player.v2.Dialog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Dialog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStyleType(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.DialogConfig;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.DialogConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setTitle(value);
      break;
    case 7:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setSubtitle(value);
      break;
    case 8:
      var value = new proto.bilibili.pgc.gateway.player.v2.ImageInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ImageInfo.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 9:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.addButton(value);
      break;
    case 10:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.setBottomDesc(value);
      break;
    case 11:
      var value = new proto.bilibili.pgc.gateway.player.v2.Report;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountDownSec(value);
      break;
    case 13:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setRightBottomDesc(value);
      break;
    case 14:
      var value = new proto.bilibili.pgc.gateway.player.v2.BottomDisplay;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.BottomDisplay.deserializeBinaryFromReader);
      msg.addBottomDisplay(value);
      break;
    case 15:
      var value = new proto.bilibili.pgc.gateway.player.v2.PlayList;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PlayList.deserializeBinaryFromReader);
      msg.addPlayList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Dialog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Dialog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStyleType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.DialogConfig.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getSubtitle();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.pgc.gateway.player.v2.ImageInfo.serializeBinaryToWriter
    );
  }
  f = message.getButtonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
  f = message.getBottomDesc();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bilibili.pgc.gateway.player.v2.Report.serializeBinaryToWriter
    );
  }
  f = message.getCountDownSec();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getRightBottomDesc();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getBottomDisplayList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.bilibili.pgc.gateway.player.v2.BottomDisplay.serializeBinaryToWriter
    );
  }
  f = message.getPlayListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.bilibili.pgc.gateway.player.v2.PlayList.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string style_type = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getStyleType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setStyleType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional DialogConfig config = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.DialogConfig}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getConfig = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.DialogConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.DialogConfig, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.DialogConfig|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TextInfo title = 6;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getTitle = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 6));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setTitle = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearTitle = function() {
  return this.setTitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TextInfo subtitle = 7;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getSubtitle = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 7));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setSubtitle = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearSubtitle = function() {
  return this.setSubtitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.hasSubtitle = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ImageInfo image = 8;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ImageInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getImage = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ImageInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ImageInfo, 8));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ImageInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.hasImage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated ButtonInfo button = 9;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getButtonList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 9));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setButtonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.addButton = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearButtonList = function() {
  return this.setButtonList([]);
};


/**
 * optional ButtonInfo bottom_desc = 10;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getBottomDesc = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ButtonInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 10));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setBottomDesc = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearBottomDesc = function() {
  return this.setBottomDesc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.hasBottomDesc = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Report report = 11;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Report}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getReport = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Report} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Report, 11));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Report|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.hasReport = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 count_down_sec = 12;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getCountDownSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setCountDownSec = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional TextInfo right_bottom_desc = 13;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getRightBottomDesc = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 13));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setRightBottomDesc = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearRightBottomDesc = function() {
  return this.setRightBottomDesc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.hasRightBottomDesc = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated BottomDisplay bottom_display = 14;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.BottomDisplay>}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getBottomDisplayList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.BottomDisplay>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.BottomDisplay, 14));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.BottomDisplay>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setBottomDisplayList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.BottomDisplay}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.addBottomDisplay = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.bilibili.pgc.gateway.player.v2.BottomDisplay, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearBottomDisplayList = function() {
  return this.setBottomDisplayList([]);
};


/**
 * repeated PlayList play_list = 15;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.PlayList>}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.getPlayListList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.PlayList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PlayList, 15));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.PlayList>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.setPlayListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList}
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.addPlayList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.bilibili.pgc.gateway.player.v2.PlayList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dialog} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dialog.prototype.clearPlayListList = function() {
  return this.setPlayListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.DialogConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.DialogConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    isShowCover: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    isOrientationEnable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isNestedScrollEnable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isForceHalfscreenEnable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isBackgroundTranslucentEnable: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DialogConfig}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.DialogConfig;
  return proto.bilibili.pgc.gateway.player.v2.DialogConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DialogConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DialogConfig}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsShowCover(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOrientationEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNestedScrollEnable(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForceHalfscreenEnable(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBackgroundTranslucentEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.DialogConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DialogConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsShowCover();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIsOrientationEnable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsNestedScrollEnable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsForceHalfscreenEnable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsBackgroundTranslucentEnable();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool is_show_cover = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.getIsShowCover = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DialogConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.setIsShowCover = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool is_orientation_enable = 2;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.getIsOrientationEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DialogConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.setIsOrientationEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_nested_scroll_enable = 3;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.getIsNestedScrollEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DialogConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.setIsNestedScrollEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_force_halfscreen_enable = 4;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.getIsForceHalfscreenEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DialogConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.setIsForceHalfscreenEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_background_translucent_enable = 5;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.getIsBackgroundTranslucentEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DialogConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DialogConfig.prototype.setIsBackgroundTranslucentEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Dimension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Dimension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.toObject = function(includeInstance, msg) {
  var f, obj = {
    width: jspb.Message.getFieldWithDefault(msg, 1, 0),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rotate: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dimension}
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Dimension;
  return proto.bilibili.pgc.gateway.player.v2.Dimension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Dimension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dimension}
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRotate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Dimension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Dimension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRotate();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 width = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dimension} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 height = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dimension} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 rotate = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.prototype.getRotate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Dimension} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Dimension.prototype.setRotate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.DolbyItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.DolbyItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    audio: (f = msg.getAudio()) && proto.bilibili.pgc.gateway.player.v2.DashItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DolbyItem}
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.DolbyItem;
  return proto.bilibili.pgc.gateway.player.v2.DolbyItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DolbyItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DolbyItem}
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bilibili.pgc.gateway.player.v2.DolbyItem.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.DashItem;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.DashItem.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.DolbyItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.DolbyItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.DashItem.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.Type = {
  NONE: 0,
  COMMON: 1,
  ATMOS: 2
};

/**
 * optional Type type = 1;
 * @return {!proto.bilibili.pgc.gateway.player.v2.DolbyItem.Type}
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.prototype.getType = function() {
  return /** @type {!proto.bilibili.pgc.gateway.player.v2.DolbyItem.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.DolbyItem.Type} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DolbyItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DashItem audio = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.DashItem}
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.prototype.getAudio = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.DashItem} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.DashItem, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.DashItem|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.DolbyItem} returns this
*/
proto.bilibili.pgc.gateway.player.v2.DolbyItem.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.DolbyItem} returns this
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.DolbyItem.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.EndPage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.EndPage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dialog: (f = msg.getDialog()) && proto.bilibili.pgc.gateway.player.v2.Dialog.toObject(includeInstance, f),
    hide: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EndPage}
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.EndPage;
  return proto.bilibili.pgc.gateway.player.v2.EndPage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EndPage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EndPage}
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.Dialog;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Dialog.deserializeBinaryFromReader);
      msg.setDialog(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHide(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.EndPage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EndPage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDialog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.Dialog.serializeBinaryToWriter
    );
  }
  f = message.getHide();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Dialog dialog = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Dialog}
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.prototype.getDialog = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Dialog} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Dialog, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Dialog|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EndPage} returns this
*/
proto.bilibili.pgc.gateway.player.v2.EndPage.prototype.setDialog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EndPage} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.prototype.clearDialog = function() {
  return this.setDialog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.prototype.hasDialog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool hide = 2;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.prototype.getHide = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EndPage} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EndPage.prototype.setHide = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpInlineVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
    materialNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    aid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpInlineVideo}
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.EpInlineVideo;
  return proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpInlineVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpInlineVideo}
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaterialNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpInlineVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaterialNo();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 material_no = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.prototype.getMaterialNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpInlineVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.prototype.setMaterialNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 aid = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.prototype.getAid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpInlineVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.prototype.setAid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 cid = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpInlineVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    aid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    link: jspb.Message.getFieldWithDefault(msg, 3, ""),
    followVideoBntFlag: jspb.Message.getFieldWithDefault(msg, 4, 0),
    nextVideoTitle: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nextVideoLink: jspb.Message.getFieldWithDefault(msg, 6, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    seasonId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    follow: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo;
  return proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFollowVideoBntFlag(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextVideoTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextVideoLink(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeasonId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFollow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFollowVideoBntFlag();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getNextVideoTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNextVideoLink();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getSeasonId();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getFollow();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional int64 aid = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getAid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setAid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string link = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 follow_video_bnt_flag = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getFollowVideoBntFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setFollowVideoBntFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string next_video_title = 5;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getNextVideoTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setNextVideoTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string next_video_link = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getNextVideoLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setNextVideoLink = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 cid = 7;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 season_id = 8;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getSeasonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setSeasonId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 follow = 9;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.getFollow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.prototype.setFollow = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    epId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    aid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    epStatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
    seasonInfo: (f = msg.getSeasonInfo()) && proto.bilibili.pgc.gateway.player.v2.SeasonInfo.toObject(includeInstance, f),
    cover: jspb.Message.getFieldWithDefault(msg, 6, ""),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    interaction: (f = msg.getInteraction()) && proto.bilibili.pgc.gateway.player.v2.Interaction.toObject(includeInstance, f),
    longTitle: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.EpisodeInfo;
  return proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEpId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEpStatus(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.SeasonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.SeasonInfo.deserializeBinaryFromReader);
      msg.setSeasonInfo(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = new proto.bilibili.pgc.gateway.player.v2.Interaction;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Interaction.deserializeBinaryFromReader);
      msg.setInteraction(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEpStatus();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSeasonInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.SeasonInfo.serializeBinaryToWriter
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInteraction();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.pgc.gateway.player.v2.Interaction.serializeBinaryToWriter
    );
  }
  f = message.getLongTitle();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int32 ep_id = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getEpId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setEpId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 cid = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 aid = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getAid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setAid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 ep_status = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getEpStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setEpStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SeasonInfo season_info = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.SeasonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getSeasonInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.SeasonInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.SeasonInfo, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.SeasonInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setSeasonInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.clearSeasonInfo = function() {
  return this.setSeasonInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.hasSeasonInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string cover = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Interaction interaction = 8;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Interaction}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getInteraction = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Interaction} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Interaction, 8));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Interaction|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setInteraction = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.clearInteraction = function() {
  return this.setInteraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.hasInteraction = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string long_title = 9;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.getLongTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.prototype.setLongTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.EpPreVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpPreVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
    aid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPreVideo}
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.EpPreVideo;
  return proto.bilibili.pgc.gateway.player.v2.EpPreVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpPreVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPreVideo}
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.EpPreVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpPreVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 aid = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.prototype.getAid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPreVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.prototype.setAid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 cid = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPreVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpPreVideo.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.DataCase = {
  DATA_NOT_SET: 0,
  EP_PRE_VIDEO: 2,
  EP_INLINE_VIDEO: 3
};

/**
 * @return {proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.DataCase}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.getDataCase = function() {
  return /** @type {proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.DataCase} */(jspb.Message.computeOneofCase(this, proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    epPreVideo: (f = msg.getEpPreVideo()) && proto.bilibili.pgc.gateway.player.v2.EpPreVideo.toObject(includeInstance, f),
    epInlineVideo: (f = msg.getEpInlineVideo()) && proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo;
  return proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.EpPreVideo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.EpPreVideo.deserializeBinaryFromReader);
      msg.setEpPreVideo(value);
      break;
    case 3:
      var value = new proto.bilibili.pgc.gateway.player.v2.EpInlineVideo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.deserializeBinaryFromReader);
      msg.setEpInlineVideo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEpPreVideo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.EpPreVideo.serializeBinaryToWriter
    );
  }
  f = message.getEpInlineVideo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.pgc.gateway.player.v2.EpInlineVideo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.Type = {
  DATA_NOT_SET: 0,
  EP_PRE_VIDEO: 2,
  EP_INLINE: 3
};

/**
 * optional Type type = 1;
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.Type}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.getType = function() {
  return /** @type {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.Type} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional EpPreVideo ep_pre_video = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.EpPreVideo}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.getEpPreVideo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.EpPreVideo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.EpPreVideo, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.EpPreVideo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.setEpPreVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.clearEpPreVideo = function() {
  return this.setEpPreVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.hasEpPreVideo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EpInlineVideo ep_inline_video = 3;
 * @return {?proto.bilibili.pgc.gateway.player.v2.EpInlineVideo}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.getEpInlineVideo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.EpInlineVideo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.EpInlineVideo, 3));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.EpInlineVideo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.setEpInlineVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.clearEpInlineVideo = function() {
  return this.setEpInlineVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideo.prototype.hasEpInlineVideo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    shake: (f = msg.getShake()) && proto.bilibili.pgc.gateway.player.v2.Shake.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Event}
 */
proto.bilibili.pgc.gateway.player.v2.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Event;
  return proto.bilibili.pgc.gateway.player.v2.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Event}
 */
proto.bilibili.pgc.gateway.player.v2.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.Shake;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Shake.deserializeBinaryFromReader);
      msg.setShake(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShake();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.Shake.serializeBinaryToWriter
    );
  }
};


/**
 * optional Shake shake = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Shake}
 */
proto.bilibili.pgc.gateway.player.v2.Event.prototype.getShake = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Shake} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Shake, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Shake|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Event} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Event.prototype.setShake = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Event} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Event.prototype.clearShake = function() {
  return this.setShake(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Event.prototype.hasShake = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.FreyaConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    desc: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    issuedCnt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isAlwaysShow: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    screenNumber: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fullScreenNumber: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.FreyaConfig;
  return proto.bilibili.pgc.gateway.player.v2.FreyaConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIssuedCnt(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAlwaysShow(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreenNumber(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFullScreenNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.FreyaConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIssuedCnt();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIsAlwaysShow();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getScreenNumber();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFullScreenNumber();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string desc = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 issued_cnt = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.getIssuedCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.setIssuedCnt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_always_show = 4;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.getIsAlwaysShow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.setIsAlwaysShow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 screen_number = 5;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.getScreenNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.setScreenNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 full_screen_number = 6;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.getFullScreenNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.FreyaConfig} returns this
 */
proto.bilibili.pgc.gateway.player.v2.FreyaConfig.prototype.setFullScreenNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.GradientColor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.GradientColor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.toObject = function(includeInstance, msg) {
  var f, obj = {
    startColor: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endColor: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.GradientColor}
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.GradientColor;
  return proto.bilibili.pgc.gateway.player.v2.GradientColor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.GradientColor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.GradientColor}
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartColor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndColor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.GradientColor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.GradientColor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartColor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string start_color = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.prototype.getStartColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.GradientColor} returns this
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.prototype.setStartColor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string end_color = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.prototype.getEndColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.GradientColor} returns this
 */
proto.bilibili.pgc.gateway.player.v2.GradientColor.prototype.setEndColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    trialAble: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    remainingTimes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    start: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timeLength: jspb.Message.getFieldWithDefault(msg, 4, 0),
    startToast: (f = msg.getStartToast()) && proto.bilibili.pgc.gateway.player.v2.Toast.toObject(includeInstance, f),
    endToast: (f = msg.getEndToast()) && proto.bilibili.pgc.gateway.player.v2.Toast.toObject(includeInstance, f),
    report: (f = msg.getReport()) && proto.bilibili.pgc.gateway.player.v2.Report.toObject(includeInstance, f),
    qualityOpenTipBtn: (f = msg.getQualityOpenTipBtn()) && proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject(includeInstance, f),
    noLongerTrialBtn: (f = msg.getNoLongerTrialBtn()) && proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo;
  return proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrialAble(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainingTimes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeLength(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.Toast;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinaryFromReader);
      msg.setStartToast(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.Toast;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinaryFromReader);
      msg.setEndToast(value);
      break;
    case 7:
      var value = new proto.bilibili.pgc.gateway.player.v2.Report;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    case 8:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.setQualityOpenTipBtn(value);
      break;
    case 9:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.setNoLongerTrialBtn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrialAble();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRemainingTimes();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTimeLength();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStartToast();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.Toast.serializeBinaryToWriter
    );
  }
  f = message.getEndToast();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.Toast.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.pgc.gateway.player.v2.Report.serializeBinaryToWriter
    );
  }
  f = message.getQualityOpenTipBtn();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
  f = message.getNoLongerTrialBtn();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool trial_able = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getTrialAble = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setTrialAble = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 remaining_times = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getRemainingTimes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setRemainingTimes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 start = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 time_length = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getTimeLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setTimeLength = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Toast start_toast = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Toast}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getStartToast = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Toast} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Toast, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Toast|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setStartToast = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.clearStartToast = function() {
  return this.setStartToast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.hasStartToast = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Toast end_toast = 6;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Toast}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getEndToast = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Toast} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Toast, 6));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Toast|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setEndToast = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.clearEndToast = function() {
  return this.setEndToast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.hasEndToast = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Report report = 7;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Report}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getReport = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Report} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Report, 7));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Report|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.hasReport = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ButtonInfo quality_open_tip_btn = 8;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getQualityOpenTipBtn = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ButtonInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 8));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setQualityOpenTipBtn = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.clearQualityOpenTipBtn = function() {
  return this.setQualityOpenTipBtn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.hasQualityOpenTipBtn = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ButtonInfo no_longer_trial_btn = 9;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.getNoLongerTrialBtn = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ButtonInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 9));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.setNoLongerTrialBtn = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.clearNoLongerTrialBtn = function() {
  return this.setNoLongerTrialBtn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.prototype.hasNoLongerTrialBtn = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.HistoryNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.HistoryNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HistoryNode}
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.HistoryNode;
  return proto.bilibili.pgc.gateway.player.v2.HistoryNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.HistoryNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.HistoryNode}
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.HistoryNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.HistoryNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 node_id = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.prototype.getNodeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HistoryNode} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HistoryNode} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 cid = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.HistoryNode} returns this
 */
proto.bilibili.pgc.gateway.player.v2.HistoryNode.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.ImageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.ImageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ImageInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.ImageInfo;
  return proto.bilibili.pgc.gateway.player.v2.ImageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ImageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ImageInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.ImageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ImageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ImageInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ImageInfo.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Interaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Interaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    historyNode: (f = msg.getHistoryNode()) && proto.bilibili.pgc.gateway.player.v2.HistoryNode.toObject(includeInstance, f),
    graphVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isInteraction: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Interaction}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Interaction;
  return proto.bilibili.pgc.gateway.player.v2.Interaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Interaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Interaction}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.HistoryNode;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.HistoryNode.deserializeBinaryFromReader);
      msg.setHistoryNode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGraphVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsInteraction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Interaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Interaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistoryNode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.HistoryNode.serializeBinaryToWriter
    );
  }
  f = message.getGraphVersion();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsInteraction();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional HistoryNode history_node = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.HistoryNode}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.getHistoryNode = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.HistoryNode} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.HistoryNode, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.HistoryNode|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Interaction} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.setHistoryNode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Interaction} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.clearHistoryNode = function() {
  return this.setHistoryNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.hasHistoryNode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 graph_version = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.getGraphVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Interaction} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.setGraphVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Interaction} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_interaction = 4;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.getIsInteraction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Interaction} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Interaction.prototype.setIsInteraction = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.MultiView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.MultiView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.toObject = function(includeInstance, msg) {
  var f, obj = {
    buttonMaterial: jspb.Message.getFieldWithDefault(msg, 1, ""),
    epId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    avid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.MultiView}
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.MultiView;
  return proto.bilibili.pgc.gateway.player.v2.MultiView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.MultiView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.MultiView}
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setButtonMaterial(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEpId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.MultiView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.MultiView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButtonMaterial();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEpId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAvid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string button_material = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.getButtonMaterial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.MultiView} returns this
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.setButtonMaterial = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ep_id = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.getEpId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.MultiView} returns this
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.setEpId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 cid = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.MultiView} returns this
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 avid = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.getAvid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.MultiView} returns this
 */
proto.bilibili.pgc.gateway.player.v2.MultiView.prototype.setAvid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PayTip.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PayTip} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    showType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    img: jspb.Message.getFieldWithDefault(msg, 6, ""),
    bgDayColor: jspb.Message.getFieldWithDefault(msg, 7, ""),
    bgNightColor: jspb.Message.getFieldWithDefault(msg, 8, ""),
    bgLineColor: jspb.Message.getFieldWithDefault(msg, 9, ""),
    bgNightLineColor: jspb.Message.getFieldWithDefault(msg, 10, ""),
    textColor: jspb.Message.getFieldWithDefault(msg, 11, ""),
    textNightColor: jspb.Message.getFieldWithDefault(msg, 12, ""),
    viewStartTime: jspb.Message.getFieldWithDefault(msg, 13, 0),
    buttonList: jspb.Message.toObjectList(msg.getButtonList(),
    proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject, includeInstance),
    urlOpenType: jspb.Message.getFieldWithDefault(msg, 15, 0),
    report: (f = msg.getReport()) && proto.bilibili.pgc.gateway.player.v2.Report.toObject(includeInstance, f),
    angleStyle: jspb.Message.getFieldWithDefault(msg, 17, 0),
    reportType: jspb.Message.getFieldWithDefault(msg, 18, 0),
    orderReportParamsMap: (f = msg.getOrderReportParamsMap()) ? f.toObject(includeInstance, undefined) : [],
    giantScreenImg: jspb.Message.getFieldWithDefault(msg, 20, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PayTip;
  return proto.bilibili.pgc.gateway.player.v2.PayTip.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PayTip} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShowType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImg(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgDayColor(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgNightColor(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgLineColor(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgNightLineColor(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextColor(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextNightColor(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setViewStartTime(value);
      break;
    case 14:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.addButton(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUrlOpenType(value);
      break;
    case 16:
      var value = new proto.bilibili.pgc.gateway.player.v2.Report;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAngleStyle(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReportType(value);
      break;
    case 19:
      var value = msg.getOrderReportParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setGiantScreenImg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PayTip.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PayTip} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getShowType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getImg();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBgDayColor();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBgNightColor();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBgLineColor();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getBgNightLineColor();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTextColor();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTextNightColor();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getViewStartTime();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getButtonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
  f = message.getUrlOpenType();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bilibili.pgc.gateway.player.v2.Report.serializeBinaryToWriter
    );
  }
  f = message.getAngleStyle();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getReportType();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getOrderReportParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(19, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getGiantScreenImg();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 type = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 show_type = 5;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getShowType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setShowType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string img = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getImg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setImg = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string bg_day_color = 7;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getBgDayColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setBgDayColor = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string bg_night_color = 8;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getBgNightColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setBgNightColor = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string bg_line_color = 9;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getBgLineColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setBgLineColor = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string bg_night_line_color = 10;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getBgNightLineColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setBgNightLineColor = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string text_color = 11;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getTextColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setTextColor = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string text_night_color = 12;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getTextNightColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setTextNightColor = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 view_start_time = 13;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getViewStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setViewStartTime = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated ButtonInfo button = 14;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getButtonList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 14));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setButtonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.addButton = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.clearButtonList = function() {
  return this.setButtonList([]);
};


/**
 * optional int32 url_open_type = 15;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getUrlOpenType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setUrlOpenType = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional Report report = 16;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Report}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getReport = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Report} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Report, 16));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Report|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.hasReport = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int32 angle_style = 17;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getAngleStyle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setAngleStyle = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int32 report_type = 18;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getReportType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setReportType = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * map<string, string> order_report_params = 19;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getOrderReportParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 19, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.clearOrderReportParamsMap = function() {
  this.getOrderReportParamsMap().clear();
  return this;};


/**
 * optional string giant_screen_img = 20;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.getGiantScreenImg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PayTip} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PayTip.prototype.setGiantScreenImg = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.toObject = function(includeInstance, msg) {
  var f, obj = {
    backgroundPlayDisable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    flipDisable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    castDisable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    feedbackDisable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    subtitleDisable: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    playbackRateDisable: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    timeUpDisable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    playbackModeDisable: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    scaleModeDisable: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    likeDisable: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    dislikeDisable: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    coinDisable: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    elecDisable: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    shareDisable: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    screenShotDisable: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    lockScreenDisable: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    recommendDisable: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    playbackSpeedDisable: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    definitionDisable: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    selectionsDisable: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    nextDisable: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    editDmDisable: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    smallWindowDisable: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    shakeDisable: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    outerDmDisable: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    innerDmDisable: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    freyaEnterDisable: jspb.Message.getBooleanFieldWithDefault(msg, 27, false),
    dolbyDisable: jspb.Message.getBooleanFieldWithDefault(msg, 28, false),
    freyaFullDisable: jspb.Message.getBooleanFieldWithDefault(msg, 29, false),
    skipOpedSwitchDisable: jspb.Message.getBooleanFieldWithDefault(msg, 30, false),
    recordScreenDisable: jspb.Message.getBooleanFieldWithDefault(msg, 31, false),
    colorOptimizeDisable: jspb.Message.getBooleanFieldWithDefault(msg, 32, false),
    dubbingDisable: jspb.Message.getBooleanFieldWithDefault(msg, 33, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf;
  return proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBackgroundPlayDisable(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlipDisable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCastDisable(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFeedbackDisable(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSubtitleDisable(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaybackRateDisable(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTimeUpDisable(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaybackModeDisable(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScaleModeDisable(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLikeDisable(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDislikeDisable(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCoinDisable(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setElecDisable(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShareDisable(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScreenShotDisable(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLockScreenDisable(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecommendDisable(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaybackSpeedDisable(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefinitionDisable(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelectionsDisable(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNextDisable(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEditDmDisable(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSmallWindowDisable(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShakeDisable(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOuterDmDisable(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInnerDmDisable(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFreyaEnterDisable(value);
      break;
    case 28:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDolbyDisable(value);
      break;
    case 29:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFreyaFullDisable(value);
      break;
    case 30:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipOpedSwitchDisable(value);
      break;
    case 31:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecordScreenDisable(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setColorOptimizeDisable(value);
      break;
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDubbingDisable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackgroundPlayDisable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFlipDisable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCastDisable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getFeedbackDisable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSubtitleDisable();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getPlaybackRateDisable();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTimeUpDisable();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPlaybackModeDisable();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getScaleModeDisable();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getLikeDisable();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDislikeDisable();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getCoinDisable();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getElecDisable();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getShareDisable();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getScreenShotDisable();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getLockScreenDisable();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getRecommendDisable();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getPlaybackSpeedDisable();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getDefinitionDisable();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getSelectionsDisable();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getNextDisable();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getEditDmDisable();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getSmallWindowDisable();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getShakeDisable();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getOuterDmDisable();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getInnerDmDisable();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getFreyaEnterDisable();
  if (f) {
    writer.writeBool(
      27,
      f
    );
  }
  f = message.getDolbyDisable();
  if (f) {
    writer.writeBool(
      28,
      f
    );
  }
  f = message.getFreyaFullDisable();
  if (f) {
    writer.writeBool(
      29,
      f
    );
  }
  f = message.getSkipOpedSwitchDisable();
  if (f) {
    writer.writeBool(
      30,
      f
    );
  }
  f = message.getRecordScreenDisable();
  if (f) {
    writer.writeBool(
      31,
      f
    );
  }
  f = message.getColorOptimizeDisable();
  if (f) {
    writer.writeBool(
      32,
      f
    );
  }
  f = message.getDubbingDisable();
  if (f) {
    writer.writeBool(
      33,
      f
    );
  }
};


/**
 * optional bool background_play_disable = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getBackgroundPlayDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setBackgroundPlayDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool flip_disable = 2;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getFlipDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setFlipDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool cast_disable = 3;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getCastDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setCastDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool feedback_disable = 4;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getFeedbackDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setFeedbackDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool subtitle_disable = 5;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getSubtitleDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setSubtitleDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool playback_rate_disable = 6;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getPlaybackRateDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setPlaybackRateDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool time_up_disable = 7;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getTimeUpDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setTimeUpDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool playback_mode_disable = 8;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getPlaybackModeDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setPlaybackModeDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool scale_mode_disable = 9;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getScaleModeDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setScaleModeDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool like_disable = 10;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getLikeDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setLikeDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool dislike_disable = 11;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getDislikeDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setDislikeDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool coin_disable = 12;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getCoinDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setCoinDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool elec_disable = 13;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getElecDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setElecDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool share_disable = 14;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getShareDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setShareDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool screen_shot_disable = 15;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getScreenShotDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setScreenShotDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool lock_screen_disable = 16;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getLockScreenDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setLockScreenDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool recommend_disable = 17;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getRecommendDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setRecommendDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool playback_speed_disable = 18;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getPlaybackSpeedDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setPlaybackSpeedDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool definition_disable = 19;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getDefinitionDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setDefinitionDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional bool selections_disable = 20;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getSelectionsDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setSelectionsDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool next_disable = 21;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getNextDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setNextDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool edit_dm_disable = 22;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getEditDmDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setEditDmDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool small_window_disable = 23;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getSmallWindowDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setSmallWindowDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional bool shake_disable = 24;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getShakeDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setShakeDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional bool outer_dm_disable = 25;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getOuterDmDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setOuterDmDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional bool inner_dm_disable = 26;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getInnerDmDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setInnerDmDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional bool freya_enter_disable = 27;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getFreyaEnterDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 27, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setFreyaEnterDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 27, value);
};


/**
 * optional bool dolby_disable = 28;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getDolbyDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 28, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setDolbyDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 28, value);
};


/**
 * optional bool freya_full_disable = 29;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getFreyaFullDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 29, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setFreyaFullDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 29, value);
};


/**
 * optional bool skip_oped_switch_disable = 30;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getSkipOpedSwitchDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 30, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setSkipOpedSwitchDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 30, value);
};


/**
 * optional bool record_screen_disable = 31;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getRecordScreenDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 31, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setRecordScreenDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 31, value);
};


/**
 * optional bool color_optimize_disable = 32;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getColorOptimizeDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setColorOptimizeDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
};


/**
 * optional bool dubbing_disable = 33;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.getDubbingDisable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 33, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.prototype.setDubbingDisable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 33, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowCloseSubtitle: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    freyaConfig: (f = msg.getFreyaConfig()) && proto.bilibili.pgc.gateway.player.v2.FreyaConfig.toObject(includeInstance, f),
    castTips: (f = msg.getCastTips()) && proto.bilibili.pgc.gateway.player.v2.CastTips.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf;
  return proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCloseSubtitle(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.FreyaConfig;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.FreyaConfig.deserializeBinaryFromReader);
      msg.setFreyaConfig(value);
      break;
    case 3:
      var value = new proto.bilibili.pgc.gateway.player.v2.CastTips;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.CastTips.deserializeBinaryFromReader);
      msg.setCastTips(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowCloseSubtitle();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFreyaConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.FreyaConfig.serializeBinaryToWriter
    );
  }
  f = message.getCastTips();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.pgc.gateway.player.v2.CastTips.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool allow_close_subtitle = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.getAllowCloseSubtitle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.setAllowCloseSubtitle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional FreyaConfig freya_config = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.FreyaConfig}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.getFreyaConfig = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.FreyaConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.FreyaConfig, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.FreyaConfig|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.setFreyaConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.clearFreyaConfig = function() {
  return this.setFreyaConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.hasFreyaConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CastTips cast_tips = 3;
 * @return {?proto.bilibili.pgc.gateway.player.v2.CastTips}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.getCastTips = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.CastTips} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.CastTips, 3));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.CastTips|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.setCastTips = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.clearCastTips = function() {
  return this.setCastTips(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.prototype.hasCastTips = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    backgroundAudio: (f = msg.getBackgroundAudio()) && proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.toObject(includeInstance, f),
    roleAudioListList: jspb.Message.toObjectList(msg.getRoleAudioListList(),
    proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.toObject, includeInstance),
    guideText: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo;
  return proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.deserializeBinaryFromReader);
      msg.setBackgroundAudio(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.RoleAudioProto;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.deserializeBinaryFromReader);
      msg.addRoleAudioList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuideText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackgroundAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.serializeBinaryToWriter
    );
  }
  f = message.getRoleAudioListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.serializeBinaryToWriter
    );
  }
  f = message.getGuideText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional AudioMaterialProto background_audio = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.getBackgroundAudio = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.setBackgroundAudio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.clearBackgroundAudio = function() {
  return this.setBackgroundAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.hasBackgroundAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RoleAudioProto role_audio_list = 2;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto>}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.getRoleAudioListList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.RoleAudioProto, 2));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.setRoleAudioListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.addRoleAudioList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bilibili.pgc.gateway.player.v2.RoleAudioProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.clearRoleAudioListList = function() {
  return this.setRoleAudioListList([]);
};


/**
 * optional string guide_text = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.getGuideText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.prototype.setGuideText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayExtInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    playDubbingInfo: (f = msg.getPlayDubbingInfo()) && proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayExtInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PlayExtInfo;
  return proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayExtInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayExtInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.deserializeBinaryFromReader);
      msg.setPlayDubbingInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayExtInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayDubbingInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlayDubbingInfo play_dubbing_info = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.prototype.getPlayDubbingInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PlayDubbingInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayExtInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.prototype.setPlayDubbingInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayExtInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.prototype.clearPlayDubbingInfo = function() {
  return this.setPlayDubbingInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.prototype.hasPlayDubbingInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PlayList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasonId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cover: jspb.Message.getFieldWithDefault(msg, 3, ""),
    link: jspb.Message.getFieldWithDefault(msg, 4, ""),
    badgeInfo: (f = msg.getBadgeInfo()) && proto.bilibili.pgc.gateway.player.v2.BadgeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PlayList;
  return proto.bilibili.pgc.gateway.player.v2.PlayList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeasonId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.BadgeInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.BadgeInfo.deserializeBinaryFromReader);
      msg.setBadgeInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PlayList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasonId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBadgeInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.BadgeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 season_id = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.getSeasonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.setSeasonId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cover = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string link = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional BadgeInfo badge_info = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.BadgeInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.getBadgeInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.BadgeInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.BadgeInfo, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.BadgeInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.setBadgeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayList} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.clearBadgeInfo = function() {
  return this.setBadgeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayList.prototype.hasBadgeInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    isPreview: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    bp: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    marlinToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    playbackSpeedColor: jspb.Message.getFieldWithDefault(msg, 4, ""),
    continuePlayInfo: (f = msg.getContinuePlayInfo()) && proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.toObject(includeInstance, f),
    clipInfoList: jspb.Message.toObjectList(msg.getClipInfoList(),
    proto.bilibili.pgc.gateway.player.v2.ClipInfo.toObject, includeInstance),
    inlineType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    epWholeDuration: jspb.Message.getFieldWithDefault(msg, 8, 0),
    dimension: (f = msg.getDimension()) && proto.bilibili.pgc.gateway.player.v2.Dimension.toObject(includeInstance, f),
    qualityExtMapMap: (f = msg.getQualityExtMapMap()) ? f.toObject(includeInstance, proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.toObject) : [],
    expMapMap: (f = msg.getExpMapMap()) ? f.toObject(includeInstance, undefined) : [],
    drmTechType: jspb.Message.getFieldWithDefault(msg, 12, 0),
    limitActionType: jspb.Message.getFieldWithDefault(msg, 13, 0),
    isDrm: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    recordInfo: (f = msg.getRecordInfo()) && proto.bilibili.pgc.gateway.player.v2.RecordInfo.toObject(includeInstance, f),
    vipStatus: jspb.Message.getFieldWithDefault(msg, 16, 0),
    isLivePre: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    episodeInfo: (f = msg.getEpisodeInfo()) && proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.toObject(includeInstance, f),
    episodeAdvertisementInfo: (f = msg.getEpisodeAdvertisementInfo()) && proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.toObject(includeInstance, f),
    userStatus: (f = msg.getUserStatus()) && proto.bilibili.pgc.gateway.player.v2.UserStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo;
  return proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPreview(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarlinToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaybackSpeedColor(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.deserializeBinaryFromReader);
      msg.setContinuePlayInfo(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.ClipInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ClipInfo.deserializeBinaryFromReader);
      msg.addClipInfo(value);
      break;
    case 7:
      var value = /** @type {!proto.bilibili.pgc.gateway.player.v2.InlineType} */ (reader.readEnum());
      msg.setInlineType(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEpWholeDuration(value);
      break;
    case 9:
      var value = new proto.bilibili.pgc.gateway.player.v2.Dimension;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Dimension.deserializeBinaryFromReader);
      msg.setDimension(value);
      break;
    case 10:
      var value = msg.getQualityExtMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.deserializeBinaryFromReader, 0, new proto.bilibili.pgc.gateway.player.v2.QualityExtInfo());
         });
      break;
    case 11:
      var value = msg.getExpMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 12:
      var value = /** @type {!proto.bilibili.pgc.gateway.player.v2.DrmTechType} */ (reader.readEnum());
      msg.setDrmTechType(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimitActionType(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDrm(value);
      break;
    case 15:
      var value = new proto.bilibili.pgc.gateway.player.v2.RecordInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.RecordInfo.deserializeBinaryFromReader);
      msg.setRecordInfo(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVipStatus(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLivePre(value);
      break;
    case 18:
      var value = new proto.bilibili.pgc.gateway.player.v2.EpisodeInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.deserializeBinaryFromReader);
      msg.setEpisodeInfo(value);
      break;
    case 19:
      var value = new proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.deserializeBinaryFromReader);
      msg.setEpisodeAdvertisementInfo(value);
      break;
    case 20:
      var value = new proto.bilibili.pgc.gateway.player.v2.UserStatus;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.UserStatus.deserializeBinaryFromReader);
      msg.setUserStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsPreview();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBp();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMarlinToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPlaybackSpeedColor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContinuePlayInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo.serializeBinaryToWriter
    );
  }
  f = message.getClipInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.ClipInfo.serializeBinaryToWriter
    );
  }
  f = message.getInlineType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getEpWholeDuration();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getDimension();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.pgc.gateway.player.v2.Dimension.serializeBinaryToWriter
    );
  }
  f = message.getQualityExtMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.serializeBinaryToWriter);
  }
  f = message.getExpMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getDrmTechType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getLimitActionType();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getIsDrm();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getRecordInfo();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bilibili.pgc.gateway.player.v2.RecordInfo.serializeBinaryToWriter
    );
  }
  f = message.getVipStatus();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getIsLivePre();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getEpisodeInfo();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bilibili.pgc.gateway.player.v2.EpisodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getEpisodeAdvertisementInfo();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo.serializeBinaryToWriter
    );
  }
  f = message.getUserStatus();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.bilibili.pgc.gateway.player.v2.UserStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool is_preview = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getIsPreview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setIsPreview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool bp = 2;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getBp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setBp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string marlin_token = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getMarlinToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setMarlinToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string playback_speed_color = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getPlaybackSpeedColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setPlaybackSpeedColor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ContinuePlayInfo continue_play_info = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getContinuePlayInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ContinuePlayInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setContinuePlayInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearContinuePlayInfo = function() {
  return this.setContinuePlayInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.hasContinuePlayInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated ClipInfo clip_info = 6;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.ClipInfo>}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getClipInfoList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.ClipInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ClipInfo, 6));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.ClipInfo>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setClipInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.ClipInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.ClipInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.addClipInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bilibili.pgc.gateway.player.v2.ClipInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearClipInfoList = function() {
  return this.setClipInfoList([]);
};


/**
 * optional InlineType inline_type = 7;
 * @return {!proto.bilibili.pgc.gateway.player.v2.InlineType}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getInlineType = function() {
  return /** @type {!proto.bilibili.pgc.gateway.player.v2.InlineType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.InlineType} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setInlineType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional int32 ep_whole_duration = 8;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getEpWholeDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setEpWholeDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional Dimension dimension = 9;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Dimension}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getDimension = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Dimension} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Dimension, 9));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Dimension|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setDimension = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearDimension = function() {
  return this.setDimension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.hasDimension = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * map<int32, QualityExtInfo> quality_ext_map = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.bilibili.pgc.gateway.player.v2.QualityExtInfo>}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getQualityExtMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.bilibili.pgc.gateway.player.v2.QualityExtInfo>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.bilibili.pgc.gateway.player.v2.QualityExtInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearQualityExtMapMap = function() {
  this.getQualityExtMapMap().clear();
  return this;};


/**
 * map<string, int32> exp_map = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getExpMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearExpMapMap = function() {
  this.getExpMapMap().clear();
  return this;};


/**
 * optional DrmTechType drm_tech_type = 12;
 * @return {!proto.bilibili.pgc.gateway.player.v2.DrmTechType}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getDrmTechType = function() {
  return /** @type {!proto.bilibili.pgc.gateway.player.v2.DrmTechType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.DrmTechType} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setDrmTechType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional int32 limit_action_type = 13;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getLimitActionType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setLimitActionType = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional bool is_drm = 14;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getIsDrm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setIsDrm = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional RecordInfo record_info = 15;
 * @return {?proto.bilibili.pgc.gateway.player.v2.RecordInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getRecordInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.RecordInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.RecordInfo, 15));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.RecordInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setRecordInfo = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearRecordInfo = function() {
  return this.setRecordInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.hasRecordInfo = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 vip_status = 16;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getVipStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setVipStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional bool is_live_pre = 17;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getIsLivePre = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setIsLivePre = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional EpisodeInfo episode_info = 18;
 * @return {?proto.bilibili.pgc.gateway.player.v2.EpisodeInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getEpisodeInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.EpisodeInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.EpisodeInfo, 18));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.EpisodeInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setEpisodeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearEpisodeInfo = function() {
  return this.setEpisodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.hasEpisodeInfo = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional EpisodeAdvertisementInfo episode_advertisement_info = 19;
 * @return {?proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getEpisodeAdvertisementInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo, 19));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setEpisodeAdvertisementInfo = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearEpisodeAdvertisementInfo = function() {
  return this.setEpisodeAdvertisementInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.hasEpisodeAdvertisementInfo = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional UserStatus user_status = 20;
 * @return {?proto.bilibili.pgc.gateway.player.v2.UserStatus}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.getUserStatus = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.UserStatus} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.UserStatus, 20));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.UserStatus|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.setUserStatus = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.clearUserStatus = function() {
  return this.setUserStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.prototype.hasUserStatus = function() {
  return jspb.Message.getField(this, 20) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PlayViewReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    videoInfo: (f = msg.getVideoInfo()) && proto.bilibili.pgc.gateway.player.v2.VideoInfo.toObject(includeInstance, f),
    playConf: (f = msg.getPlayConf()) && proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.toObject(includeInstance, f),
    business: (f = msg.getBusiness()) && proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.toObject(includeInstance, f),
    event: (f = msg.getEvent()) && proto.bilibili.pgc.gateway.player.v2.Event.toObject(includeInstance, f),
    viewInfo: (f = msg.getViewInfo()) && proto.bilibili.pgc.gateway.player.v2.ViewInfo.toObject(includeInstance, f),
    playExtConf: (f = msg.getPlayExtConf()) && proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.toObject(includeInstance, f),
    playExtInfo: (f = msg.getPlayExtInfo()) && proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PlayViewReply;
  return proto.bilibili.pgc.gateway.player.v2.PlayViewReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.VideoInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.VideoInfo.deserializeBinaryFromReader);
      msg.setVideoInfo(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.deserializeBinaryFromReader);
      msg.setPlayConf(value);
      break;
    case 3:
      var value = new proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    case 4:
      var value = new proto.bilibili.pgc.gateway.player.v2.Event;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Event.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.ViewInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ViewInfo.deserializeBinaryFromReader);
      msg.setViewInfo(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.deserializeBinaryFromReader);
      msg.setPlayExtConf(value);
      break;
    case 7:
      var value = new proto.bilibili.pgc.gateway.player.v2.PlayExtInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.deserializeBinaryFromReader);
      msg.setPlayExtInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PlayViewReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.VideoInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlayConf();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf.serializeBinaryToWriter
    );
  }
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.serializeBinaryToWriter
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.pgc.gateway.player.v2.Event.serializeBinaryToWriter
    );
  }
  f = message.getViewInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.ViewInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlayExtConf();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf.serializeBinaryToWriter
    );
  }
  f = message.getPlayExtInfo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.pgc.gateway.player.v2.PlayExtInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional VideoInfo video_info = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.VideoInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.getVideoInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.VideoInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.VideoInfo, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.VideoInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.setVideoInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.clearVideoInfo = function() {
  return this.setVideoInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.hasVideoInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayAbilityConf play_conf = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.getPlayConf = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PlayAbilityConf|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.setPlayConf = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.clearPlayConf = function() {
  return this.setPlayConf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.hasPlayConf = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PlayViewBusinessInfo business = 3;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.getBusiness = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo, 3));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Event event = 4;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Event}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.getEvent = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Event} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Event, 4));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Event|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ViewInfo view_info = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ViewInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.getViewInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ViewInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ViewInfo, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ViewInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.setViewInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.clearViewInfo = function() {
  return this.setViewInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.hasViewInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PlayAbilityExtConf play_ext_conf = 6;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.getPlayExtConf = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf, 6));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PlayAbilityExtConf|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.setPlayExtConf = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.clearPlayExtConf = function() {
  return this.setPlayExtConf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.hasPlayExtConf = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PlayExtInfo play_ext_info = 7;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PlayExtInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.getPlayExtInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PlayExtInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PlayExtInfo, 7));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PlayExtInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.setPlayExtInfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReply} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.clearPlayExtInfo = function() {
  return this.setPlayExtInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReply.prototype.hasPlayExtInfo = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PlayViewReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    epid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    qn: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fnver: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fnval: jspb.Message.getFieldWithDefault(msg, 5, 0),
    download: jspb.Message.getFieldWithDefault(msg, 6, 0),
    forceHost: jspb.Message.getFieldWithDefault(msg, 7, 0),
    fourk: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    spmid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    fromSpmid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    teenagersMode: jspb.Message.getFieldWithDefault(msg, 11, 0),
    preferCodecType: jspb.Message.getFieldWithDefault(msg, 12, 0),
    isPreview: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    roomId: jspb.Message.getFieldWithDefault(msg, 14, 0),
    isNeedViewInfo: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    sceneControl: (f = msg.getSceneControl()) && proto.bilibili.pgc.gateway.player.v2.SceneControl.toObject(includeInstance, f),
    inlineScene: jspb.Message.getFieldWithDefault(msg, 17, 0),
    materialNo: jspb.Message.getFieldWithDefault(msg, 18, 0),
    securityLevel: jspb.Message.getFieldWithDefault(msg, 19, 0),
    seasonId: jspb.Message.getFieldWithDefault(msg, 20, 0),
    dataControl: (f = msg.getDataControl()) && proto.bilibili.pgc.gateway.player.v2.DataControl.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PlayViewReq;
  return proto.bilibili.pgc.gateway.player.v2.PlayViewReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEpid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQn(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFnver(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFnval(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDownload(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setForceHost(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFourk(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpmid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromSpmid(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeenagersMode(value);
      break;
    case 12:
      var value = /** @type {!proto.bilibili.pgc.gateway.player.v2.CodeType} */ (reader.readEnum());
      msg.setPreferCodecType(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPreview(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRoomId(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNeedViewInfo(value);
      break;
    case 16:
      var value = new proto.bilibili.pgc.gateway.player.v2.SceneControl;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.SceneControl.deserializeBinaryFromReader);
      msg.setSceneControl(value);
      break;
    case 17:
      var value = /** @type {!proto.bilibili.pgc.gateway.player.v2.InlineScene} */ (reader.readEnum());
      msg.setInlineScene(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaterialNo(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSecurityLevel(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeasonId(value);
      break;
    case 21:
      var value = new proto.bilibili.pgc.gateway.player.v2.DataControl;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.DataControl.deserializeBinaryFromReader);
      msg.setDataControl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PlayViewReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getQn();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFnver();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFnval();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getDownload();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getForceHost();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getFourk();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getSpmid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getFromSpmid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTeenagersMode();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getPreferCodecType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getIsPreview();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getIsNeedViewInfo();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getSceneControl();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bilibili.pgc.gateway.player.v2.SceneControl.serializeBinaryToWriter
    );
  }
  f = message.getInlineScene();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getMaterialNo();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getSecurityLevel();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getSeasonId();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getDataControl();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.bilibili.pgc.gateway.player.v2.DataControl.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 epid = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getEpid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setEpid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 cid = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 qn = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getQn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setQn = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 fnver = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getFnver = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setFnver = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 fnval = 5;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getFnval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setFnval = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 download = 6;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getDownload = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setDownload = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 force_host = 7;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getForceHost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setForceHost = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool fourk = 8;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getFourk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setFourk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string spmid = 9;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getSpmid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setSpmid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string from_spmid = 10;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getFromSpmid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setFromSpmid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 teenagers_mode = 11;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getTeenagersMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setTeenagersMode = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional CodeType prefer_codec_type = 12;
 * @return {!proto.bilibili.pgc.gateway.player.v2.CodeType}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getPreferCodecType = function() {
  return /** @type {!proto.bilibili.pgc.gateway.player.v2.CodeType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.CodeType} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setPreferCodecType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional bool is_preview = 13;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getIsPreview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setIsPreview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional int64 room_id = 14;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional bool is_need_view_info = 15;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getIsNeedViewInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setIsNeedViewInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional SceneControl scene_control = 16;
 * @return {?proto.bilibili.pgc.gateway.player.v2.SceneControl}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getSceneControl = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.SceneControl} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.SceneControl, 16));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.SceneControl|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setSceneControl = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.clearSceneControl = function() {
  return this.setSceneControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.hasSceneControl = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional InlineScene inline_scene = 17;
 * @return {!proto.bilibili.pgc.gateway.player.v2.InlineScene}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getInlineScene = function() {
  return /** @type {!proto.bilibili.pgc.gateway.player.v2.InlineScene} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.InlineScene} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setInlineScene = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional int64 material_no = 18;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getMaterialNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setMaterialNo = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 security_level = 19;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getSecurityLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setSecurityLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int64 season_id = 20;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getSeasonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setSeasonId = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional DataControl data_control = 21;
 * @return {?proto.bilibili.pgc.gateway.player.v2.DataControl}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.getDataControl = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.DataControl} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.DataControl, 21));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.DataControl|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.setDataControl = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PlayViewReq} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.clearDataControl = function() {
  return this.setDataControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PlayViewReq.prototype.hasDataControl = function() {
  return jspb.Message.getField(this, 21) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PopWin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PopWin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    couponList: jspb.Message.toObjectList(msg.getCouponList(),
    proto.bilibili.pgc.gateway.player.v2.Coupon.toObject, includeInstance),
    buttonList: jspb.Message.toObjectList(msg.getButtonList(),
    proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject, includeInstance),
    bottomText: jspb.Message.getFieldWithDefault(msg, 4, ""),
    popTitle: (f = msg.getPopTitle()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    subtitle: (f = msg.getSubtitle()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    bottomDesc: (f = msg.getBottomDesc()) && proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject(includeInstance, f),
    cover: jspb.Message.getFieldWithDefault(msg, 8, ""),
    popType: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PopWin;
  return proto.bilibili.pgc.gateway.player.v2.PopWin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PopWin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.Coupon;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Coupon.deserializeBinaryFromReader);
      msg.addCoupon(value);
      break;
    case 3:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.addButton(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBottomText(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setPopTitle(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setSubtitle(value);
      break;
    case 7:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.setBottomDesc(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPopType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PopWin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PopWin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCouponList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.Coupon.serializeBinaryToWriter
    );
  }
  f = message.getButtonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
  f = message.getBottomText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPopTitle();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getSubtitle();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getBottomDesc();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPopType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Coupon coupon = 2;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.Coupon>}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getCouponList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.Coupon>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Coupon, 2));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.Coupon>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setCouponList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.Coupon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.Coupon}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.addCoupon = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bilibili.pgc.gateway.player.v2.Coupon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.clearCouponList = function() {
  return this.setCouponList([]);
};


/**
 * repeated ButtonInfo button = 3;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getButtonList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 3));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setButtonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.addButton = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.clearButtonList = function() {
  return this.setButtonList([]);
};


/**
 * optional string bottom_text = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getBottomText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setBottomText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TextInfo pop_title = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getPopTitle = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setPopTitle = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.clearPopTitle = function() {
  return this.setPopTitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.hasPopTitle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TextInfo subtitle = 6;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getSubtitle = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 6));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setSubtitle = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.clearSubtitle = function() {
  return this.setSubtitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.hasSubtitle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ButtonInfo bottom_desc = 7;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getBottomDesc = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ButtonInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 7));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setBottomDesc = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.clearBottomDesc = function() {
  return this.setBottomDesc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.hasBottomDesc = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string cover = 8;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string pop_type = 9;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.getPopType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PopWin} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PopWin.prototype.setPopType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.PromptBar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.PromptBar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: (f = msg.getTitle()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    subTitle: (f = msg.getSubTitle()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    subTitleIcon: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bgImage: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bgGradientColor: (f = msg.getBgGradientColor()) && proto.bilibili.pgc.gateway.player.v2.GradientColor.toObject(includeInstance, f),
    buttonList: jspb.Message.toObjectList(msg.getButtonList(),
    proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject, includeInstance),
    report: (f = msg.getReport()) && proto.bilibili.pgc.gateway.player.v2.Report.toObject(includeInstance, f),
    fullScreenIpIcon: jspb.Message.getFieldWithDefault(msg, 8, ""),
    fullScreenBgGradientColor: (f = msg.getFullScreenBgGradientColor()) && proto.bilibili.pgc.gateway.player.v2.GradientColor.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.PromptBar;
  return proto.bilibili.pgc.gateway.player.v2.PromptBar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PromptBar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setTitle(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setSubTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubTitleIcon(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgImage(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.GradientColor;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.GradientColor.deserializeBinaryFromReader);
      msg.setBgGradientColor(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.addButton(value);
      break;
    case 7:
      var value = new proto.bilibili.pgc.gateway.player.v2.Report;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullScreenIpIcon(value);
      break;
    case 9:
      var value = new proto.bilibili.pgc.gateway.player.v2.GradientColor;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.GradientColor.deserializeBinaryFromReader);
      msg.setFullScreenBgGradientColor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.PromptBar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.PromptBar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getSubTitle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getSubTitleIcon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBgImage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBgGradientColor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.GradientColor.serializeBinaryToWriter
    );
  }
  f = message.getButtonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.pgc.gateway.player.v2.Report.serializeBinaryToWriter
    );
  }
  f = message.getFullScreenIpIcon();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getFullScreenBgGradientColor();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.pgc.gateway.player.v2.GradientColor.serializeBinaryToWriter
    );
  }
};


/**
 * optional TextInfo title = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getTitle = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setTitle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.clearTitle = function() {
  return this.setTitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TextInfo sub_title = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getSubTitle = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setSubTitle = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.clearSubTitle = function() {
  return this.setSubTitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.hasSubTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string sub_title_icon = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getSubTitleIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setSubTitleIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string bg_image = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getBgImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setBgImage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional GradientColor bg_gradient_color = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.GradientColor}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getBgGradientColor = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.GradientColor} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.GradientColor, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.GradientColor|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setBgGradientColor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.clearBgGradientColor = function() {
  return this.setBgGradientColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.hasBgGradientColor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated ButtonInfo button = 6;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getButtonList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 6));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.ButtonInfo>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setButtonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.addButton = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.clearButtonList = function() {
  return this.setButtonList([]);
};


/**
 * optional Report report = 7;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Report}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getReport = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Report} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Report, 7));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Report|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.hasReport = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string full_screen_ip_icon = 8;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getFullScreenIpIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setFullScreenIpIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional GradientColor full_screen_bg_gradient_color = 9;
 * @return {?proto.bilibili.pgc.gateway.player.v2.GradientColor}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.getFullScreenBgGradientColor = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.GradientColor} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.GradientColor, 9));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.GradientColor|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
*/
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.setFullScreenBgGradientColor = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.PromptBar} returns this
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.clearFullScreenBgGradientColor = function() {
  return this.setFullScreenBgGradientColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.PromptBar.prototype.hasFullScreenBgGradientColor = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.QualityExtInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    trialSupport: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.QualityExtInfo}
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.QualityExtInfo;
  return proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.QualityExtInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.QualityExtInfo}
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrialSupport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.QualityExtInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrialSupport();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool trial_support = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.prototype.getTrialSupport = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.QualityExtInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.QualityExtInfo.prototype.setTrialSupport = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.RecordInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.RecordInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    record: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recordIcon: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.RecordInfo}
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.RecordInfo;
  return proto.bilibili.pgc.gateway.player.v2.RecordInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.RecordInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.RecordInfo}
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecord(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordIcon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.RecordInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.RecordInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecord();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecordIcon();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string record = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.prototype.getRecord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.RecordInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.prototype.setRecord = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string record_icon = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.prototype.getRecordIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.RecordInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.RecordInfo.prototype.setRecordIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Report.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Report.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Report} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Report.toObject = function(includeInstance, msg) {
  var f, obj = {
    showEventId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clickEventId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pb_extends: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Report}
 */
proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Report;
  return proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Report} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Report}
 */
proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setShowEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClickEventId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtends(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Report.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Report.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Report} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Report.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShowEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClickEventId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExtends();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string show_event_id = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Report.prototype.getShowEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Report} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Report.prototype.setShowEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string click_event_id = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Report.prototype.getClickEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Report} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Report.prototype.setClickEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string extends = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Report.prototype.getExtends = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Report} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Report.prototype.setExtends = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.ResponseUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: jspb.Message.getFieldWithDefault(msg, 1, 0),
    length: jspb.Message.getFieldWithDefault(msg, 2, 0),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    url: jspb.Message.getFieldWithDefault(msg, 4, ""),
    backupUrlList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    md5: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.ResponseUrl;
  return proto.bilibili.pgc.gateway.player.v2.ResponseUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrder(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addBackupUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.ResponseUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBackupUrlList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 order = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 length = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 size = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string backup_url = 5;
 * @return {!Array<string>}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.getBackupUrlList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.setBackupUrlList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.addBackupUrl = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.clearBackupUrlList = function() {
  return this.setBackupUrlList([]);
};


/**
 * optional string md5 = 6;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ResponseUrl.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Rights.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Rights.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Rights} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Rights.toObject = function(includeInstance, msg) {
  var f, obj = {
    canWatch: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Rights}
 */
proto.bilibili.pgc.gateway.player.v2.Rights.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Rights;
  return proto.bilibili.pgc.gateway.player.v2.Rights.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Rights} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Rights}
 */
proto.bilibili.pgc.gateway.player.v2.Rights.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanWatch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Rights.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Rights.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Rights} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Rights.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanWatch();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 can_watch = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Rights.prototype.getCanWatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Rights} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Rights.prototype.setCanWatch = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleAvatar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    audioMaterialListList: jspb.Message.toObjectList(msg.getAudioMaterialListList(),
    proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.RoleAudioProto;
  return proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRoleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleAvatar(value);
      break;
    case 4:
      var value = new proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.deserializeBinaryFromReader);
      msg.addAudioMaterialList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRoleName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAudioMaterialListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 role_id = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string role_name = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.getRoleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.setRoleName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string role_avatar = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.getRoleAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.setRoleAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated AudioMaterialProto audio_material_list = 4;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto>}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.getAudioMaterialListList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto, 4));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto} returns this
*/
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.setAudioMaterialListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto}
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.addAudioMaterialList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bilibili.pgc.gateway.player.v2.AudioMaterialProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.RoleAudioProto} returns this
 */
proto.bilibili.pgc.gateway.player.v2.RoleAudioProto.prototype.clearAudioMaterialListList = function() {
  return this.setAudioMaterialListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.SceneControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.SceneControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    favPlaylist: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    smallWindow: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pip: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    wasHeInline: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isNeedTrial: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.SceneControl}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.SceneControl;
  return proto.bilibili.pgc.gateway.player.v2.SceneControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.SceneControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.SceneControl}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFavPlaylist(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSmallWindow(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPip(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWasHeInline(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNeedTrial(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.SceneControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.SceneControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFavPlaylist();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSmallWindow();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPip();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWasHeInline();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsNeedTrial();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool fav_playlist = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.getFavPlaylist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SceneControl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.setFavPlaylist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool small_window = 2;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.getSmallWindow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SceneControl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.setSmallWindow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool pip = 3;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.getPip = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SceneControl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.setPip = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool was_he_inline = 4;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.getWasHeInline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SceneControl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.setWasHeInline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_need_trial = 5;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.getIsNeedTrial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SceneControl} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SceneControl.prototype.setIsNeedTrial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Scheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Scheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toast: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Scheme}
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Scheme;
  return proto.bilibili.pgc.gateway.player.v2.Scheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Scheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Scheme}
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bilibili.pgc.gateway.player.v2.Scheme.ActionType} */ (reader.readEnum());
      msg.setActionType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToast(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Scheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Scheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getToast();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.ActionType = {
  UNKNOWN: 0,
  SHOW_TOAST: 1
};

/**
 * optional ActionType action_type = 1;
 * @return {!proto.bilibili.pgc.gateway.player.v2.Scheme.ActionType}
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.prototype.getActionType = function() {
  return /** @type {!proto.bilibili.pgc.gateway.player.v2.Scheme.ActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.Scheme.ActionType} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Scheme} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.prototype.setActionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string toast = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.prototype.getToast = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Scheme} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Scheme.prototype.setToast = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.SeasonInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasonId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    seasonType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    seasonStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cover: jspb.Message.getFieldWithDefault(msg, 4, ""),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    rights: (f = msg.getRights()) && proto.bilibili.pgc.gateway.player.v2.Rights.toObject(includeInstance, f),
    mode: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.SeasonInfo;
  return proto.bilibili.pgc.gateway.player.v2.SeasonInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeasonId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeasonType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeasonStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.Rights;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Rights.deserializeBinaryFromReader);
      msg.setRights(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.SeasonInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasonId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSeasonType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSeasonStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRights();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.Rights.serializeBinaryToWriter
    );
  }
  f = message.getMode();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 season_id = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.getSeasonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.setSeasonId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 season_type = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.getSeasonType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.setSeasonType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 season_status = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.getSeasonStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.setSeasonStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string cover = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Rights rights = 6;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Rights}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.getRights = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Rights} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Rights, 6));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Rights|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.setRights = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.clearRights = function() {
  return this.setRights(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.hasRights = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 mode = 7;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.getMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SeasonInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SeasonInfo.prototype.setMode = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.SegmentVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.SegmentVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
    segmentList: jspb.Message.toObjectList(msg.getSegmentList(),
    proto.bilibili.pgc.gateway.player.v2.ResponseUrl.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.SegmentVideo}
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.SegmentVideo;
  return proto.bilibili.pgc.gateway.player.v2.SegmentVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.SegmentVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.SegmentVideo}
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.ResponseUrl;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ResponseUrl.deserializeBinaryFromReader);
      msg.addSegment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.SegmentVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.SegmentVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.ResponseUrl.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ResponseUrl segment = 1;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.ResponseUrl>}
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.prototype.getSegmentList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.ResponseUrl>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ResponseUrl, 1));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.ResponseUrl>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.SegmentVideo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.prototype.setSegmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.ResponseUrl}
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.prototype.addSegment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bilibili.pgc.gateway.player.v2.ResponseUrl, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.SegmentVideo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.SegmentVideo.prototype.clearSegmentList = function() {
  return this.setSegmentList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Shake.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Shake.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Shake} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Shake.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Shake}
 */
proto.bilibili.pgc.gateway.player.v2.Shake.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Shake;
  return proto.bilibili.pgc.gateway.player.v2.Shake.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Shake} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Shake}
 */
proto.bilibili.pgc.gateway.player.v2.Shake.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Shake.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Shake.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Shake} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Shake.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string file = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Shake.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Shake} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Shake.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.Stream.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.ContentCase = {
  CONTENT_NOT_SET: 0,
  DASH_VIDEO: 2,
  SEGMENT_VIDEO: 3
};

/**
 * @return {proto.bilibili.pgc.gateway.player.v2.Stream.ContentCase}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.getContentCase = function() {
  return /** @type {proto.bilibili.pgc.gateway.player.v2.Stream.ContentCase} */(jspb.Message.computeOneofCase(this, proto.bilibili.pgc.gateway.player.v2.Stream.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Stream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Stream} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Stream.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.bilibili.pgc.gateway.player.v2.StreamInfo.toObject(includeInstance, f),
    dashVideo: (f = msg.getDashVideo()) && proto.bilibili.pgc.gateway.player.v2.DashVideo.toObject(includeInstance, f),
    segmentVideo: (f = msg.getSegmentVideo()) && proto.bilibili.pgc.gateway.player.v2.SegmentVideo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Stream;
  return proto.bilibili.pgc.gateway.player.v2.Stream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Stream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.StreamInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.StreamInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.DashVideo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.DashVideo.deserializeBinaryFromReader);
      msg.setDashVideo(value);
      break;
    case 3:
      var value = new proto.bilibili.pgc.gateway.player.v2.SegmentVideo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.SegmentVideo.deserializeBinaryFromReader);
      msg.setSegmentVideo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Stream.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Stream} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Stream.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.StreamInfo.serializeBinaryToWriter
    );
  }
  f = message.getDashVideo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.DashVideo.serializeBinaryToWriter
    );
  }
  f = message.getSegmentVideo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.pgc.gateway.player.v2.SegmentVideo.serializeBinaryToWriter
    );
  }
};


/**
 * optional StreamInfo info = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.StreamInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.getInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.StreamInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.StreamInfo, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.StreamInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DashVideo dash_video = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.DashVideo}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.getDashVideo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.DashVideo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.DashVideo, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.DashVideo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.setDashVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bilibili.pgc.gateway.player.v2.Stream.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.clearDashVideo = function() {
  return this.setDashVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.hasDashVideo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SegmentVideo segment_video = 3;
 * @return {?proto.bilibili.pgc.gateway.player.v2.SegmentVideo}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.getSegmentVideo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.SegmentVideo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.SegmentVideo, 3));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.SegmentVideo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.setSegmentVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bilibili.pgc.gateway.player.v2.Stream.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.clearSegmentVideo = function() {
  return this.setSegmentVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Stream.prototype.hasSegmentVideo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.StreamInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    quality: jspb.Message.getFieldWithDefault(msg, 1, 0),
    format: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    errCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: (f = msg.getLimit()) && proto.bilibili.pgc.gateway.player.v2.StreamLimit.toObject(includeInstance, f),
    needVip: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    needLogin: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    intact: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    attribute: jspb.Message.getFieldWithDefault(msg, 10, 0),
    newDescription: jspb.Message.getFieldWithDefault(msg, 11, ""),
    displayDesc: jspb.Message.getFieldWithDefault(msg, 12, ""),
    superscript: jspb.Message.getFieldWithDefault(msg, 13, ""),
    scheme: (f = msg.getScheme()) && proto.bilibili.pgc.gateway.player.v2.Scheme.toObject(includeInstance, f),
    supportDrm: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    subtitle: jspb.Message.getFieldWithDefault(msg, 16, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.StreamInfo;
  return proto.bilibili.pgc.gateway.player.v2.StreamInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuality(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrCode(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.StreamLimit;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.StreamLimit.deserializeBinaryFromReader);
      msg.setLimit(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedVip(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedLogin(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIntact(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAttribute(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewDescription(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayDesc(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuperscript(value);
      break;
    case 14:
      var value = new proto.bilibili.pgc.gateway.player.v2.Scheme;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Scheme.deserializeBinaryFromReader);
      msg.setScheme(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportDrm(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.StreamInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuality();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getErrCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.StreamLimit.serializeBinaryToWriter
    );
  }
  f = message.getNeedVip();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getNeedLogin();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIntact();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getAttribute();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getNewDescription();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDisplayDesc();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSuperscript();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getScheme();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bilibili.pgc.gateway.player.v2.Scheme.serializeBinaryToWriter
    );
  }
  f = message.getSupportDrm();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional int32 quality = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getQuality = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setQuality = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string format = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 err_code = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getErrCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setErrCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional StreamLimit limit = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.StreamLimit}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getLimit = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.StreamLimit} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.StreamLimit, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.StreamLimit|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setLimit = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.clearLimit = function() {
  return this.setLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool need_vip = 6;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getNeedVip = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setNeedVip = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool need_login = 7;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getNeedLogin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setNeedLogin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool intact = 8;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getIntact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setIntact = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int64 attribute = 10;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getAttribute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setAttribute = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string new_description = 11;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getNewDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setNewDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string display_desc = 12;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getDisplayDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setDisplayDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string superscript = 13;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getSuperscript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setSuperscript = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional Scheme scheme = 14;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Scheme}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getScheme = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Scheme} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Scheme, 14));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Scheme|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setScheme = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.clearScheme = function() {
  return this.setScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.hasScheme = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool support_drm = 15;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getSupportDrm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setSupportDrm = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string subtitle = 16;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamInfo.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.StreamLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.StreamLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    msg: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamLimit}
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.StreamLimit;
  return proto.bilibili.pgc.gateway.player.v2.StreamLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.StreamLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamLimit}
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.StreamLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.StreamLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamLimit} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamLimit} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.StreamLimit} returns this
 */
proto.bilibili.pgc.gateway.player.v2.StreamLimit.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.TaskParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.TaskParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    activityId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tipsId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.TaskParam}
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.TaskParam;
  return proto.bilibili.pgc.gateway.player.v2.TaskParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.TaskParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.TaskParam}
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActivityId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTipsId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.TaskParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.TaskParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActivityId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTipsId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string task_type = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.prototype.getTaskType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.TaskParam} returns this
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.prototype.setTaskType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 activity_id = 2;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.prototype.getActivityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.TaskParam} returns this
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.prototype.setActivityId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 tips_id = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.prototype.getTipsId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.TaskParam} returns this
 */
proto.bilibili.pgc.gateway.player.v2.TaskParam.prototype.setTipsId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.TextInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    textColor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    textColorNight: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
  return proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.TextInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextColor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextColorNight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.TextInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTextColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTextColorNight();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.TextInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text_color = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.prototype.getTextColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.TextInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.prototype.setTextColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text_color_night = 3;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.prototype.getTextColorNight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.TextInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.TextInfo.prototype.setTextColorNight = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.Toast.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.Toast} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Toast.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    button: (f = msg.getButton()) && proto.bilibili.pgc.gateway.player.v2.ButtonInfo.toObject(includeInstance, f),
    showStyleType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    icon: jspb.Message.getFieldWithDefault(msg, 4, ""),
    toastText: (f = msg.getToastText()) && proto.bilibili.pgc.gateway.player.v2.TextInfo.toObject(includeInstance, f),
    report: (f = msg.getReport()) && proto.bilibili.pgc.gateway.player.v2.Report.toObject(includeInstance, f),
    orderReportParamsMap: (f = msg.getOrderReportParamsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.Toast;
  return proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Toast} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.ButtonInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.ButtonInfo.deserializeBinaryFromReader);
      msg.setButton(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShowStyleType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.TextInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.TextInfo.deserializeBinaryFromReader);
      msg.setToastText(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.Report;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    case 7:
      var value = msg.getOrderReportParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.Toast.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.Toast} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.Toast.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getButton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.ButtonInfo.serializeBinaryToWriter
    );
  }
  f = message.getShowStyleType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToastText();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.TextInfo.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.Report.serializeBinaryToWriter
    );
  }
  f = message.getOrderReportParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ButtonInfo button = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.getButton = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.ButtonInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.ButtonInfo, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.ButtonInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.setButton = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.clearButton = function() {
  return this.setButton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.hasButton = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 show_style_type = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.getShowStyleType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.setShowStyleType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string icon = 4;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TextInfo toast_text = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.TextInfo}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.getToastText = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.TextInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.TextInfo, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.TextInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.setToastText = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.clearToastText = function() {
  return this.setToastText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.hasToastText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Report report = 6;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Report}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.getReport = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Report} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Report, 6));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Report|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
*/
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.hasReport = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, string> order_report_params = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.getOrderReportParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.Toast} returns this
 */
proto.bilibili.pgc.gateway.player.v2.Toast.prototype.clearOrderReportParamsMap = function() {
  this.getOrderReportParamsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.UserStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.UserStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    payCheck: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    sponsor: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    watchProgress: (f = msg.getWatchProgress()) && proto.bilibili.pgc.gateway.player.v2.WatchProgress.toObject(includeInstance, f),
    aidWatchProgress: (f = msg.getAidWatchProgress()) && proto.bilibili.pgc.gateway.player.v2.WatchProgress.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.UserStatus}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.UserStatus;
  return proto.bilibili.pgc.gateway.player.v2.UserStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.UserStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.UserStatus}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPayCheck(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSponsor(value);
      break;
    case 3:
      var value = new proto.bilibili.pgc.gateway.player.v2.WatchProgress;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.WatchProgress.deserializeBinaryFromReader);
      msg.setWatchProgress(value);
      break;
    case 4:
      var value = new proto.bilibili.pgc.gateway.player.v2.WatchProgress;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.WatchProgress.deserializeBinaryFromReader);
      msg.setAidWatchProgress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.UserStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.UserStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayCheck();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSponsor();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getWatchProgress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.pgc.gateway.player.v2.WatchProgress.serializeBinaryToWriter
    );
  }
  f = message.getAidWatchProgress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.pgc.gateway.player.v2.WatchProgress.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool pay_check = 1;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.getPayCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.UserStatus} returns this
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.setPayCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool sponsor = 2;
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.getSponsor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.UserStatus} returns this
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.setSponsor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional WatchProgress watch_progress = 3;
 * @return {?proto.bilibili.pgc.gateway.player.v2.WatchProgress}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.getWatchProgress = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.WatchProgress} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.WatchProgress, 3));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.WatchProgress|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.UserStatus} returns this
*/
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.setWatchProgress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.UserStatus} returns this
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.clearWatchProgress = function() {
  return this.setWatchProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.hasWatchProgress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WatchProgress aid_watch_progress = 4;
 * @return {?proto.bilibili.pgc.gateway.player.v2.WatchProgress}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.getAidWatchProgress = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.WatchProgress} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.WatchProgress, 4));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.WatchProgress|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.UserStatus} returns this
*/
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.setAidWatchProgress = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.UserStatus} returns this
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.clearAidWatchProgress = function() {
  return this.setAidWatchProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.UserStatus.prototype.hasAidWatchProgress = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.VideoInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    quality: jspb.Message.getFieldWithDefault(msg, 1, 0),
    format: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timelength: jspb.Message.getFieldWithDefault(msg, 3, 0),
    videoCodecid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    streamListList: jspb.Message.toObjectList(msg.getStreamListList(),
    proto.bilibili.pgc.gateway.player.v2.Stream.toObject, includeInstance),
    dashAudioList: jspb.Message.toObjectList(msg.getDashAudioList(),
    proto.bilibili.pgc.gateway.player.v2.DashItem.toObject, includeInstance),
    dolby: (f = msg.getDolby()) && proto.bilibili.pgc.gateway.player.v2.DolbyItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.VideoInfo;
  return proto.bilibili.pgc.gateway.player.v2.VideoInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQuality(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimelength(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVideoCodecid(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.Stream;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Stream.deserializeBinaryFromReader);
      msg.addStreamList(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.DashItem;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.DashItem.deserializeBinaryFromReader);
      msg.addDashAudio(value);
      break;
    case 7:
      var value = new proto.bilibili.pgc.gateway.player.v2.DolbyItem;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.DolbyItem.deserializeBinaryFromReader);
      msg.setDolby(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.VideoInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuality();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimelength();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getVideoCodecid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStreamListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.Stream.serializeBinaryToWriter
    );
  }
  f = message.getDashAudioList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.DashItem.serializeBinaryToWriter
    );
  }
  f = message.getDolby();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.pgc.gateway.player.v2.DolbyItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 quality = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.getQuality = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.setQuality = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string format = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 timelength = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.getTimelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.setTimelength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 video_codecid = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.getVideoCodecid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.setVideoCodecid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Stream stream_list = 5;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.Stream>}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.getStreamListList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.Stream>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Stream, 5));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.Stream>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.setStreamListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.Stream=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.Stream}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.addStreamList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bilibili.pgc.gateway.player.v2.Stream, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.clearStreamListList = function() {
  return this.setStreamListList([]);
};


/**
 * repeated DashItem dash_audio = 6;
 * @return {!Array<!proto.bilibili.pgc.gateway.player.v2.DashItem>}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.getDashAudioList = function() {
  return /** @type{!Array<!proto.bilibili.pgc.gateway.player.v2.DashItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.pgc.gateway.player.v2.DashItem, 6));
};


/**
 * @param {!Array<!proto.bilibili.pgc.gateway.player.v2.DashItem>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.setDashAudioList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bilibili.pgc.gateway.player.v2.DashItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.DashItem}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.addDashAudio = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bilibili.pgc.gateway.player.v2.DashItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.clearDashAudioList = function() {
  return this.setDashAudioList([]);
};


/**
 * optional DolbyItem dolby = 7;
 * @return {?proto.bilibili.pgc.gateway.player.v2.DolbyItem}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.getDolby = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.DolbyItem} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.DolbyItem, 7));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.DolbyItem|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.setDolby = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.VideoInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.clearDolby = function() {
  return this.setDolby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.VideoInfo.prototype.hasDolby = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.ViewInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    dialog: (f = msg.getDialog()) && proto.bilibili.pgc.gateway.player.v2.Dialog.toObject(includeInstance, f),
    toast: (f = msg.getToast()) && proto.bilibili.pgc.gateway.player.v2.Toast.toObject(includeInstance, f),
    couponInfo: (f = msg.getCouponInfo()) && proto.bilibili.pgc.gateway.player.v2.CouponInfo.toObject(includeInstance, f),
    demandNoPayEpidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    endPage: (f = msg.getEndPage()) && proto.bilibili.pgc.gateway.player.v2.EndPage.toObject(includeInstance, f),
    expConfigMap: (f = msg.getExpConfigMap()) ? f.toObject(includeInstance, undefined) : [],
    popWin: (f = msg.getPopWin()) && proto.bilibili.pgc.gateway.player.v2.PopWin.toObject(includeInstance, f),
    tryWatchPromptBar: (f = msg.getTryWatchPromptBar()) && proto.bilibili.pgc.gateway.player.v2.PromptBar.toObject(includeInstance, f),
    payTip: (f = msg.getPayTip()) && proto.bilibili.pgc.gateway.player.v2.PayTip.toObject(includeInstance, f),
    highDefinitionTrialInfo: (f = msg.getHighDefinitionTrialInfo()) && proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.toObject(includeInstance, f),
    extDialogMap: (f = msg.getExtDialogMap()) ? f.toObject(includeInstance, proto.bilibili.pgc.gateway.player.v2.Dialog.toObject) : [],
    animation: (f = msg.getAnimation()) && proto.bilibili.pgc.gateway.player.v2.Animation.toObject(includeInstance, f),
    extToastMap: (f = msg.getExtToastMap()) ? f.toObject(includeInstance, proto.bilibili.pgc.gateway.player.v2.Toast.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.ViewInfo;
  return proto.bilibili.pgc.gateway.player.v2.ViewInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.pgc.gateway.player.v2.Dialog;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Dialog.deserializeBinaryFromReader);
      msg.setDialog(value);
      break;
    case 2:
      var value = new proto.bilibili.pgc.gateway.player.v2.Toast;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinaryFromReader);
      msg.setToast(value);
      break;
    case 3:
      var value = new proto.bilibili.pgc.gateway.player.v2.CouponInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.CouponInfo.deserializeBinaryFromReader);
      msg.setCouponInfo(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDemandNoPayEpids(values[i]);
      }
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.EndPage;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.EndPage.deserializeBinaryFromReader);
      msg.setEndPage(value);
      break;
    case 6:
      var value = msg.getExpConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    case 7:
      var value = new proto.bilibili.pgc.gateway.player.v2.PopWin;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PopWin.deserializeBinaryFromReader);
      msg.setPopWin(value);
      break;
    case 8:
      var value = new proto.bilibili.pgc.gateway.player.v2.PromptBar;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PromptBar.deserializeBinaryFromReader);
      msg.setTryWatchPromptBar(value);
      break;
    case 9:
      var value = new proto.bilibili.pgc.gateway.player.v2.PayTip;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.PayTip.deserializeBinaryFromReader);
      msg.setPayTip(value);
      break;
    case 10:
      var value = new proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.deserializeBinaryFromReader);
      msg.setHighDefinitionTrialInfo(value);
      break;
    case 11:
      var value = msg.getExtDialogMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bilibili.pgc.gateway.player.v2.Dialog.deserializeBinaryFromReader, "", new proto.bilibili.pgc.gateway.player.v2.Dialog());
         });
      break;
    case 12:
      var value = new proto.bilibili.pgc.gateway.player.v2.Animation;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Animation.deserializeBinaryFromReader);
      msg.setAnimation(value);
      break;
    case 13:
      var value = msg.getExtToastMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinaryFromReader, "", new proto.bilibili.pgc.gateway.player.v2.Toast());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.ViewInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDialog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.pgc.gateway.player.v2.Dialog.serializeBinaryToWriter
    );
  }
  f = message.getToast();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.pgc.gateway.player.v2.Toast.serializeBinaryToWriter
    );
  }
  f = message.getCouponInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.pgc.gateway.player.v2.CouponInfo.serializeBinaryToWriter
    );
  }
  f = message.getDemandNoPayEpidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
  f = message.getEndPage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.EndPage.serializeBinaryToWriter
    );
  }
  f = message.getExpConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
  f = message.getPopWin();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.pgc.gateway.player.v2.PopWin.serializeBinaryToWriter
    );
  }
  f = message.getTryWatchPromptBar();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.pgc.gateway.player.v2.PromptBar.serializeBinaryToWriter
    );
  }
  f = message.getPayTip();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.pgc.gateway.player.v2.PayTip.serializeBinaryToWriter
    );
  }
  f = message.getHighDefinitionTrialInfo();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo.serializeBinaryToWriter
    );
  }
  f = message.getExtDialogMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bilibili.pgc.gateway.player.v2.Dialog.serializeBinaryToWriter);
  }
  f = message.getAnimation();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bilibili.pgc.gateway.player.v2.Animation.serializeBinaryToWriter
    );
  }
  f = message.getExtToastMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bilibili.pgc.gateway.player.v2.Toast.serializeBinaryToWriter);
  }
};


/**
 * optional Dialog dialog = 1;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Dialog}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getDialog = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Dialog} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Dialog, 1));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Dialog|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setDialog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearDialog = function() {
  return this.setDialog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasDialog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Toast toast = 2;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Toast}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getToast = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Toast} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Toast, 2));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Toast|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setToast = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearToast = function() {
  return this.setToast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasToast = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CouponInfo coupon_info = 3;
 * @return {?proto.bilibili.pgc.gateway.player.v2.CouponInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getCouponInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.CouponInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.CouponInfo, 3));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.CouponInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setCouponInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearCouponInfo = function() {
  return this.setCouponInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasCouponInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated int64 demand_no_pay_epids = 4;
 * @return {!Array<number>}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getDemandNoPayEpidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setDemandNoPayEpidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.addDemandNoPayEpids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearDemandNoPayEpidsList = function() {
  return this.setDemandNoPayEpidsList([]);
};


/**
 * optional EndPage end_page = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.EndPage}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getEndPage = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.EndPage} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.EndPage, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.EndPage|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setEndPage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearEndPage = function() {
  return this.setEndPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasEndPage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, bool> exp_config = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getExpConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearExpConfigMap = function() {
  this.getExpConfigMap().clear();
  return this;};


/**
 * optional PopWin pop_win = 7;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PopWin}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getPopWin = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PopWin} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PopWin, 7));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PopWin|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setPopWin = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearPopWin = function() {
  return this.setPopWin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasPopWin = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PromptBar try_watch_prompt_bar = 8;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PromptBar}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getTryWatchPromptBar = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PromptBar} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PromptBar, 8));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PromptBar|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setTryWatchPromptBar = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearTryWatchPromptBar = function() {
  return this.setTryWatchPromptBar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasTryWatchPromptBar = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PayTip pay_tip = 9;
 * @return {?proto.bilibili.pgc.gateway.player.v2.PayTip}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getPayTip = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.PayTip} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.PayTip, 9));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.PayTip|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setPayTip = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearPayTip = function() {
  return this.setPayTip(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasPayTip = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional HighDefinitionTrialInfo high_definition_trial_info = 10;
 * @return {?proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getHighDefinitionTrialInfo = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo, 10));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setHighDefinitionTrialInfo = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearHighDefinitionTrialInfo = function() {
  return this.setHighDefinitionTrialInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasHighDefinitionTrialInfo = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * map<string, Dialog> ext_dialog = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bilibili.pgc.gateway.player.v2.Dialog>}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getExtDialogMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bilibili.pgc.gateway.player.v2.Dialog>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      proto.bilibili.pgc.gateway.player.v2.Dialog));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearExtDialogMap = function() {
  this.getExtDialogMap().clear();
  return this;};


/**
 * optional Animation animation = 12;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Animation}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getAnimation = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Animation} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Animation, 12));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Animation|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
*/
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.setAnimation = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearAnimation = function() {
  return this.setAnimation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.hasAnimation = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * map<string, Toast> ext_toast = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bilibili.pgc.gateway.player.v2.Toast>}
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.getExtToastMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bilibili.pgc.gateway.player.v2.Toast>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      proto.bilibili.pgc.gateway.player.v2.Toast));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.pgc.gateway.player.v2.ViewInfo} returns this
 */
proto.bilibili.pgc.gateway.player.v2.ViewInfo.prototype.clearExtToastMap = function() {
  this.getExtToastMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.pgc.gateway.player.v2.WatchProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastEpId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lastEpIndex: jspb.Message.getFieldWithDefault(msg, 2, ""),
    progress: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastPlayCid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    toast: (f = msg.getToast()) && proto.bilibili.pgc.gateway.player.v2.Toast.toObject(includeInstance, f),
    toastWithoutTime: (f = msg.getToastWithoutTime()) && proto.bilibili.pgc.gateway.player.v2.Toast.toObject(includeInstance, f),
    lastPlayAid: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.pgc.gateway.player.v2.WatchProgress;
  return proto.bilibili.pgc.gateway.player.v2.WatchProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastEpId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastEpIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProgress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastPlayCid(value);
      break;
    case 5:
      var value = new proto.bilibili.pgc.gateway.player.v2.Toast;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinaryFromReader);
      msg.setToast(value);
      break;
    case 6:
      var value = new proto.bilibili.pgc.gateway.player.v2.Toast;
      reader.readMessage(value,proto.bilibili.pgc.gateway.player.v2.Toast.deserializeBinaryFromReader);
      msg.setToastWithoutTime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastPlayAid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.pgc.gateway.player.v2.WatchProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastEpId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLastEpIndex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLastPlayCid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getToast();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.pgc.gateway.player.v2.Toast.serializeBinaryToWriter
    );
  }
  f = message.getToastWithoutTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.pgc.gateway.player.v2.Toast.serializeBinaryToWriter
    );
  }
  f = message.getLastPlayAid();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional int32 last_ep_id = 1;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.getLastEpId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.setLastEpId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string last_ep_index = 2;
 * @return {string}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.getLastEpIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.setLastEpIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 progress = 3;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 last_play_cid = 4;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.getLastPlayCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.setLastPlayCid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Toast toast = 5;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Toast}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.getToast = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Toast} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Toast, 5));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Toast|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
*/
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.setToast = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.clearToast = function() {
  return this.setToast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.hasToast = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Toast toast_without_time = 6;
 * @return {?proto.bilibili.pgc.gateway.player.v2.Toast}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.getToastWithoutTime = function() {
  return /** @type{?proto.bilibili.pgc.gateway.player.v2.Toast} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.pgc.gateway.player.v2.Toast, 6));
};


/**
 * @param {?proto.bilibili.pgc.gateway.player.v2.Toast|undefined} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
*/
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.setToastWithoutTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.clearToastWithoutTime = function() {
  return this.setToastWithoutTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.hasToastWithoutTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 last_play_aid = 7;
 * @return {number}
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.getLastPlayAid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.pgc.gateway.player.v2.WatchProgress} returns this
 */
proto.bilibili.pgc.gateway.player.v2.WatchProgress.prototype.setLastPlayAid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.ClipType = {
  NT_UNKNOWN: 0,
  CLIP_TYPE_OP: 1,
  CLIP_TYPE_ED: 2,
  CLIP_TYPE_HE: 3,
  CLIP_TYPE_MULTI_VIEW: 4,
  CLIP_TYPE_AD: 5
};

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.CodeType = {
  NOCODE: 0,
  CODE264: 1,
  CODE265: 2
};

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.DrmTechType = {
  NON: 0,
  FAIR_PLAY: 1,
  WIDE_VINE: 2,
  BILI_DRM: 3
};

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.EpPublicityVideoType = {
  PRE: 0,
  INLINE: 1
};

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.InlineScene = {
  UNKNOWN: 0,
  RELATED_EP: 1,
  HE: 2,
  SKIP: 3
};

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.InlineType = {
  TYPE_UNKNOWN: 0,
  TYPE_WHOLE: 1,
  TYPE_HE_CLIP: 2,
  TYPE_PREVIEW: 3
};

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.LimitActionType = {
  LAT_UNKNOWN: 0,
  SHOW_LIMIT_DIALOG: 1,
  SKIP_CURRENT_EP: 2
};

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.PlayErr = {
  NOERR: 0,
  WITHMULTIDEVICELOGINERR: 1
};

/**
 * @enum {number}
 */
proto.bilibili.pgc.gateway.player.v2.SecurityLevel = {
  LEVEL_UNKNOWN: 0,
  LEVEL_L1: 1,
  LEVEL_L2: 2,
  LEVEL_L3: 3
};

goog.object.extend(exports, proto.bilibili.pgc.gateway.player.v2);
