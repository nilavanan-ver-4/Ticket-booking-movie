package com.example.videostreaming.controller;

import com.example.videostreaming.exception.ResourceNotFoundException;
import com.example.videostreaming.model.Video;
import com.example.videostreaming.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/videos")
public class VideoController {

    @Autowired
    private VideoRepository videoRepository;

    @GetMapping
    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    @PostMapping
    public Video createVideo(@RequestBody Video video) {
        return videoRepository.save(video);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Video> getVideoById(@PathVariable Long id) {
        Video video = videoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Video not found with id " + id));
        return ResponseEntity.ok(video);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Video> updateVideo(@PathVariable Long id, @RequestBody Video videoDetails) {
        Video video = videoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Video not found with id " + id));

        video.setTitle(videoDetails.getTitle());
        video.setDescription(videoDetails.getDescription());
        video.setUrl(videoDetails.getUrl());

        Video updatedVideo = videoRepository.save(video);
        return ResponseEntity.ok(updatedVideo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVideo(@PathVariable Long id) {
        Video video = videoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Video not found with id " + id));

        videoRepository.delete(video);
        return ResponseEntity.noContent().build();
    }
}
