package com.lucky7.preproject.user.entity;

<<<<<<< HEAD
=======
import lombok.Getter;
import lombok.Setter;

>>>>>>> a160d9b3253fafb939f789d97f8922c173c8dc9b
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "users") // DB에서 “user”는 예약어로 지정되어 있는 경우가 있음
<<<<<<< HEAD
=======
@Getter
@Setter //추가
>>>>>>> a160d9b3253fafb939f789d97f8922c173c8dc9b
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long userId;

    @Column(length = 10, nullable = false)
    private String userName;

    @Column(length = 20, nullable = false)
    private String userEmail;

    @Column(length = 255, nullable = false)
    private String hashedUserPassword;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime lastModifiedAt = LocalDateTime.now();
}
