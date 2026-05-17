package com.example.demo22.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo22.entity.Blog;
import com.example.demo22.repository.BlogRepository;



@RestController
@CrossOrigin("*")
@RequestMapping("/blogs")
public class BlogController {

    @Autowired
    private BlogRepository repository;

    @GetMapping
    public List<Blog> getAllBlogs() {
        return repository.findAll();
    }

    @PostMapping
    public Blog createBlog(@RequestBody Blog blog) {
        return repository.save(blog);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
