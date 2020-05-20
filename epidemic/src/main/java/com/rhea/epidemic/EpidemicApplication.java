package com.rhea.epidemic;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * @author Administrator Rhea
 * 入口类
 * @EnableScheduling 打开对定时任务的使用
 */
@SpringBootApplication
@MapperScan("com.rhea.epidemic.mapper")
@EnableScheduling
public class EpidemicApplication {

    public static void main(String[] args) {
        SpringApplication.run(EpidemicApplication.class, args);
    }

}
