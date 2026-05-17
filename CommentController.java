package com.example.demo22.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo22.entity.Comment;
import com.example.demo22.repository.CommentRepository;



@RestController
@CrossOrigin("*")
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentRepository repository;

    @GetMapping
    public List<Comment> getComments() {
        return repository.findAll();
    }

    @PostMapping
    public Comment addComment(@RequestBody Comment comment) {
        return repository.save(comment);
    }
}
