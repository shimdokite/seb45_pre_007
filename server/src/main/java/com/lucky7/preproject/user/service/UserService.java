package com.lucky7.preproject.user.service;

import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user){
        User savedUser = userRepository.save(user);

        return savedUser;
    }

    public User updateUser(User user){

        return null;
    }

    public User findUser(long userId) {

        return null;
    }

    public User deleteUser(long userId){

        return null;
    }
}