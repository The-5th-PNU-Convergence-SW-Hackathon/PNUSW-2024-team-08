package com.hong.ForPaw;

import com.hong.ForPaw.domain.User.Role;
import com.hong.ForPaw.domain.User.User;
import com.hong.ForPaw.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;

@SpringBootApplication
@EnableJpaAuditing
public class ForPawApplication {

	public static void main(String[] args) {
		SpringApplication.run(ForPawApplication.class, args);
	}

	@Profile("local")
	@Bean
	CommandLineRunner localServerStart(PasswordEncoder passwordEncoder, UserRepository userRepository){
		return args -> {
			//userRepository.saveAll(Arrays.asList(
			//		newUser("yg04076@naver.com", "한홍", "호얘이", passwordEncoder, Role.USER, "www.s3.com", "대구", "수성구")
			//));
		};
	}

	private User newUser(String email, String name, String nickName, PasswordEncoder passwordEncoder, Role role, String profileURL, String region, String subRegin) {
		return User.builder()
				.email(email)
				.name(name)
				.nickName(nickName)
				.password(passwordEncoder.encode("hong1234"))
				.role(role)
				.profileURL(profileURL)
				.regin(region)
				.subRegion(subRegin)
				.build();
	}
}
