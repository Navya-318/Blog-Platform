package com.example.demo22.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo22.entity.Comment;


public interface CommentRepository extends JpaRepository<Comment, Long> {

}
