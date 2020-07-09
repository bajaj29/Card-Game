package com.example.cardgame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan("com.example.cardgame.*")
public class CardgameApplication {

	public static void main(String[] args) {
		SpringApplication.run(CardgameApplication.class, args);
	}

}
