package com.example.demo22.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo22.entity.User;


public interface UserRepository extends JpaRepository<User, Long> {

}
