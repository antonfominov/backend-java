package appweb.extjs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("appweb")
public class ExtsjApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExtsjApplication.class, args);
		
	}
}
