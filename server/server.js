// var grpc = require('grpc');
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "../protos/ping_pong.proto";

// var pingPongProto = grpc.load('ping_pong.proto');
// loading Service Descriptors from .proto files
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// var routeguide = protoDescriptor.routeguide;

// Creating the Server

var server = new grpc.Server();

server.addService(protoDescriptor.pingpong.PingPongService.service, {
  pingPong: function (call, callback) {
    console.log("Request");
    return callback(null, { pong: "Pong" });
  },
});

server.bindAsync(
  "localhost:8080",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at http://localhost:8080");
    server.start();
  }
);
