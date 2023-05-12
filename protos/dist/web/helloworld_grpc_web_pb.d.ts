import * as grpcWeb from 'grpc-web';

import * as helloworld_pb from './helloworld_pb';


export class MyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  hello(
    request: helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: helloworld_pb.HelloResponse) => void
  ): grpcWeb.ClientReadableStream<helloworld_pb.HelloResponse>;

}

export class MyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  hello(
    request: helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<helloworld_pb.HelloResponse>;

}

