package com.fn1.muzic;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;

@SpringBootApplication
public class MuzicApplication {
	@Value("${youtube.apikey}")
	private String apiKey;

	public static void main(String[] args) {
		SpringApplication.run(MuzicApplication.class, args);
	}
	
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Bean
	public YouTube youtube() {
		return new YouTube.Builder(new NetHttpTransport(), new JacksonFactory(), new HttpRequestInitializer() {
			public void initialize(HttpRequest request) throws IOException {
			}
		}).setApplicationName("youtube-cmdline-search-sample").build();
	}
}
