package com.example.demo22.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo22.entity.Blog;


public interface BlogRepository extends JpaRepository<Blog, Long> {

}
