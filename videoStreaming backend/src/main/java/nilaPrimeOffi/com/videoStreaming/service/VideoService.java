package com.example.videostreaming.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.videostreaming.model.Movie;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class MovieService {

    public List<Movie> loadMoviesFromJsonFile(String jsonFilePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        File file = new File(jsonFilePath);
        return mapper.readValue(file, new TypeReference<List<Movie>>() {});
    }

    public static void main(String[] args) {
        MovieService movieService = new MovieService();
        String jsonFilePath = "/movies.json"; // Replace with your actual JSON file path
        try {
            List<Movie> movies = movieService.loadMoviesFromJsonFile(jsonFilePath);
            for (Movie movie : movies) {
                System.out.println("Loaded movie: " + movie);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
