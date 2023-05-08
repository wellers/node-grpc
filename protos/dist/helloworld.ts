/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "MyPackage";

export interface HelloRequest {
  name: string;
}

export interface HelloResponse {
  message: string;
}

function createBaseHelloRequest(): HelloRequest {
  return { name: "" };
}

export const HelloRequest = {
  encode(message: HelloRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelloRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HelloRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: HelloRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<HelloRequest>, I>>(base?: I): HelloRequest {
    return HelloRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HelloRequest>, I>>(object: I): HelloRequest {
    const message = createBaseHelloRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseHelloResponse(): HelloResponse {
  return { message: "" };
}

export const HelloResponse = {
  encode(message: HelloResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelloResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HelloResponse {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: HelloResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<HelloResponse>, I>>(base?: I): HelloResponse {
    return HelloResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HelloResponse>, I>>(object: I): HelloResponse {
    const message = createBaseHelloResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export type MyServiceService = typeof MyServiceService;
export const MyServiceService = {
  hello: {
    path: "/MyPackage.MyService/hello",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HelloRequest) => Buffer.from(HelloRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HelloRequest.decode(value),
    responseSerialize: (value: HelloResponse) => Buffer.from(HelloResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HelloResponse.decode(value),
  },
} as const;

export interface MyServiceServer extends UntypedServiceImplementation {
  hello: handleUnaryCall<HelloRequest, HelloResponse>;
}

export interface MyServiceClient extends Client {
  hello(
    request: HelloRequest,
    callback: (error: ServiceError | null, response: HelloResponse) => void,
  ): ClientUnaryCall;
  hello(
    request: HelloRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HelloResponse) => void,
  ): ClientUnaryCall;
  hello(
    request: HelloRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HelloResponse) => void,
  ): ClientUnaryCall;
}

export const MyServiceClient = makeGenericClientConstructor(MyServiceService, "MyPackage.MyService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MyServiceClient;
  service: typeof MyServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
