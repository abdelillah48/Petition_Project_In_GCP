package com.example.petition;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.example.petition")
public class PetitionApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetitionApplication.class, args);
	}

}
