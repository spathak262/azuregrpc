FROM envoyproxy/envoy-dev:latest
	

	COPY ./CopiedEnvoy.yaml /etc/envoy/CopiedEnvoy.yaml
	

	CMD /usr/local/bin/envoy -c /etc/envoy/CopiedEnvoy.yaml -l trace --log-path /tmp/envoy_info.log